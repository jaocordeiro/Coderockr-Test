import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: #e0e0e0;
  align-items: center;
`;

export const ContainerView = styled.ScrollView`
`;

export const BoxImage = styled.View`
  width: 100%;
  height: 240px;
`;

export const Image = styled.ImageBackground`
  padding: 110px;
`;

export const BoxText = styled.View`
  width: 100%;
  padding: 0 10px 0 10px;
`;

export const Data = styled.Text`
  font-size: 14px;
  font-family: Nunito_600SemiBold;
  color: #000000;
  margin-bottom: 10px;
`;
export const ArtistName = styled.Text`
  font-size: 16px;
  font-family: Nunito_700Bold;
  margin-bottom: 5px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: Nunito_700Bold;
  color: #F1A10A;
  margin-bottom: 10px;
`;

export const Article = styled.Text`
  font-size: 20px;
  font-family: Nunito_600SemiBold;
  text-align: justify;
  padding-bottom: 10px;
  line-height: 25px;
`;