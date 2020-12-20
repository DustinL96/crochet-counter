import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HOME_SCREEN_PATH } from "../../defs/screenPaths";
import CrochetCounterLogo from "../../resources/images/CrochetCounterLogo.png";

export const HEADER_HEIGHT = 100;

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
`;

const LogoImage = styled.img`
    margin: 15px 30px;
`;

function ScreenHeader(): React.ReactElement {
    return (
        <HeaderContainer>
            <Link to={HOME_SCREEN_PATH}>
                <LogoImage src={CrochetCounterLogo} alt="Crochet Counter Logo" />
            </Link>
        </HeaderContainer>
    );
}

export default ScreenHeader;
