import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorParamList from './types';
import Screen1 from '../domains/screen1/Screen1';
import Screen2 from '../domains/screen2/Screen2';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mini1_Screen1" component={Screen1} />
      <Stack.Screen name="Mini1_Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
