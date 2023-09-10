import { ACT_RANDOM } from "../constrains";

const initialState: number[] = [];

type Action = {
  type: string;
  payload: number;
};

export const random = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACT_RANDOM:
      // clone lại mảng cũ
      const newArray = [...state];
      // push số random vào mảng
      newArray.push(action.payload);

      return newArray;

    default:
      return state;
  }

  return state;
};
