import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const availableMeals = useSelector(state => state.favoriteMeals);

  if (availableMeals.length === 0 || !availableMeals) {
    return <View style={styles.content}><DefaultText>No Favorite meals found. Start adding some!</DefaultText></View>
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default FavoritesScreen;
