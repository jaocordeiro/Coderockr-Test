import {React, useState, useEffect} from 'react';
import {Container, ListPost} from './postsList.Styled'
import Header from '../../components/Header/header';
import TabBar from '../../components/TabBar/tabBar';
import api from '../../services/api';
import BoxPost from '../../components/Post/Post';

export default function PostList () {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  async function postList() {
    const response = await api.get('/articles', {
      params: {
        _page: 1,
        _limit: 1,
      },
    });
    setPosts(response.data)
    console.log(response.data, 'joao');
  }

  useEffect(() => {
    postList();
  }, []);

  return (
    <Container>
        <ListPost>
          {posts.map(post => 
            <BoxPost key={post.id} {...post} 
            />
          )}
        </ListPost>
      <TabBar/>
    </Container>
  )
}