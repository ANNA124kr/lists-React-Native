import MyFlatList from '@/components/flat-list/MyFlatlist';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView style = {styles.safeView} >
    <View style = {styles.container} >
      <MyFlatList/>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 24
  }
});
