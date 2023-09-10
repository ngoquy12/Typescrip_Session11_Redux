import { ACT_DECREASE, ACT_INCREASE } from "../constrains";

export const act_increase = () => {
  return {
    type: ACT_INCREASE,
  };
};

export const act_decrease = () => {
  return {
    type: ACT_DECREASE,
  };
};
