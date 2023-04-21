import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <TouchableOpacity onPress={increment}></TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
