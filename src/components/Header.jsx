import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 85%, 100% 70%);
    clip-path: polygon(100% 0, 0 0, 0 70%, 50% 85%, 100% 70%);
  }
  background: ${props => props.theme.gradient.rightToLeft};
  object-fit: cover;
  height: 450px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 280px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    top: 45%;
  }
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 0;
  align-items: center;
`;

const PageH1 = styled.h1`
  font-size: 70px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 45px;
    padding-top: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 25px;
    padding-top: 2rem;
  }
  
`;

const BlogH1 = styled.h1`
  font-size: 50px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 30px;
    padding-top: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 25px;
  }
`;

const PostDate = styled.h1`
  font-size: 30px;
  padding-top: 2rem; 
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 15px;
    padding-top: 0.5rem; 
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 10px;
    padding-top: 0.5rem; 
  }
   
`;

const Subtitle = styled.p`
  max-width: 650px;
  margin-bottom: 0;
  font-size: 30px;
  padding-top: 0.5rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 25px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 15px;
  }
  color: ${props => props.theme.colors.white.light};
`;

const Header = ({ children, pagetitle, blogtitle, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <PageH1 style={{marginBottom: "0"}}>{pagetitle}</PageH1>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
    <Text>
      <BlogH1 style={{marginBottom: "0"}}>{blogtitle}</BlogH1>
      <PostDate>{date}</PostDate>
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  pagetitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  blogtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  pagetitle: false,
  blogtitle: false,
};