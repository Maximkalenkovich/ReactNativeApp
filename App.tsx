import React from 'react';
import { StyleSheet,View} from 'react-native';
import {InputComponent} from "./src/components/input_components/input_components";

const App = () => {

  return (
      <View style={styles.container}>
       <InputComponent/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
