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
import {useNavigation} from '@react-navigation/native'

export default function Post (props) {
  const navigation = useNavigation();

  function handlePageDetails (props) {
    navigation.navigate('Details', {props});
  }

  return (
    <ViewContainer onPress={() => handlePageDetails (props)}>
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