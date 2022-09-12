import { View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity,  Modal } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../components/Card";
import Buttons from '../components/Buttons';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';


import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TopContainer from '../components/TopContainer';
import SimpleModal from '../components/SimpleModal';
import { ScrollView } from 'react-native-gesture-handler';

function StartMyntra() {

    const [Show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);

  const[isModalVisible, setModalVisible ] = useState(false);
  const [chooseData, setchooseData] = useState ();
  const chageModalVisible = (bool) => {
    setModalVisible(bool)
  };

  const setData = (data) => {
    setchooseData(data);
  }

 
    return (
        <>
            <StatusBar style="auto" />
            <View>
                <Icon style={styles.icon} name="arrow-left" size={20} color="black" />
            </View>
             <ScrollView>
             <View style={styles.firstContainer}>
            <TopContainer />
            </View>

            <View style={styles.cardContainer}>
            <Card>
                <Text style={styles.textAbout}>About Myntra</Text>
                <Text style={styles.textContainer} >
            
                <Text style={styles.textShop}>Shop Online for Branded Shoes,Clothing & Accessories in India @Myntra.com,</Text>
                    <TouchableOpacity onPress={() => setShow(!Show)}>
                       {!Show && <Text style={styles.seeAll}>
                            see more
                        </Text>}

                        {Show && <Text style={styles.seeAll}>
                            see less
                        </Text>}
                    </TouchableOpacity>
                    </Text>
                    <Text>
                        {Show ? <Text>India's largest Fashion Portal.</Text> : null}
                    </Text>

                 
                
            </Card>
            <Card>
                <TouchableOpacity onPress={() =>chageModalVisible(true)}>
                    <View style={styles.viewContainer}>

                        <View style={styles.iconFirst}>
                            <MaterialCommunityIcons name="tag-remove-outline" size={20} color="black" />
                        </View>

                        <View style={styles.containerOne}>
                            <Text style={styles.couponText}>Coupon codes not eligible</Text>
                        </View>

                        <View style={styles.iconLast}>
                            <AntDesign name="exclamationcircleo" size={15} color="#cccccc" />
                        </View>

                    </View>
                </TouchableOpacity>

                <Modal
          transparent= {true}
          animationType = 'fade'
          visible={isModalVisible}
          nRequestClose={() =>chageModalVisible(true)} 
         >
            <SimpleModal
            chageModalVisible={chageModalVisible}
            setData={setData}
            />
          </Modal>

                <Text style={styles.divider}></Text>

                <TouchableOpacity onPress={() => setVisible(!visible)} >
                    <View style={styles.viewContainer}>

                        <View style={styles.iconFirst}>
                            <Ionicons name="alert-circle-outline" size={20} color="black" />
                        </View>

                        <View style={styles.containerOne}>
                            <Text style={styles.couponText}>Exclusive Apply</Text>
                        </View>

                       {!visible && <View style={styles.iconLast}>
                            <AntDesign name="right" size={15} color="#cccccc" />
                        </View>}

                        {visible && <View style={styles.iconLast}>
                            <AntDesign name="down" size={15} color="#cccccc" />
                        </View>}

                    </View>
                    <View style={styles.visible}>
                        {visible ?
                            <Text >
                                <Text><Text style={styles.visibleText}>5.32%</Text> - New Customers </Text>{'\n'}
                                <Text><Text style={styles.visibleText}>2.67%</Text> - Returning Customer </Text>{'\n'}{'\n'}{'\n'}
                                <Text >Does NOT APPLY to the following products /categories /brands: </Text>{'\n'}{'\n'}
                                <Text> - Cash on Delivery(COD) payments option is not eligible for Crypto Cash-back {'\n'}{'\n'}
                                -Maximum 3 orders per IP Address/ Per Email ID & Phone Number/ Shipping address in a calender Month {'\n'}{'\n'}
                                -Bulk orders are not permitted:please note it is against policy to use Myntra for non-personal or commercial use . we may block all such accounts and forfert their cashback balances without any prior notice .{'\n'}
                                 </Text>
                            </Text> : null}
                    </View>
                </TouchableOpacity>

            </Card>
            </View>
            </ScrollView>
           <Buttons 
               
            />
        </>
    );
}

export default StartMyntra;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({



    textAbout: {
        //fontWeight: 'bold',
        fontFamily:'open-sans-Extra-bold',
        fontSize: 20,
        paddingBottom:5

    },

    textContainer:{
        flexDirection:'row'
    },

    textShop: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flex:0.8,
        alignItems:'flex-start',
        fontFamily:'open-sans'
       
    },

    seeAll: {
        fontFamily: 'open-sans-bold',
        flex:0.2
    },

    icon: {
        marginHorizontal: 25,

    },

    image: {
        width: deviceWidth < 380 ? 50 : 25,
        height: deviceWidth < 380 ? 50 : 25,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: '#d3d3d3',
    },

    viewContainer: {
        flexDirection: 'row',
        padding: 10,
        marginTop:9
    },

    divider: {
        borderBottomColor: '#cccccc',
        borderBottomWidth:1
    },

    iconLast:
    {
        flex: 0.1,
    },

    iconFirst: {
        flex: 0.1,

    },
    containerOne: {
        flex: 0.8,

    },
    couponText: {
        fontSize: 16,
        fontFamily:'open-sans'

    },

    visible: {

        marginTop: 10,
        marginHorizontal:50
    
    },

   firstContainer:{
        flex:0.3
    },

    cardContainer:{
        flex:0.6
    },

    buttonContainer:{
        flex:0.1
      },

      visibleText:{
        fontFamily:'open-sans-bold',
        textAlign:'center'
      }






});