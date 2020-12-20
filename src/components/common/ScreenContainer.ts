import styled from "styled-components";

import { HEADER_HEIGHT } from "./ScreenHeader";

interface IScreenContainerProps {
    backgroundColor?: string;
    $flexDirection?: "row" | "column";
    $justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    $alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

export const ScreenContainer = styled.div<IScreenContainerProps>`
    background-color: #ecfeff;
    display: flex;
    width: 100%;
    height: calc(100% - ${HEADER_HEIGHT}px);
    flex-direction: ${(props: IScreenContainerProps): string =>
        props.$flexDirection ? props.$flexDirection : "column"};
    align-items: ${(props: IScreenContainerProps): string => (props.$alignItems ? props.$alignItems : "center")};
    justify-content: ${(props: IScreenContainerProps): string =>
        props.$justifyContent ? props.$justifyContent : "flexStart"};
`;
