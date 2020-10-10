import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
  const renderMealItem = (itemData) => {
    return (
     <MealItem
       title={itemData.item.title}
       image={itemData.item.imageUrl}
       duration={itemData.item.duration}
       complexity={itemData.item.complexity}
       affordability={itemData.item.affordability}
       onSelectMeal={() => {
        props.navigation.navigate({ routeName: 'MealDetail',
        params: {
          mealId: itemData.item.id
        }});
       }}
      />);
  };

  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) !== -1);
    return (
      <View style={styles.screen}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
          style={{width: '100%'}}
        />
        {/* <Text>The Category Meals screen!</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go to meal details!" onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }} />
        <Button title="Go Back" onPress={() => {
          props.navigation.goBack();
        }}          
        /> */}
      </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((object) => object.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealsScreen;
