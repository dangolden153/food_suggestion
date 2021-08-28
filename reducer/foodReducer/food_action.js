import { foodType } from "./food_type";
// import {useDispatch} from 'react-redux'

// const foodData = useDispatch()

// foodData({type:foodType.FOOD_DATA,payload: payload })

export const AddFoodToCupboard = (item) => ({
  type: foodType.CUPBOARD,
  payload: item,
});
