// Third Problem
import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  { name: "Item 1", price: "$10" },
  { name: "Item 2", price: "$20" },
  { name: "Item 3", price: "$30" },
];

const ListItem = ({ item }) => (
  <View >
    <Text style={{ flex: 1 }}>{item.name}</Text>
    <Text>{item.price}</Text>
    
  </View>
);

const List = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ListItem item={item} />}
    keyExtractor={(item) => item.name}
  />
);

export default List;
