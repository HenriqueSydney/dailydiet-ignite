import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const MealScheduleContainer = styled.View`
  flex: 1;
  align-items: center;  
  margin-top: 20px;  
`;

export const MealScheduleTitle = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_700};
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `}; 
  align-self: flex-start;
`;

export const DateMealsHeaderSection = styled.Text`
   ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LG}px;
      color: ${theme.COLORS.GRAY_700};
      font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 

  margin-top: 20px;
  margin-bottom: 5px;

`;

