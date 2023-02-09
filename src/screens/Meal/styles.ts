import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  accomplishment: accomplishmentTypeEnum;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};  
`;

export const MealInfoContainer = styled.View` 
  flex: 1;

  width: 100%;

  margin-bottom: 20px;

  align-items: flex-start;  
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 
  margin-bottom:10px;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};  
  margin-bottom:20px;
`;

export const MealDateTimeLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
`;

export const MealDateTimeInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};  
`;

export const AccomplishmentIndicatorContainer = styled.View<Props>`
  flex-direction: row;

  flex: 1;

  align-items: center;
  justify-content: center;

  min-height: 34px;
  max-height: 34px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  padding: 8px 16px;

  border-radius: 1000px;

  margin-top: 30px;

`;

export const StatusIcon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 6px;
  background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 5px;

`;

export const AccomplishmentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 
`;
