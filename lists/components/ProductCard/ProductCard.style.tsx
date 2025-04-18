
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer : {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffff',
    borderRadius: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  content: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#352b2a',
    textAlign: 'center',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef6366',
  },
  category: {
    fontSize: 14,
    color: '#b1727e',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#b1727e'
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'justify',
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor:'#b1727e'
  },
  buttonText: {
    color:'#b1727e'
  }
});