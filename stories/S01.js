import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../src/S01/index.jsx";
import Game from "../src/S01/lib/S01.js";
import ReactGame from "react-gameboard/lib/component";

const S01 = ReactGame(Game);

storiesOf("S01", module)
  .add("Medium Mode", () => (
    <S01>
       <Board/> 
    </S01>
  ))
