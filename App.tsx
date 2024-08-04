import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Counter: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={handleIncrement} />
          <Button title="Decrement" onPress={handleDecrement} />
          <Button title="Reset" onPress={() => setCount(0)}> 0</Button>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default App;
