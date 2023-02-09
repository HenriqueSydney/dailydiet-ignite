import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import {
  Container, 
  Icon,   
  Percent, 
  Description
} from './styles';

type Props = TouchableOpacityProps & {
  result: accomplishmentTypeEnum;
  accomplishmentPercent: number;
}

export function PercentageBox({ result, accomplishmentPercent, ...rest}: Props){
  const theme = useTheme();
 
  const iconColor = result === 'SUCCESS' ? theme.COLORS.GREEN_DARK : result === 'FAILURE' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600;

  return (
    <Container   
      accomplishment={result}     
      {...rest} 
      
    >
      <Icon        
        color={iconColor}
      />

      <Percent>
        {result !== '' ? `${accomplishmentPercent}%` : '0'}
      </Percent>

      <Description>
        {result !== '' ? 'das refeições dentro da dieta' : 'refeições cadastradas'}
      </Description>

      
    </Container>
  );
}
