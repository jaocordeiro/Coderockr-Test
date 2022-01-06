import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  
`;

export const Image = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 160px;
  height: 160px;
`;

export const ArtistName = styled.Text``;

export const Title = styled.Text``;

export const Article = styled.Text``;
