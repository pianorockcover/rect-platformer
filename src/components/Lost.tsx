import React from "react";
import styled from "styled-components";
import { StartGameButton } from "./StartPage";

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #ffffff;
    z-index: 3;
    display: flex;
    background: #000000;
    align-items: center;
    font-family: "Pixel Cyr";
    justify-content: center;
`;

interface LooseProps {
    onStartGame: () => void;
}

export const Loose: React.FC<LooseProps> = ({ onStartGame }) => (
    <Wrapper>
        <img src="img/beer.png" />
        <div>
            <div>Вы сели на бутылку правосудия!</div>
            <StartGameButton onClick={onStartGame}>Искать</StartGameButton>
        </div>
    </Wrapper>
)