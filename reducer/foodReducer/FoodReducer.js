import { foodType } from "./food_type";
import { mealData } from "../../components/data";

const intialState = {
  food_Data: "Nigeria",
  cupboard: [],
  foodRecipes: [],
  foodPhotos: [],
  loading: true,
};

const foodReducer = (state = intialState, action) => {
  switch (action.type) {
    case foodType.FOOD_DATA:
      return {
        ...state,
        food_Data: action.payload,
      };

    case foodType.CUPBOARD:
      return {
        ...state,
        cupboard: [...state.cupboard, action.payload],
      };

    case foodType.FOOD_RECIPES:
      return {
        ...state,
        foodRecipes: action.payload,
      };

    default:
      return state;
  }
};

export default foodReducer;
