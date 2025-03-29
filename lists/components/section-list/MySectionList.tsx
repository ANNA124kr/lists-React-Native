import { dataSection } from "@/data"
import { SectionList, View, Text, Image } from "react-native"
import styles from "../flat-list/MyFlatList.style"


const MySectionList = () => {
  return (
    <SectionList
      sections={dataSection}
      keyExtractor={(item, index) => item.toString() + index}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.uri }} />
          <Text>{item.title}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title, color } }) => (
        <Text >{title}</Text>
      )}
    />
  )
}

export default MySectionList