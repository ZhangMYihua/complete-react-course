import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  & > :last-child {
    margin-left: 15px;
  }
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;
