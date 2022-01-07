import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #c9c7c7;
  justify-content: space-between;
`;
export const FormContainer = styled.View`
  padding: 7px;
  margin-top: 12px;
`;

export const LabelContact = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const AreaInput = styled.TextInput`
  margin-top: 5px;
  margin-bottom: 22px;
  background: #fff;
  border: 2px #f2994a;
  border-radius: 10px;
  height: 40px;
  padding: 0 14px;
`;

export const PostTextArea = styled.TextInput.attrs(() => ({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'grey',
  numberOfLines: 10,
  multiline: true,
}))`
  margin-top: 5px;
  background: #fff;
  border: 2px solid #f2994a;
  border-radius: 10px;
  padding: 0 14px;
  
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin-top: 22px;
  background: #f2994a;
  padding: 15px 18px;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  align-self: center;
  flex-direction: row;
  border-radius: 15px;
 `;

 export const NameButton = styled.Text`
  font-size: 16px;
  font-family: 'Nunito_800ExtraBold';
  margin-left: 14px;
 `;