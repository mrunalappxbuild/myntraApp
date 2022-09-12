import {StyleSheet, View } from "react-native";

function  Card({children}){
    return (<View style={styles.card}>{children}</View>);
}

export default Card;

const styles = StyleSheet.create({

    card:{
          
         borderRadius:8,
         elevation:5,
         backgroundColor:'white',
         marginHorizontal:20,
         borderWidth:1,
         borderColor:'#d3d3d3',
         borderRadius:20,
         padding:12,
         //marginBottom:20,
         marginTop:20
    
    },
});