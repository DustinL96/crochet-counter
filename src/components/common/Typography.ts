import { Typography as MaterialTypography } from "@material-ui/core";
import styled from "styled-components";

interface ITypographyProps {
    $fontWeight?: string;
    $fontColor?: string;
    $transform?: string;
    $margin?: string;
    $alignment?: string;
    $flex?: number;
}

export const Typography = styled(MaterialTypography)<ITypographyProps>`
    && {
        display: flex;
        align-items: center;
        font-family: "SourceSansPro", sans-serif;
        text-transform: ${(props: ITypographyProps): string | undefined => props.$transform};
        font-weight: ${(props: ITypographyProps): string => (props.$fontWeight ? props.$fontWeight : "normal")};
        color: ${(props: ITypographyProps): string | undefined => props.$fontColor};
        margin: ${(props: ITypographyProps): string | undefined => props.$margin};
        flex: ${(props: ITypographyProps): number | undefined => props.$flex};
        text-align: ${(props: ITypographyProps): string | undefined => props.$alignment};
    }
`;
