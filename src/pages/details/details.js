import {Container, ContainerView, BoxImage, Image, BoxText, Data, ArtistName, Title, Article} from './details.Styled'
import TabBar from '../../components/TabBar/tabBar'

export default function Details () {
  return (
    <Container>
      <ContainerView>
        <BoxImage>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hfgqGFwQz6gG55rz69Zyf5R2ZOyQfUyuIQ&usqp=CAU',
            }}
          >
          </Image>
        </BoxImage>
        <BoxText>
          <Data>Jan 10, 2022</Data>
          <ArtistName>João Vitor</ArtistName>
          <Title>Qui occaecati vero et quibusdam non </Title>
          <Article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Article>
        </BoxText>
      </ContainerView>  
      <TabBar/>
    </Container>
  )
}