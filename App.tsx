import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

const generateData = (n = 10) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data[i] = {
      id: i,
      key: `${i}`,
      name: `item #${i}`,
    };
  }
  return data;
};

const App = () => {
  const data = generateData(20);

  return (
    <FlatList
      data={data}
      renderItem={({index}) => {
        console.log('renderItem', index);
        return <View style={styles.listItem} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 50,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
});

export default App;
