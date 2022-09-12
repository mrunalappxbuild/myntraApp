import { TouchableOpacity, View ,StyleSheet ,Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Buttons() {

    const navigation = useNavigation(); 
    return ( 
    <View>
            <TouchableOpacity style={styles.topContainer} 
                    onPress={() => navigation.navigate('Login')}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                     Sign up and shop at Myntra
                   </Text>
                </View>
                <View >
                   <MaterialIcons
                    name="arrow-right-alt"
                    size={25} color="white"
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Buttons;

const styles = StyleSheet.create({
    topContainer:{
        backgroundColor: '#fd2e53',
        borderRadius : 30,
        marginHorizontal: 20,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        marginBottom:10,
    
     },
    textContainer:{
        flex:1,
        alignItems:'center',
    },
   
    text:{
        color:'white',
        fontFamily:'open-sans-bold',
        fontSize:16
    },
    });
