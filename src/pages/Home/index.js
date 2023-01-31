import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../styles/Colors'
import CheckLists from '../../components/CheckLists'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CheckLists />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.champagne,
  },
})
