/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { githubRepos } = React.useContext(GithubContext);

  const mostForkedRepos = githubRepos.sort((a, b) => {
    return b.forks_count - a.forks_count;
  })
    .slice(0, 5)
    .map((repo) => {
      return { label: repo.name, value: repo.forks_count };
    });

  const mostPopularReposByStars = githubRepos.sort((a, b) => {
    return b.stargazers_count - a.stargazers_count;
  })
    .slice(0, 5)
    .map((repo) => {
      return { label: repo.name, value: repo.stargazers_count };
    });

  const languages = githubRepos.reduce((total, repository) => {
    const { language, stargazers_count } = repository;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  const mostUsedLanguages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const starsPerLanguage = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsedLanguages} />
        <Column3D data={mostPopularReposByStars} />
        <Doughnut2D data={starsPerLanguage} />
        <Bar3D data={mostForkedRepos} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
