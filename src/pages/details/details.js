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
  const {props} = route.params;

  return (
    <Container>
      <ContainerView>
        <BoxImage>
          <Image
            source={{
              uri: props.imageUrl,
            }}
          >
          </Image>
        </BoxImage>
        <BoxText>
          <Data>{props.date}</Data>
          <ArtistName>{props.author}</ArtistName>
          <Title>{props.title}</Title>
          <Article>{props.article.replace('<p>', '')}</Article>
        </BoxText>
      </ContainerView>  
      <TabBar/>
    </Container>
  )
}