import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import animals from './animals';
import AnimalItem from '../animalItem';

const AnimalList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        renderItem={(item) => <AnimalItem animal={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default AnimalList;
