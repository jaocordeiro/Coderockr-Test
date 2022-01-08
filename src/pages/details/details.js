import {
    Container,
    ContainerView,
    BoxImage,
    Image,
    BoxText,
    Data, 
    ArtistName,
    Title,
    Article} 
  from './details.Styled'
import TabBar from '../../components/TabBar/tabBar'
import {useRoute} from '@react-navigation/native'

export default function Details () {

  const route = useRoute();
  const {post} = route.params;

  return (
    <Container>
      <ContainerView>
        <BoxImage>
          <Image
            source={{
              uri: post.imageUrl,
            }}
          >
          </Image>
        </BoxImage>
        <BoxText>
          <Data>{post.date}</Data>
          <ArtistName>{post.author}</ArtistName>
          <Title>{post.title}</Title>
          <Article>{post.article.replace('<p>', '')}</Article>
        </BoxText>
      </ContainerView>  
      <TabBar/>
    </Container>
  )
}