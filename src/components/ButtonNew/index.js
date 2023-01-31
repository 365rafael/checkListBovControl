import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Colors from '../../styles/Colors'

export default function ButtonNew({ focused, size, color }) {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={size} color={focused ? '#FFF' : '#F8F8F8'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
})
