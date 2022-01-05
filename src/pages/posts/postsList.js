import {Container, PageRoute} from './postsList.Styled'
import Header from '../../components/Header/header';
import TabBar from '../../components/TabBar/tabBar';

export default function PostList () {
  return (
    <Container>
      <Header/>
        <PageRoute>Posts List</PageRoute>
      <TabBar/>
    </Container>
  )
}