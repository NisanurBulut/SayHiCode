/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { GoRepo, GoStar } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { GithubContext } from '../context/context';

const UserInfo = () => {
  const { githubUser, githubRepos } = React.useContext(GithubContext);

  const starCount = githubRepos.map((repo) => {
    return repo.stargazers_count;
  }).reduce((a, b) => {
    return a + b;
  }, 0);

  const { public_repos, followers, following } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoStar className="icon" />,
      label: 'stars',
      value: starCount,
      color: 'yellow',
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((box) => {
          return (
            <Box
              key={box.id}
              icon={box.icon}
              label={box.label}
              value={box.value}
              color={box.color} />
          );
        })}
      </Wrapper>
    </section>
  );
};
const Box = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;

    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }

    .icon {
      font-size: 1.5rem;
    }

    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }

    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }

    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }

    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }

    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }

    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
export default UserInfo;
