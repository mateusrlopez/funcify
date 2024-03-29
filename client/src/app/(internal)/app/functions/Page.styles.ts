"use client";

import styled from "styled-components";

export const Root = styled.main`
    width: 100%;
    height: calc(100vh - 102px);
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    grid-template-rows: 40px 1fr 62px;
    grid-column-gap: 0;
    grid-row-gap: 0;
`;
