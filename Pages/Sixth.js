import React from 'react'
  import { ScrollView , Pressable ,  View , Text, Image , StyleSheet  , TextInput } from 'react-native'

const Sixth = ({navigation}) => {


  const page1 = ()=>{
    navigation.navigate('FourthPage')
}
const page3 = ()=>{
    navigation.navigate('SixthPage')
}
const page2 = ()=>{
    navigation.navigate('FiFthPage')
}
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={styles.main}>
        <View style={styles.center}  >
            <Text  style={styles.setting} >Settings </Text>
            <Image  source={require('./HHkjGO.png')}
style={styles.image}
/>
<TextInput    placeholder="Update Full Name "  style={styles.input} />
        </View>


        <Text style={styles.lsd} >Orders</Text>


<View  style={styles.nvd}>

<View  style={styles.nvd1} >
  <Text   style={styles.njuio}>Ahmed Raza </Text>
  <Text>Just Now Pending  </Text>
  <Text  style={styles.mohb}  >2x Item </Text>
  <Text  style={styles.mohb}     >2x Item  </Text>
  <Text     style={styles.njuiodf}>ToTal </Text>
</View>


<View  style={styles.nvd2}>
  <Text>03456272088</Text>
  <Text style={styles.last}  >200$</Text>
</View>

</View>

<View  style={styles.nvd}>

<View  style={styles.nvd1} >
  <Text   style={styles.njuio}>Ahmed Raza </Text>
  <Text>Just Now Pending  </Text>
  <Text  style={styles.mohb}  >2x Item </Text>
  <Text  style={styles.mohb}     >2x Item  </Text>
  <Text     style={styles.njuiodf}>ToTal </Text>
</View>


<View  style={styles.nvd2}>
  <Text>03456272088</Text>
  <Text style={styles.last}  >200$</Text>
</View>

</View>

<View  style={styles.nvd}>

<View  style={styles.nvd1} >
  <Text   style={styles.njuio}>Ahmed Raza </Text>
  <Text>Just Now Pending  </Text>
  <Text  style={styles.mohb}  >2x Item </Text>
  <Text  style={styles.mohb}     >2x Item  </Text>
  <Text     style={styles.njuiodf}>ToTal </Text>
</View>


<View  style={styles.nvd2}>
  <Text>03456272088</Text>
  <Text style={styles.last}  >200$</Text>
</View>

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
  last:{
    color : "green", 
    fontSize : 20, 
  },
  mohb:{
color : "gray"
  }, 
  njuiodf:{
    fontSize : 20,  
  }, 
  njuio:{
fontSize : 25 , 
  },
  
  nvd1:{
display : "flex",
flexDirection : "column",
justifyContent : "space-between",
  },
  nvd2:{
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-between",
  },

  lsd:{
color : "blue",
fontSize : 30,
  },
  nvd:{
marginTop : 20 , 
    display : "flex",
    flexDirection : "row", 
    justifyContent : "space-between"
  },
  setting:{
fontSize : 25,
  }, 
  input: {
    height: 40,
    width : 250,
    borderCurve : 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  center:{
 display : "flex",  
 justifyContent : "center",
 alignItems : "center"
  }, 
  image:{
    width : '65%', 
    height : 200,
  }

 
});

export default Sixth