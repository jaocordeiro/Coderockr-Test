import {React, useState, useEffect} from 'react';
import {Container, ListPost} from './postsList.Styled'
import TabBar from '../../components/TabBar/tabBar';
import api from '../../services/api';
import BoxPost from '../../components/Post/Post';

export default function PostList () {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    postList();
  }, []);

  return (
    <Container>
      <ListPost 
        data={posts}
        keyExtractor={post => String(post.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={postList}
        onEndReachedThreshold={0.9}
        renderItem={({item: post}) => (
          <BoxPost {...post} />)}
      />
      <TabBar/>
    </Container>
  )
}