import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Listitems = () => {
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
  ];

  return (
    <View>
      <Text>
        {data.map((val, ind) => {
          return (
            <View style={{ padding: 20 }}>
              <Text>{val.title}</Text>
            </View>
          );
        })}
      </Text>
    </View>
  );
};

export default Listitems;

const styles = StyleSheet.create({});
