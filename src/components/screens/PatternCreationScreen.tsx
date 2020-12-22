import { Button, Chip } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";

import { PASTEL_RAINBOW_COLORS, THREE_QUARTERS_OPACITY } from "../../defs/colors";
import { ScreenContainer } from "../common/ScreenContainer";
import { Typography } from "../common/Typography";

const PatternSelectOuterContainer = styled.div`
    height: 42%;
    overflow-y: auto;
    display: flex;
    width: 30%;
    @media only screen and (max-width: 640px) {
        width: 95%;
    }
`;

const PatternSelectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    margin-bottom: 60px;
    align-items: flex-start;
`;

const PatternButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    flex-wrap: wrap;
    @media only screen and (max-width: 640px) {
        width: 95%;
        justify-content: space-evenly;
    }
`;

interface IPatternProps {
    $backgroundColor: string;
}

const PatternChip = styled(Chip)<IPatternProps>`
    && {
        background-color: ${(props: IPatternProps): string => props.$backgroundColor};
        margin-right: 5px;
        margin-bottom: 10px;
        &:hover {
            background-color: ${(props: IPatternProps): string => props.$backgroundColor + THREE_QUARTERS_OPACITY};
        }
        @media only screen and (max-width: 640px) {
            width: 23%;
            height: 40px;
            font-size: larger;
        }
    }
`;

const PatternButton = styled(Button)<IPatternProps>`
    && {
        width: 150px;
        height: 50px;
        margin-bottom: 15px;
        background-color: ${(props: IPatternProps): string => props.$backgroundColor};
        text-transform: none;
        &:hover {
            background-color: ${(props: IPatternProps): string => props.$backgroundColor + THREE_QUARTERS_OPACITY};
        }

        @media only screen and (max-width: 640px) {
            width: 45%;
        }
    }
`;

const STITCH_COLORS = Object.values(PASTEL_RAINBOW_COLORS);

const STITCH_OPTIONS = {
    "Single Crochet": "SC",
    Increase: "Inc",
    Decrease: "Dec",
    "Slip Stitch": "Sl St",
    "Double Crochet": "DC",
    "Half Double Crochet": "HDC",
    "Yarn Over": "YO",
};

const NAME_INDEX = 0;
const ABBR_INDEX = 1;

function PatternCreationScreen(): React.ReactElement {
    const [pattern, setPattern] = useState<string[]>([]);

    const handleChipAdd = (option: string): void => {
        const selectedOptions = [...pattern];
        selectedOptions.push(option);
        setPattern(selectedOptions);
    };

    const handleChipDelete = (option: string): void => {
        const selectOptions = [...pattern];
        const optionIndex = selectOptions.indexOf(option);
        setPattern([...selectOptions.slice(0, optionIndex), ...selectOptions.slice(optionIndex + 1)]);
    };

    return (
        <ScreenContainer>
            <Typography variant="h4">Pattern Creation</Typography>
            <PatternSelectOuterContainer>
                <PatternSelectionContainer>
                    {pattern.map((selectedStitch: string, index: number) => (
                        <PatternChip
                            key={index}
                            label={selectedStitch}
                            $backgroundColor={
                                STITCH_COLORS[(Object.values(STITCH_OPTIONS).indexOf(selectedStitch) + 1) % 6]
                            }
                            onDelete={(): void => handleChipDelete(selectedStitch)}
                        />
                    ))}
                </PatternSelectionContainer>
            </PatternSelectOuterContainer>
            <PatternButtonContainer>
                {Object.entries(STITCH_OPTIONS).map((stitchOption: [string, string], index: number) => (
                    <PatternButton
                        key={stitchOption[NAME_INDEX]}
                        variant="contained"
                        $backgroundColor={STITCH_COLORS[index % 6]}
                        onClick={(): void => handleChipAdd(stitchOption[ABBR_INDEX])}
                    >
                        <Typography title={stitchOption[NAME_INDEX]} variant="body1" $fontWeight="bold">
                            {stitchOption[ABBR_INDEX]}
                        </Typography>
                    </PatternButton>
                ))}
            </PatternButtonContainer>
        </ScreenContainer>
    );
}

export default PatternCreationScreen;
