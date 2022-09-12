import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


function Login() {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.firstImage} source={require("../assets/img/login.png")} />
				<TouchableOpacity style={styles.button}>
					<View style={styles.signUpText}>
						<Text style={styles.buttonText}>Continue with Email</Text>
					</View>
					<View style={styles.leftIcon}>
						<MaterialIcons name="arrow-right-alt" size={30} color="#fd2e53" />
					</View>

				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		// alignItems: 'center',
		// justifyContent:'center'
	},

	firstImage: {
		width: '100%',
		height: '80%'
	},
	button: {
		marginTop: 5,
		padding: 10,
		marginHorizontal: 50,
		borderWidth: 2,
		borderColor: '#fd2e53',
		flexDirection: 'row',
		borderRadius: 30,

	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
		color: '#fd2e53',
	},
	signUpText: {
		flex: 0.95
	},
});