import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import EventList from './EventList';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList
  }
})

export default createAppContainer(AppNavigator);
