import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
	FlatList,
	Alert,
	StyleSheet,
	Touchable,
} from 'react-native';
import MapView from 'react-native-maps';

// Data
import { simulatorsAvailable } from '../data/SimulatorPartners';

// Styles
import mainStyles from '../styles/mainStyles';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ReserveScreen = ({}) => {
	const [data, setData] = useState(simulatorsAvailable);
	// Added 8.7.23
	const [favoriteData, setFavoriteData] = useState(
		simulatorsAvailable.map((item) => ({
			...item,
			favorite: false, // Assuming none of the items are initially marked as favorite
		}))
	);

	const [searchResult, setSearchResult] = useState('');

	// Remove if doesn't work
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handlePress = (item) => {
		console.log('Pressed:', item.partnerName, item.id);
		Alert.alert(
			`Club: ${item.partnerName}`,
			'This will be a link to reserve the simulator'
			// `Partner Name: ${item.partnerName}\nID: ${item.id}`
		);
	};

	const handleFavoritePress = (item) => {
		setData((prevData) =>
			prevData.map((dataItem) =>
				dataItem.id === item.id
					? {
							...dataItem,
							favorite:
								dataItem.favorite === 'heart' ? 'heart-outline' : 'heart',
					  }
					: dataItem
			)
		);
	};

	useEffect(
		(item) => {
			// This will run after each state update, including the one from setData
			console.log(
				'New value:',
				data.find((item) => item.id === item.id)?.favorite
			);
		},
		[data]
	);

	const handleSearch = (query) => {
		const filtered = data.filter((item) => {
			// Convert all search terms and data fields to lowercase for case-insensitive search
			const searchTerm = query.toLowerCase();
			const city = item.city.toLowerCase();
			const company = item.partnerName.toLowerCase();
			const zip = item.zip.toLowerCase();

			return (
				city.includes(searchTerm) ||
				company.includes(searchTerm) ||
				zip.includes(searchTerm)
			);
		});

		setFilteredData(filtered);
	};

	const renderListItem = ({ item }) => (
		<TouchableOpacity onPress={() => handlePress(item)}>
			<View style={[mainStyles.listRow, { padding: 10 }]}>
				<View style={{ padding: 2 }}>
					<View style={{}}>
						<View
							style={[
								{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								},
							]}
						>
							<Text style={mainStyles.header2}>{item.partnerName}</Text>
							{/* <TouchableOpacity onPress={() => handleFavoritePress(item)}>
								<Ionicons
									style={{ paddingRight: 2 }}
									name={item.favorite}
									size={22}
									color='black'
								/>
							</TouchableOpacity> */}
						</View>
						<View
							style={[
								{
									flexDirection: 'row',
									alignItems: 'center',
									paddingVertical: 5,
									flexWrap: 'wrap',
								},
							]}
						>
							{/* <Ionicons
								style={{ paddingRight: 2 }}
								name='md-location-sharp'
								size={24}
								color='black'
							/> */}
							<Text style={{}}>{item.address}, </Text>
							<Text style={{}}>{item.city}, </Text>
							<Text style={{}}>{item.state}, </Text>
							<Text style={{}}>{item.zip}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={mainStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					style={[mainStyles.screenContainer, { flex: 1, paddingBottom: 0 }]}
				>
					<View style={{ flex: 1 }}>
						{/* <Text
							style={[
								mainStyles.header1,
								{ alignSelf: 'center', paddingBottom: 30, fontSize: 30 },
							]}
						>
							Reserve
						</Text> */}
						<View style={{ paddingVertical: 5 }}>
							{/* <View style={{ paddingVertical: 5 }}>
								<Text style={mainStyles.header3}>Search</Text>
							</View> */}
							<View
								style={[
									mainStyles.searchbarInput,
									{
										// backgroundColor: 'white',
										borderColor: 'gray',
										borderWidth: 1,
										borderRadius: 25,
									},
								]}
							>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Ionicons
										style={{ paddingRight: 5 }}
										name='ios-search'
										size={22}
										color='#707070'
									/>
									<TextInput
										onChangeText={(query) => {
											setSearchQuery(query);
											handleSearch(query);
										}}
										value={searchQuery}
										placeholder='Search by city, company, or zip code'
									/>
								</View>
							</View>
						</View>
						{/* <View style={{ flex: 1 }}>
							<MapView
								style={{ flex: 1 }}
								initialRegion={{
									latitude: 37.78825,
									longitude: -122.4324,
									latitudeDelta: 0.0922,
									longitudeDelta: 0.0421,
								}}
							/>
						</View> */}
						<View style={{ paddingTop: 20, paddingBottom: 5 }}>
							<Text style={mainStyles.header2}>Simulators</Text>
						</View>
						{/* <FlatList
							data={filteredData}
							renderItem={renderListItem}
							keyExtractor={(item) => item.id.toString()}
							contentContainerStyle={{ paddingBottom: 10 }}
						/> */}
						{filteredData.length > 0 ? (
							<FlatList
								data={filteredData}
								renderItem={renderListItem}
								keyExtractor={(item) => item.id.toString()}
								contentContainerStyle={{ paddingBottom: 10 }}
							/>
						) : (
							<View
								style={{
									paddingVertical: 5,
									flexWrap: 'wrap',
									flex: 1,
									justifyContent: 'flex-start',
									alignItems: 'center',
								}}
							>
								<Text style={{ fontSize: 16 }}>
									Sorry, there are no simulators in your area... yet
								</Text>
							</View>
						)}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%',
	},
});

export default ReserveScreen;
