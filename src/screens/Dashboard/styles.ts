import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type Props = {
    accomplishment: accomplishmentTypeEnum;    
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT :                                                      
                                                      accomplishment === 'FAILURE' ? theme.COLORS.RED_LIGHT :
                                                        theme.COLORS.GRAY_300};  
`;

export const Body = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100 };

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};  
  margin-bottom: 24px;
`;

export const Data = styled.View`
  align-items: center;   
  width: 100%;
`;

export const DataRow = styled.View`
  flex-direction: row;
  align-items: center;   
  width: 100%;
`;




