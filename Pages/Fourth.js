import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image , TextInput , ScrollView ,   StyleSheet, Text, View } from 'react-native';



FourthPage



const FourthPage = ({navigation}) => {
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
       <ScrollView       showsVerticalScrollIndicator={false} >

  <View style={styles.gyh} >


<View>

      <Text   style={styles.head1}  >Sylani Welfare </Text>
      <Text  style={styles.head2}    >   Discount Store  </Text>

</View>

<View>


    <Text    style={styles.mok}   >Buy</Text>

</View>




  </View>

<View>

<Image
        source={{uri: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v'}}   
        style= {styles.image}
        
        />
<View style={styles.koihh}   >

<TextInput    placeholder="Search by Product Name  "  style={styles.input} />

</View>



<View>
    <Text  style={styles.opl}  >Shop by Category   </Text>


</View>



<ScrollView  showsHorizontalScrollIndicator={false}   horizontal={true}
 style={styles.setDiv}  >

<View>
<Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw09dqMV_9QiA6QTtMbH55o38L1Ecpa5BKNuBtzqldng&s'}}   
        style= {styles.image1}
        
        />
        <Text>Grocery </Text>  
</View>
<View>
<Image
        source={{uri: 'https://media.istockphoto.com/id/1310910433/photo/selection-of-assorted-raw-meat-food-for-zero-carb-carnivore-diet-uncooked-beef-steak-ground.jpg?b=1&s=170667a&w=0&k=20&c=kHDw07LONz2akPa8pPe_rhUXhoc_aCryBdgI9G2QG3g='}}   
        style= {styles.image1}
        
        />
        <Text>Meat </Text>  
</View>

<View>
<Image
        source={{uri: 'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg'}}   
        style= {styles.image1}
        
        />
        <Text>Vegetables</Text>  
</View>
<View>
<Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQf665tDh9d12N-ZT8FjQ0noLtAUqui6bgKZphYVPgCA&s'}}   
        style= {styles.image1}
        
        />
        <Text>Fruit </Text>  
</View>
<View>
<Image
        source={{uri: 'https://thumbs.dreamstime.com/b/colourful-spices-garam-masala-food-ingredients-indian-spice-mix-powder-selective-focus-106913486.jpg'}}   
        style= {styles.image1}
        
        />
        <Text>Massala </Text>  
</View>



</ScrollView >



  {/* Product Detail     */}
<View    style={styles.productCard}    >
<Image
        source={{uri: 'https://media.gettyimages.com/id/174479270/photo/fresh-ribeye-steaks-at-the-butcher-shop.jpg?s=612x612&w=gi&k=20&c=P7zbbMWE1bzjlRZ4Tj5LxyUpkIFljCCfoGOLlKpzhjY='}}   
        style= {styles.image2}
        
        />
<View>


<View>

    <Text    style={styles.productName}   >Meat  </Text>
    <View>

    <Text    style={styles.constrol}  > This is a Good   </Text>
</View>
</View>
</View>




<View      >
<View >
<Text   style={styles.productName}>Rs 800-Per Kg</Text>
</View>
<Text style={styles.red}>Add </Text>
</View>
</View>




<View   style={styles.footer}   > 

<Text   onPress={page1}  style={styles.navigator} >Home </Text>
<Text  onPress={page2}  style={styles.navigator} >Cart </Text>
<Text    onPress={page3} style={styles.navigator} >Account  </Text>

    
</View>






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
    red:{
backgroundColor : "green",
color : "white", 
padding : 12 , 
width :50,
borderRadius : 30, 
    }, 
    constrol : {
//    width : 100, 
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
  
export default FourthPage