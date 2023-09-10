import { ACT_RANDOM } from "../constrains";

export const act_random = (random: number) => {
  return {
    type: ACT_RANDOM,
    payload: random,
  };
};
