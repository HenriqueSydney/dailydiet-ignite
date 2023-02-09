import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  width: 100%;  
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type, disabled }) => type === 'PRIMARY' && !disabled ? theme.COLORS.GRAY_600 :
                                                          type === 'PRIMARY' && disabled ? theme.COLORS.GRAY_300 :
                                                             type !== 'PRIMARY' && !disabled ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};
                                                               
  
  
  border: 1px solid ${({ theme, disabled }) => !disabled ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_400};

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  padding: 14px 24px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600
}))`
  margin-right: 10px;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 
 
`;


