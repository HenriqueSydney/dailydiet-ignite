import styled, { css } from "styled-components/native";

type Props = {
    accomplishment: accomplishmentTypeEnum;    
}

export const Container = styled.View<Props>`
    flex: 1;

    height: 89px;

    align-items: center;
    justify-content: center;

    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme, accomplishment }) => accomplishment === 'SUCCESS' ? 
                                                        theme.COLORS.GREEN_MID : 
                                                            accomplishment === 'FAILURE' ?
                                                                theme.COLORS.RED_MID :
                                                                    theme.COLORS.GRAY_200 };

    margin: 5px;
`;

export const Totals = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};  

    text-align: center;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};  
    
    text-align: center;
`;