import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    isActive: boolean;
    type: accomplishmentTypeEnum;
}
  

export const Container = styled(TouchableOpacity)<Props>`
    flex-direction: row;

    flex: 1;

    align-items: center;
    justify-content: center;

    min-height: 50px;
    max-height: 50px;

    border: 1px solid ${({ theme, isActive, type }) => 
      type === 'SUCCESS' 
        ? isActive === true ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_200 
        : isActive === true ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200 
    };

    background-color: ${({ theme, isActive, type }) => 
      type === 'SUCCESS' 
        ? isActive === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_200 
        : isActive === true ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200 
    };

    padding: 16px;
    
    border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}; 
`;

export const StatusIcon = styled.View<Props>`
  width: 8px;
  height: 8px;

  border-radius: 6px;

  background-color: ${({ theme, isActive, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  margin-right: 5px;

`;


