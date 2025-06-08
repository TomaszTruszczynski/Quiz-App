import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  function countUp() {
    setCounter(c => c + 1);
  };

  return (
    <View style={{ backgroundColor: "grey", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="dark" />
      <Text>{counter}</Text>
      <TouchableOpacity style={{ backgroundColor: "orange", padding: 50, borderRadius: 10, elevation: 10, position: "absolute", bottom: 0, left: 0 }}
        onPress={countUp}>
        <Text>Przycisk</Text>
      </TouchableOpacity>
    </View>
  );
};