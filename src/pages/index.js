import React from 'react';
import { Link } from 'gatsby';

import Layout from 'layouts/Example/Example';
import Image from 'components/Image/Image';
import SEO from 'components/Seo/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="font-black font-sans">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
