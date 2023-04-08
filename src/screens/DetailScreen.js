import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {RFPercentage} from 'react-native-responsive-fontsize'

const DetailScreen = ({route}) => {
  
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.details}>The entered details is : {route.params.name}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  detailContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  details:{
    fontSize:RFPercentage(3)
  }
})