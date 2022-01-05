import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import PostList from './pages/posts/postsList';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="PostList" component={PostList}/>
      </Navigator>
    </NavigationContainer>
  )
}