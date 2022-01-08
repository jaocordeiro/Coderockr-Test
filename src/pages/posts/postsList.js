import {useState, useEffect} from 'react';
import {
  Container,
  ListPost, 
  ViewLoading, 
  ActivityIndicatorPost, 
  ViewContainer,
  ArtistName,
  Title,
  Article,
  BoxImage,
  Image,
  BoxText,
} from './postsList.Styled'
import TabBar from '../../components/TabBar/tabBar';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native'

export default function PostList () {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    postList();
  }, []);

  async function postList() {
    if(loading) return;

    setLoading(true);

    const response = await api.get('/articles', {
      params: {
        _page: page,
        _limit: 1,
      },
    });
    setPosts((oldPosts) => [...oldPosts, ...response.data])
    setPage(page + 1);
    setLoading(false);
  }

  function FooterList ({load}) {
    if (!load) return null;
    return (
      <ViewLoading>
        <ActivityIndicatorPost size={25} color="#000"/>
      </ViewLoading>
    )
  }

  function handlePageDetails (post) {
    navigation.navigate('Details', {post});
  }

  return (
    <Container>
      <ListPost 
        data={posts}
        keyExtractor={post => String(post.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={postList}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
        renderItem={({item: post}) => 
          <ViewContainer onPress={() => handlePageDetails (post)}>
            <BoxImage>
              <Image
                source={{
                  uri: post.imageUrl,
                }}
              >
              </Image>
            </BoxImage>
            <BoxText>
                <ArtistName>{post.author}</ArtistName>
                <Title>{post.title}</Title>
                <Article>{post.article.replace('<p>', '')}</Article>
            </BoxText>    
          </ViewContainer>
        }
      />
      <TabBar/>
    </Container>
  )
}