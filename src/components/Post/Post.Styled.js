import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const BoxImage = styled.View`
  height: 10%;
  width: 10%;
  `;

  export const Image = styled.Image.attrs(() => ({
    resizeMode: 'contain',
  }))`
    width: 140px;
    height: 140px;
  `;

export const BoxText = styled.View`
  height: 60%;
  width: 60%;
  margin-left: 150px;
  align-items: flex-start;
`;

export const ArtistName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  `;

export const Title = styled.Text`
  font-size: 16px;
  color: #F1A10A;
  font-weight: bold;
  `;

export const BoxArticle = styled.View`
  height: 60%;
  width: 60%;
  margin-left: 150px;
  align-items: flex-start;
  flex-wrap: wrap;
  `;

export const Article = styled.Text`
  color: #2d2d2d;
  font-size: 16px;
  text-align: justify;
`;


