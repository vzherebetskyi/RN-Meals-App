import { MEALS } from '../../data/dummy-data';

const initialMealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialMealsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mealsReducer;
