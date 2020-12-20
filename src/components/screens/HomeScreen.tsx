import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { COUNTER_SCREEN_PATH } from "../../defs/screenPaths";
import HomeBackground from "../../resources/images/HomeBackground.jpg";
import { ScreenContainer } from "../common/ScreenContainer";
import { Typography } from "../common/Typography";

const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${HomeBackground});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 5%;
`;

const MenuButton = styled(Button)`
    && {
        margin: 30px 0;
        width: 350px;
        height: 80px;
        background-color: powderblue;
        text-transform: none;
        &:hover {
            background-color: lightblue;
        }
    }
`;

function HomeScreen(): React.ReactElement {
    const [nextScreen, setNextScreen] = useState<string | null>(null);
    if (nextScreen !== null) {
        return <Redirect push to={nextScreen} />;
    }

    return (
        <ScreenContainer $alignItems="flex-start">
            <SectionContainer>
                <ContentContainer>
                    <Typography variant="h4" $fontWeight="bold">
                        Stop Counting
                    </Typography>
                    <Typography variant="h4" $fontWeight="bold">
                        Let us do it for you
                    </Typography>
                    <MenuButton variant="contained" onClick={(): void => setNextScreen(COUNTER_SCREEN_PATH)}>
                        <Typography variant="h5">Get Started</Typography>
                    </MenuButton>
                </ContentContainer>
            </SectionContainer>
        </ScreenContainer>
    );
}

export default HomeScreen;
