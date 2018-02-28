import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Start from './src/Start';
import MainView from './src/MainView';
export default class App extends Component {
      static navigationOptions = {
          header: null
      }
      render() {
        return (
           <RootStack/>
        );
      }
  }


const RootStack = StackNavigator(
  {
    Start: {
      screen: Start,

    },
    MainView: {
      screen: MainView,
    },
  },
  {
    initialRouteName: 'Start',
  },
);


