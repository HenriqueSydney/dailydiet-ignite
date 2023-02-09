import styled, { css } from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    
       
    min-height: 192px;

    background-color: ${( { theme } ) => theme.COLORS.GRAY_100};

    border-radius: 8px;

    margin-left: 24px;
    margin-right: 24px;

    padding: 20px;
`;

export const TitleContainer = styled.View`
    padding: 0px 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}; 
    text-align: center;
    margin-top: 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;

    align-items: center;
    justify-content: flex-start;

    margin-top: 25px;
`;

