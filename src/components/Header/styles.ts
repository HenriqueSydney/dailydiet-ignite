
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
    accomplishment: accomplishmentTypeEnum;    
}

export const Container = styled.View<Props>`
    width: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? 
                                                        theme.COLORS.GREEN_LIGHT : 
                                                            (accomplishment === 'FAILURE' ?
                                                                theme.COLORS.RED_LIGHT :
                                                                    theme.COLORS.GRAY_300)};

`;


export const BackButton = styled.TouchableOpacity`
  flex: 1;
   
  position: absolute;  
  left: 8px;
  top: 8px;    
`;

export const BackIcon = styled(ArrowLeft)`
  font-size: 32px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
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


