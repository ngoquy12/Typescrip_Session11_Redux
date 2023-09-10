import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_decrease, act_increase } from "../actions/countActions";

type Count = {
  count: number;
};

const Count: React.FC<{}> = () => {
  const dispatch = useDispatch();

  // Lấy ra giá trị trong store
  const count = useSelector((c: Count) => c.count);

  // Hàm xử lý tăng
  const handleIncrease = () => {
    dispatch(act_increase()); // Bắn action lên reducer để xử lý
  };

  // Hàm xử lý giảm
  const handleDecrease = () => {
    dispatch(act_decrease());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Count;
