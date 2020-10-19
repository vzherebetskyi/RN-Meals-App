import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals }
    default:
      return state;
  }
};

export default mealsReducer;
