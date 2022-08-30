/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// Provider, consumer-GithubContext

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollower] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const handleError = (msg) => {
    setError({ show: true, msg });
  };

  const clearError = () => {
    setError({
      show: false,
      msg: '',
    });
  };

  useEffect(() => {
    const checkRequests = async () => {
      try {
        const response = await fetch(`${rootUrl}/rate_limit`);
        const data = await response.json();

        const {
          rate: { used, remaining },
        } = data;

        setRequests(used);

        if (remaining === 0) {
          handleError('sorry, you have exceeded your hourly rate limit!');
        }
      } catch (e) {
        console.log(e);
        handleError('Something went wrong with your request');
      }
    };

    checkRequests();
  }, [githubUser]);

  const searchGithubUser = async (user) => {
    try {
      clearError();
      setIsLoading(true);
      const response = await fetch(`${rootUrl}/users/${user}`);
      const userResult = await response.json();

      console.log('>>> userResult: ', userResult);

      if (userResult.login) {
        setGithubUser(userResult);
        const { login, followers_url } = userResult;

        const results = await Promise.allSettled([
          fetch(`${rootUrl}/users/${login}/repos?per_page=100`),
          fetch(`${followers_url}?per_page=100`),
        ]);

        const [repos, followers] = results;
        const status = 'fulfilled';

        if (repos.status === status) {
          const repoData = await repos.value.json();

          setGithubRepos(repoData);
        }

        if (followers.status === status) {
          const followersData = await followers.value.json();

          setGithubFollower(followersData);
        }
      } else {
        handleError('There is no user with that username');
      }
    } catch (e) {
      console.log(e);
      handleError('Something went wrong with your request');
    }

    setIsLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubRepos,
        githubFollowers,
        requests,
        error,
        isLoading,
        searchGithubUser,
      }}>
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
