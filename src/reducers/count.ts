import { ACT_DECREASE, ACT_INCREASE } from "../constrains";

const initialState: number = 0;

type Action = {
  type: string;
};

export const count = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACT_INCREASE:
      return state + 1;
    case ACT_DECREASE:
      return state - 1;

    default:
      return state;
  }
};
