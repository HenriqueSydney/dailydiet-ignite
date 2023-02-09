import styled, { css } from "styled-components/native";

type Props = {
    accomplishment: accomplishmentTypeEnum;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    align-items: center;
    justify-content: center;
`;

export const FeedbackContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text<Props>`
    ${({ theme, accomplishment }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${accomplishment === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}; 
    margin-bottom: 10px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700}
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}; 
    text-align: center;
`;

export const DescriptionBold = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700}
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}; 
    text-align: center;
`;

export const FeedbackImage = styled.Image`
    width: 224px;
    height: 288px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
    width: 224px
`;