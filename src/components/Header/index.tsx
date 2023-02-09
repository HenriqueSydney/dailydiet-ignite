import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Container, BackButton, BackIcon, Title, Description } from "./styles";

type Props = {
    title: string; 
    description?: string;
    accomplishment?: accomplishmentTypeEnum;   
  }

export function Header({ title, description = '', accomplishment = '' } : Props){
  const navigation = useNavigation();
  const theme = useTheme();
  
  function handleGoBack(){
    navigation.navigate('home');
  } 
  
  const headerHeight = description === '' ? theme.HEADER.MD : theme.HEADER.LG;
  const iconColor = accomplishment === 'SUCCESS' ? 
                  theme.COLORS.GREEN_DARK : 
                      (accomplishment === 'FAILURE' ?
                          theme.COLORS.RED_DARK :
                              theme.COLORS.GRAY_600);
                            
  const titleSize = description === '' ? theme.FONT_SIZE.LG : theme.FONT_SIZE.XXL;

  return (
    <Container 
        style={{height: headerHeight}}
        accomplishment={accomplishment}
    > 

      <BackButton onPress={handleGoBack}>
        <BackIcon 
            color={iconColor}
        />    
      </BackButton>   
      <Title style={{fontSize: titleSize}}>
         
          {title}
      </Title>

      {description !== '' &&  <Description>{description}</Description>}         
     
    </Container>


  )
}
