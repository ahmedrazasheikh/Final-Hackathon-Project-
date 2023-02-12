import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Pressable ,   Button ,  Image , StyleSheet, Text, View } from 'react-native';

const Splash = ({navigation}) => {
  const page = ()=>{
    navigation.navigate('Signup')
    }
  return (
       <View style={styles.container}>

<Image
        source={require('./Rename.png')}   
        style= {styles.image}
        
        />

      <Text   style={styles.head1}  >Sylani Welfare </Text>
      <Text  style={styles.head2}    >   Online Discount Store  </Text>
      <Pressable   onPress={page}    >
  <Text      style={styles.hubjv}  >Get Started </Text>
</Pressable>
      
      <StatusBar style="auto" />


    </View>

  )
}
const styles = StyleSheet.create({


  hubjv:{
fontSize : 25,
marginTop : 10, 
padding : 10 ,
borderRadius : 100, 
backgroundColor : "green", 
color : "white" , 

  },
    image:{
  width: '100%',
  height : 300 ,
    }, 
    head2:{
  marginTop : 20, 
      fontSize : 20,
      color : "blue"
    },
    head1:{
    color : "green",
    fontSize : 50,
  
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Splash