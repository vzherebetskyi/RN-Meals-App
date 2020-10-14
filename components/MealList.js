import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
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
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
        }});
        }}
      />);
    };
    return (
        <View style={styles.list}>
          <FlatList
            data={props.displayedMeals}
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MealList;
