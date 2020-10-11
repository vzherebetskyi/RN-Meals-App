import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
  }, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen,
  }, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const tabScreenConfig = {
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.primaryColor,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals',
  }},
  Favorites: { screen: FavoritesNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    },
    tabBarColor: Colors.accentColor,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites',
  }}
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: '#fff',
  shifting: true,
})
:
createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans',
    },
    activeTintColor: Colors.accentColor,
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  navigationOptions: {
    drawerLabel: 'Filters'
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
    }
  },
  Filters: FiltersNavigator,
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
  }
});

export default createAppContainer(MainNavigator);
