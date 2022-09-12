import { StyleSheet , View , Text , TouchableOpacity , Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import React from 'react';

function SimpleModal ( props ){
    closeModal = (bool, data ) => {
        props.chageModalVisible(bool);
        props.setData(data);
    }
   return(
    <View style={styles.outer}>
    <View style={styles.model}>
    <TouchableOpacity disabled={false} onPress={() => closeModal(false,'cross')}>
      <View>
        <AntDesign
          style={styles.iconClose}
          name="close"
          size={30}
          color="black"
        />
      </View>
    </TouchableOpacity>
    <View>
      <View style={styles.iconException}>
           <Fontisto name="frowning" size={40} color="orange" />
      </View>
      <View>
        <Text style={styles.noCoupons}>No Coupon Allow</Text>
      </View>
      <View>
        <Text style={styles.myntraCrypto}>
          Myntra coupons are not compatible with Stormx Crypto Cashback yet.
        </Text>
      </View>
    </View>
  </View>
  </View>
  
);
}

export default SimpleModal;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
model: {
  marginHorizontal: 20,
  padding: 16,
  backgroundColor: "white",
  borderRadius: 24,
  elevation: 8, 
},
iconClose: {
  textAlign: "right",
},
iconException: {
  justifyContent: "center",
  alignItems: "center",
  borderWidth:4,
  borderRadius:100,
  width: deviceWidth < 380 ? 50 : 100,
  height: deviceWidth < 380 ? 50 : 100,
  marginHorizontal:100,
  borderColor:'orange'
},
noCoupons: {
  marginTop: 10,
  fontFamily: "open-sans-bold",
  fontSize: 25,
  textAlign: 'center',
},
myntraCrypto: {
  fontSize: 15,
  textAlign: 'center',
  margin: 10,
  fontFamily:'open-sans'
},

outer:{
    flex:1,
    justifyContent:'center',
    opacity:0.9,
    backgroundColor:'#545050'

}
});