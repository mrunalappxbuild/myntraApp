import { StyleSheet, View ,Dimensions ,Image,Text } from "react-native";

function TopContainer() {
    return (
        <>
        <View style={styles.rootcontainer}>
            <Image style={styles.imgContainer}
                source={require('../assets/img/myntra.jpeg')} />

            <Text style={styles.textOne}>Myntra</Text>
            <Text style={styles.textTwo}>Up to 2.67% Crypto Cashback</Text>

        </View>
        </>
    );
}

export default TopContainer;
const deviceWidth = Dimensions.get('window').width;

const styles=StyleSheet.create({
   
    rootcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },


    imgContainer: {
        width: deviceWidth < 380 ? 50 : 100,
        height: deviceWidth < 380 ? 50 : 100,
        borderRadius: 200,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: '#a9a9a9',
    },

    textOne: {
        fontFamily: 'open-sans-Extra-bold',
        fontSize: 25,
        //padding: 10,
        textAlign: 'center'
    },

    textTwo: {
        color: '#fd2e53',
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        marginTop: 10
    },
})