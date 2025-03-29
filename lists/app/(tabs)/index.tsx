import MyFlatList from '@/components/flat-list/MyFlatlist';
import MySectionList from '@/components/section-list/MySectionList';
import { SafeAreaView, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View style = {styles.container} >
      {/* <MyFlatList/> */}
      <MySectionList/>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});
