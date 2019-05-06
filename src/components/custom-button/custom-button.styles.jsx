import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid black;
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.googleSignin) {
    return googleSigninStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  border: none;
  color: white;

  ${getButtonStyles}
`;
