import styled, { css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { ThemeType } from 'styled-components';

type Props = {
  theme: ThemeType;
  error: string;
  touched: undefined | boolean; 
}

export const Container = styled.View`   
  flex: 1;
  margin-top: 20px;
  align-self: stretch;
  
`;

export const InputContainer = styled(TextInput).attrs<TextInputProps>(({ theme, multiline }) => ({
  fontSize: theme.FONT_SIZE.MD,
  color: theme.COLORS.GRAY_700,
  fontFamily: theme.FONT_FAMILY.REGULAR,
  maxHeight: multiline ? 400 : 48,
  textAlignVertical: 'top' 
}))`  
  border: 1px solid  ${({ theme, error, touched }: Props) => (error !== '' && touched === true ) ?  theme.COLORS.RED_DARK : theme.COLORS.GRAY_300};
  min-height: 48px;  
  border-radius: 6px;
  padding: 14px;  
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
`;
