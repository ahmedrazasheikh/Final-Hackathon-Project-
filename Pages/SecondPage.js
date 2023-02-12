import React from 'react'
import { View,StyleSheet , Pressable,   Button,   TextInput ,  Image , Text } from 'react-native'

const SecondPage = ({navigation}) => {
  const page = ()=>{
    navigation.navigate('FourthPage')
  }
  const page2 = ()=>{
    navigation.navigate('Signup')
    
    }
  return (
   <View   style={styles.container}>
  <Text   style={styles.head1}  >Sylani Welfare </Text>
      <Text  style={styles.head2}    >   Online Discount Store  </Text>



      <View  style={styles.innerDiv} >
      <TextInput    placeholder="Full Name "  style={styles.input} />
      <TextInput    placeholder="Email "  style={styles.input} />
      <Text  style={styles.frol} >Forget Password </Text>

      </View>

      <Pressable   style = {styles.button} onPress={page}    >
  <Text      style={styles.hubjv}  >Sign In </Text>
</Pressable>
<Text style={styles.frol}  >Create an account? <Text style={styles.sample}  onPress={page2} >Register Here </Text></Text>

   </View>
  )
}
const styles = StyleSheet.create({
  sample:{
    color : "green",
      },
  hubjv:{
    fontSize : 22,
borderBottomStartRadius : 10,
borderBottomLeftRadius :  10,
borderBottomRightRadius : 20,
    padding : 3, 
    textAlign : "center",  
    backgroundColor : "green", 
    color : "white" , 
    
      },

    innerDiv : {
        display : "flex", 
   justifyContent : "center", 
   alignItems : "center"
    },
    frol:{
color : "blue",
marginBottom : 15 , 
marginTop : 15 ,
    },
  
    button:{
backgroundColor : "green", 
color: "white" , 
  },
  input: {
    height: 40,
    width : 250,
    borderCurve : 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image:{
width: '100%',
height : 400 ,
  }, 
  head2:{
    fontSize : 20,
    color : "blue"
  },
  head1:{
    marginTop : 60, 
  color : "green",
  fontSize : 50,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:  "flex-start",
  },
});

export default SecondPage