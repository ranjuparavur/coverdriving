import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { graphql } from 'gatsby';

const About = ({data, center}) => {
  const image = data.bannerImage.childImageSharp.fluid;

  return (
      <Layout>
        <Helmet title={'About | Coverdriving'} />
        <Header title="About Page" cover={image}>Coverdriving</Header>
        <Container center={center}>
          <h3 style={{textAlign: "justify"}}>
            Written by Aniket Dass who is passionate about cricket than most people. Usually a calm character, he is only provoked if someone disagrees that Rahul Dravid is a cricketing genious!
          </h3>
          <br />
          <h3>
            <a href="https://instagram.com/coverdriving">Coverdriving on Instagram</a>
          </h3>
          <br />
          <h3>
            <a href="https://twitter.com/coverdriving">Coverdriving on Twitter</a>
          </h3>      
        </Container>
      </Layout>
    );
  };

export default About;

About.propTypes = {
  center: PropTypes.object,
};

export const query = graphql`
  query {
    bannerImage: file(absolutePath: {regex: "/cd_banner.jpg/"}) {
      childImageSharp {
        fluid(
          maxWidth: 1920
          quality: 90
          duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
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
