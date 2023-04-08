import { useEffect, useState } from 'react';
import {Text,View, TextInput,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize'

const Width = Dimensions.get('window').width 
const Height = Dimensions.get('window').height


const HomeScreen = ({ navigation }) => {


const [name,SetName]=useState('')
const [result,setResult]=useState('')
const [after,setAfter]=useState(true)

useEffect(() => {
 if (after){
  setAfter(result)
  console.log(after)
 }
}, [result]);
  
    return (
      <View style={styles.containerMain}>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>Name : </Text>
        <TextInput 
        style={styles.inputField} 
        placeholder="Enter your name"
        onChangeText={(name)=>SetName(name)}
        value={name}
        />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>setResult(name)}>
           <Text style={styles.buttonText}>Data in same page</Text>
        </TouchableOpacity >
        <TouchableOpacity activeOpacity={0.5} style={styles.button}
        onPress={()=>navigation.navigate('Detail',{
          name:name
        })}>
        <Text style={styles.buttonText}>Next page</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
        {result&&<Text style={styles.result}>The Name you have entered : {result}</Text>}
        </View> 
        </View>
       
    );
  };
export default HomeScreen;
const styles=StyleSheet.create({
    containerMain:{
        flex:1,
        marginHorizontal:'2%',
        marginVertical:'2%',
    },
    inputContainer:{
      flex:0.2,
    },
    inputField:{
        borderWidth:0.5,
        marginVertical:'2%',
    },
    label:{
      fontSize:RFPercentage(3),
      color:'#000080',
      fontWeight:'bold'
    },
    buttonContainer:{
      flex:0.2,
      justifyContent:'center',
      marginVertical:'2%',
    },
    button:{
      backgroundColor:'#000080',
      alignItems:'center',
      justifyContent:'center',
      marginVertical:'1%',
      height:'35%',
    },
    buttonText:{
      fontWeight:'bold',
      color:'#fff'
    },
    resultContainer:{
      flex:0.1,
      justifyContent:'center',
      alignItems:'center',
    },
    result:{
      color:'green',
      fontSize:RFPercentage(3),
      fontWeight:'bold'
    },
})