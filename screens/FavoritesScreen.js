import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {
  const availableMeals = useSelector(state => state.favoriteMeals);

  return (
      <MealList
        displayedMeals={availableMeals}
        navigation={props.navigation}
      />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};



export default FavoritesScreen;
