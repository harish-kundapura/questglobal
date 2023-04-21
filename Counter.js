// Second problem
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View >
      <Text style={{ fontSize: 30 }}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => {setCount(count+1)}} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
