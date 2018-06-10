import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../src/S11/index.jsx";
import Game from "../src/S11/lib/S11.js";
import { ReactGame } from "react-gameboard";
import { number, withKnobs } from "@storybook/addon-knobs";
import "../src/S11/index.less";

const S11 = ReactGame(Game);

storiesOf("Aome vô địch (S11)", module)
  .addDecorator(withKnobs)
  .add("How to play", () => {
    return (
      <div className="divs s11">
        <div>
          Ở một ngôi nhà nọ có N Aome sống chung, họ có tên lần lượt là Aome 1,
          Aome 2, ... Aome N. Sau nhiều ngày ăn chơi, những Aome đã vay nợ nhau
          một cách lộn xộn. Nhiệm vụ của bạn là dùng số lần trả nợ ít nhất sao
          cho không ai còn nợ tiền.
        </div>
        <div>
          Việc nợ tiền của các Aome được biểu diễn như một cái bảng với ô (i, j)
          có giá trị X nghĩa là Aome i nợ Aome j X đồng.
        </div>
        <div>
          Một hành động trả nợ được biểu diễn gồm 3 giá trị (A, B, X) nghĩa là
          Aome A sẽ trả Aome B X đồng.
        </div>
        <div>
          Một bước trả nợ bạn có thể điền A vào sau First person, B vào sau
          Second Person, X vào sau Balance rồi bấm Submit
        </div>
        <div>
          Tùy vào việc đáp án của bạn có tối ưu hay không mà bạn sẽ nhận được từ
          1 ⋆ đến 3 ⋆.
        </div>
      </div>
    );
  })
  .add("with default props", () => (
    <S11 _N={4}>
      <Board />
    </S11>
  ))
  .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 1,
      max: 15
    };
    return (
      <S11 _N={number("Size of board", 5, options)}>
        <Board />
      </S11>
    );
  });
