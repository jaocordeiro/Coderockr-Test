import {Container, ContactButton, PostList } from './tabBar.Styled';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function TabBar() {
  const navigation = useNavigation();

  function handleNavigatePostList() {
    navigation.navigate('PostList');
  }

  function handleNavigateContact() {
    navigation.navigate('Contact');
  }

  return(
    <Container>
      <PostList>
        <MaterialIcons
          onPress={handleNavigatePostList}
          name='home'
          size={30}
          color="#f39a4a"/>
      </PostList>
      <ContactButton>
        <MaterialIcons 
          onPress={handleNavigateContact}
          name='forum'
          size={30}
          color="#f39a4a"/>
      </ContactButton>
    </Container>
  )
}