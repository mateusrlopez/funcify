"use client";

import styled, { css } from "styled-components";

export const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 40px;
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.bold};
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.gray100};
        margin-bottom: 5px;
        text-align: center;
    `}
`;

export const Subtitle = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fontSize.default};
        font-weight: ${theme.fontWeight.regular};
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.gray80};
        margin-bottom: 15px;
        text-align: center;
    `}
`;