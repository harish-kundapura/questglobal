import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

class MyList extends Component {
  state = {
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ],
  };

  renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

export default MyList;
