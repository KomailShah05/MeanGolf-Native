import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import SignUpScreen from '../SignInScreens/SignUp';
import { userName, userEmail } from '../SignInScreens/SignUp';

// Styles
import mainStyles from '../styles/mainStyles';

export const MyProfileScreen = ({
	playersName,
	setPlayerName,
	username,
	setUsername,
	navigation,
}) => {
	// const navigation = useNavigation();

	// Replace this. It is only for placeholder purposes:
	const firstName = 'Mean';
	const lastName = 'Golf';
	const userName = 'MeanGolf';

	const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

	return (
		<SafeAreaView style={mainStyles.container}>
			<View style={[mainStyles.screenContainer, { flex: 1, paddingBottom: 0 }]}>
				<View style={{ flex: 4, alignItems: 'center' }}>
					<Text
						style={[
							mainStyles.header1,
							{ alignSelf: 'center', paddingBottom: 20, fontSize: 30 },
						]}
					>
						My Profile
					</Text>
					{/* <Image
						source={require('../../assets/ProfilePlaceholder.png')}
						style={{ width: 100, height: 100 }}
					/> */}
					<View style={[styles.container, { backgroundColor: 'tomato' }]}>
						<Text style={styles.initials}>{initials}</Text>
					</View>
					<Text style={[mainStyles.header1, { paddingTop: 10 }]}>
						{userName}
						{/* Once state is working, this will be the users name */}
					</Text>
					{/* <Text style={mainStyles.header3}>{userEmail}</Text> */}
				</View>
				<View style={{ flex: 7 }}>
					<View>
						<Text style={mainStyles.header1}>Quick Links:</Text>
					</View>
					<ScrollView style={{ paddingVertical: 10 }}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'ClubSelector',
									console.log('Go club selector')
								)
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='edit' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Edit my bag
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Stats', console.log('Go to my stats'))
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='plus-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Record new shots
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log('Log out pressed')}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							{/* <MaterialIcons name="logout" size={24} color="black" /> */}
							<Feather name='log-out' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Log out
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'ContactUs',
									console.log('Go to Contact Us')
								)
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='message-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Contact us
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Help', console.log('Go to help'))
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='help-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Help
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'SignUp',
									console.log('Sign Up screen pressed')
								)
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='help-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Go to Sign Up
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'Login',
									console.log('Login screen pressed')
								)
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='help-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Go to Login
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'ClubSelector',
									console.log('Club Selector screen pressed')
								)
							}
							style={[mainStyles.listRow, { flexDirection: 'row' }]}
						>
							<Feather name='help-circle' size={24} color='black' />
							<Text style={[mainStyles.header2, { paddingLeft: 10 }]}>
								Go to club selector
							</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	initials: {
		color: 'white',
		fontSize: 36,
		fontWeight: 'bold',
	},
});

export default MyProfileScreen;
