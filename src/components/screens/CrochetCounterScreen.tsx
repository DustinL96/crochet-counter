import { Button, IconButton, TextField } from "@material-ui/core";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { Typography } from "../common/Typography";

const ScreenContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;

const ProgressButton = styled(IconButton)`
    && {
        &:hover {
            background-color: transparent;
        }
    }
`;

const AddIcon = styled(AddCircleOutline)`
    && {
        width: 80%;
        height: 80%;
    }
`;

const GreenButton = styled(Button)`
    && {
        background-color: lightgreen;
        margin-top: 30px;
        width: 150px;
        height: 50px;
        &:hover {
            background-color: palegreen;
        }
    }
`;

function CrochetCounterScreen(): React.ReactElement {
    const [stepsString, setStepsString] = useState<string>("");
    const [numOfTimes, setNumOfTimes] = useState<number>(1);

    const [patternStepsList, setPatternStepsList] = useState<string[]>([]);
    const [currentCount, setCurrentCount] = useState<number>(1);
    const [timesCount, setTimesCount] = useState(1);

    const handlePatternClick = (): void => {
        setCurrentCount(1);
        setTimesCount(1);
        setPatternStepsList(stepsString.toUpperCase().split("-"));
    };

    const handleNextStepClick = (): void => {
        if (currentCount === patternStepsList.length) {
            setTimesCount((count: number): number => count + 1);
        }

        setCurrentCount((count: number): number => {
            if (count === patternStepsList.length) {
                return 1;
            }
            return count + 1;
        });
    };

    const handlePreviousStepClick = (): void => {
        setCurrentCount((count: number): number => {
            if (count === 1 && timesCount > 1) {
                setTimesCount((count: number): number => count - 1);
                return patternStepsList.length;
            }

            if (count === 1 && timesCount === 1) {
                return 1;
            }
            return count - 1;
        });
    };

    if (patternStepsList.length > 0 && currentCount === 1 && timesCount > numOfTimes) {
        return (
            <ScreenContainer>
                <Typography variant="h3">Crochet Counter</Typography>
                <Typography variant="h4" $margin="30px 0">
                    Round Complete!
                </Typography>
                <GreenButton onClick={(): void => setPatternStepsList([])}>
                    <Typography variant="subtitle1">Next Pattern</Typography>
                </GreenButton>
            </ScreenContainer>
        );
    }

    if (patternStepsList.length > 0) {
        return (
            <ScreenContainer>
                <Typography variant="h3">Crochet Counter</Typography>
                <Typography variant="h5">Step: {currentCount}</Typography>
                <Typography variant="h5">Times: {timesCount}</Typography>
                <Typography variant="h3">{patternStepsList[currentCount - 1]}</Typography>
                <ProgressButton onClick={handleNextStepClick} disableRipple disableFocusRipple disableTouchRipple>
                    <AddIcon />
                </ProgressButton>
                <ProgressButton onClick={handlePreviousStepClick}>
                    <RemoveCircleOutline />
                </ProgressButton>
                <Button onClick={(): void => setPatternStepsList([])}>Cancel</Button>
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Typography variant="h3">Crochet Counter</Typography>
            <Typography variant="subtitle1">{"Please enter the steps below (Separate steps with '-')"}</Typography>
            <Typography variant="body2" $margin="30px 0 0 0">
                Pattern
            </Typography>
            <TextField
                placeholder="sc-sc-sc-inc"
                variant="outlined"
                value={stepsString}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    setStepsString(event.target.value);
                }}
            />
            <Typography variant="body2" $margin="30px 0 0 0">
                Number of Times
            </Typography>
            <TextField
                type="number"
                variant="outlined"
                value={numOfTimes}
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    setNumOfTimes(parseInt(event.target.value, 10));
                }}
            />
            <GreenButton variant="contained" onClick={handlePatternClick}>
                <Typography variant="subtitle1">Start!</Typography>
            </GreenButton>
        </ScreenContainer>
    );
}

export default CrochetCounterScreen;
