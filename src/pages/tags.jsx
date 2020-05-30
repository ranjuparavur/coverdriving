import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';
import { graphql } from 'gatsby';

const Tags = ({ data, pageContext }) => {
  const { tags } = pageContext;
  const image = data.bannerImage.childImageSharp.fluid;

  return (
    <Layout>
      <Header pagetitle="Tags Page" cover={image}>Coverdriving</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
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
