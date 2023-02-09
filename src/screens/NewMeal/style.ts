import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};  
`;

export const FormContainer = styled.ScrollView`
  width: 100%;
  
`;

export const Form = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;  
  align-items: center;
  justify-content: space-between ;
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 

  margin-top: 20px;  
`;