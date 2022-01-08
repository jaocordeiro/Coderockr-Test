import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #c9c7c7;
  flex: 1;
  flex-direction: column;
`;

export const ButtonBackTop = styled.FlatList``;

export const ButtonBack = styled.TouchableOpacity``;

export const ListPost = styled.FlatList`
  flex-direction: column;
`;

export const ViewLoading = styled.View`
  padding: 10px;
`;

export const ActivityIndicatorPost = styled.ActivityIndicator`
`;

export const ViewContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BoxImage = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-left: 5px;
  `;

  export const Image = styled.Image.attrs(() => ({
    resizeMode: 'contain',
  }))`
    width: 100%;
    height: 130px;
  `;

export const BoxText = styled.View`
  flex: 2;
  padding: 10px 5px 0 5px;
  margin-top: 10px;
  background: #eaeaea;
`;

export const ArtistName = styled.Text`
  font-size: 16px;
  font-family: Nunito_800ExtraBold;
  `;

export const Title = styled.Text.attrs(() =>({
  ellipsizeMode: 'tail',
  numberOfLines: 2
}))`
  font-size: 16px;
  font-family: Nunito_700Bold;
  color: #F1A10A;
  `;

export const Article = styled.Text.attrs(() =>({
  ellipsizeMode: 'tail',
  numberOfLines: 2
}))`
  color: #2d2d2d;
  font-size: 17px;
  font-family: Nunito_600SemiBold;
  text-align: justify;
`;