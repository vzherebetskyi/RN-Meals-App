import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListTextItem = props => {
  return <View style={styles.listTextItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>;
};

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals);
  const mealId = props.navigation.getParam('mealId');
  const mealToDisplay = availableMeals.find((meal) => meal.id === mealId);
  const isFavorite = useSelector(state => state.favoriteMeals).map(meal => meal.id).indexOf(mealId);
  // const isFavorite = useSelector(state => state.favoriteMeals.some(meal => meal.id === mealId));

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: mealToDisplay.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ favIsPresent: isFavorite });
  }, [isFavorite]);

    return (
        <ScrollView>
          <Image source={{ uri: mealToDisplay.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <DefaultText>{mealToDisplay.duration}m</DefaultText>
            <DefaultText>{mealToDisplay.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{mealToDisplay.affordability.toUpperCase()}</DefaultText>
          </View>
          <Text style={styles.title}>Ingredients</Text>
          {
            mealToDisplay.ingredients.map(ingredient => <ListTextItem key={ingredient}>{ingredient}</ListTextItem>)
          }
          <Text style={styles.title}>Steps</Text>
          {
            mealToDisplay.steps.map(step => <ListTextItem key={step}>{step}</ListTextItem>)
          }
          {/* <View style={styles.screen}>
            <Text>{mealToDisplay.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
              props.navigation.popToTop();
            }}
            />
          </View> */}
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const favIsPresent = navigationData.navigation.getParam('favIsPresent');
  return {
    headerTitle: mealTitle,
    headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName={favIsPresent >= 0 ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFav}
      />
    </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listTextItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  }
});

export default MealDetailsScreen;
