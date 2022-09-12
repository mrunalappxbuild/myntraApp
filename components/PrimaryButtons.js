import {View , Text , StyleSheet , TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function PrimaryButton() {
    return ( 
        <View Style={styles.touchableOpacity}>
           <TouchableOpacity >
                <View>
                <Text style={styles.buttonText}>Continue with email</Text>
                <MaterialIcons
                    name="arrow-right-alt"
                    size={25} color="black"/>
                </View>
            </TouchableOpacity>
            </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer:{
      
      //marginHorizontal: 20,
      //padding:13,
     // borderRadius : 30,
     // flex:1,
      //flexDirection:'column-reverse'
      //marginTop:180,

    },

    buttonText:{
        //backgroundColor: '#fd2e53',
        textAlign:'center',
        color:'#fd2e53',
        fontWeight:'bold',
        fontSize:16
    },
    touchableOpacity:{
       flexDirection:'row',
       backgroundColor:'blue',
      
    }
});