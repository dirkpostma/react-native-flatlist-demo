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

const ListItem = React.memo(({item}: {item: Item}) => {
  console.log(`rendering ${item.key}`);
  return (
    <View key={item.key} style={styles.listItem}>
      <Text>{item.name}</Text>
    </View>
  );
});

function renderItem({item}: {item: Item}) {
  return <ListItem item={item} />;
}

const App = () => {
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} removeClippedSubviews />
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
