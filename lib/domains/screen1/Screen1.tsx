import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Button
        title="Ir para Screen 2"
        onPress={() => {
          navigation.navigate('Mini1_Screen2');
        }}
      />
    </View>
  );
};

export default Screen1;
