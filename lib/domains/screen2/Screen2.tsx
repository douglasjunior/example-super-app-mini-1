import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Button
        title="Voltar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Screen2;
