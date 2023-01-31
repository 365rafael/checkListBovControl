import { View, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../../styles/Colors'

import Logo from '../../../assets/Logo.svg'

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '100%',
    backgroundColor: Colors.white,
  },
})
