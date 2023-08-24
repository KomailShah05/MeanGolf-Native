import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
	Image,
	ScrollView,
} from 'react-native';
import mainStyles from '../styles/mainStyles';

const LoginScreen = ({
	navigation,
	formData,
	setFormData,
	// newUser,
	// setNewUser,
	// emailAddress,
	// setEmailAddress,
	name,
	// setName,
	email,
	// setEmail,
	password,
	// setPassword,
	phone,
	// setPhone
	password2,
}) => {
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	const handleSignUp = () => {
		// Implement sign-up logic here
	};

	const handleFormSubmit = () => {
		// Here, you can access all the form input values
		// and send them to your desired destination (e.g., API, server, etc.)
		const formData = {
			name,
			email,
		};
		if (password != password2) {
			alert("Passwords don't match");
			return;
		} else {
			// Perform your submit logic with formData
			console.log('Form submitted:', formData);
			navigation.navigate('MyBag');
		}
	};

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<SafeAreaView style={mainStyles.container}>
			<ScrollView>
				<View
					style={[
						styles.container,
						{
							flex: 1,
							paddingTop: 50,
							paddingHorizontal: 50,
							justifyContent: 'center',
							alignItems: 'center',
						},
					]}
				>
					<View style={{ paddingBottom: 20 }}>
						<Image
							source={require('../../assets/IconGolf.png')}
							style={{ width: 100, height: 100 }}
						/>
					</View>
					<Text
						style={[
							mainStyles.header1,
							{ alignSelf: 'center', paddingBottom: 25, fontSize: 26 },
						]}
					>
						Login
					</Text>
					<Text style={styles.label}>Email Address</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(value) =>
							onChange({ target: { name: 'email', value } })
						}
						placeholder='Enter your email address'
					/>
					<Text style={styles.label}>Password</Text>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(value) =>
							onChange({ target: { name: 'password', value } })
						}
						placeholder='Enter your password'
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={styles.button}
						// onPress={handleSignUp}
						onPress={() => {
							handleFormSubmit();
						}}
					>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
					<View style={{ alignItems: 'center' }}>
						<TouchableOpacity
							style={{ paddingTop: 15 }}
							// onPress={handleSignUp}
							onPress={() => {
								navigation.navigate('SignUp');
							}}
						>
							<Text style={mainStyles.header4}>Create an account</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ paddingTop: 15 }}
							// onPress={handleSignUp}
							onPress={() => {
								navigation.navigate('Login');
							}}
						>
							<Text style={mainStyles.header4}>Forgot password</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		alignSelf: 'flex-start',
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	error: {
		color: 'red',
		marginBottom: 5,
		fontSize: 11,
		alignSelf: 'flex-start',
	},
	button: {
		backgroundColor: 'blue',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginTop: 20,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default LoginScreen;
