import React from 'react';

import { Link } from 'gatsby';

import { Layout } from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout slug="about-us" title="About us">
      <p id="paragraph">Somos gente intentando animar las transiciones. 👩🏽‍🎨</p>

      <Link to="/">Regresa a la home</Link>
    </Layout>
  );
};

export default About;
