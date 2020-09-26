import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
          <Text>The Category Meals screen!</Text>
          <Button title="Go to meal details!" onPress={() => {
            props.navigation.navigate({ routeName: 'MealDetail' });
          }} />
          <Button title="Go Back" onPress={() => {
            props.navigation.goBack();
          }}          
          />
        </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealsScreen;
