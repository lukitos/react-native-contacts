import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/Home';
import DetailScreen from './components/Detail';

const RootNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {title: 'Contacts'}
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {title: 'Detail'}
    },
  },
  {
    initialRouteName: 'Home',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootNavigation />;
  }
}