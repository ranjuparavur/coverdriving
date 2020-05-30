import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { graphql } from 'gatsby';

const ErrorPage = ({data, center}) => {
  const image = data.bannerImage.childImageSharp.fluid;

  return(
    <Layout>
      <Helmet title={'404'} />
      <Header pagetitle="404" cover={image} />
      <Container center={center}>
        <h1>Woops, something went wrong.</h1>
        <h3>This page does not exist or is no longer reachable.</h3>
        <h3>
          You can return to the <Link to="/">Homepage</Link>.
        </h3>
      </Container>
    </Layout>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    bannerImage: file(absolutePath: {regex: "/cd_banner.jpg/"}) {
      childImageSharp {
        fluid(
          maxWidth: 1920
          quality: 90
          duotone: { highlight: "#f00e2e", shadow: "#192550", opacity: 60 }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        resize(width: 1200, quality: 90) {
          src
        }
      }
    }
  }
`;
