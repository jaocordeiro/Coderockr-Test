import {React, useState, useEffect} from 'react';
import {Container, ListPost} from './postsList.Styled'
import TabBar from '../../components/TabBar/tabBar';
import api from '../../services/api';
import BoxPost from '../../components/Post/Post';

export default function PostList () {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  async function postList() {
    const response = await api.get('/articles', {
      params: {
        _page: page,
        _limit: 7,
      },
    });
    setPosts((oldPosts) => [...oldPosts, ...response.data])
    setPage(page + 1);
  }

  useEffect(() => {
    postList();
  }, []);

  return (
    <Container>
      <ListPost 
        data={posts}
        renderItem={({item: post}) => (
          <BoxPost {...post} />)}
      />
      <TabBar/>
    </Container>
  )
}