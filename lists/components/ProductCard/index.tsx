
import { View, Text, Image } from 'react-native';
import Product from '@/interface';
import { styles } from './ProductCard.style';


interface ProductCardProps {
  item: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  const {title, price, description, category, image} = item
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
          numberOfLines={3}
        > 
          {description} 
        </Text>
    </View>
  );
};


export default ProductCard;