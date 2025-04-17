import ProductCard from '@/components/ProductCard';
import Product from '@/interface';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, FlatList } from 'react-native';



export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    getProduct()
  },[])
  const getProduct = () => {
    const baseURL = 'https://fakestoreapi.com/products'
    axios({
      method: 'get',
      url: `${baseURL}`
    })
    .then(({data}) => {
      console.log(data);
      setProducts(data)
    })
    .catch(err => console.error(err))
  }
  return (
    <SafeAreaView style = {styles.safeView} >
    <View style = {styles.container} >
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductCard item = {item} />}
      />
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6e8e7'
  },
  safeView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
