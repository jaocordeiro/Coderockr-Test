import {Container, Image, ArtistName, Title, Article, BoxImage, BoxText, BoxArticle} from './Post.Styled'

export default function Post (props) {
  console.log(props, '33333');
  return (
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
      </BoxText> 
      <BoxArticle> 
        <Article>{props.article.replace('<p>', '')}</Article>
      </BoxArticle>  
    </Container>
  )
}