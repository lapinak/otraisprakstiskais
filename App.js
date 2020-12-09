import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HelloWorld = () => {
  return (
     <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
    <Text style={styles.baseText}>
      Hello World from Group 1 : Roberts Bišs!
      <Text style={styles.innerText}>This is my Roberts Bišs first React Native application!</Text>
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default HelloWorld;