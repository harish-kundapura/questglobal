import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Mapping = () => {
  const data = [
    { name: "Item 1", price: "$10" },
    { name: "Item 2", price: "$20" },
    { name: "Item 3", price: "$30" },
  ];

  //   const ListItem = ({ item }) => (
  //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //     {data.map((val,ind)=>{
  //      return (
  //         <View>
  //         <Text style={{ flex: 1 }}>{val.name}</Text>
  //       <Text>{val.price}</Text>
  //       </View>
  //      )
  //     })}

  //     </View>
  //   );

  return (
    <View>
      {data.map((val, ind) => {
        return (
          <View key={ind}>
            <Text style={{ flex: 1 }}>{val.name}</Text>
            <Text>{val.price}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Mapping;

const styles = StyleSheet.create({});
