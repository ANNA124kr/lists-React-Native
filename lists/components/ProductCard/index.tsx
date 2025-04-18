
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Product from '@/interface';
import { styles } from './ProductCard.style';
import { useState } from 'react';


interface ProductCardProps {
  item: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  const {title, price, description, category, image} = item
  const [details, setDetails] = useState(false)
  const showDetails = () => {
    setDetails(!details)
  }
  return (
    <View style = {styles.cardContainer}>
      <View style = {styles.card}>
        <Image 
          style = {styles.image}
          source={{uri: image}}
        />
      </View>
      <View style = {styles.content} >
        <Text style = {styles.title}> {title} </Text>
      </View>
      <View style = {styles.cardDetails} >
        <Text style = {styles.price}> ${price} </Text>
        <Text style = {styles.category}> {category} </Text>
      </View>
        <Text 
          style = {styles.description}
          numberOfLines={details ? undefined : 2}
        > 
          {description} 
        </Text>
        <TouchableOpacity
          style = {styles.detailsButton}
          onPress={showDetails}
        >
          <Text style = {styles.buttonText}>
            {details ? 'Less' : 'More Details'}
          </Text>
        </TouchableOpacity>
    </View>
  );
};


export default ProductCard;