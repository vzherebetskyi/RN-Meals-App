import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1);

    return (
      <MealList
        displayedMeals={displayedMeals}
        navigation={props.navigation}
      />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((object) => object.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
