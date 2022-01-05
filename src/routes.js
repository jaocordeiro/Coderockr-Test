import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import PostList from './pages/posts/postsList';
import Contact from './pages/contact/contact';

export default function Routes() {
  return(
    <NavigationContainer> 
      <Navigator screenOptions={{headerShown: true}}>
        <Screen 
          name="PostList"
          component={PostList}
        />
        <Screen 
          name="Contact"
          component={Contact}
        />
      </Navigator>
    </NavigationContainer>
  )
}