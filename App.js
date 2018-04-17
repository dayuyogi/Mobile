import React from 'react';
import { Text, Image, TextInput, View, StyleSheet, FlatList, KeyboardAvoidingView, RefreshControl, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 

import inputScreen from './src/inputScreen';
import listScreen from './src/listScreen';
import search from './src/search';


export default TabNavigator(
  {
    Add: { screen: inputScreen },
    List: { screen: listScreen },
    search: {screen : search},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
       if (routeName === 'Add') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'List') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: '#43A047'
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);