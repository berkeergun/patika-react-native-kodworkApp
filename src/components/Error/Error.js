import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"#FCD63B",
        // backgroundColor:"#0076b5",
        // backgroundColor:"#3184b0",
        backgroundColor:"#9bcfeb",
        justifyContent:"center",
        alignItems:"center"
    },
    error:{
        fontSize:30,
        color:"white",
        textAlign:"center"
    }
})