import {Container, Image, ArtistName, Title, Article} from './Post.Styled'
import Castelo from '../../../assets/orfanato-alemanha.jpeg'

export default function Post (props) {
  console.log(props, '33333');
  return (
    <Container>
      <Image
        source={{
          uri: props.imageUrl,
        }}
      >
      </Image>
      <ArtistName>{props.author}</ArtistName>
      <Title>{props.title}</Title>
      <Article>{props.article}</Article>
    </Container>
  )
}