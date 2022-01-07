import { View, StyleSheet } from 'react-native';
import {
  ViewContainer,
  Container,
  Image,
  ArtistName,
  Title,
  Article,
  BoxImage,
  BoxText,
  } from './Post.Styled'

export default function Post (props) {
  console.log(props, '33333');
  return (
    <ViewContainer>
      <Container>
        <BoxImage>
          <Image
            source={{
              uri: props.imageUrl,
            }}
          >
          </Image>
        </BoxImage>
        <BoxText>
          <ArtistName>{props.author}</ArtistName>
          <Title>{props.title}</Title>
          <Article>{props.article.replace('<p>', '')}</Article>
        </BoxText> 
      </Container>
    </ViewContainer>
  )
}