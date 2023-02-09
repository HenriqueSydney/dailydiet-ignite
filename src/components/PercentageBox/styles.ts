import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from "styled-components/native";
import { ThemeType } from 'styled-components';

export type IconTypeStyleProps = 'SUCCESS' | 'FAILURE';

type Props = {
  accomplishment: accomplishmentTypeEnum;
  
}

export const Container = styled(TouchableOpacity)<Props>`

  background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : 
                                                      accomplishment === 'FAILURE' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_300};
 
  height: 102px;

  border-radius: 6px;

  margin-top: 40px;
  padding: 20px 16px;

  justify-content: center;
  align-items: center;
`;

export const Percent = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
`;

export const Description = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_600};
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};  
`;

export const Icon = styled(ArrowUpRight)`   
  position: absolute;
  
  right: 8px;
  top: 8px;    
`;



