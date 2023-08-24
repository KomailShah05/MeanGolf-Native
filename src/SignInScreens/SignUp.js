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
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import mainStyles from '../styles/mainStyles';

const SignUpScreen = ({
	setAlert,
	navigation,
	formData,
	setFormData,
	// newUser,
	// setNewUser,
	// emailAddress,
	// setEmailAddress,
	name,
	firstName,
	lastName,
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
			firstName,
			lastName,
			email,
			phone,
			password,
			password2,
		};
		if (password != password2) {
			// alert("Passwords don't match");
			setAlert('Passwords do not match', 'danger');
			return;
		} else {
			// Perform your submit logic with formData
			console.log('Form submitted:', formData);
			navigation.navigate('ClubSelector');
		}
	};

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<SafeAreaView style={mainStyles.container}>
			<ScrollView>
				<View style={[styles.container, { paddingHorizontal: 50 }]}>
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
						Create Account
					</Text>
					<Text style={styles.label}>First Name</Text>
					<TextInput
						style={styles.input}
						value={firstName} // Use the 'name' field from 'formData'
						onChangeText={(value) =>
							onChange({ target: { name: 'firstName', value } })
						} // Trigger the 'onChange' function with the updated value
						placeholder='Enter your full name'
					/>
					<Text style={styles.label}>Last Name</Text>
					<TextInput
						style={styles.input}
						value={lastName} // Use the 'name' field from 'formData'
						onChangeText={(value) =>
							onChange({ target: { name: 'lastName', value } })
						} // Trigger the 'onChange' function with the updated value
						placeholder='Enter your full name'
					/>
					<Text style={styles.label}>Email Address</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(value) =>
							onChange({ target: { name: 'email', value } })
						}
						placeholder='Enter your email address'
					/>
					<Text style={styles.label}>Phone Number</Text>
					<TextInput
						style={styles.input}
						value={phone}
						onChangeText={(value) =>
							onChange({ target: { name: 'phone', value } })
						}
						placeholder='Enter your phone number'
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
					<Text style={styles.label}>Confirm Password</Text>
					<TextInput
						style={styles.input}
						value={password2}
						onChangeText={(value) =>
							onChange({ target: { name: 'password2', value } })
						}
						placeholder='Re-enter your password'
						secureTextEntry={true}
					/>
					{password.length > 0 && password.length < 8 && (
						<Text style={styles.error}>
							Password must be at least 8 characters long
						</Text>
					)}
					{!/\d/.test(password) && (
						<Text style={styles.error}>Password must contain a number</Text>
					)}
					{!/[A-Z]/.test(password) && (
						<Text style={styles.error}>
							Password must contain a capital letter
						</Text>
					)}
					<TouchableOpacity
						style={styles.button}
						// onPress={handleSignUp}
						onPress={() => {
							handleFormSubmit();
						}}
						disabled={
							!(
								name &&
								email &&
								password.length >= 8 &&
								/\d/.test(password) &&
								/[A-Z]/.test(password)
							)
						}
					>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ paddingVertical: 10 }}
						// onPress={handleSignUp}
						onPress={() => {
							navigation.navigate('Login');
						}}
					>
						<Text style={mainStyles.header4}>I already have an account</Text>
					</TouchableOpacity>
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

export default connect(null, { setAlert })(SignUpScreen);
