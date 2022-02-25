import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}
/**
 * Hello
 */
const HelloTypeScript = (props: Props) => {
  const jamon = "Jamon"
  console.log("🚀 ~ file: HelloTypeScript.tsx ~ line 10 ~ HelloTypeScript ~ jamon", jamon)
  const david = "David"
  console.log("🚀 ~ file: HelloTypeScript.tsx ~ line 12 ~ HelloTypeScript ~ david", david)
  

  const [hello, setHello] = useState(undefined)
  
  return (
    <View>
      <Text>HelloTypeScript</Text>
    </View>
    
  )
}



export default HelloTypeScript

const styles = StyleSheet.create({})
