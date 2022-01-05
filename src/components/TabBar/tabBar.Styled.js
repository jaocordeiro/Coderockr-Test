import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: blue;
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
`;

export const ContactButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background: red;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 20px;
`;

export const PostList = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background: red;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 20px;
`;