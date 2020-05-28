import React from 'react';
import styled from '@emotion/styled';
import { FiTwitter, FiInstagram } from 'react-icons/fi';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 1rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 1rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        <div>
          Copyright &copy; 2020 -{' '}
          <a href="https://coverdriving.in" style={{color: "#fff"}}> Coverdriving </a>
          <h2 style={{margin: "0.5rem"}}>
              <a href="https://instagram.com/coverdriving" style={{color: "#fff"}}>
                < FiInstagram/> {' '}
              </a>
              <a href="https://twitter.com/coverdriving" style={{color: "#fff"}}>
              <FiTwitter />
              </a>
          </h2> 
        </div>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
