import React, { useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	TouchableWithoutFeedback,
	Button,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';

// Sending Data
import { useForm, ValidationError } from '@formspree/react';
import axios from 'axios'; // Import the axios library for making HTTP requests
import uuid from 'react-native-uuid';

// Styles
import mainStyles from '../styles/mainStyles';

const requestID = uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'

const ContactUsScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const handleTitleChange = (text) => {
		setTitle(text);
	};

	const handleDescriptionChange = (text) => {
		setDescription(text);
	};

	const handleSubmit = () => {
		console.log(`UUID: ${requestID}`);
		const formData = new FormData();
		formData.append('requestID', requestID); // Append the id to the form data
		formData.append('name', name);
		formData.append('email', email);
		formData.append('title', title);
		formData.append('message', description);

		axios
			.post('https://formspree.io/mjvqkggr', formData)
			.then((response) => {
				console.log('Form submitted successfully:', response.data);
				// Optionally, you can perform additional actions after successful submission
				resetForm();
				Alert.alert(
					`Thanks`,
					'Your request has been submitted. We will respond as soon as we can.'
				);
			})
			.catch((error) => {
				console.error('Form submission failed:', error);
				// Handle the error if the form submission fails
				Alert.alert(`Error`, 'Please fill out all sections.');
			});
	};

	const resetForm = () => {
		setTitle('');
		setDescription('');
		setEmail('');
		setName('');
	};

	return (
		<SafeAreaView style={mainStyles.container}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<ScrollView contentContainerStyle={mainStyles.screenContainer}>
					<View onSubmit={handleSubmit}>
						<Text
							style={[
								mainStyles.header1,
								{ alignSelf: 'center', paddingBottom: 25, fontSize: 30 },
							]}
						>
							Contact Us
						</Text>
						<View>
							<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
								Name
							</Text>
							<TextInput
								style={styles.input}
								id='name'
								placeholder='enter your name'
								placeholderTextColor='#707070'
								onChangeText={setName}
								value={name}
								keyboardType='default'
							/>
							<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
								Email
							</Text>
							<TextInput
								style={styles.input}
								id='email'
								placeholder='enter your email'
								placeholderTextColor='#707070'
								onChangeText={setEmail}
								value={email}
								keyboardType='email-address'
								autoCompleteType='email'
							/>
							<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
								Title of Request:
							</Text>
							<TextInput
								style={styles.input}
								id='title'
								placeholder='enter a title'
								value={title}
								onChangeText={handleTitleChange}
								placeholderTextColor='#707070'
							/>
							<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
								How can we help:
							</Text>
							<TextInput
								style={[styles.input, styles.multilineInput]}
								id='message'
								placeholder='details of your request...'
								value={description}
								onChangeText={handleDescriptionChange}
								multiline={true}
								numberOfLines={4}
								placeholderTextColor='#707070'
							/>

							{/* <Button title="Submit" onPress={handleSubmit} /> */}
							<View style={{ flexDirection: 'row', paddingVertical: 20 }}>
								<View style={{ flex: 1, alignItems: 'center' }}>
									<TouchableOpacity
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											paddingHorizontal: 25,
											paddingVertical: 10,
											backgroundColor: 'blue',
											borderRadius: 20,
										}}
										onPress={handleSubmit}
									>
										<Text
											style={[
												mainStyles.header2,
												{
													paddingHorizontal: 5,
													color: 'white',
													paddingRight: 10,
												},
											]}
										>
											Submit
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	},
	multilineInput: {
		height: 100,
	},
});

export default ContactUsScreen;
ContactUsScreen;
