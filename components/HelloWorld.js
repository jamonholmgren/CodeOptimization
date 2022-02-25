
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelloWorld = () => {
  return (
    <View styles={styles.wrapper}>
      <Text>HelloWorld</Text>
    </View>
  )
}

export default HelloWorld

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

