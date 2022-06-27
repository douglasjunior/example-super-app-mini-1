import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {emitter} from 'example-super-app-context';
import {useNavigation} from '../../hooks/useNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counterButton: {
    marginTop: 16,
  },
});

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Voltar"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.counterButton}>
        <Button
          title="Incrementar contador"
          onPress={() => {
            emitter.emit('INCREMENT_MESSAGE', 1);
          }}
        />
      </View>
    </View>
  );
};

export default Screen2;
