import React, { useState } from 'react';
import {
	ScrollView,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import mainStyles from '../styles/mainStyles';
import { clubsInMyBag2 } from '../data/clubsInMyBag';
import { Feather, Ionicons } from '@expo/vector-icons';

const ClubSelectorScreen = ({
	navigation,
	// Clubs
	driverIsPressed,
	setDriverIsPressed,
	threeWoodIsPressed,
	setThreeWoodIsPressed,
	fiveWoodIsPressed,
	setFiveWoodIsPressed,
	sevenWoodIsPressed,
	setSevenWoodIsPressed,
	// Hybrids
	twoHybridIsPressed,
	setTwoHybridIsPressed,
	threeHybridIsPressed,
	setThreeHybridIsPressed,
	fourHybridIsPressed,
	setFourHybridIsPressed,
	fiveHybridIsPressed,
	setFiveHybridIsPressed,
	sixHybridIsPressed,
	setSixHybridIsPressed,
	sevenHybridIsPressed,
	setSevenHybridIsPressed,
	// Irons
	twoIronIsPressed,
	setTwoIronIsPressed,
	threeIronIsPressed,
	setThreeIronIsPressed,
	fourIronIsPressed,
	setFourIronIsPressed,
	fiveIronIsPressed,
	setFiveIronIsPressed,
	sixIronIsPressed,
	setSixIronIsPressed,
	sevenIronIsPressed,
	setSevenIronIsPressed,
	eightIronIsPressed,
	setEightIronIsPressed,
	nineIronIsPressed,
	setNineIronIsPressed,
	pwIronIsPressed,
	setPwIronIsPressed,
	//Wedges
	fortyEightWedgeIsPressed,
	setFortyEightWedgeIsPressed,
	fiftyWedgeIsPressed,
	setFiftyWedgeIsPressed,
	fiftyTwoWedgeIsPressed,
	setFiftyTwoWedgeIsPressed,
	fiftyFourWedgeIsPressed,
	setFiftyFourWedgeIsPressed,
	fiftySixWedgeIsPressed,
	setFiftySixWedgeIsPressed,
	fiftyEightWedgeIsPressed,
	setFiftyEightWedgeIsPressed,
	sixtyWedgeIsPressed,
	setSixtyWedgeIsPressed,
}) => {
	// function handlePress() {
	//     const updatedClubs = clubsInMyBag2.map((club) => {
	//       if (club.id === 1) {
	//         return { ...club, status: "active" };
	//       }
	//       return club;
	//     });
	// Woods
	const handleDriverPress = () => {
		setDriverIsPressed(!driverIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 1) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleThreeWoodPress = () => {
		setThreeWoodIsPressed(!threeWoodIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 2) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiveWoodPress = () => {
		setFiveWoodIsPressed(!fiveWoodIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 3) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSevenWoodPress = () => {
		setSevenWoodIsPressed(!sevenWoodIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 4) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	// Hybrid
	const handleTwoHybridPress = () => {
		setTwoHybridIsPressed(!twoHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 5) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleThreeHybridPress = () => {
		setThreeHybridIsPressed(!threeHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 6) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFourHybridPress = () => {
		setFourHybridIsPressed(!fourHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 7) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiveHybridPress = () => {
		setFiveHybridIsPressed(!fiveHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 8) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSixHybridPress = () => {
		setSixHybridIsPressed(!sixHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 9) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSevenHybridPress = () => {
		setSevenHybridIsPressed(!sevenHybridIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 10) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	// Iron
	const handleTwoIronPress = () => {
		setTwoIronIsPressed(!twoIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 11) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleThreeIronPress = () => {
		setThreeIronIsPressed(!threeIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 12) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFourIronPress = () => {
		setFourIronIsPressed(!fourIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 13) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiveIronPress = () => {
		setFiveIronIsPressed(!fiveIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 14) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSixIronPress = () => {
		setSixIronIsPressed(!sixIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 15) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSevenIronPress = () => {
		setSevenIronIsPressed(!sevenIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 16) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleEightIronPress = () => {
		setEightIronIsPressed(!eightIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 17) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleNineIronPress = () => {
		setNineIronIsPressed(!nineIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 18) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handlePWIronPress = () => {
		setPwIronIsPressed(!pwIronIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 19) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	// Wedges
	const handleFortyEightWedgePress = () => {
		setFortyEightWedgeIsPressed(!fortyEightWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 20) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiftyWedgePress = () => {
		setFiftyWedgeIsPressed(!fiftyWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 21) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiftyTwoWedgePress = () => {
		setFiftyTwoWedgeIsPressed(!fiftyTwoWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 22) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiftyFourWedgePress = () => {
		setFiftyFourWedgeIsPressed(!fiftyFourWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 23) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiftySixWedgePress = () => {
		setFiftySixWedgeIsPressed(!fiftySixWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 24) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleFiftyEightWedgePress = () => {
		setFiftyEightWedgeIsPressed(!fiftyEightWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 25) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};
	const handleSixtyWedgePress = () => {
		setSixtyWedgeIsPressed(!sixtyWedgeIsPressed);
		clubsInMyBag2.forEach((club) => {
			if (club.id === 26) {
				club.status = club.status === 'active' ? 'inactive' : 'active';
			}
		});
	};

	const arrayBuilder = () => {
		if (driverIsPressed === true) {
			const driverArray = [];
			return console.log(driverArray);
		} else {
			console.log('Not Pressed');
		}
	};

	return (
		<SafeAreaView style={mainStyles.container}>
			<ScrollView>
				<View style={[mainStyles.screenContainer, { flex: 1, paddingTop: 20 }]}>
					<View style={{ paddingVertical: 10, alignItems: 'flex-end' }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('MyBag', arrayBuilder())}
						>
							<Ionicons name='ios-close' size={28} color='black' />
						</TouchableOpacity>
					</View>
					<Text
						style={[
							mainStyles.header1,
							{ alignSelf: 'center', paddingBottom: 25, fontSize: 26 },
						]}
					>
						Select Your Clubs
					</Text>
					<View style={{}}>
						<Text style={mainStyles.header2}>Woods</Text>
						<View
							style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}
						>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									// onPress={() => console.log("Driver Pressed")}
									// style={{ padding: 10, }}
									onPress={handleDriverPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: driverIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>Driver</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									// onPress={() => console.log("Driver Pressed")}
									// style={{ padding: 10, }}
									onPress={handleThreeWoodPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: threeWoodIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>3 Wood</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiveWoodPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiveWoodIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>5 Wood</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSevenWoodPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sevenWoodIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>7 Wood</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={{}}>
						<Text style={mainStyles.header2}>Hybrids</Text>
						<View
							style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}
						>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleTwoHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: twoHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>2 (18°)</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleThreeHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: threeHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>3 (20°)</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFourHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fourHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>4 (23°)</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiveHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiveHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>5 (25°)</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSixHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sixHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>6 (28°)</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSevenHybridPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sevenHybridIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>7 (31°)</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={{}}>
						<Text style={mainStyles.header2}>Irons</Text>
						<View
							style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}
						>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleTwoIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: twoIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>2 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleThreeIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: threeIronIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>3 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFourIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fourIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>4 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiveIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiveIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>5 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSixIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sixIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>6 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSevenIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sevenIronIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>7 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleEightIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: eightIronIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>8 Iron</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleNineIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: nineIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>9 Iron</Text>
								</TouchableOpacity>
							</View>
							{/* <View style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10, }}>
                                <TouchableOpacity
                                    onPress={handlePWIronPress}
                                    style={{ padding: 15, borderRadius: 5, backgroundColor: pwIronIsPressed ? '#aaa' : 'transparent', }}
                                >
                                    <Text style={[mainStyles.header2, {}]}>PW</Text>
                                </TouchableOpacity>
                            </View> */}
						</View>
					</View>
					<View style={{}}>
						<Text style={mainStyles.header2}>Wedges</Text>
						<View
							style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}
						>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handlePWIronPress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: pwIronIsPressed ? '#aaa' : 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>PW</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFortyEightWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fortyEightWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>48°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiftyWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiftyWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>50°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiftyTwoWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiftyTwoWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>52°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiftyFourWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiftyFourWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>54°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiftySixWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiftySixWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>56°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleFiftyEightWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: fiftyEightWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>58°</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10 }}
							>
								<TouchableOpacity
									onPress={handleSixtyWedgePress}
									style={{
										padding: 15,
										borderRadius: 5,
										backgroundColor: sixtyWedgeIsPressed
											? '#aaa'
											: 'transparent',
									}}
								>
									<Text style={[mainStyles.header2, {}]}>60°</Text>
								</TouchableOpacity>
							</View>
						</View>
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
									onPress={() => navigation.navigate('MyBag', arrayBuilder())}
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
										Go to My Bag
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default ClubSelectorScreen;
