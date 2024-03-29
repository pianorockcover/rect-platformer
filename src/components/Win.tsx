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
    background: #121212;
    align-items: center;
    font-family: "Pixel Cyr";
    justify-content: center;
`;

interface WinProps {
    onStartGame: () => void;
}

export const Win: React.FC<WinProps> = ({ onStartGame }) => (
    <Wrapper>
        <img
            src="img/treasure.png"
            style={{ marginRight: 10 }}
        />
        <div>
            <div>Вам удалось пыхнуть!</div>
            <StartGameButton
                onClick={onStartGame}
                style={{ color: "#ffffff" }}
            >
                Играть снова
            </StartGameButton>
        </div>
    </Wrapper>
)