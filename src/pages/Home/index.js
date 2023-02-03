import { StyleSheet, View, ImageBackground } from 'react-native'

import React from 'react'
import Colors from '../../styles/Colors'
import CheckLists from '../../components/CheckLists'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <CheckLists />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.champagne,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
