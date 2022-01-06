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
  height: 50%;
  width: 50%;
  margin-left: 120px;
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
    height: 80px;
    width: 55%;
    margin-left: 160px;
    margin-top: 10px;
  `;

export const Article = styled.Text.attrs(() => ({
  ellipsizeMode: 'head',
  numberOdLines: 2,
}))`
  color: #2d2d2d;
  font-size: 16px;
  text-align: justify;
`;


