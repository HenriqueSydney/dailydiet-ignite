import { Container, Logo, UserPhoto } from "./styles";

import logoImg from '@assets/logo.png';
import userPhoto from '@assets/userphoto.png';


export function HomeHeader(){
  return (
    <Container>        
        <Logo source={logoImg} />

        <UserPhoto source={userPhoto}/>
    </Container>
  )
}
