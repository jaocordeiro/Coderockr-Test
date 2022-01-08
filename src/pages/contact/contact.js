import {
    Container,
    FormContainer,
    LabelContact,
    AreaInput,
    PostTextArea,
    ButtonSubmit,
    NameButton
  } from './contact.Styled';
import TabBar from '../../components/TabBar/tabBar';
import {MaterialIcons} from '@expo/vector-icons';

export default function Contact() {
  return(
    <Container>
      <FormContainer>
        <LabelContact>Name</LabelContact>
        <AreaInput placeholder="What is your Name" />

        <LabelContact>E-mail</LabelContact>
        <AreaInput placeholder="Your E-mail" />

        <LabelContact>Phone</LabelContact>
        <AreaInput placeholder="Your Number Phone" />

        <LabelContact>Post</LabelContact>
        <PostTextArea placeholder="Post Message" />

        <ButtonSubmit>
          <MaterialIcons 
            name='send'
            size={25}
            color="#fff"/>
          <NameButton>Submit</NameButton>
        </ButtonSubmit>
      </FormContainer>
      <TabBar/>
    </Container>
  )
}