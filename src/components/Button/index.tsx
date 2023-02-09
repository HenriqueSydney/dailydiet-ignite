import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Icon, ButtonTypeStyleProps } from './styles';


type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ''  |  keyof typeof MaterialIcons.glyphMap;
}

export function Button({title, type='PRIMARY', icon='', ...rest}: Props){
  return (
    <Container      
      type={type} 
      {...rest} 
    >

      {icon && <Icon 
                  name={icon}
                  type={type}
                />
      }

      <Title
        type={type}
      >
        {title}
      </Title>
      
    </Container>
  );
}
