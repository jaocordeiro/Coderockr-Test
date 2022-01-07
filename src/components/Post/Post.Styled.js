import styled from "styled-components/native";

export const ViewContainer = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-top: 0px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  background: #eaeaea;
  padding-top: 1px;
`;

export const BoxImage = styled.View`
  height: 130px;
  width: 130px;
  `;

  export const Image = styled.Image.attrs(() => ({
    resizeMode: 'contain',
  }))`
    width: 130px;
    height: 130px;
  `;

export const BoxText = styled.View`
  height: 60%;
  width: 60%;
  padding: 8px 0 0 10px
`;

export const ArtistName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Title = styled.Text.attrs(() =>({
  ellipsizeMode: 'tail',
  numberOfLines: 2
}))`
  font-size: 16px;
  color: #F1A10A;
  font-weight: bold;
  `;

export const Article = styled.Text.attrs(() =>({
  ellipsizeMode: 'tail',
  numberOfLines: 3
}))`
  color: #2d2d2d;
  font-size: 16px;
  text-align: justify;
`;


