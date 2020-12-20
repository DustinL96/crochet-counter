import React from "react";
import styled from "styled-components";

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
            <LogoImage src={CrochetCounterLogo} alt="Crochet Counter Logo" />
        </HeaderContainer>
    );
}

export default ScreenHeader;
