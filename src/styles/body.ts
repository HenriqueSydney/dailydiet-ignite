import styled from "styled-components/native";


export const Body = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100 };

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 24px;
`;