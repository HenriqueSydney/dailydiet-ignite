import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type IconStyleProps = {
    isInDiet?: boolean;
}
  

export const Container = styled(TouchableOpacity)`

  width: 100%;
  height: 49px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300}; 
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 14px 16px 14px 12px;
  margin-bottom: 12px;

`;

export const MealInfoContainer = styled.View`
     flex-direction: row;
     align-items: center;
     justify-content: center;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
`;
export const VerticalLine = styled.View`
    height: 18px;
    width: 1px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_400}; 

    margin-left: 10px;
    margin-right: 10px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};  
`;

export const Icon = styled.View<IconStyleProps>`
    background-color: ${({ theme, isInDiet }) => isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    width:14px;
    height: 14px;
    
    border-radius: 7px;
`;

