import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image , TextInput , ScrollView ,  Pressable,  StyleSheet, Text, View } from 'react-native';

const Fifth = ({navigation}) => {

  const page1 = ()=>{
    navigation.navigate('FourthPage')
}
const page2 = ()=>{
    navigation.navigate('FiFthPage')
}
const page3 = ()=>{
  navigation.navigate('SixthPage')
}

  const [number,setNumber] = useState(1)
  const [number1,setNumber1] = useState(1)
const [value , setValue] = useState(300)
const [valuee , setValuee] = useState(300)
const [value1 , setValue1] = useState(600)
const [value12 , setValue12] = useState(600)


  return (
       <ScrollView   showsVerticalScrollIndicator={false} >

  <View style={styles.gyh} >


<View>

      <Text   style={styles.head1}  >Sylani Welfare </Text>
      <Text  style={styles.head2}    >   Discount Store  </Text>

</View>

<View>


    <Text    style={styles.mok}   >Delete</Text>

</View>









  </View>
<View    style={styles.lojhbg}>
<Image
        source={{uri: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v'}}   
        style= {styles.image1}
        
        />
        <View>

  <Text  style={styles.rtm} >Item Name  </Text>

        </View>


        <View    style ={styles.innerCard} >


  <Text  onPress={()=>{if (number < 1) {
    
  }
  else{
    setNumber(number-1)
    setValue(value-valuee)
  }
  
  }}  style={styles.rtm}  >-   </Text>
  <Text  style={styles.rtm} >{number}</Text>
  <Text  style={styles.rtm}  onPress={()=>{setNumber(number+1)
  setValue(value+valuee)
  }}  >+   </Text>
  
        </View>

<View>
  <Text  style={styles.rtm}  >${value}</Text>
</View>


</View>
<View    style={styles.lojhbg}>
<Image
        source={{uri: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v'}}   
        style= {styles.image1}
        
        />
        <View>

  <Text  style={styles.rtm} >Item Name  </Text>

        </View>


        <View    style ={styles.innerCard} >


  <Text  onPress={()=>{if (number < 1) {
    
  }
  else{

    setNumber1(number1-1)
    setValue1(value1-value12)

  }
  
  }}  style={styles.rtm}  >-   </Text>
  <Text  style={styles.rtm} >{number1}</Text>
  <Text  style={styles.rtm}  onPress={()=>{setNumber1(number1+1)
      setValue1(value1+value12)}}  >+   </Text>
  
        </View>

<View>
  <Text  style={styles.rtm}  >${value1}</Text>
</View>


</View>
    



    <View   style={styles.nvjvgv} >
      <Text    style={styles.rtm}      >Total   </Text>
      <Text    style={styles.rtm}  >       ${value + value1      }</Text>
    </View>

    <View  style={styles.innerDiv} >
      <TextInput    placeholder="Full Name "  style={styles.input} />
      <TextInput    placeholder="Email "  style={styles.input} />
      <TextInput    placeholder="Phone Number "  style={styles.input} />
      <TextInput    placeholder="Shipping Address"  style={styles.input} />
      </View>

      <Pressable   style = {styles.button}     >
  <Text      style={styles.hubjv}  >Place Order  </Text>
</Pressable>




<View   style={styles.footer}   > 

<Text   onPress={page1}  style={styles.navigator} >Home </Text>
<Text  onPress={page2}  style={styles.navigator} >Cart </Text>
<Text    onPress={page3}  style={styles.navigator} >Account  </Text>

    
</View>

    </ScrollView>

  )
}
const styles = StyleSheet.create({


  navigator:{
    fontWeight : "600",
    fontSize  : 20, 
    color : "green"
        }, 
        productName: {
     fontWeight : "600"
        }
    , 
  footer: {
    paddingLeft : 12,  
            marginTop : 40, 
      display : "flex", 
      justifyContent : "space-between", 
      flexDirection : "row"
        }, 
  innerDiv:{
    flex : 1, 
    justifyContent : "center ",
    alignItems : "center"
  },


  sample:{
    color : "green",
      },
      mkoi:{
        marginTop : 20,
      },
    
      hubjv:{
        fontSize : 22,
    borderBottomStartRadius : 10,
    borderBottomLeftRadius :  10,
    borderBottomRightRadius : 20,
        // padding : 10, 
        textAlign : "center",  
        backgroundColor : "green", 
        color : "white" , 
        
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
  rtm:{
fontSize : 20 , 
  }, 
  innerCard:{
  flex : 1, 
  flexDirection : "row", 
  justifyContent : "space-around"

  }, 




  lojhbg:{
flex : 1, 
flexDirection : "row", 
marginTop : 10, 
alignItems : "center"

  },

  Cards: {
display : "flex",

  }, 
    productName: {
 fontWeight : "600"
    }
, 
    red:{
backgroundColor : "red",
color : "white", 
padding : 10 , 
width :50,
borderRadius : 30, 
    }, 
    constrol : {
   width : 100, 
    }, 
    footer: {

paddingLeft : 12,  

        marginTop : 40, 
  display : "flex", 
  justifyContent : "space-between", 
  flexDirection : "row"
    }, 


    image2:{
   marginLeft : 10, 
        width : 100,
        borderColor : "black", 
        height : 100, 
    }, 
    productCard: {
        marginTop : 20 , 
        display : "flex", 
        alignItems : "center", 
        justifyContent : "space-between", 
        flexDirection : "row" 
    },
    image1:{
width : 100,

height : 100,  
marginRight : 8,
    }, 
    setDiv:{
 display : "flex",
  
    }, 
    opl:{
   marginLeft : 10, 
    },
    koihh:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }
    
    ,
    nvjvgv:{
flex : 1,
flexDirection : "row",
alignItems : "center",
justifyContent : "space-between"
    },
    input: {
        height: 40,
        width : 350,
        borderCurve : 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    mok:{
marginRight : 10,
    }, 
    gyh:{
display : "flex",
flexDirection : "row",  
justifyContent : "space-between", 
alignItems : "center",


    }, 
    image:{
  width: '100%',
  height : 200 ,
    }, 
    head2:{
  marginTop : 10, 
  fontSize : 20,
  color : "blue"
},
head1:{
        marginTop : 40,
        marginLeft : 10,   
    color : "green",
    fontSize : 25,
  
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Fifth