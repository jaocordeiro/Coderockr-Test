import {NavigationContainer} from '@react-navigation/native'

import PostList from './src/pages/postsList'

export default () => {
  return (
    <NavigationContainer>
      <PostList />
    </NavigationContainer>
  )
}