// First problem

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Quest = () => {
  return (
    <View>
      <View>
        <TouchableOpacity style={{ color: "red", backgroundColor: "red" }}>
          <Text>Press me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Quest;
