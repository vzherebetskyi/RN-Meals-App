import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialMealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialMealsState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const exisitngIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (exisitngIndex >= 0) {
        const updatedFavMeals = [ ...state.favoriteMeals ];
        updatedFavMeals.splice(exisitngIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals};
      } else {
        return { ...state, favoriteMeals: state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId))};
      }
    default:
      return state;
  }
};

export default mealsReducer;
