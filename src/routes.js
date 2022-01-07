import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import PostList from './pages/posts/postsList';
import Contact from './pages/contact/contact';
import Details from './pages/details/details';

export default function Routes() {
  return(
    <NavigationContainer> 
      <Navigator screenOptions={{headerShown: true}}>
        <Screen 
          name="PostList"
          component={PostList}
          options={{
            title: 'Post List',
            headerStyle: {
              backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Screen 
          name="Contact"
          component={Contact}
          options={{
            title: 'Contact',
            headerStyle: {
              backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Screen 
          name="Details"
          component={Details}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}