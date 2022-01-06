import {Container, ContactButton, PostList } from './tabBar.Styled';
import {MaterialIcons} from '@expo/vector-icons';

export default function TabBar() {
  return(
    <Container>
      <PostList>
        <MaterialIcons name='message' size={30} color="#f39a4a"/>
      </PostList>
      <ContactButton>
        <MaterialIcons name='reorder' size={30} color="#f39a4a"/>
      </ContactButton>
    </Container>
  )
}