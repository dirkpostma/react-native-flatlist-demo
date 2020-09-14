import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View, Text} from 'react-native';

interface Item {
  id: number;
  key: string;
  name: string;
}

const data: Item[] = [];

for (let i = 0; i < 500; i++) {
  data[i] = {
    id: i,
    key: `${i}`,
    name: `item #${i}`,
  };
}

function renderItem({item}: {item: Item}) {
  console.log(`rendering ${item.key}`);

  return (
    <View style={styles.listItem}>
      <Text>{item.name}</Text>
    </View>
  );
}

const App = () => {
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 40,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
});

export default App;
