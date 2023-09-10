import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_random } from "../actions/randomActions";

type Random = {
  random: number[];
};

const Random: React.FC<{}> = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ store
  const listNumber = useSelector((list: Random) => list.random);

  console.log(listNumber);

  // Hàm tạo ra một số ngẫu nhiên
  const handleRandom = () => {
    const randomNumber: number = Math.ceil(Math.random() * 10);
    dispatch(act_random(randomNumber));
  };
  return (
    <div>
      <h1>List random: {JSON.stringify(listNumber)}</h1>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default Random;
