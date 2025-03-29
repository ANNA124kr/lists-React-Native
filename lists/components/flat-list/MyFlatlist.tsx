import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './MyFlatList.style';
import { data } from '@/data';

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <View style = {styles.item}>
    <Text style = {styles.title} >{title}</Text>
  </View>
);

const MyFlatList = () =>{
  return(
    <FlatList
      data={data}
      renderItem={({item}) => <Item title={`${item.city} - ${item.cityDay}`} />}
      keyExtractor={item => item.city}
      ItemSeparatorComponent={() => <View style = {styles.separator} />}
    />
  )
}

export default MyFlatList