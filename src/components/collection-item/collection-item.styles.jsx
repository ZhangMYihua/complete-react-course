import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .background-image {
      opacity: 0.8;
    }

    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: black;
        color: white;
        opacity: 0.85;
      }
    }
  }
`;

export const AddButton = styled.div`
  position: absolute;
  height: 50px;
  width: 80%;
  padding: 25px;
  opacity: 0.7;
  background-color: white;
  color: black;
  font-weight: bold;
  display: none;
  top: 255px;
  cursor: pointer;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 75%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
