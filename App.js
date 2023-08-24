import * as React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Picker from 'react-native-picker';

// Redux
import { Provider } from 'react-redux';
import store from './src/store'; // Import your Redux store

// Styling
import mainStyles from './src/styles/mainStyles';

// Screens
import MyBagScreen from './src/components/MyBag';
import MyStatsScreen from './src/components/MyStats';
import MyProfileScreen from './src/components/MyProfile';
import SignUpScreen from './src/SignInScreens/SignUp';
import ClubSelectorScreen from './src/SignInScreens/ClubSelector';
import ClubPickerScreen from './src/components/clubPicker';
import LoginScreen from './src/SignInScreens/Login';
import ReserveScreen from './src/components/Reserve';

// Data
// import { driver100, driver80, threeWood100, threeWood80 } from './src/data/woodsData/WoodsStats';
import { clubsInMyBag, clubsInMyBag2 } from './src/data/clubsInMyBag';
// Woods
import DriverData from './src/data/ClubArrays/DriverStats';
import ThreeWoodData from './src/data/ClubArrays/ThreeWoodStats';
import FiveWoodData from './src/data/ClubArrays/FiveWoodStats';
import SevenWoodData from './src/data/ClubArrays/SevenWoodStats';
// Hybrids
import TwoHybridData from './src/data/ClubArrays/Hybrids/TwoHybridStats';
import ThreeHybridData from './src/data/ClubArrays/Hybrids/ThreeHybridStats';
import FourHybridData from './src/data/ClubArrays/Hybrids/FourHybridStats';
import FiveHybridData from './src/data/ClubArrays/Hybrids/FiveHybridStats';
import SixHybridData from './src/data/ClubArrays/Hybrids/SixHybridStats';
import SevenHybridData from './src/data/ClubArrays/Hybrids/SevenHybridStats';
// Irons
import TwoIronData from './src/data/ClubArrays/IronArrays/TwoIronStats';
import ThreeIronData from './src/data/ClubArrays/IronArrays/ThreeIronStats';
import FourIronData from './src/data/ClubArrays/IronArrays/FourIronStats';
import FiveIronData from './src/data/ClubArrays/IronArrays/FiveIronStats';
import SixIronData from './src/data/ClubArrays/IronArrays/SixIronStats';
import SevenIronData from './src/data/ClubArrays/IronArrays/SevenIronStats';
import EightIronData from './src/data/ClubArrays/IronArrays/EightIronStats';
import NineIronData from './src/data/ClubArrays/IronArrays/NineIronStats';
//Wedges
import PWedgeData from './src/data/ClubArrays/Wedges/PitchingWedgeStats';
import Forty8WedgeData from './src/data/ClubArrays/Wedges/Forty8WedgeData';
import FiftyWedgeData from './src/data/ClubArrays/Wedges/FiftyWedgeData';
import Fifty2WedgeData from './src/data/ClubArrays/Wedges/Fifty2WedgeData';
import Fifty4WedgeData from './src/data/ClubArrays/Wedges/Fifty4WedgeData';
import Fifty6WedgeData from './src/data/ClubArrays/Wedges/Fifty6WedgeData';
import Fifty8WedgeData from './src/data/ClubArrays/Wedges/Fifty8WedgeData';
import SixtyWedgeData from './src/data/ClubArrays/Wedges/SixtyWedgeData';

// Formulas
import StatCalculations, {
	shotMeanFunction100,
	shotMeanFunction75,
	shotMeanFunction50,
	shotMeanFunction25,
	shotMean100,
	shotMean75,
	shotMean50,
	shotMean25,
	setShotMean100,
	setShotMean75,
	setShotMean50,
	setShotMean25,
} from './src/data/Formulas';

// Screens
import useCustomState from './src/data/shotData/MyShots2';
import HelpScreen from './src/MiscScreens/HelpScreen';
import ContactUsScreen from './src/MiscScreens/ContactUs';
// import LoginScreen from './src/SignInScreens/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
	// Clubs Selected
	// Woods
	const [driverIsPressed, setDriverIsPressed] = useState(false);
	const [threeWoodIsPressed, setThreeWoodIsPressed] = useState(false);
	const [fiveWoodIsPressed, setFiveWoodIsPressed] = useState(false);
	const [sevenWoodIsPressed, setSevenWoodIsPressed] = useState(false);
	// Hybrids
	const [twoHybridIsPressed, setTwoHybridIsPressed] = useState(false);
	const [threeHybridIsPressed, setThreeHybridIsPressed] = useState(false);
	const [fourHybridIsPressed, setFourHybridIsPressed] = useState(false);
	const [fiveHybridIsPressed, setFiveHybridIsPressed] = useState(false);
	const [sixHybridIsPressed, setSixHybridIsPressed] = useState(false);
	const [sevenHybridIsPressed, setSevenHybridIsPressed] = useState(false);
	// Irons
	const [twoIronIsPressed, setTwoIronIsPressed] = useState(false);
	const [threeIronIsPressed, setThreeIronIsPressed] = useState(false);
	const [fourIronIsPressed, setFourIronIsPressed] = useState(false);
	const [fiveIronIsPressed, setFiveIronIsPressed] = useState(false);
	const [sixIronIsPressed, setSixIronIsPressed] = useState(false);
	const [sevenIronIsPressed, setSevenIronIsPressed] = useState(false);
	const [eightIronIsPressed, setEightIronIsPressed] = useState(false);
	const [nineIronIsPressed, setNineIronIsPressed] = useState(false);
	const [pwIronIsPressed, setPwIronIsPressed] = useState(false);
	// Irons
	const [fortyEightWedgeIsPressed, setFortyEightWedgeIsPressed] =
		useState(false);
	const [fiftyWedgeIsPressed, setFiftyWedgeIsPressed] = useState(false);
	const [fiftyTwoWedgeIsPressed, setFiftyTwoWedgeIsPressed] = useState(false);
	const [fiftyFourWedgeIsPressed, setFiftyFourWedgeIsPressed] = useState(false);
	const [fiftySixWedgeIsPressed, setFiftySixWedgeIsPressed] = useState(false);
	const [fiftyEightWedgeIsPressed, setFiftyEightWedgeIsPressed] =
		useState(false);
	const [sixtyWedgeIsPressed, setSixtyWedgeIsPressed] = useState(false);

	// User Registraton
	// const [newUser, setNewUser] = useState('first name..')
	// const [emailAddress, setEmailAddress] = useState('enter your email')
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [phone, setPhone] = useState('')

	const [formData, setFormData] = useState({
		name: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		password2: '',
	});

	const { name, firstName, lastName, email, phone, password, password2 } =
		formData; // Destructure the 'name' field from 'formData'

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Tabs'
						component={HomeTabs}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Help'
						component={HelpScreen}
						// options={{ headerShown: false }}
						options={{
							headerShown: true,
							headerTitle: '',
							headerStyle: {
								elevation: 0, // remove shadow on Android
								shadowOpacity: 0, // remove shadow on iOS
								borderBottomWidth: 0, // Just in case.
							},
						}}
					/>
					<Stack.Screen
						name='ContactUs'
						component={ContactUsScreen}
						// options={{ headerShown: false }}
						options={{
							headerShown: true,
							headerTitle: '',
							headerStyle: {
								elevation: 0, // remove shadow on Android
								shadowOpacity: 0, // remove shadow on iOS
								borderBottomWidth: 0, // Just in case.
							},
						}}
					/>
					<Stack.Screen
						name='SignUp'
						options={{
							headerShown: true,
							headerTitle: '',
							headerStyle: {
								elevation: 0, // remove shadow on Android
								shadowOpacity: 0, // remove shadow on iOS
								borderBottomWidth: 0, // Just in case.
							},
						}}
					>
						{(props) => (
							<SignUpScreen
								formData={formData}
								setFormData={setFormData}
								name={name}
								firstName={firstName}
								lastName={lastName}
								email={email}
								password={password}
								password2={password2}
								phone={phone}
								{...props}
							/>
						)}
					</Stack.Screen>
					<Stack.Screen
						name='Login'
						options={{
							//switch to false before deployment
							headerShown: true,
							headerTitle: '',
							headerStyle: {
								elevation: 0, // remove shadow on Android
								shadowOpacity: 0, // remove shadow on iOS
								borderBottomWidth: 0, // Just in case.
							},
						}}
					>
						{(props) => (
							<LoginScreen
								formData={formData}
								setFormData={setFormData}
								name={name}
								email={email}
								password={password}
								password2={password2}
								phone={phone}
								{...props}
							/>
						)}
					</Stack.Screen>
					<Stack.Screen
						// options={{ headerShown: true, headerTitle: '' }}
						options={{
							headerShown: false,
							headerTitle: '',
							headerStyle: {
								elevation: 0, // remove shadow on Android
								shadowOpacity: 0, // remove shadow on iOS
								borderBottomWidth: 0, // Just in case.
							},
						}}
						name='ClubSelector'
					>
						{(props) => (
							<ClubSelectorScreen
								// Woods
								driverIsPressed={driverIsPressed}
								setDriverIsPressed={setDriverIsPressed}
								threeWoodIsPressed={threeWoodIsPressed}
								setThreeWoodIsPressed={setThreeWoodIsPressed}
								fiveWoodIsPressed={fiveWoodIsPressed}
								setFiveWoodIsPressed={setFiveWoodIsPressed}
								sevenWoodIsPressed={sevenWoodIsPressed}
								setSevenWoodIsPressed={setSevenWoodIsPressed}
								// Hybrids
								twoHybridIsPressed={twoHybridIsPressed}
								setTwoHybridIsPressed={setTwoHybridIsPressed}
								threeHybridIsPressed={threeHybridIsPressed}
								setThreeHybridIsPressed={setThreeHybridIsPressed}
								fourHybridIsPressed={fourHybridIsPressed}
								setFourHybridIsPressed={setFourHybridIsPressed}
								fiveHybridIsPressed={fiveHybridIsPressed}
								setFiveHybridIsPressed={setFiveHybridIsPressed}
								sixHybridIsPressed={sixHybridIsPressed}
								setSixHybridIsPressed={setSixHybridIsPressed}
								sevenHybridIsPressed={sevenHybridIsPressed}
								setSevenHybridIsPressed={setSevenHybridIsPressed}
								// Irons
								twoIronIsPressed={twoIronIsPressed}
								setTwoIronIsPressed={setTwoIronIsPressed}
								threeIronIsPressed={threeIronIsPressed}
								setThreeIronIsPressed={setThreeIronIsPressed}
								fourIronIsPressed={fourIronIsPressed}
								setFourIronIsPressed={setFourIronIsPressed}
								fiveIronIsPressed={fiveIronIsPressed}
								setFiveIronIsPressed={setFiveIronIsPressed}
								sixIronIsPressed={sixIronIsPressed}
								setSixIronIsPressed={setSixIronIsPressed}
								sevenIronIsPressed={sevenIronIsPressed}
								setSevenIronIsPressed={setSevenIronIsPressed}
								eightIronIsPressed={eightIronIsPressed}
								setEightIronIsPressed={setEightIronIsPressed}
								nineIronIsPressed={nineIronIsPressed}
								setNineIronIsPressed={setNineIronIsPressed}
								pwIronIsPressed={pwIronIsPressed}
								setPwIronIsPressed={setPwIronIsPressed}
								//Wedges
								fortyEightWedgeIsPressed={fortyEightWedgeIsPressed}
								setFortyEightWedgeIsPressed={setFortyEightWedgeIsPressed}
								fiftyWedgeIsPressed={fiftyWedgeIsPressed}
								setFiftyWedgeIsPressed={setFiftyWedgeIsPressed}
								fiftyTwoWedgeIsPressed={fiftyTwoWedgeIsPressed}
								setFiftyTwoWedgeIsPressed={setFiftyTwoWedgeIsPressed}
								fiftyFourWedgeIsPressed={fiftyFourWedgeIsPressed}
								setFiftyFourWedgeIsPressed={setFiftyFourWedgeIsPressed}
								fiftySixWedgeIsPressed={fiftySixWedgeIsPressed}
								setFiftySixWedgeIsPressed={setFiftySixWedgeIsPressed}
								fiftyEightWedgeIsPressed={fiftyEightWedgeIsPressed}
								setFiftyEightWedgeIsPressed={setFiftyEightWedgeIsPressed}
								sixtyWedgeIsPressed={sixtyWedgeIsPressed}
								setSixtyWedgeIsPressed={setSixtyWedgeIsPressed}
								{...props}
							/>
						)}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

function HomeTabs({ name, email, phone }) {
	// Club Stats State
	const [clubSelected, setClubSelected] = useState('');
	const [distance, setDistance] = useState(0);
	const [selectedValue, setSelectedValue] = useState('option1');
	const [selectedPower, setSelectedPower] = useState('');
	const [selectedLabel, setSelectedLabel] = useState('');
	const [newShotDistance, setNewShotDistance] = useState('');
	const [shotArray, setShotArray] = useState([]);
	// Profile State
	const [playersName, setPlayersName] = useState('Players Name');
	const [username, setUsername] = useState('Username');

	// Importing Shots
	const {
		driver100,
		setDriver100,
		driver75,
		setDriver75,
		threeWood100,
		setThreeWood100,
		threeWood75,
		setThreeWood75,
		fiveWood100,
		setFiveWood100,
		fiveWood75,
		setFiveWood75,
		sevenWood100,
		setSevenWood100,
		sevenWood75,
		setSevenWood75,
		// Hybrids
		twoHybrid100,
		setTwoHybrid100,
		twoHybrid75,
		setTwoHybrid75,
		threeHybrid100,
		setThreeHybrid100,
		threeHybrid75,
		setThreeHybrid75,
		fourHybrid100,
		setFourHybrid100,
		fourHybrid75,
		setFourHybrid75,
		fiveHybrid100,
		setFiveHybrid100,
		fiveHybrid75,
		setFiveHybrid75,
		sixHybrid100,
		setSixHybrid100,
		sixHybrid75,
		setSixHybrid75,
		sevenHybrid100,
		setSevenHybrid100,
		sevenHybrid75,
		setSevenHybrid75,
		// Irons
		twoIron100,
		setTwoIron100,
		twoIron75,
		setTwoIron75,
		twoIron50,
		setTwoIron50,
		twoIron25,
		setTwoIron25,
		threeIron100,
		setThreeIron100,
		threeIron75,
		setThreeIron75,
		threeIron50,
		setThreeIron50,
		threeIron25,
		setThreeIron25,
		fourIron100,
		setFourIron100,
		fourIron75,
		setFourIron75,
		fourIron50,
		setFourIron50,
		fourIron25,
		setFourIron25,
		fiveIron100,
		setFiveIron100,
		fiveIron75,
		setFiveIron75,
		fiveIron50,
		setFiveIron50,
		fiveIron25,
		setFiveIron25,
		sixIron100,
		setSixIron100,
		sixIron75,
		setSixIron75,
		sixIron50,
		setSixIron50,
		sixIron25,
		setSixIron25,
		sevenIron100,
		setSevenIron100,
		sevenIron75,
		setSevenIron75,
		sevenIron50,
		setSevenIron50,
		sevenIron25,
		setSevenIron25,
		eightIron100,
		setEightIron100,
		eightIron75,
		setEightIron75,
		eightIron50,
		setEightIron50,
		eightIron25,
		setEightIron25,
		nineIron100,
		setNineIron100,
		nineIron75,
		setNineIron75,
		nineIron50,
		setNineIron50,
		nineIron25,
		setNineIron25,
		// Wedges
		pWedge100,
		setPWedge100,
		pWedge75,
		setPWedge75,
		pWedge50,
		setPWedge50,
		pWedge25,
		setPWedge25,
		forty8Wedge100,
		setForty8Wedge100,
		forty8Wedge75,
		setForty8Wedge75,
		forty8Wedge50,
		setForty8Wedge50,
		forty8Wedge25,
		setForty8Wedge25,
		fiftyWedge100,
		setFiftyWedge100,
		fiftyWedge75,
		setFiftyWedge75,
		fiftyWedge50,
		setFiftyWedge50,
		fiftyWedge25,
		setFiftyWedge25,
		fifty2Wedge100,
		setFifty2Wedge100,
		fifty2Wedge75,
		setFifty2Wedge75,
		fifty2Wedge50,
		setFifty2Wedge50,
		fifty2Wedge25,
		setFifty2Wedge25,
		fifty4Wedge100,
		setFifty4Wedge100,
		fifty4Wedge75,
		setFifty4Wedge75,
		fifty4Wedge50,
		setFifty4Wedge50,
		fifty4Wedge25,
		setFifty4Wedge25,
		fifty6Wedge100,
		setFifty6Wedge100,
		fifty6Wedge75,
		setFifty6Wedge75,
		fifty6Wedge50,
		setFifty6Wedge50,
		fifty6Wedge25,
		setFifty6Wedge25,
		fifty8Wedge100,
		setFifty8Wedge100,
		fifty8Wedge75,
		setFifty8Wedge75,
		fifty8Wedge50,
		setFifty8Wedge50,
		fifty8Wedge25,
		setFifty8Wedge25,
		sixtyWedge100,
		setSixtyWedge100,
		sixtyWedge75,
		setSixtyWedge75,
		sixtyWedge50,
		setSixtyWedge50,
		sixtyWedge25,
		setSixtyWedge25,
		// Averages
	} = useCustomState();
	// Formulas
	const {
		shotMeanFunction100,
		shotMeanFunction75,
		shotMeanFunction50,
		shotMeanFunction25,
		shotMean100,
		shotMean75,
		shotMean50,
		shotMean25,
		setShotMean100,
		setShotMean75,
		setShotMean50,
		setShotMean25,
		calculateStats,
		calculateWeightedAverage,
	} = StatCalculations();
	const {
		// Shot Array
		driver100Data,
		setDriver100Data,
		driver75Data,
		setDriver75Data,
		// Shot Totals
		driverShotCounter100,
		setDriverShotCounter100,
		driverShotCounter75,
		setDriverShotCounter75,
		// Historical Average
		historicalAverageDriver100,
		setHistoricalAverageDriver100,
		historicalAverageDriver75,
		setHistoricalAverageDriver75,
		// Variance
		highVarianceDriver100,
		setHighVarianceDriver100,
		highVarianceDriver75,
		setHighVarianceDriver75,
		lowVarianceDriver100,
		setLowVarianceDriver100,
		lowVarianceDriver75,
		setLowVarianceDriver75,
	} = DriverData();
	const {
		threeWood100Data,
		setThreeWood100Data,
		threeWood75Data,
		setThreeWood75Data,
		// Shot Totals
		threeWoodShotCounter100,
		setThreeWoodShotCounter100,
		threeWoodShotCounter75,
		setThreeWoodShotCounter75,
		// Historical Average
		historicalAverageThreeWood100,
		setHistoricalAverageThreeWood100,
		historicalAverageThreeWood75,
		setHistoricalAverageThreeWood75,
		// Variance
		highVarianceThreeWood100,
		setHighVarianceThreeWood100,
		highVarianceThreeWood75,
		setHighVarianceThreeWood75,
		lowVarianceThreeWood100,
		setLowVarianceThreeWood100,
		lowVarianceThreeWood75,
		setLowVarianceThreeWood75,
	} = ThreeWoodData();
	const {
		fiveWood100Data,
		setFiveWood100Data,
		fiveWood75Data,
		setFiveWood75Data,
		// Shot Totals
		fiveWoodShotCounter100,
		setFiveWoodShotCounter100,
		fiveWoodShotCounter75,
		setFiveWoodShotCounter75,
		// Historical Average
		historicalAverageFiveWood100,
		setHistoricalAverageFiveWood100,
		historicalAverageFiveWood75,
		setHistoricalAverageFiveWood75,
		// Variance
		highVarianceFiveWood100,
		setHighVarianceFiveWood100,
		highVarianceFiveWood75,
		setHighVarianceFiveWood75,
		lowVarianceFiveWood100,
		setLowVarianceFiveWood100,
		lowVarianceFiveWood75,
		setLowVarianceFiveWood75,
	} = FiveWoodData();
	const {
		sevenWood100Data,
		setSevenWood100Data,
		sevenWood75Data,
		setSevenWood75Data,
		// Shot Totals
		sevenWoodShotCounter100,
		setSevenWoodShotCounter100,
		sevenWoodShotCounter75,
		setSevenWoodShotCounter75,
		// Historical Average
		historicalAverageSevenWood100,
		setHistoricalAverageSevenWood100,
		historicalAverageSevenWood75,
		setHistoricalAverageSevenWood75,
		// Variance
		highVarianceSevenWood100,
		setHighVarianceSevenWood100,
		highVarianceSevenWood75,
		setHighVarianceSevenWood75,
		lowVarianceSevenWood100,
		setLowVarianceSevenWood100,
		lowVarianceSevenWood75,
		setLowVarianceSevenWood75,
	} = SevenWoodData();
	// Hybrids
	const {
		twoHybrid100Data,
		setTwoHybrid100Data,
		twoHybrid75Data,
		setTwoHybrid75Data,
		// Shot Totals
		twoHybridShotCounter100,
		setTwoHybridShotCounter100,
		twoHybridShotCounter75,
		setTwoHybridShotCounter75,
		// Historical Average
		historicalAverageTwoHybrid100,
		setHistoricalAverageTwoHybrid100,
		historicalAverageTwoHybrid75,
		setHistoricalAverageTwoHybrid75,
		// Variance
		highVarianceTwoHybrid100,
		setHighVarianceTwoHybrid100,
		highVarianceTwoHybrid75,
		setHighVarianceTwoHybrid75,
		lowVarianceTwoHybrid100,
		setLowVarianceTwoHybrid100,
		lowVarianceTwoHybrid75,
		setLowVarianceTwoHybrid75,
	} = TwoHybridData();
	const {
		threeHybrid100Data,
		setThreeHybrid100Data,
		threeHybrid75Data,
		setThreeHybrid75Data,
		// Shot Totals
		threeHybridShotCounter100,
		setThreeHybridShotCounter100,
		threeHybridShotCounter75,
		setThreeHybridShotCounter75,
		// Historical Average
		historicalAverageThreeHybrid100,
		setHistoricalAverageThreeHybrid100,
		historicalAverageThreeHybrid75,
		setHistoricalAverageThreeHybrid75,
		// Variance
		highVarianceThreeHybrid100,
		setHighVarianceThreeHybrid100,
		highVarianceThreeHybrid75,
		setHighVarianceThreeHybrid75,
		lowVarianceThreeHybrid100,
		setLowVarianceThreeHybrid100,
		lowVarianceThreeHybrid75,
		setLowVarianceThreeHybrid75,
	} = ThreeHybridData();
	const {
		fourHybrid100Data,
		setFourHybrid100Data,
		fourHybrid75Data,
		setFourHybrid75Data,
		// Shot Totals
		fourHybridShotCounter100,
		setFourHybridShotCounter100,
		fourHybridShotCounter75,
		setFourHybridShotCounter75,
		// Historical Average
		historicalAverageFourHybrid100,
		setHistoricalAverageFourHybrid100,
		historicalAverageFourHybrid75,
		setHistoricalAverageFourHybrid75,
		// Variance
		highVarianceFourHybrid100,
		setHighVarianceFourHybrid100,
		highVarianceFourHybrid75,
		setHighVarianceFourHybrid75,
		lowVarianceFourHybrid100,
		setLowVarianceFourHybrid100,
		lowVarianceFourHybrid75,
		setLowVarianceFourHybrid75,
	} = FourHybridData();
	const {
		fiveHybrid100Data,
		setFiveHybrid100Data,
		fiveHybrid75Data,
		setFiveHybrid75Data,
		// Shot Totals
		fiveHybridShotCounter100,
		setFiveHybridShotCounter100,
		fiveHybridShotCounter75,
		setFiveHybridShotCounter75,
		// Historical Average
		historicalAverageFiveHybrid100,
		setHistoricalAverageFiveHybrid100,
		historicalAverageFiveHybrid75,
		setHistoricalAverageFiveHybrid75,
		// Variance
		highVarianceFiveHybrid100,
		setHighVarianceFiveHybrid100,
		highVarianceFiveHybrid75,
		setHighVarianceFiveHybrid75,
		lowVarianceFiveHybrid100,
		setLowVarianceFiveHybrid100,
		lowVarianceFiveHybrid75,
		setLowVarianceFiveHybrid75,
	} = FiveHybridData();
	const {
		sixHybrid100Data,
		setSixHybrid100Data,
		sixHybrid75Data,
		setSixHybrid75Data,
		// Shot Totals
		sixHybridShotCounter100,
		setSixHybridShotCounter100,
		sixHybridShotCounter75,
		setSixHybridShotCounter75,
		// Historical Average
		historicalAverageSixHybrid100,
		setHistoricalAverageSixHybrid100,
		historicalAverageSixHybrid75,
		setHistoricalAverageSixHybrid75,
		// Variance
		highVarianceSixHybrid100,
		setHighVarianceSixHybrid100,
		highVarianceSixHybrid75,
		setHighVarianceSixHybrid75,
		lowVarianceSixHybrid100,
		setLowVarianceSixHybrid100,
		lowVarianceSixHybrid75,
		setLowVarianceSixHybrid75,
	} = SixHybridData();
	const {
		sevenHybrid100Data,
		setSevenHybrid100Data,
		sevenHybrid75Data,
		setSevenHybrid75Data,
		// Shot Totals
		sevenHybridShotCounter100,
		setSevenHybridShotCounter100,
		sevenHybridShotCounter75,
		setSevenHybridShotCounter75,
		// Historical Average
		historicalAverageSevenHybrid100,
		setHistoricalAverageSevenHybrid100,
		historicalAverageSevenHybrid75,
		setHistoricalAverageSevenHybrid75,
		// Variance
		highVarianceSevenHybrid100,
		setHighVarianceSevenHybrid100,
		highVarianceSevenHybrid75,
		setHighVarianceSevenHybrid75,
		lowVarianceSevenHybrid100,
		setLowVarianceSevenHybrid100,
		lowVarianceSevenHybrid75,
		setLowVarianceSevenHybrid75,
	} = SevenHybridData();
	// Irons
	const {
		twoIron100Data,
		setTwoIron100Data,
		twoIron75Data,
		setTwoIron75Data,
		twoIron50Data,
		setTwoIron50Data,
		twoIron25Data,
		setTwoIron25Data,
		// Shot Totals
		twoIronShotCounter100,
		setTwoIronShotCounter100,
		twoIronShotCounter75,
		setTwoIronShotCounter75,
		twoIronShotCounter50,
		setTwoIronShotCounter50,
		twoIronShotCounter25,
		setTwoIronShotCounter25,
		// Historical Value
		historicalAverageTwoIron100,
		setHistoricalAverageTwoIron100,
		historicalAverageTwoIron75,
		setHistoricalAverageTwoIron75,
		historicalAverageTwoIron50,
		setHistoricalAverageTwoIron50,
		historicalAverageTwoIron25,
		setHistoricalAverageTwoIron25,
		// Variance
		highVarianceTwoIron100,
		setHighVarianceTwoIron100,
		highVarianceTwoIron75,
		setHighVarianceTwoIron75,
		highVarianceTwoIron50,
		setHighVarianceTwoIron50,
		highVarianceTwoIron25,
		setHighVarianceTwoIron25,
		lowVarianceTwoIron100,
		setLowVarianceTwoIron100,
		lowVarianceTwoIron75,
		setLowVarianceTwoIron75,
		lowVarianceTwoIron50,
		setLowVarianceTwoIron50,
		lowVarianceTwoIron25,
		setLowVarianceTwoIron25,
	} = TwoIronData();
	const {
		threeIron100Data,
		setThreeIron100Data,
		threeIron75Data,
		setThreeIron75Data,
		threeIron50Data,
		setThreeIron50Data,
		threeIron25Data,
		setThreeIron25Data,
		// Shot Totals
		threeIronShotCounter100,
		setThreeIronShotCounter100,
		threeIronShotCounter75,
		setThreeIronShotCounter75,
		threeIronShotCounter50,
		setThreeIronShotCounter50,
		threeIronShotCounter25,
		setThreeIronShotCounter25,
		// Historical Value
		historicalAverageThreeIron100,
		setHistoricalAverageThreeIron100,
		historicalAverageThreeIron75,
		setHistoricalAverageThreeIron75,
		historicalAverageThreeIron50,
		setHistoricalAverageThreeIron50,
		historicalAverageThreeIron25,
		setHistoricalAverageThreeIron25,
		// Variance
		highVarianceThreeIron100,
		setHighVarianceThreeIron100,
		highVarianceThreeIron75,
		setHighVarianceThreeIron75,
		highVarianceThreeIron50,
		setHighVarianceThreeIron50,
		highVarianceThreeIron25,
		setHighVarianceThreeIron25,
		lowVarianceThreeIron100,
		setLowVarianceThreeIron100,
		lowVarianceThreeIron75,
		setLowVarianceThreeIron75,
		lowVarianceThreeIron50,
		setLowVarianceThreeIron50,
		lowVarianceThreeIron25,
		setLowVarianceThreeIron25,
	} = ThreeIronData();
	const {
		fourIron100Data,
		setFourIron100Data,
		fourIron75Data,
		setFourIron75Data,
		fourIron50Data,
		setFourIron50Data,
		fourIron25Data,
		setFourIron25Data,
		// Shot Totals
		fourIronShotCounter100,
		setFourIronShotCounter100,
		fourIronShotCounter75,
		setFourIronShotCounter75,
		fourIronShotCounter50,
		setFourIronShotCounter50,
		fourIronShotCounter25,
		setFourIronShotCounter25,
		// Historical Value
		historicalAverageFourIron100,
		setHistoricalAverageFourIron100,
		historicalAverageFourIron75,
		setHistoricalAverageFourIron75,
		historicalAverageFourIron50,
		setHistoricalAverageFourIron50,
		historicalAverageFourIron25,
		setHistoricalAverageFourIron25,
		// Variance
		highVarianceFourIron100,
		setHighVarianceFourIron100,
		highVarianceFourIron75,
		setHighVarianceFourIron75,
		highVarianceFourIron50,
		setHighVarianceFourIron50,
		highVarianceFourIron25,
		setHighVarianceFourIron25,
		lowVarianceFourIron100,
		setLowVarianceFourIron100,
		lowVarianceFourIron75,
		setLowVarianceFourIron75,
		lowVarianceFourIron50,
		setLowVarianceFourIron50,
		lowVarianceFourIron25,
		setLowVarianceFourIron25,
	} = FourIronData();
	const {
		fiveIron100Data,
		setFiveIron100Data,
		fiveIron75Data,
		setFiveIron75Data,
		fiveIron50Data,
		setFiveIron50Data,
		fiveIron25Data,
		setFiveIron25Data,
		// Shot Totals
		fiveIronShotCounter100,
		setFiveIronShotCounter100,
		fiveIronShotCounter75,
		setFiveIronShotCounter75,
		fiveIronShotCounter50,
		setFiveIronShotCounter50,
		fiveIronShotCounter25,
		setFiveIronShotCounter25,
		// Historical Value
		historicalAverageFiveIron100,
		setHistoricalAverageFiveIron100,
		historicalAverageFiveIron75,
		setHistoricalAverageFiveIron75,
		historicalAverageFiveIron50,
		setHistoricalAverageFiveIron50,
		historicalAverageFiveIron25,
		setHistoricalAverageFiveIron25,
		// Variance
		highVarianceFiveIron100,
		setHighVarianceFiveIron100,
		highVarianceFiveIron75,
		setHighVarianceFiveIron75,
		highVarianceFiveIron50,
		setHighVarianceFiveIron50,
		highVarianceFiveIron25,
		setHighVarianceFiveIron25,
		lowVarianceFiveIron100,
		setLowVarianceFiveIron100,
		lowVarianceFiveIron75,
		setLowVarianceFiveIron75,
		lowVarianceFiveIron50,
		setLowVarianceFiveIron50,
		lowVarianceFiveIron25,
		setLowVarianceFiveIron25,
	} = FiveIronData();
	const {
		sixIron100Data,
		setSixIron100Data,
		sixIron75Data,
		setSixIron75Data,
		sixIron50Data,
		setSixIron50Data,
		sixIron25Data,
		setSixIron25Data,
		// Shot Totals
		sixIronShotCounter100,
		setSixIronShotCounter100,
		sixIronShotCounter75,
		setSixIronShotCounter75,
		sixIronShotCounter50,
		setSixIronShotCounter50,
		sixIronShotCounter25,
		setSixIronShotCounter25,
		// Historical Value
		historicalAverageSixIron100,
		setHistoricalAverageSixIron100,
		historicalAverageSixIron75,
		setHistoricalAverageSixIron75,
		historicalAverageSixIron50,
		setHistoricalAverageSixIron50,
		historicalAverageSixIron25,
		setHistoricalAverageSixIron25,
		// Variance
		highVarianceSixIron100,
		setHighVarianceSixIron100,
		highVarianceSixIron75,
		setHighVarianceSixIron75,
		highVarianceSixIron50,
		setHighVarianceSixIron50,
		highVarianceSixIron25,
		setHighVarianceSixIron25,
		lowVarianceSixIron100,
		setLowVarianceSixIron100,
		lowVarianceSixIron75,
		setLowVarianceSixIron75,
		lowVarianceSixIron50,
		setLowVarianceSixIron50,
		lowVarianceSixIron25,
		setLowVarianceSixIron25,
	} = SixIronData();
	const {
		sevenIron100Data,
		setSevenIron100Data,
		sevenIron75Data,
		setSevenIron75Data,
		sevenIron50Data,
		setSevenIron50Data,
		sevenIron25Data,
		setSevenIron25Data,
		// Shot Totals
		sevenIronShotCounter100,
		setSevenIronShotCounter100,
		sevenIronShotCounter75,
		setSevenIronShotCounter75,
		sevenIronShotCounter50,
		setSevenIronShotCounter50,
		sevenIronShotCounter25,
		setSevenIronShotCounter25,
		// Historical Value
		historicalAverageSevenIron100,
		setHistoricalAverageSevenIron100,
		historicalAverageSevenIron75,
		setHistoricalAverageSevenIron75,
		historicalAverageSevenIron50,
		setHistoricalAverageSevenIron50,
		historicalAverageSevenIron25,
		setHistoricalAverageSevenIron25,
		// Variance
		highVarianceSevenIron100,
		setHighVarianceSevenIron100,
		highVarianceSevenIron75,
		setHighVarianceSevenIron75,
		highVarianceSevenIron50,
		setHighVarianceSevenIron50,
		highVarianceSevenIron25,
		setHighVarianceSevenIron25,
		lowVarianceSevenIron100,
		setLowVarianceSevenIron100,
		lowVarianceSevenIron75,
		setLowVarianceSevenIron75,
		lowVarianceSevenIron50,
		setLowVarianceSevenIron50,
		lowVarianceSevenIron25,
		setLowVarianceSevenIron25,
	} = SevenIronData();
	const {
		eightIron100Data,
		setEightIron100Data,
		eightIron75Data,
		setEightIron75Data,
		eightIron50Data,
		setEightIron50Data,
		eightIron25Data,
		setEightIron25Data,
		// Shot Totals
		eightIronShotCounter100,
		setEightIronShotCounter100,
		eightIronShotCounter75,
		setEightIronShotCounter75,
		eightIronShotCounter50,
		setEightIronShotCounter50,
		eightIronShotCounter25,
		setEightIronShotCounter25,
		// Historical Value
		historicalAverageEightIron100,
		setHistoricalAverageEightIron100,
		historicalAverageEightIron75,
		setHistoricalAverageEightIron75,
		historicalAverageEightIron50,
		setHistoricalAverageEightIron50,
		historicalAverageEightIron25,
		setHistoricalAverageEightIron25,
		// Variance
		highVarianceEightIron100,
		setHighVarianceEightIron100,
		highVarianceEightIron75,
		setHighVarianceEightIron75,
		highVarianceEightIron50,
		setHighVarianceEightIron50,
		highVarianceEightIron25,
		setHighVarianceEightIron25,
		lowVarianceEightIron100,
		setLowVarianceEightIron100,
		lowVarianceEightIron75,
		setLowVarianceEightIron75,
		lowVarianceEightIron50,
		setLowVarianceEightIron50,
		lowVarianceEightIron25,
		setLowVarianceEightIron25,
	} = EightIronData();
	const {
		nineIron100Data,
		setNineIron100Data,
		nineIron75Data,
		setNineIron75Data,
		nineIron50Data,
		setNineIron50Data,
		nineIron25Data,
		setNineIron25Data,
		// Shot Totals
		nineIronShotCounter100,
		setNineIronShotCounter100,
		nineIronShotCounter75,
		setNineIronShotCounter75,
		nineIronShotCounter50,
		setNineIronShotCounter50,
		nineIronShotCounter25,
		setNineIronShotCounter25,
		// Historical Value
		historicalAverageNineIron100,
		setHistoricalAverageNineIron100,
		historicalAverageNineIron75,
		setHistoricalAverageNineIron75,
		historicalAverageNineIron50,
		setHistoricalAverageNineIron50,
		historicalAverageNineIron25,
		setHistoricalAverageNineIron25,
		// Variance
		highVarianceNineIron100,
		setHighVarianceNineIron100,
		highVarianceNineIron75,
		setHighVarianceNineIron75,
		highVarianceNineIron50,
		setHighVarianceNineIron50,
		highVarianceNineIron25,
		setHighVarianceNineIron25,
		lowVarianceNineIron100,
		setLowVarianceNineIron100,
		lowVarianceNineIron75,
		setLowVarianceNineIron75,
		lowVarianceNineIron50,
		setLowVarianceNineIron50,
		lowVarianceNineIron25,
		setLowVarianceNineIron25,
	} = NineIronData();
	// Wedges
	const {
		pWedge100Data,
		setPWedge100Data,
		pWedge75Data,
		setPWedge75Data,
		pWedge50Data,
		setPWedge50Data,
		pWedge25Data,
		setPWedge25Data,
		// Shot Totals
		pWedgeShotCounter100,
		setPWedgeShotCounter100,
		pWedgeShotCounter75,
		setPWedgeShotCounter75,
		pWedgeShotCounter50,
		setPWedgeShotCounter50,
		pWedgeShotCounter25,
		setPWedgeShotCounter25,
		// Historical Value
		historicalAveragePWedge100,
		setHistoricalAveragePWedge100,
		historicalAveragePWedge75,
		setHistoricalAveragePWedge75,
		historicalAveragePWedge50,
		setHistoricalAveragePWedge50,
		historicalAveragePWedge25,
		setHistoricalAveragePWedge25,
		// Variance
		highVariancePWedge100,
		setHighVariancePWedge100,
		highVariancePWedge75,
		setHighVariancePWedge75,
		highVariancePWedge50,
		setHighVariancePWedge50,
		highVariancePWedge25,
		setHighVariancePWedge25,
		lowVariancePWedge100,
		setLowVariancePWedge100,
		lowVariancePWedge75,
		setLowVariancePWedge75,
		lowVariancePWedge50,
		setLowVariancePWedge50,
		lowVariancePWedge25,
		setLowVariancePWedge25,
	} = PWedgeData();
	const {
		forty8Wedge100Data,
		setForty8Wedge100Data,
		forty8Wedge75Data,
		setForty8Wedge75Data,
		forty8Wedge50Data,
		setForty8Wedge50Data,
		forty8Wedge25Data,
		setForty8Wedge25Data,
		// Shot Totals
		forty8WedgeShotCounter100,
		setForty8WedgeShotCounter100,
		forty8WedgeShotCounter75,
		setForty8WedgeShotCounter75,
		forty8WedgeShotCounter50,
		setForty8WedgeShotCounter50,
		forty8WedgeShotCounter25,
		setForty8WedgeShotCounter25,
		// Historical Value
		historicalAverageForty8Wedge100,
		setHistoricalAverageForty8Wedge100,
		historicalAverageForty8Wedge75,
		setHistoricalAverageForty8Wedge75,
		historicalAverageForty8Wedge50,
		setHistoricalAverageForty8Wedge50,
		historicalAverageForty8Wedge25,
		setHistoricalAverageForty8Wedge25,
		// Variance
		highVarianceForty8Wedge100,
		setHighVarianceForty8Wedge100,
		highVarianceForty8Wedge75,
		setHighVarianceForty8Wedge75,
		highVarianceForty8Wedge50,
		setHighVarianceForty8Wedge50,
		highVarianceForty8Wedge25,
		setHighVarianceForty8Wedge25,
		lowVarianceForty8Wedge100,
		setLowVarianceForty8Wedge100,
		lowVarianceForty8Wedge75,
		setLowVarianceForty8Wedge75,
		lowVarianceForty8Wedge50,
		setLowVarianceForty8Wedge50,
		lowVarianceForty8Wedge25,
		setLowVarianceForty8Wedge25,
	} = Forty8WedgeData();
	const {
		fiftyWedge100Data,
		setFiftyWedge100Data,
		fiftyWedge75Data,
		setFiftyWedge75Data,
		fiftyWedge50Data,
		setFiftyWedge50Data,
		fiftyWedge25Data,
		setFiftyWedge25Data,
		// Shot Totals
		fiftyWedgeShotCounter100,
		setFiftyWedgeShotCounter100,
		fiftyWedgeShotCounter75,
		setFiftyWedgeShotCounter75,
		fiftyWedgeShotCounter50,
		setFiftyWedgeShotCounter50,
		fiftyWedgeShotCounter25,
		setFiftyWedgeShotCounter25,
		// Historical Value
		historicalAverageFiftyWedge100,
		setHistoricalAverageFiftyWedge100,
		historicalAverageFiftyWedge75,
		setHistoricalAverageFiftyWedge75,
		historicalAverageFiftyWedge50,
		setHistoricalAverageFiftyWedge50,
		historicalAverageFiftyWedge25,
		setHistoricalAverageFiftyWedge25,
		// Variance
		highVarianceFiftyWedge100,
		setHighVarianceFiftyWedge100,
		highVarianceFiftyWedge75,
		setHighVarianceFiftyWedge75,
		highVarianceFiftyWedge50,
		setHighVarianceFiftyWedge50,
		highVarianceFiftyWedge25,
		setHighVarianceFiftyWedge25,
		lowVarianceFiftyWedge100,
		setLowVarianceFiftyWedge100,
		lowVarianceFiftyWedge75,
		setLowVarianceFiftyWedge75,
		lowVarianceFiftyWedge50,
		setLowVarianceFiftyWedge50,
		lowVarianceFiftyWedge25,
		setLowVarianceFiftyWedge25,
	} = FiftyWedgeData();
	const {
		fifty2Wedge100Data,
		setFifty2Wedge100Data,
		fifty2Wedge75Data,
		setFifty2Wedge75Data,
		fifty2Wedge50Data,
		setFifty2Wedge50Data,
		fifty2Wedge25Data,
		setFifty2Wedge25Data,
		// Shot Totals
		fifty2WedgeShotCounter100,
		setFifty2WedgeShotCounter100,
		fifty2WedgeShotCounter75,
		setFifty2WedgeShotCounter75,
		fifty2WedgeShotCounter50,
		setFifty2WedgeShotCounter50,
		fifty2WedgeShotCounter25,
		setFifty2WedgeShotCounter25,
		// Historical Value
		historicalAverageFifty2Wedge100,
		setHistoricalAverageFifty2Wedge100,
		historicalAverageFifty2Wedge75,
		setHistoricalAverageFifty2Wedge75,
		historicalAverageFifty2Wedge50,
		setHistoricalAverageFifty2Wedge50,
		historicalAverageFifty2Wedge25,
		setHistoricalAverageFifty2Wedge25,
		// Variance
		highVarianceFifty2Wedge100,
		setHighVarianceFifty2Wedge100,
		highVarianceFifty2Wedge75,
		setHighVarianceFifty2Wedge75,
		highVarianceFifty2Wedge50,
		setHighVarianceFifty2Wedge50,
		highVarianceFifty2Wedge25,
		setHighVarianceFifty2Wedge25,
		lowVarianceFifty2Wedge100,
		setLowVarianceFifty2Wedge100,
		lowVarianceFifty2Wedge75,
		setLowVarianceFifty2Wedge75,
		lowVarianceFifty2Wedge50,
		setLowVarianceFifty2Wedge50,
		lowVarianceFifty2Wedge25,
		setLowVarianceFifty2Wedge25,
	} = Fifty2WedgeData();
	const {
		fifty4Wedge100Data,
		setFifty4Wedge100Data,
		fifty4Wedge75Data,
		setFifty4Wedge75Data,
		fifty4Wedge50Data,
		setFifty4Wedge50Data,
		fifty4Wedge25Data,
		setFifty4Wedge25Data,
		// Shot Totals
		fifty4WedgeShotCounter100,
		setFifty4WedgeShotCounter100,
		fifty4WedgeShotCounter75,
		setFifty4WedgeShotCounter75,
		fifty4WedgeShotCounter50,
		setFifty4WedgeShotCounter50,
		fifty4WedgeShotCounter25,
		setFifty4WedgeShotCounter25,
		// Historical Value
		historicalAverageFifty4Wedge100,
		setHistoricalAverageFifty4Wedge100,
		historicalAverageFifty4Wedge75,
		setHistoricalAverageFifty4Wedge75,
		historicalAverageFifty4Wedge50,
		setHistoricalAverageFifty4Wedge50,
		historicalAverageFifty4Wedge25,
		setHistoricalAverageFifty4Wedge25,
		// Variance
		highVarianceFifty4Wedge100,
		setHighVarianceFifty4Wedge100,
		highVarianceFifty4Wedge75,
		setHighVarianceFifty4Wedge75,
		highVarianceFifty4Wedge50,
		setHighVarianceFifty4Wedge50,
		highVarianceFifty4Wedge25,
		setHighVarianceFifty4Wedge25,
		lowVarianceFifty4Wedge100,
		setLowVarianceFifty4Wedge100,
		lowVarianceFifty4Wedge75,
		setLowVarianceFifty4Wedge75,
		lowVarianceFifty4Wedge50,
		setLowVarianceFifty4Wedge50,
		lowVarianceFifty4Wedge25,
		setLowVarianceFifty4Wedge25,
	} = Fifty4WedgeData();
	const {
		fifty6Wedge100Data,
		setFifty6Wedge100Data,
		fifty6Wedge75Data,
		setFifty6Wedge75Data,
		fifty6Wedge50Data,
		setFifty6Wedge50Data,
		fifty6Wedge25Data,
		setFifty6Wedge25Data,
		// Shot Totals
		fifty6WedgeShotCounter100,
		setFifty6WedgeShotCounter100,
		fifty6WedgeShotCounter75,
		setFifty6WedgeShotCounter75,
		fifty6WedgeShotCounter50,
		setFifty6WedgeShotCounter50,
		fifty6WedgeShotCounter25,
		setFifty6WedgeShotCounter25,
		// Historical Value
		historicalAverageFifty6Wedge100,
		setHistoricalAverageFifty6Wedge100,
		historicalAverageFifty6Wedge75,
		setHistoricalAverageFifty6Wedge75,
		historicalAverageFifty6Wedge50,
		setHistoricalAverageFifty6Wedge50,
		historicalAverageFifty6Wedge25,
		setHistoricalAverageFifty6Wedge25,
		// Variance
		highVarianceFifty6Wedge100,
		setHighVarianceFifty6Wedge100,
		highVarianceFifty6Wedge75,
		setHighVarianceFifty6Wedge75,
		highVarianceFifty6Wedge50,
		setHighVarianceFifty6Wedge50,
		highVarianceFifty6Wedge25,
		setHighVarianceFifty6Wedge25,
		lowVarianceFifty6Wedge100,
		setLowVarianceFifty6Wedge100,
		lowVarianceFifty6Wedge75,
		setLowVarianceFifty6Wedge75,
		lowVarianceFifty6Wedge50,
		setLowVarianceFifty6Wedge50,
		lowVarianceFifty6Wedge25,
		setLowVarianceFifty6Wedge25,
	} = Fifty6WedgeData();
	const {
		fifty8Wedge100Data,
		setFifty8Wedge100Data,
		fifty8Wedge75Data,
		setFifty8Wedge75Data,
		fifty8Wedge50Data,
		setFifty8Wedge50Data,
		fifty8Wedge25Data,
		setFifty8Wedge25Data,
		// Shot Totals
		fifty8WedgeShotCounter100,
		setFifty8WedgeShotCounter100,
		fifty8WedgeShotCounter75,
		setFifty8WedgeShotCounter75,
		fifty8WedgeShotCounter50,
		setFifty8WedgeShotCounter50,
		fifty8WedgeShotCounter25,
		setFifty8WedgeShotCounter25,
		// Historical Value
		historicalAverageFifty8Wedge100,
		setHistoricalAverageFifty8Wedge100,
		historicalAverageFifty8Wedge75,
		setHistoricalAverageFifty8Wedge75,
		historicalAverageFifty8Wedge50,
		setHistoricalAverageFifty8Wedge50,
		historicalAverageFifty8Wedge25,
		setHistoricalAverageFifty8Wedge25,
		// Variance
		highVarianceFifty8Wedge100,
		setHighVarianceFifty8Wedge100,
		highVarianceFifty8Wedge75,
		setHighVarianceFifty8Wedge75,
		highVarianceFifty8Wedge50,
		setHighVarianceFifty8Wedge50,
		highVarianceFifty8Wedge25,
		setHighVarianceFifty8Wedge25,
		lowVarianceFifty8Wedge100,
		setLowVarianceFifty8Wedge100,
		lowVarianceFifty8Wedge75,
		setLowVarianceFifty8Wedge75,
		lowVarianceFifty8Wedge50,
		setLowVarianceFifty8Wedge50,
		lowVarianceFifty8Wedge25,
		setLowVarianceFifty8Wedge25,
	} = Fifty8WedgeData();
	const {
		sixtyWedge100Data,
		setSixtyWedge100Data,
		sixtyWedge75Data,
		setSixtyWedge75Data,
		sixtyWedge50Data,
		setSixtyWedge50Data,
		sixtyWedge25Data,
		setSixtyWedge25Data,
		// Shot Totals
		sixtyWedgeShotCounter100,
		setSixtyWedgeShotCounter100,
		sixtyWedgeShotCounter75,
		setSixtyWedgeShotCounter75,
		sixtyWedgeShotCounter50,
		setSixtyWedgeShotCounter50,
		sixtyWedgeShotCounter25,
		setSixtyWedgeShotCounter25,
		// Historical Value
		historicalAverageSixtyWedge100,
		setHistoricalAverageSixtyWedge100,
		historicalAverageSixtyWedge75,
		setHistoricalAverageSixtyWedge75,
		historicalAverageSixtyWedge50,
		setHistoricalAverageSixtyWedge50,
		historicalAverageSixtyWedge25,
		setHistoricalAverageSixtyWedge25,
		// Variance
		highVarianceSixtyWedge100,
		setHighVarianceSixtyWedge100,
		highVarianceSixtyWedge75,
		setHighVarianceSixtyWedge75,
		highVarianceSixtyWedge50,
		setHighVarianceSixtyWedge50,
		highVarianceSixtyWedge25,
		setHighVarianceSixtyWedge25,
		lowVarianceSixtyWedge100,
		setLowVarianceSixtyWedge100,
		lowVarianceSixtyWedge75,
		setLowVarianceSixtyWedge75,
		lowVarianceSixtyWedge50,
		setLowVarianceSixtyWedge50,
		lowVarianceSixtyWedge25,
		setLowVarianceSixtyWedge25,
	} = SixtyWedgeData();

	const shotWeightedAverage = (arrayUsed) => {
		const distances = arrayUsed.map((item) => item.distance);
		if (distances.length === 0) {
			return 0; // Return 0 if the array is empty to avoid division by zero
		}

		const sum = distances.reduce((acc, value) => acc + value, 0);
		return Math.round(sum / distances.length);
	};

	const shotWeightedAverage1 = (arrayUsed) => {
		const shotArrayUsed = arrayUsed;
		const numerator =
			shotArrayUsed[0] * 10 +
			shotArrayUsed[1] * 10 +
			shotArrayUsed[2] * 10 +
			shotArrayUsed[3] * 10 +
			shotArrayUsed[4] * 10 +
			shotArrayUsed[5] * 10 +
			shotArrayUsed[6] * 10 +
			shotArrayUsed[7] * 10 +
			shotArrayUsed[8] * 10 +
			shotArrayUsed[9] * 10;
		const denominator = 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10;
		return Math.round(numerator / denominator);
	};
	const shotWeightedAverage2 = (arrayUsed) => {
		const shotArrayUsed = arrayUsed;
		const numerator =
			shotArrayUsed[0] * 10 +
			shotArrayUsed[1] * 10 +
			shotArrayUsed[2] * 10 +
			shotArrayUsed[3] * 10 +
			shotArrayUsed[4] * 10 +
			shotArrayUsed[5] * 10 +
			shotArrayUsed[6] * 10 +
			shotArrayUsed[7] * 10 +
			shotArrayUsed[8] * 10 +
			shotArrayUsed[9] * 10 +
			shotArrayUsed[10] * 6 +
			shotArrayUsed[11] * 6 +
			shotArrayUsed[12] * 6 +
			shotArrayUsed[13] * 6 +
			shotArrayUsed[14] * 6 +
			shotArrayUsed[15] * 6 +
			shotArrayUsed[16] * 6 +
			shotArrayUsed[17] * 6 +
			shotArrayUsed[18] * 6 +
			shotArrayUsed[19] * 6;
		const denominator =
			10 +
			10 +
			10 +
			10 +
			10 +
			10 +
			10 +
			10 +
			10 +
			10 +
			6 +
			6 +
			6 +
			6 +
			6 +
			6 +
			6 +
			6 +
			6 +
			6;
		return Math.round(numerator / denominator);
	};

	const driver100Average = (driver100[0] + driver100[1] + driver100[2]) / 3;

	const shotTotalCounter100 = (arrayPlaceholder) => {
		const counter = arrayPlaceholder.length;
		setDriverShotCounter100(counter);
		return counter;
	};

	// Historical Average
	const calculateHistoricalAverage = (array) => {
		if (array.length === 0) {
			return 0; // Return 0 if the array is empty to avoid division by zero
		}

		const sum = array.reduce((acc, value) => acc + value, 0);
		setHistoricalAverage(Math.round(sum / array.length));
		return historicalAverage;
	};

	return (
		<Tab.Navigator
			initialRouteName='MyBag'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Caddie') {
						iconName = focused ? 'golf' : 'golf-outline';
					} else if (route.name === 'MyBag') {
						iconName = focused ? 'heart' : 'heart-outline';
					} else if (route.name === 'Reserve') {
						iconName = focused ? 'calendar' : 'calendar-outline';
					} else if (route.name === 'Add Shot') {
						iconName = focused ? 'add-circle' : 'add-circle-outline';
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person' : 'person-outline';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Screen name='Caddie' options={{ headerShown: false }}>
				{(props) => (
					<ClubPickerScreen
						// shotWeightedAverage={shotWeightedAverage}
						calculateWeightedAverage={calculateWeightedAverage}
						setClubSelected={setClubSelected}
						clubsInMyBag2={clubsInMyBag2}
						calculateStats={calculateStats}
						shotMeanFunction100={shotMeanFunction100}
						// Clubs
						// Woods
						driver100Data={driver100Data}
						setDriver100Data={setDriver100Data}
						driver75Data={driver75Data}
						setDriver75Data={setDriver75Data}
						threeWood100Data={threeWood100Data}
						setThreeWood100Data={setThreeWood100Data}
						threeWood75Data={threeWood75Data}
						setThreeWood75Data={setThreeWood75Data}
						fiveWood100Data={fiveWood100Data}
						setFiveWood100Data={setFiveWood100Data}
						fiveWood75Data={fiveWood75Data}
						setFiveWood75Data={setFiveWood75Data}
						sevenWood100Data={sevenWood100Data}
						setSevenWood100Data={setSevenWood100Data}
						sevenWood75Data={sevenWood75Data}
						setSevenWood75Data={setSevenWood75Data}
						// Hybrids
						// Two Hybrid
						twoHybrid100Data={twoHybrid100Data}
						setTwoHybrid100Data={setTwoHybrid100Data}
						twoHybrid75Data={twoHybrid75Data}
						setTwoHybrid75Data={setTwoHybrid75Data}
						// Three Hybrid
						threeHybrid100Data={threeHybrid100Data}
						setThreeHybrid100Data={setThreeHybrid100Data}
						threeHybrid75Data={threeHybrid75Data}
						setThreeHybrid75Data={setThreeHybrid75Data}
						// Four Hybrid
						fourHybrid100Data={fourHybrid100Data}
						setFourHybrid100Data={setFourHybrid100Data}
						fourHybrid75Data={fourHybrid75Data}
						setFourHybrid75Data={setFourHybrid75Data}
						// Five Hybrid
						fiveHybrid100Data={fiveHybrid100Data}
						setFiveHybrid100Data={setFiveHybrid100Data}
						fiveHybrid75Data={fiveHybrid75Data}
						setFiveHybrid75Data={setFiveHybrid75Data}
						// Six Hybrid
						sixHybrid100Data={sixHybrid100Data}
						setSixHybrid100Data={setSixHybrid100Data}
						sixHybrid75Data={sixHybrid75Data}
						setSixHybrid75Data={setSixHybrid75Data}
						// Seven Hybrid
						sevenHybrid100Data={sevenHybrid100Data}
						setSevenHybrid100Data={setSevenHybrid100Data}
						sevenHybrid75Data={sevenHybrid75Data}
						setSevenHybrid75Data={setSevenHybrid75Data}
						// Irons
						// Two Iron
						twoIron100Data={twoIron100Data}
						setTwoIron100Data={setTwoIron100Data}
						twoIron75Data={twoIron75Data}
						setTwoIron75Data={setTwoIron75Data}
						twoIron50Data={twoIron50Data}
						setTwoIron50Data={setTwoIron50Data}
						twoIron25Data={twoIron25Data}
						setTwoIron25Data={setTwoIron25Data}
						// Three Iron
						threeIron100Data={threeIron100Data}
						setThreeIron100Data={setThreeIron100Data}
						threeIron75Data={threeIron75Data}
						setThreeIron75Data={setThreeIron75Data}
						threeIron50Data={threeIron50Data}
						setThreeIron50Data={setThreeIron50Data}
						threeIron25Data={threeIron25Data}
						setThreeIron25Data={setThreeIron25Data}
						// Four Iron
						fourIron100Data={fourIron100Data}
						setFourIron100Data={setFourIron100Data}
						fourIron75Data={fourIron75Data}
						setFourIron75Data={setFourIron75Data}
						fourIron50Data={fourIron50Data}
						setFourIron50Data={setFourIron50Data}
						fourIron25Data={fourIron25Data}
						setFourIron25Data={setFourIron25Data}
						// Five Iron
						fiveIron100Data={fiveIron100Data}
						setFiveIron100Data={setFiveIron100Data}
						fiveIron75Data={fiveIron75Data}
						setFiveIron75Data={setFiveIron75Data}
						fiveIron50Data={fiveIron50Data}
						setFiveIron50Data={setFiveIron50Data}
						fiveIron25Data={fiveIron25Data}
						setFiveIron25Data={setFiveIron25Data}
						// Six Iron
						sixIron100Data={sixIron100Data}
						setSixIron100Data={setSixIron100Data}
						sixIron75Data={sixIron75Data}
						setSixIron75Data={setSixIron75Data}
						sixIron50Data={sixIron50Data}
						setSixIron50Data={setSixIron50Data}
						sixIron25Data={sixIron25Data}
						setSixIron25Data={setSixIron25Data}
						// Seven Iron
						sevenIron100Data={sevenIron100Data}
						setSevenIron100Data={setSevenIron100Data}
						sevenIron75Data={sevenIron75Data}
						setSevenIron75Data={setSevenIron75Data}
						sevenIron50Data={sevenIron50Data}
						setSevenIron50Data={setSevenIron50Data}
						sevenIron25Data={sevenIron25Data}
						setSevenIron25Data={setSevenIron25Data}
						// Eight Iron
						eightIron100Data={eightIron100Data}
						setEightIron100Data={setEightIron100Data}
						eightIron75Data={eightIron75Data}
						setEightIron75Data={setEightIron75Data}
						eightIron50Data={eightIron50Data}
						setEightIron50Data={setEightIron50Data}
						eightIron25Data={eightIron25Data}
						setEightIron25Data={setEightIron25Data}
						// Nine Iron
						nineIron100Data={nineIron100Data}
						setNineIron100Data={setNineIron100Data}
						nineIron75Data={nineIron75Data}
						setNineIron75Data={setNineIron75Data}
						nineIron50Data={nineIron50Data}
						setNineIron50Data={setNineIron50Data}
						nineIron25Data={nineIron25Data}
						setNineIron25Data={setNineIron25Data}
						// Wedges
						// Pitching Wedge
						pWedge100Data={pWedge100Data}
						setPWedge100Data={setPWedge100Data}
						pWedge75Data={pWedge75Data}
						setPWedge75Data={setPWedge75Data}
						pWedge50Data={pWedge50Data}
						setPWedge50Data={setPWedge50Data}
						pWedge25Data={pWedge25Data}
						setPWedge25Data={setPWedge25Data}
						// Forty8 Wedge
						forty8Wedge100Data={forty8Wedge100Data}
						setForty8Wedge100Data={setForty8Wedge100Data}
						forty8Wedge75Data={forty8Wedge75Data}
						setForty8Wedge75Data={setForty8Wedge75Data}
						forty8Wedge50Data={forty8Wedge50Data}
						setForty8Wedge50Data={setForty8Wedge50Data}
						forty8Wedge25Data={forty8Wedge25Data}
						setForty8Wedge25Data={setForty8Wedge25Data}
						// Fifty Wedge
						fiftyWedge100Data={fiftyWedge100Data}
						setFiftyWedge100Data={setFiftyWedge100Data}
						fiftyWedge75Data={fiftyWedge75Data}
						setFiftyWedge75Data={setFiftyWedge75Data}
						fiftyWedge50Data={fiftyWedge50Data}
						setFiftyWedge50Data={setFiftyWedge50Data}
						fiftyWedge25Data={fiftyWedge25Data}
						setFiftyWedge25Data={setFiftyWedge25Data}
						// Fifty2 Wedge
						fifty2Wedge100Data={fifty2Wedge100Data}
						setFifty2Wedge100Data={setFifty2Wedge100Data}
						fifty2Wedge75Data={fifty2Wedge75Data}
						setFifty2Wedge75Data={setFifty2Wedge75Data}
						fifty2Wedge50Data={fifty2Wedge50Data}
						setFifty2Wedge50Data={setFifty2Wedge50Data}
						fifty2Wedge25Data={fifty2Wedge25Data}
						setFifty2Wedge25Data={setFifty2Wedge25Data}
						// Fifty4 Wedge
						fifty4Wedge100Data={fifty4Wedge100Data}
						setFifty4Wedge100Data={setFifty4Wedge100Data}
						fifty4Wedge75Data={fifty4Wedge75Data}
						setFifty4Wedge75Data={setFifty4Wedge75Data}
						fifty4Wedge50Data={fifty4Wedge50Data}
						setFifty4Wedge50Data={setFifty4Wedge50Data}
						fifty4Wedge25Data={fifty4Wedge25Data}
						setFifty4Wedge25Data={setFifty4Wedge25Data}
						// Fifty6 Wedge
						fifty6Wedge100Data={fifty6Wedge100Data}
						setFifty6Wedge100Data={setFifty6Wedge100Data}
						fifty6Wedge75Data={fifty6Wedge75Data}
						setFifty6Wedge75Data={setFifty6Wedge75Data}
						fifty6Wedge50Data={fifty6Wedge50Data}
						setFifty6Wedge50Data={setFifty6Wedge50Data}
						fifty6Wedge25Data={fifty6Wedge25Data}
						setFifty6Wedge25Data={setFifty6Wedge25Data}
						// Fifty8 Wedge
						fifty8Wedge100Data={fifty8Wedge100Data}
						setFifty8Wedge100Data={setFifty8Wedge100Data}
						fifty8Wedge75Data={fifty8Wedge75Data}
						setFifty8Wedge75Data={setFifty8Wedge75Data}
						fifty8Wedge50Data={fifty8Wedge50Data}
						setFifty8Wedge50Data={setFifty8Wedge50Data}
						fifty8Wedge25Data={fifty8Wedge25Data}
						setFifty8Wedge25Data={setFifty8Wedge25Data}
						// Sixty Wedge
						sixtyWedge100Data={sixtyWedge100Data}
						setSixtyWedge100Data={setSixtyWedge100Data}
						sixtyWedge75Data={sixtyWedge75Data}
						setSixtyWedge75Data={setSixtyWedge75Data}
						sixtyWedge50Data={sixtyWedge50Data}
						setSixtyWedge50Data={setSixtyWedge50Data}
						sixtyWedge25Data={sixtyWedge25Data}
						setSixtyWedge25Data={setSixtyWedge25Data}
						{...props}
					/>
				)}
			</Tab.Screen>
			{/* <Tab.Screen name="MyBag" component={MyBagScreen} options={{ headerShown: false }} /> */}
			<Tab.Screen name='MyBag' options={{ headerShown: false }}>
				{(props) => (
					<MyBagScreen
						//Driver
						driver100Data={driver100Data}
						setDriver100Data={setDriver100Data}
						driver75Data={driver75Data}
						setDriver75Data={setDriver75Data}
						// Shot Totals
						driverShotCounter100={driverShotCounter100}
						setDriverShotCounter100={setDriverShotCounter100}
						driverShotCounter75={driverShotCounter75}
						setDriverShotCounter75={setDriverShotCounter75}
						// Historical Average
						historicalAverageDriver100={historicalAverageDriver100}
						setHistoricalAverageDriver100={setHistoricalAverageDriver100}
						historicalAverageDriver75={historicalAverageDriver75}
						setHistoricalAverageDriver75={setHistoricalAverageDriver75}
						// Variance
						highVarianceDriver100={highVarianceDriver100}
						setHighVarianceDriver100={setHighVarianceDriver100}
						highVarianceDriver75={highVarianceDriver75}
						setHighVarianceDriver75={setHighVarianceDriver75}
						lowVarianceDriver100={lowVarianceDriver100}
						setLowVarianceDriver100={setLowVarianceDriver100}
						lowVarianceDriver75={lowVarianceDriver75}
						setLowVarianceDriver75={setLowVarianceDriver75}
						// Three Wood
						threeWood100Data={threeWood100Data}
						setThreeWood100Data={setThreeWood100Data}
						threeWood75Data={threeWood75Data}
						setThreeWood75Data={setThreeWood75Data}
						// Shot Totals
						threeWoodShotCounter100={threeWoodShotCounter100}
						setThreeWoodShotCounter100={setThreeWoodShotCounter100}
						threeWoodShotCounter75={threeWoodShotCounter75}
						setThreeWoodShotCounter75={setThreeWoodShotCounter75}
						// Historical Average
						historicalAverageThreeWood100={historicalAverageThreeWood100}
						setHistoricalAverageThreeWood100={setHistoricalAverageThreeWood100}
						historicalAverageThreeWood75={historicalAverageThreeWood75}
						setHistoricalAverageThreeWood75={setHistoricalAverageThreeWood75}
						// Variance
						highVarianceThreeWood100={highVarianceThreeWood100}
						setHighVarianceThreeWood100={setHighVarianceThreeWood100}
						highVarianceThreeWood75={highVarianceThreeWood75}
						setHighVarianceThreeWood75={setHighVarianceThreeWood75}
						lowVarianceThreeWood100={lowVarianceThreeWood100}
						setLowVarianceThreeWood100={setLowVarianceThreeWood100}
						lowVarianceThreeWood75={lowVarianceThreeWood75}
						setLowVarianceThreeWood75={setLowVarianceThreeWood75}
						// Five Wood
						fiveWood100Data={fiveWood100Data}
						setFiveWood100Data={setFiveWood100Data}
						fiveWood75Data={fiveWood75Data}
						setFiveWood75Data={setFiveWood75Data}
						// Shot Totals
						fiveWoodShotCounter100={fiveWoodShotCounter100}
						setFiveWoodShotCounter100={setFiveWoodShotCounter100}
						fiveWoodShotCounter75={fiveWoodShotCounter75}
						setFiveWoodShotCounter75={setFiveWoodShotCounter75}
						// Historical Average
						historicalAverageFiveWood100={historicalAverageFiveWood100}
						setHistoricalAverageFiveWood100={setHistoricalAverageFiveWood100}
						historicalAverageFiveWood75={historicalAverageFiveWood75}
						setHistoricalAverageFiveWood75={setHistoricalAverageFiveWood75}
						// Variance
						highVarianceFiveWood100={highVarianceFiveWood100}
						setHighVarianceFiveWood100={setHighVarianceFiveWood100}
						highVarianceFiveWood75={highVarianceFiveWood75}
						setHighVarianceFiveWood75={setHighVarianceFiveWood75}
						lowVarianceFiveWood100={lowVarianceFiveWood100}
						setLowVarianceFiveWood100={setLowVarianceFiveWood100}
						lowVarianceFiveWood75={lowVarianceFiveWood75}
						setLowVarianceFiveWood75={setLowVarianceFiveWood75}
						// Seven Wood
						sevenWood100Data={sevenWood100Data}
						setSevenWood100Data={setSevenWood100Data}
						sevenWood75Data={sevenWood75Data}
						setSevenWood75Data={setSevenWood75Data}
						// Shot Totals
						sevenWoodShotCounter100={sevenWoodShotCounter100}
						setSevenWoodShotCounter100={setSevenWoodShotCounter100}
						sevenWoodShotCounter75={sevenWoodShotCounter75}
						setSevenWoodShotCounter75={setSevenWoodShotCounter75}
						// Historical Average
						historicalAverageSevenWood100={historicalAverageSevenWood100}
						setHistoricalAverageSevenWood100={setHistoricalAverageSevenWood100}
						historicalAverageSevenWood75={historicalAverageSevenWood75}
						setHistoricalAverageSevenWood75={setHistoricalAverageSevenWood75}
						// Variance
						highVarianceSevenWood100={highVarianceSevenWood100}
						setHighVarianceSevenWood100={setHighVarianceSevenWood100}
						highVarianceSevenWood75={highVarianceSevenWood75}
						setHighVarianceSevenWood75={setHighVarianceSevenWood75}
						lowVarianceSevenWood100={lowVarianceSevenWood100}
						setLowVarianceSevenWood100={setLowVarianceSevenWood100}
						lowVarianceSevenWood75={lowVarianceSevenWood75}
						setLowVarianceSevenWood75={setLowVarianceSevenWood75}
						// Hybrids
						// Two Hybrid
						twoHybrid100Data={twoHybrid100Data}
						setTwoHybrid100Data={setTwoHybrid100Data}
						twoHybrid75Data={twoHybrid75Data}
						setTwoHybrid75Data={setTwoHybrid75Data}
						// Shot Totals
						twoHybridShotCounter100={twoHybridShotCounter100}
						setTwoHybridShotCounter100={setTwoHybridShotCounter100}
						twoHybridShotCounter75={twoHybridShotCounter75}
						setTwoHybridShotCounter75={setTwoHybridShotCounter75}
						// Historical Average
						historicalAverageTwoHybrid100={historicalAverageTwoHybrid100}
						setHistoricalAverageTwoHybrid100={setHistoricalAverageTwoHybrid100}
						historicalAverageTwoHybrid75={historicalAverageTwoHybrid75}
						setHistoricalAverageTwoHybrid75={setHistoricalAverageTwoHybrid75}
						// Variance
						highVarianceTwoHybrid100={highVarianceTwoHybrid100}
						setHighVarianceTwoHybrid100={setHighVarianceTwoHybrid100}
						highVarianceTwoHybrid75={highVarianceTwoHybrid75}
						setHighVarianceTwoHybrid75={setHighVarianceTwoHybrid75}
						lowVarianceTwoHybrid100={lowVarianceTwoHybrid100}
						setLowVarianceTwoHybrid100={setLowVarianceTwoHybrid100}
						lowVarianceTwoHybrid75={lowVarianceTwoHybrid75}
						setLowVarianceTwoHybrid75={setLowVarianceTwoHybrid75}
						// Three Hybrid
						threeHybrid100Data={threeHybrid100Data}
						setThreeHybrid100Data={setThreeHybrid100Data}
						threeHybrid75Data={threeHybrid75Data}
						setThreeHybrid75Data={setThreeHybrid75Data}
						// Shot Totals
						threeHybridShotCounter100={threeHybridShotCounter100}
						setThreeHybridShotCounter100={setThreeHybridShotCounter100}
						threeHybridShotCounter75={threeHybridShotCounter75}
						setThreeHybridShotCounter75={setThreeHybridShotCounter75}
						// Historical Average
						historicalAverageThreeHybrid100={historicalAverageThreeHybrid100}
						setHistoricalAverageThreeHybrid100={
							setHistoricalAverageThreeHybrid100
						}
						historicalAverageThreeHybrid75={historicalAverageThreeHybrid75}
						setHistoricalAverageThreeHybrid75={
							setHistoricalAverageThreeHybrid75
						}
						// Variance
						highVarianceThreeHybrid100={highVarianceThreeHybrid100}
						setHighVarianceThreeHybrid100={setHighVarianceThreeHybrid100}
						highVarianceThreeHybrid75={highVarianceThreeHybrid75}
						setHighVarianceThreeHybrid75={setHighVarianceThreeHybrid75}
						lowVarianceThreeHybrid100={lowVarianceThreeHybrid100}
						setLowVarianceThreeHybrid100={setLowVarianceThreeHybrid100}
						lowVarianceThreeHybrid75={lowVarianceThreeHybrid75}
						setLowVarianceThreeHybrid75={setLowVarianceThreeHybrid75}
						// Four Hybrid
						fourHybrid100Data={fourHybrid100Data}
						setFourHybrid100Data={setFourHybrid100Data}
						fourHybrid75Data={fourHybrid75Data}
						setFourHybrid75Data={setFourHybrid75Data}
						// Shot Totals
						fourHybridShotCounter100={fourHybridShotCounter100}
						setFourHybridShotCounter100={setFourHybridShotCounter100}
						fourHybridShotCounter75={fourHybridShotCounter75}
						setFourHybridShotCounter75={setFourHybridShotCounter75}
						// Historical Average
						historicalAverageFourHybrid100={historicalAverageFourHybrid100}
						setHistoricalAverageFourHybrid100={
							setHistoricalAverageFourHybrid100
						}
						historicalAverageFourHybrid75={historicalAverageFourHybrid75}
						setHistoricalAverageFourHybrid75={setHistoricalAverageFourHybrid75}
						// Variance
						highVarianceFourHybrid100={highVarianceFourHybrid100}
						setHighVarianceFourHybrid100={setHighVarianceFourHybrid100}
						highVarianceFourHybrid75={highVarianceFourHybrid75}
						setHighVarianceFourHybrid75={setHighVarianceFourHybrid75}
						lowVarianceFourHybrid100={lowVarianceFourHybrid100}
						setLowVarianceFourHybrid100={setLowVarianceFourHybrid100}
						lowVarianceFourHybrid75={lowVarianceFourHybrid75}
						setLowVarianceFourHybrid75={setLowVarianceFourHybrid75}
						// Five Hybrid
						fiveHybrid100Data={fiveHybrid100Data}
						setFiveHybrid100Data={setFiveHybrid100Data}
						fiveHybrid75Data={fiveHybrid75Data}
						setFiveHybrid75Data={setFiveHybrid75Data}
						// Shot Totals
						fiveHybridShotCounter100={fiveHybridShotCounter100}
						setFiveHybridShotCounter100={setFiveHybridShotCounter100}
						fiveHybridShotCounter75={fiveHybridShotCounter75}
						setFiveHybridShotCounter75={setFiveHybridShotCounter75}
						// Historical Average
						historicalAverageFiveHybrid100={historicalAverageFiveHybrid100}
						setHistoricalAverageFiveHybrid100={
							setHistoricalAverageFiveHybrid100
						}
						historicalAverageFiveHybrid75={historicalAverageFiveHybrid75}
						setHistoricalAverageFiveHybrid75={setHistoricalAverageFiveHybrid75}
						// Variance
						highVarianceFiveHybrid100={highVarianceFiveHybrid100}
						setHighVarianceFiveHybrid100={setHighVarianceFiveHybrid100}
						highVarianceFiveHybrid75={highVarianceFiveHybrid75}
						setHighVarianceFiveHybrid75={setHighVarianceFiveHybrid75}
						lowVarianceFiveHybrid100={lowVarianceFiveHybrid100}
						setLowVarianceFiveHybrid100={setLowVarianceFiveHybrid100}
						lowVarianceFiveHybrid75={lowVarianceFiveHybrid75}
						setLowVarianceFiveHybrid75={setLowVarianceFiveHybrid75}
						// Six Hybrid
						sixHybrid100Data={sixHybrid100Data}
						setSixHybrid100Data={setSixHybrid100Data}
						sixHybrid75Data={sixHybrid75Data}
						setSixHybrid75Data={setSixHybrid75Data}
						// Shot Totals
						sixHybridShotCounter100={sixHybridShotCounter100}
						setSixHybridShotCounter100={setSixHybridShotCounter100}
						sixHybridShotCounter75={sixHybridShotCounter75}
						setSixHybridShotCounter75={setSixHybridShotCounter75}
						// Historical Average
						historicalAverageSixHybrid100={historicalAverageSixHybrid100}
						setHistoricalAverageSixHybrid100={setHistoricalAverageSixHybrid100}
						historicalAverageSixHybrid75={historicalAverageSixHybrid75}
						setHistoricalAverageSixHybrid75={setHistoricalAverageSixHybrid75}
						// Variance
						highVarianceSixHybrid100={highVarianceSixHybrid100}
						setHighVarianceSixHybrid100={setHighVarianceSixHybrid100}
						highVarianceSixHybrid75={highVarianceSixHybrid75}
						setHighVarianceSixHybrid75={setHighVarianceSixHybrid75}
						lowVarianceSixHybrid100={lowVarianceSixHybrid100}
						setLowVarianceSixHybrid100={setLowVarianceSixHybrid100}
						lowVarianceSixHybrid75={lowVarianceSixHybrid75}
						setLowVarianceSixHybrid75={setLowVarianceSixHybrid75}
						// Seven Hybrid
						sevenHybrid100Data={sevenHybrid100Data}
						setSevenHybrid100Data={setSevenHybrid100Data}
						sevenHybrid75Data={sevenHybrid75Data}
						setSevenHybrid75Data={setSevenHybrid75Data}
						// Shot Totals
						sevenHybridShotCounter100={sevenHybridShotCounter100}
						setSevenHybridShotCounter100={setSevenHybridShotCounter100}
						sevenHybridShotCounter75={sevenHybridShotCounter75}
						setSevenHybridShotCounter75={setSevenHybridShotCounter75}
						// Historical Average
						historicalAverageSevenHybrid100={historicalAverageSevenHybrid100}
						setHistoricalAverageSevenHybrid100={
							setHistoricalAverageSevenHybrid100
						}
						historicalAverageSevenHybrid75={historicalAverageSevenHybrid75}
						setHistoricalAverageSevenHybrid75={
							setHistoricalAverageSevenHybrid75
						}
						// Variance
						highVarianceSevenHybrid100={highVarianceSevenHybrid100}
						setHighVarianceSevenHybrid100={setHighVarianceSevenHybrid100}
						highVarianceSevenHybrid75={highVarianceSevenHybrid75}
						setHighVarianceSevenHybrid75={setHighVarianceSevenHybrid75}
						lowVarianceSevenHybrid100={lowVarianceSevenHybrid100}
						setLowVarianceSevenHybrid100={setLowVarianceSevenHybrid100}
						lowVarianceSevenHybrid75={lowVarianceSevenHybrid75}
						setLowVarianceSevenHybrid75={setLowVarianceSevenHybrid75}
						// Irons
						// Two Iron
						twoIron100Data={twoIron100Data}
						setTwoIron100Data={setTwoIron100Data}
						twoIron75Data={twoIron75Data}
						setTwoIron75Data={setTwoIron75Data}
						twoIron50Data={twoIron50Data}
						setTwoIron50Data={setTwoIron50Data}
						twoIron25Data={twoIron25Data}
						setTwoIron25Data={setTwoIron25Data}
						// Shot Totals
						twoIronShotCounter100={twoIronShotCounter100}
						setTwoIronShotCounter100={setTwoIronShotCounter100}
						twoIronShotCounter75={twoIronShotCounter75}
						setTwoIronShotCounter75={setTwoIronShotCounter75}
						twoIronShotCounter50={twoIronShotCounter50}
						setTwoIronShotCounter50={setTwoIronShotCounter50}
						twoIronShotCounter25={twoIronShotCounter25}
						setTwoIronShotCounter25={setTwoIronShotCounter25}
						// Historical Value
						historicalAverageTwoIron100={historicalAverageTwoIron100}
						setHistoricalAverageTwoIron100={setHistoricalAverageTwoIron100}
						historicalAverageTwoIron75={historicalAverageTwoIron75}
						setHistoricalAverageTwoIron75={setHistoricalAverageTwoIron75}
						historicalAverageTwoIron50={historicalAverageTwoIron50}
						setHistoricalAverageTwoIron50={setHistoricalAverageTwoIron50}
						historicalAverageTwoIron25={historicalAverageTwoIron25}
						setHistoricalAverageTwoIron25={setHistoricalAverageTwoIron25}
						// Variance
						highVarianceTwoIron100={highVarianceTwoIron100}
						setHighVarianceTwoIron100={setHighVarianceTwoIron100}
						highVarianceTwoIron75={highVarianceTwoIron75}
						setHighVarianceTwoIron75={setHighVarianceTwoIron75}
						highVarianceTwoIron50={highVarianceTwoIron50}
						setHighVarianceTwoIron50={setHighVarianceTwoIron50}
						highVarianceTwoIron25={highVarianceTwoIron25}
						setHighVarianceTwoIron25={setHighVarianceTwoIron25}
						lowVarianceTwoIron100={lowVarianceTwoIron100}
						setLowVarianceTwoIron100={setLowVarianceTwoIron100}
						lowVarianceTwoIron75={lowVarianceTwoIron75}
						setLowVarianceTwoIron75={setLowVarianceTwoIron75}
						lowVarianceTwoIron50={lowVarianceTwoIron50}
						setLowVarianceTwoIron50={setLowVarianceTwoIron50}
						lowVarianceTwoIron25={lowVarianceTwoIron25}
						setLowVarianceTwoIron25={setLowVarianceTwoIron25}
						// Three Iron
						threeIron100Data={threeIron100Data}
						setThreeIron100Data={setThreeIron100Data}
						threeIron75Data={threeIron75Data}
						setThreeIron75Data={setThreeIron75Data}
						threeIron50Data={threeIron50Data}
						setThreeIron50Data={setThreeIron50Data}
						threeIron25Data={threeIron25Data}
						setThreeIron25Data={setThreeIron25Data}
						// Shot Totals
						threeIronShotCounter100={threeIronShotCounter100}
						setThreeIronShotCounter100={setThreeIronShotCounter100}
						threeIronShotCounter75={threeIronShotCounter75}
						setThreeIronShotCounter75={setThreeIronShotCounter75}
						threeIronShotCounter50={threeIronShotCounter50}
						setThreeIronShotCounter50={setThreeIronShotCounter50}
						threeIronShotCounter25={threeIronShotCounter25}
						setThreeIronShotCounter25={setThreeIronShotCounter25}
						// Historical Value
						historicalAverageThreeIron100={historicalAverageThreeIron100}
						setHistoricalAverageThreeIron100={setHistoricalAverageThreeIron100}
						historicalAverageThreeIron75={historicalAverageThreeIron75}
						setHistoricalAverageThreeIron75={setHistoricalAverageThreeIron75}
						historicalAverageThreeIron50={historicalAverageThreeIron50}
						setHistoricalAverageThreeIron50={setHistoricalAverageThreeIron50}
						historicalAverageThreeIron25={historicalAverageThreeIron25}
						setHistoricalAverageThreeIron25={setHistoricalAverageThreeIron25}
						// Variance
						highVarianceThreeIron100={highVarianceThreeIron100}
						setHighVarianceThreeIron100={setHighVarianceThreeIron100}
						highVarianceThreeIron75={highVarianceThreeIron75}
						setHighVarianceThreeIron75={setHighVarianceThreeIron75}
						highVarianceThreeIron50={highVarianceThreeIron50}
						setHighVarianceThreeIron50={setHighVarianceThreeIron50}
						highVarianceThreeIron25={highVarianceThreeIron25}
						setHighVarianceThreeIron25={setHighVarianceThreeIron25}
						lowVarianceThreeIron100={lowVarianceThreeIron100}
						setLowVarianceThreeIron100={setLowVarianceThreeIron100}
						lowVarianceThreeIron75={lowVarianceThreeIron75}
						setLowVarianceThreeIron75={setLowVarianceThreeIron75}
						lowVarianceThreeIron50={lowVarianceThreeIron50}
						setLowVarianceThreeIron50={setLowVarianceThreeIron50}
						lowVarianceThreeIron25={lowVarianceThreeIron25}
						setLowVarianceThreeIron25={setLowVarianceThreeIron25}
						// Four Iron
						fourIron100Data={fourIron100Data}
						setFourIron100Data={setFourIron100Data}
						fourIron75Data={fourIron75Data}
						setFourIron75Data={setFourIron75Data}
						fourIron50Data={fourIron50Data}
						setFourIron50Data={setFourIron50Data}
						fourIron25Data={fourIron25Data}
						setFourIron25Data={setFourIron25Data}
						// Shot Totals
						fourIronShotCounter100={fourIronShotCounter100}
						setFourIronShotCounter100={setFourIronShotCounter100}
						fourIronShotCounter75={fourIronShotCounter75}
						setFourIronShotCounter75={setFourIronShotCounter75}
						fourIronShotCounter50={fourIronShotCounter50}
						setFourIronShotCounter50={setFourIronShotCounter50}
						fourIronShotCounter25={fourIronShotCounter25}
						setFourIronShotCounter25={setFourIronShotCounter25}
						// Historical Value
						historicalAverageFourIron100={historicalAverageFourIron100}
						setHistoricalAverageFourIron100={setHistoricalAverageFourIron100}
						historicalAverageFourIron75={historicalAverageFourIron75}
						setHistoricalAverageFourIron75={setHistoricalAverageFourIron75}
						historicalAverageFourIron50={historicalAverageFourIron50}
						setHistoricalAverageFourIron50={setHistoricalAverageFourIron50}
						historicalAverageFourIron25={historicalAverageFourIron25}
						setHistoricalAverageFourIron25={setHistoricalAverageFourIron25}
						// Variance
						highVarianceFourIron100={highVarianceFourIron100}
						setHighVarianceFourIron100={setHighVarianceFourIron100}
						highVarianceFourIron75={highVarianceFourIron75}
						setHighVarianceFourIron75={setHighVarianceFourIron75}
						highVarianceFourIron50={highVarianceFourIron50}
						setHighVarianceFourIron50={setHighVarianceFourIron50}
						highVarianceFourIron25={highVarianceFourIron25}
						setHighVarianceFourIron25={setHighVarianceFourIron25}
						lowVarianceFourIron100={lowVarianceFourIron100}
						setLowVarianceFourIron100={setLowVarianceFourIron100}
						lowVarianceFourIron75={lowVarianceFourIron75}
						setLowVarianceFourIron75={setLowVarianceFourIron75}
						lowVarianceFourIron50={lowVarianceFourIron50}
						setLowVarianceFourIron50={setLowVarianceFourIron50}
						lowVarianceFourIron25={lowVarianceFourIron25}
						setLowVarianceFourIron25={setLowVarianceFourIron25}
						// Five Iron
						fiveIron100Data={fiveIron100Data}
						setFiveIron100Data={setFiveIron100Data}
						fiveIron75Data={fiveIron75Data}
						setFiveIron75Data={setFiveIron75Data}
						fiveIron50Data={fiveIron50Data}
						setFiveIron50Data={setFiveIron50Data}
						fiveIron25Data={fiveIron25Data}
						setFiveIron25Data={setFiveIron25Data}
						// Shot Totals
						fiveIronShotCounter100={fiveIronShotCounter100}
						setFiveIronShotCounter100={setFiveIronShotCounter100}
						fiveIronShotCounter75={fiveIronShotCounter75}
						setFiveIronShotCounter75={setFiveIronShotCounter75}
						fiveIronShotCounter50={fiveIronShotCounter50}
						setFiveIronShotCounter50={setFiveIronShotCounter50}
						fiveIronShotCounter25={fiveIronShotCounter25}
						setFiveIronShotCounter25={setFiveIronShotCounter25}
						// Historical Value
						historicalAverageFiveIron100={historicalAverageFiveIron100}
						setHistoricalAverageFiveIron100={setHistoricalAverageFiveIron100}
						historicalAverageFiveIron75={historicalAverageFiveIron75}
						setHistoricalAverageFiveIron75={setHistoricalAverageFiveIron75}
						historicalAverageFiveIron50={historicalAverageFiveIron50}
						setHistoricalAverageFiveIron50={setHistoricalAverageFiveIron50}
						historicalAverageFiveIron25={historicalAverageFiveIron25}
						setHistoricalAverageFiveIron25={setHistoricalAverageFiveIron25}
						// Variance
						highVarianceFiveIron100={highVarianceFiveIron100}
						setHighVarianceFiveIron100={setHighVarianceFiveIron100}
						highVarianceFiveIron75={highVarianceFiveIron75}
						setHighVarianceFiveIron75={setHighVarianceFiveIron75}
						highVarianceFiveIron50={highVarianceFiveIron50}
						setHighVarianceFiveIron50={setHighVarianceFiveIron50}
						highVarianceFiveIron25={highVarianceFiveIron25}
						setHighVarianceFiveIron25={setHighVarianceFiveIron25}
						lowVarianceFiveIron100={lowVarianceFiveIron100}
						setLowVarianceFiveIron100={setLowVarianceFiveIron100}
						lowVarianceFiveIron75={lowVarianceFiveIron75}
						setLowVarianceFiveIron75={setLowVarianceFiveIron75}
						lowVarianceFiveIron50={lowVarianceFiveIron50}
						setLowVarianceFiveIron50={setLowVarianceFiveIron50}
						lowVarianceFiveIron25={lowVarianceFiveIron25}
						setLowVarianceFiveIron25={setLowVarianceFiveIron25}
						// Six Iron
						sixIron100Data={sixIron100Data}
						setSixIron100Data={setSixIron100Data}
						sixIron75Data={sixIron75Data}
						setSixIron75Data={setSixIron75Data}
						sixIron50Data={sixIron50Data}
						setSixIron50Data={setSixIron50Data}
						sixIron25Data={sixIron25Data}
						setSixIron25Data={setSixIron25Data}
						// Shot Totals
						sixIronShotCounter100={sixIronShotCounter100}
						setSixIronShotCounter100={setSixIronShotCounter100}
						sixIronShotCounter75={sixIronShotCounter75}
						setSixIronShotCounter75={setSixIronShotCounter75}
						sixIronShotCounter50={sixIronShotCounter50}
						setSixIronShotCounter50={setSixIronShotCounter50}
						sixIronShotCounter25={sixIronShotCounter25}
						setSixIronShotCounter25={setSixIronShotCounter25}
						// Historical Value
						historicalAverageSixIron100={historicalAverageSixIron100}
						setHistoricalAverageSixIron100={setHistoricalAverageSixIron100}
						historicalAverageSixIron75={historicalAverageSixIron75}
						setHistoricalAverageSixIron75={setHistoricalAverageSixIron75}
						historicalAverageSixIron50={historicalAverageSixIron50}
						setHistoricalAverageSixIron50={setHistoricalAverageSixIron50}
						historicalAverageSixIron25={historicalAverageSixIron25}
						setHistoricalAverageSixIron25={setHistoricalAverageSixIron25}
						// Variance
						highVarianceSixIron100={highVarianceSixIron100}
						setHighVarianceSixIron100={setHighVarianceSixIron100}
						highVarianceSixIron75={highVarianceSixIron75}
						setHighVarianceSixIron75={setHighVarianceSixIron75}
						highVarianceSixIron50={highVarianceSixIron50}
						setHighVarianceSixIron50={setHighVarianceSixIron50}
						highVarianceSixIron25={highVarianceSixIron25}
						setHighVarianceSixIron25={setHighVarianceSixIron25}
						lowVarianceSixIron100={lowVarianceSixIron100}
						setLowVarianceSixIron100={setLowVarianceSixIron100}
						lowVarianceSixIron75={lowVarianceSixIron75}
						setLowVarianceSixIron75={setLowVarianceSixIron75}
						lowVarianceSixIron50={lowVarianceSixIron50}
						setLowVarianceSixIron50={setLowVarianceSixIron50}
						lowVarianceSixIron25={lowVarianceSixIron25}
						setLowVarianceSixIron25={setLowVarianceSixIron25}
						// Seven Iron
						sevenIron100Data={sevenIron100Data}
						setSevenIron100Data={setSevenIron100Data}
						sevenIron75Data={sevenIron75Data}
						setSevenIron75Data={setSevenIron75Data}
						sevenIron50Data={sevenIron50Data}
						setSevenIron50Data={setSevenIron50Data}
						sevenIron25Data={sevenIron25Data}
						setSevenIron25Data={setSevenIron25Data}
						// Shot Totals
						sevenIronShotCounter100={sevenIronShotCounter100}
						setSevenIronShotCounter100={setSevenIronShotCounter100}
						sevenIronShotCounter75={sevenIronShotCounter75}
						setSevenIronShotCounter75={setSevenIronShotCounter75}
						sevenIronShotCounter50={sevenIronShotCounter50}
						setSevenIronShotCounter50={setSevenIronShotCounter50}
						sevenIronShotCounter25={sevenIronShotCounter25}
						setSevenIronShotCounter25={setSevenIronShotCounter25}
						// Historical Value
						historicalAverageSevenIron100={historicalAverageSevenIron100}
						setHistoricalAverageSevenIron100={setHistoricalAverageSevenIron100}
						historicalAverageSevenIron75={historicalAverageSevenIron75}
						setHistoricalAverageSevenIron75={setHistoricalAverageSevenIron75}
						historicalAverageSevenIron50={historicalAverageSevenIron50}
						setHistoricalAverageSevenIron50={setHistoricalAverageSevenIron50}
						historicalAverageSevenIron25={historicalAverageSevenIron25}
						setHistoricalAverageSevenIron25={setHistoricalAverageSevenIron25}
						// Variance
						highVarianceSevenIron100={highVarianceSevenIron100}
						setHighVarianceSevenIron100={setHighVarianceSevenIron100}
						highVarianceSevenIron75={highVarianceSevenIron75}
						setHighVarianceSevenIron75={setHighVarianceSevenIron75}
						highVarianceSevenIron50={highVarianceSevenIron50}
						setHighVarianceSevenIron50={setHighVarianceSevenIron50}
						highVarianceSevenIron25={highVarianceSevenIron25}
						setHighVarianceSevenIron25={setHighVarianceSevenIron25}
						lowVarianceSevenIron100={lowVarianceSevenIron100}
						setLowVarianceSevenIron100={setLowVarianceSevenIron100}
						lowVarianceSevenIron75={lowVarianceSevenIron75}
						setLowVarianceSevenIron75={setLowVarianceSevenIron75}
						lowVarianceSevenIron50={lowVarianceSevenIron50}
						setLowVarianceSevenIron50={setLowVarianceSevenIron50}
						lowVarianceSevenIron25={lowVarianceSevenIron25}
						setLowVarianceSevenIron25={setLowVarianceSevenIron25}
						// Eight Iron
						eightIron100Data={eightIron100Data}
						setEightIron100Data={setEightIron100Data}
						eightIron75Data={eightIron75Data}
						setEightIron75Data={setEightIron75Data}
						eightIron50Data={eightIron50Data}
						setEightIron50Data={setEightIron50Data}
						eightIron25Data={eightIron25Data}
						setEightIron25Data={setEightIron25Data}
						// Shot Totals
						eightIronShotCounter100={eightIronShotCounter100}
						setEightIronShotCounter100={setEightIronShotCounter100}
						eightIronShotCounter75={eightIronShotCounter75}
						setEightIronShotCounter75={setEightIronShotCounter75}
						eightIronShotCounter50={eightIronShotCounter50}
						setEightIronShotCounter50={setEightIronShotCounter50}
						eightIronShotCounter25={eightIronShotCounter25}
						setEightIronShotCounter25={setEightIronShotCounter25}
						// Historical Value
						historicalAverageEightIron100={historicalAverageEightIron100}
						setHistoricalAverageEightIron100={setHistoricalAverageEightIron100}
						historicalAverageEightIron75={historicalAverageEightIron75}
						setHistoricalAverageEightIron75={setHistoricalAverageEightIron75}
						historicalAverageEightIron50={historicalAverageEightIron50}
						setHistoricalAverageEightIron50={setHistoricalAverageEightIron50}
						historicalAverageEightIron25={historicalAverageEightIron25}
						setHistoricalAverageEightIron25={setHistoricalAverageEightIron25}
						// Variance
						highVarianceEightIron100={highVarianceEightIron100}
						setHighVarianceEightIron100={setHighVarianceEightIron100}
						highVarianceEightIron75={highVarianceEightIron75}
						setHighVarianceEightIron75={setHighVarianceEightIron75}
						highVarianceEightIron50={highVarianceEightIron50}
						setHighVarianceEightIron50={setHighVarianceEightIron50}
						highVarianceEightIron25={highVarianceEightIron25}
						setHighVarianceEightIron25={setHighVarianceEightIron25}
						lowVarianceEightIron100={lowVarianceEightIron100}
						setLowVarianceEightIron100={setLowVarianceEightIron100}
						lowVarianceEightIron75={lowVarianceEightIron75}
						setLowVarianceEightIron75={setLowVarianceEightIron75}
						lowVarianceEightIron50={lowVarianceEightIron50}
						setLowVarianceEightIron50={setLowVarianceEightIron50}
						lowVarianceEightIron25={lowVarianceEightIron25}
						setLowVarianceEightIron25={setLowVarianceEightIron25}
						// Nine Iron
						nineIron100Data={nineIron100Data}
						setNineIron100Data={setNineIron100Data}
						nineIron75Data={nineIron75Data}
						setNineIron75Data={setNineIron75Data}
						nineIron50Data={nineIron50Data}
						setNineIron50Data={setNineIron50Data}
						nineIron25Data={nineIron25Data}
						setNineIron25Data={setNineIron25Data}
						// Shot Totals
						nineIronShotCounter100={nineIronShotCounter100}
						setNineIronShotCounter100={setNineIronShotCounter100}
						nineIronShotCounter75={nineIronShotCounter75}
						setNineIronShotCounter75={setNineIronShotCounter75}
						nineIronShotCounter50={nineIronShotCounter50}
						setNineIronShotCounter50={setNineIronShotCounter50}
						nineIronShotCounter25={nineIronShotCounter25}
						setNineIronShotCounter25={setNineIronShotCounter25}
						// Historical Value
						historicalAverageNineIron100={historicalAverageNineIron100}
						setHistoricalAverageNineIron100={setHistoricalAverageNineIron100}
						historicalAverageNineIron75={historicalAverageNineIron75}
						setHistoricalAverageNineIron75={setHistoricalAverageNineIron75}
						historicalAverageNineIron50={historicalAverageNineIron50}
						setHistoricalAverageNineIron50={setHistoricalAverageNineIron50}
						historicalAverageNineIron25={historicalAverageNineIron25}
						setHistoricalAverageNineIron25={setHistoricalAverageNineIron25}
						// Variance
						highVarianceNineIron100={highVarianceNineIron100}
						setHighVarianceNineIron100={setHighVarianceNineIron100}
						highVarianceNineIron75={highVarianceNineIron75}
						setHighVarianceNineIron75={setHighVarianceNineIron75}
						highVarianceNineIron50={highVarianceNineIron50}
						setHighVarianceNineIron50={setHighVarianceNineIron50}
						highVarianceNineIron25={highVarianceNineIron25}
						setHighVarianceNineIron25={setHighVarianceNineIron25}
						lowVarianceNineIron100={lowVarianceNineIron100}
						setLowVarianceNineIron100={setLowVarianceNineIron100}
						lowVarianceNineIron75={lowVarianceNineIron75}
						setLowVarianceNineIron75={setLowVarianceNineIron75}
						lowVarianceNineIron50={lowVarianceNineIron50}
						setLowVarianceNineIron50={setLowVarianceNineIron50}
						lowVarianceNineIron25={lowVarianceNineIron25}
						setLowVarianceNineIron25={setLowVarianceNineIron25}
						// Wedges
						// Pitching Wedge
						pWedge100Data={pWedge100Data}
						setPWedge100Data={setPWedge100Data}
						pWedge75Data={pWedge75Data}
						setPWedge75Data={setPWedge75Data}
						pWedge50Data={pWedge50Data}
						setPWedge50Data={setPWedge50Data}
						pWedge25Data={pWedge25Data}
						setPWedge25Data={setPWedge25Data}
						// Shot Totals
						pWedgeShotCounter100={pWedgeShotCounter100}
						setPWedgeShotCounter100={setPWedgeShotCounter100}
						pWedgeShotCounter75={pWedgeShotCounter75}
						setPWedgeShotCounter75={setPWedgeShotCounter75}
						pWedgeShotCounter50={pWedgeShotCounter50}
						setPWedgeShotCounter50={setPWedgeShotCounter50}
						pWedgeShotCounter25={pWedgeShotCounter25}
						setPWedgeShotCounter25={setPWedgeShotCounter25}
						// Historical Value
						historicalAveragePWedge100={historicalAveragePWedge100}
						setHistoricalAveragePWedge100={setHistoricalAveragePWedge100}
						historicalAveragePWedge75={historicalAveragePWedge75}
						setHistoricalAveragePWedge75={setHistoricalAveragePWedge75}
						historicalAveragePWedge50={historicalAveragePWedge50}
						setHistoricalAveragePWedge50={setHistoricalAveragePWedge50}
						historicalAveragePWedge25={historicalAveragePWedge25}
						setHistoricalAveragePWedge25={setHistoricalAveragePWedge25}
						// Variance
						highVariancePWedge100={highVariancePWedge100}
						setHighVariancePWedge100={setHighVariancePWedge100}
						highVariancePWedge75={highVariancePWedge75}
						setHighVariancePWedge75={setHighVariancePWedge75}
						highVariancePWedge50={highVariancePWedge50}
						setHighVariancePWedge50={setHighVariancePWedge50}
						highVariancePWedge25={highVariancePWedge25}
						setHighVariancePWedge25={setHighVariancePWedge25}
						lowVariancePWedge100={lowVariancePWedge100}
						setLowVariancePWedge100={setLowVariancePWedge100}
						lowVariancePWedge75={lowVariancePWedge75}
						setLowVariancePWedge75={setLowVariancePWedge75}
						lowVariancePWedge50={lowVariancePWedge50}
						setLowVariancePWedge50={setLowVariancePWedge50}
						lowVariancePWedge25={lowVariancePWedge25}
						setLowVariancePWedge25={setLowVariancePWedge25}
						// Forty8 Wedge
						forty8Wedge100Data={forty8Wedge100Data}
						setForty8Wedge100Data={setForty8Wedge100Data}
						forty8Wedge75Data={forty8Wedge75Data}
						setForty8Wedge75Data={setForty8Wedge75Data}
						forty8Wedge50Data={forty8Wedge50Data}
						setForty8Wedge50Data={setForty8Wedge50Data}
						forty8Wedge25Data={forty8Wedge25Data}
						setForty8Wedge25Data={setForty8Wedge25Data}
						// Shot Totals
						forty8WedgeShotCounter100={forty8WedgeShotCounter100}
						setForty8WedgeShotCounter100={setForty8WedgeShotCounter100}
						forty8WedgeShotCounter75={forty8WedgeShotCounter75}
						setForty8WedgeShotCounter75={setForty8WedgeShotCounter75}
						forty8WedgeShotCounter50={forty8WedgeShotCounter50}
						setForty8WedgeShotCounter50={setForty8WedgeShotCounter50}
						forty8WedgeShotCounter25={forty8WedgeShotCounter25}
						setForty8WedgeShotCounter25={setForty8WedgeShotCounter25}
						// Historical Value
						historicalAverageForty8Wedge100={historicalAverageForty8Wedge100}
						setHistoricalAverageForty8Wedge100={
							setHistoricalAverageForty8Wedge100
						}
						historicalAverageForty8Wedge75={historicalAverageForty8Wedge75}
						setHistoricalAverageForty8Wedge75={
							setHistoricalAverageForty8Wedge75
						}
						historicalAverageForty8Wedge50={historicalAverageForty8Wedge50}
						setHistoricalAverageForty8Wedge50={
							setHistoricalAverageForty8Wedge50
						}
						historicalAverageForty8Wedge25={historicalAverageForty8Wedge25}
						setHistoricalAverageForty8Wedge25={
							setHistoricalAverageForty8Wedge25
						}
						// Variance
						highVarianceForty8Wedge100={highVarianceForty8Wedge100}
						setHighVarianceForty8Wedge100={setHighVarianceForty8Wedge100}
						highVarianceForty8Wedge75={highVarianceForty8Wedge75}
						setHighVarianceForty8Wedge75={setHighVarianceForty8Wedge75}
						highVarianceForty8Wedge50={highVarianceForty8Wedge50}
						setHighVarianceForty8Wedge50={setHighVarianceForty8Wedge50}
						highVarianceForty8Wedge25={highVarianceForty8Wedge25}
						setHighVarianceForty8Wedge25={setHighVarianceForty8Wedge25}
						lowVarianceForty8Wedge100={lowVarianceForty8Wedge100}
						setLowVarianceForty8Wedge100={setLowVarianceForty8Wedge100}
						lowVarianceForty8Wedge75={lowVarianceForty8Wedge75}
						setLowVarianceForty8Wedge75={setLowVarianceForty8Wedge75}
						lowVarianceForty8Wedge50={lowVarianceForty8Wedge50}
						setLowVarianceForty8Wedge50={setLowVarianceForty8Wedge50}
						lowVarianceForty8Wedge25={lowVarianceForty8Wedge25}
						setLowVarianceForty8Wedge25={setLowVarianceForty8Wedge25}
						// Fifty Wedge
						fiftyWedge100Data={fiftyWedge100Data}
						setFiftyWedge100Data={setFiftyWedge100Data}
						fiftyWedge75Data={fiftyWedge75Data}
						setFiftyWedge75Data={setFiftyWedge75Data}
						fiftyWedge50Data={fiftyWedge50Data}
						setFiftyWedge50Data={setFiftyWedge50Data}
						fiftyWedge25Data={fiftyWedge25Data}
						setFiftyWedge25Data={setFiftyWedge25Data}
						// Shot Totals
						fiftyWedgeShotCounter100={fiftyWedgeShotCounter100}
						setFiftyWedgeShotCounter100={setFiftyWedgeShotCounter100}
						fiftyWedgeShotCounter75={fiftyWedgeShotCounter75}
						setFiftyWedgeShotCounter75={setFiftyWedgeShotCounter75}
						fiftyWedgeShotCounter50={fiftyWedgeShotCounter50}
						setFiftyWedgeShotCounter50={setFiftyWedgeShotCounter50}
						fiftyWedgeShotCounter25={fiftyWedgeShotCounter25}
						setFiftyWedgeShotCounter25={setFiftyWedgeShotCounter25}
						// Historical Value
						historicalAverageFiftyWedge100={historicalAverageFiftyWedge100}
						setHistoricalAverageFiftyWedge100={
							setHistoricalAverageFiftyWedge100
						}
						historicalAverageFiftyWedge75={historicalAverageFiftyWedge75}
						setHistoricalAverageFiftyWedge75={setHistoricalAverageFiftyWedge75}
						historicalAverageFiftyWedge50={historicalAverageFiftyWedge50}
						setHistoricalAverageFiftyWedge50={setHistoricalAverageFiftyWedge50}
						historicalAverageFiftyWedge25={historicalAverageFiftyWedge25}
						setHistoricalAverageFiftyWedge25={setHistoricalAverageFiftyWedge25}
						// Variance
						highVarianceFiftyWedge100={highVarianceFiftyWedge100}
						setHighVarianceFiftyWedge100={setHighVarianceFiftyWedge100}
						highVarianceFiftyWedge75={highVarianceFiftyWedge75}
						setHighVarianceFiftyWedge75={setHighVarianceFiftyWedge75}
						highVarianceFiftyWedge50={highVarianceFiftyWedge50}
						setHighVarianceFiftyWedge50={setHighVarianceFiftyWedge50}
						highVarianceFiftyWedge25={highVarianceFiftyWedge25}
						setHighVarianceFiftyWedge25={setHighVarianceFiftyWedge25}
						lowVarianceFiftyWedge100={lowVarianceFiftyWedge100}
						setLowVarianceFiftyWedge100={setLowVarianceFiftyWedge100}
						lowVarianceFiftyWedge75={lowVarianceFiftyWedge75}
						setLowVarianceFiftyWedge75={setLowVarianceFiftyWedge75}
						lowVarianceFiftyWedge50={lowVarianceFiftyWedge50}
						setLowVarianceFiftyWedge50={setLowVarianceFiftyWedge50}
						lowVarianceFiftyWedge25={lowVarianceFiftyWedge25}
						setLowVarianceFiftyWedge25={setLowVarianceFiftyWedge25}
						// Fifty2 Wedge
						fifty2Wedge100Data={fifty2Wedge100Data}
						setFifty2Wedge100Data={setFifty2Wedge100Data}
						fifty2Wedge75Data={fifty2Wedge75Data}
						setFifty2Wedge75Data={setFifty2Wedge75Data}
						fifty2Wedge50Data={fifty2Wedge50Data}
						setFifty2Wedge50Data={setFifty2Wedge50Data}
						fifty2Wedge25Data={fifty2Wedge25Data}
						setFifty2Wedge25Data={setFifty2Wedge25Data}
						// Shot Totals
						fifty2WedgeShotCounter100={fifty2WedgeShotCounter100}
						setFifty2WedgeShotCounter100={setFifty2WedgeShotCounter100}
						fifty2WedgeShotCounter75={fifty2WedgeShotCounter75}
						setFifty2WedgeShotCounter75={setFifty2WedgeShotCounter75}
						fifty2WedgeShotCounter50={fifty2WedgeShotCounter50}
						setFifty2WedgeShotCounter50={setFifty2WedgeShotCounter50}
						fifty2WedgeShotCounter25={fifty2WedgeShotCounter25}
						setFifty2WedgeShotCounter25={setFifty2WedgeShotCounter25}
						// Historical Value
						historicalAverageFifty2Wedge100={historicalAverageFifty2Wedge100}
						setHistoricalAverageFifty2Wedge100={
							setHistoricalAverageFifty2Wedge100
						}
						historicalAverageFifty2Wedge75={historicalAverageFifty2Wedge75}
						setHistoricalAverageFifty2Wedge75={
							setHistoricalAverageFifty2Wedge75
						}
						historicalAverageFifty2Wedge50={historicalAverageFifty2Wedge50}
						setHistoricalAverageFifty2Wedge50={
							setHistoricalAverageFifty2Wedge50
						}
						historicalAverageFifty2Wedge25={historicalAverageFifty2Wedge25}
						setHistoricalAverageFifty2Wedge25={
							setHistoricalAverageFifty2Wedge25
						}
						// Variance
						highVarianceFifty2Wedge100={highVarianceFifty2Wedge100}
						setHighVarianceFifty2Wedge100={setHighVarianceFifty2Wedge100}
						highVarianceFifty2Wedge75={highVarianceFifty2Wedge75}
						setHighVarianceFifty2Wedge75={setHighVarianceFifty2Wedge75}
						highVarianceFifty2Wedge50={highVarianceFifty2Wedge50}
						setHighVarianceFifty2Wedge50={setHighVarianceFifty2Wedge50}
						highVarianceFifty2Wedge25={highVarianceFifty2Wedge25}
						setHighVarianceFifty2Wedge25={setHighVarianceFifty2Wedge25}
						lowVarianceFifty2Wedge100={lowVarianceFifty2Wedge100}
						setLowVarianceFifty2Wedge100={setLowVarianceFifty2Wedge100}
						lowVarianceFifty2Wedge75={lowVarianceFifty2Wedge75}
						setLowVarianceFifty2Wedge75={setLowVarianceFifty2Wedge75}
						lowVarianceFifty2Wedge50={lowVarianceFifty2Wedge50}
						setLowVarianceFifty2Wedge50={setLowVarianceFifty2Wedge50}
						lowVarianceFifty2Wedge25={lowVarianceFifty2Wedge25}
						setLowVarianceFifty2Wedge25={setLowVarianceFifty2Wedge25}
						// Fifty4 Wedge
						fifty4Wedge100Data={fifty4Wedge100Data}
						setFifty4Wedge100Data={setFifty4Wedge100Data}
						fifty4Wedge75Data={fifty4Wedge75Data}
						setFifty4Wedge75Data={setFifty4Wedge75Data}
						fifty4Wedge50Data={fifty4Wedge50Data}
						setFifty4Wedge50Data={setFifty4Wedge50Data}
						fifty4Wedge25Data={fifty4Wedge25Data}
						setFifty4Wedge25Data={setFifty4Wedge25Data}
						// Shot Totals
						fifty4WedgeShotCounter100={fifty4WedgeShotCounter100}
						setFifty4WedgeShotCounter100={setFifty4WedgeShotCounter100}
						fifty4WedgeShotCounter75={fifty4WedgeShotCounter75}
						setFifty4WedgeShotCounter75={setFifty4WedgeShotCounter75}
						fifty4WedgeShotCounter50={fifty4WedgeShotCounter50}
						setFifty4WedgeShotCounter50={setFifty4WedgeShotCounter50}
						fifty4WedgeShotCounter25={fifty4WedgeShotCounter25}
						setFifty4WedgeShotCounter25={setFifty4WedgeShotCounter25}
						// Historical Value
						historicalAverageFifty4Wedge100={historicalAverageFifty4Wedge100}
						setHistoricalAverageFifty4Wedge100={
							setHistoricalAverageFifty4Wedge100
						}
						historicalAverageFifty4Wedge75={historicalAverageFifty4Wedge75}
						setHistoricalAverageFifty4Wedge75={
							setHistoricalAverageFifty4Wedge75
						}
						historicalAverageFifty4Wedge50={historicalAverageFifty4Wedge50}
						setHistoricalAverageFifty4Wedge50={
							setHistoricalAverageFifty4Wedge50
						}
						historicalAverageFifty4Wedge25={historicalAverageFifty4Wedge25}
						setHistoricalAverageFifty4Wedge25={
							setHistoricalAverageFifty4Wedge25
						}
						// Variance
						highVarianceFifty4Wedge100={highVarianceFifty4Wedge100}
						setHighVarianceFifty4Wedge100={setHighVarianceFifty4Wedge100}
						highVarianceFifty4Wedge75={highVarianceFifty4Wedge75}
						setHighVarianceFifty4Wedge75={setHighVarianceFifty4Wedge75}
						highVarianceFifty4Wedge50={highVarianceFifty4Wedge50}
						setHighVarianceFifty4Wedge50={setHighVarianceFifty4Wedge50}
						highVarianceFifty4Wedge25={highVarianceFifty4Wedge25}
						setHighVarianceFifty4Wedge25={setHighVarianceFifty4Wedge25}
						lowVarianceFifty4Wedge100={lowVarianceFifty4Wedge100}
						setLowVarianceFifty4Wedge100={setLowVarianceFifty4Wedge100}
						lowVarianceFifty4Wedge75={lowVarianceFifty4Wedge75}
						setLowVarianceFifty4Wedge75={setLowVarianceFifty4Wedge75}
						lowVarianceFifty4Wedge50={lowVarianceFifty4Wedge50}
						setLowVarianceFifty4Wedge50={setLowVarianceFifty4Wedge50}
						lowVarianceFifty4Wedge25={lowVarianceFifty4Wedge25}
						setLowVarianceFifty4Wedge25={setLowVarianceFifty4Wedge25}
						// Fifty6 Wedge
						fifty6Wedge100Data={fifty6Wedge100Data}
						setFifty6Wedge100Data={setFifty6Wedge100Data}
						fifty6Wedge75Data={fifty6Wedge75Data}
						setFifty6Wedge75Data={setFifty6Wedge75Data}
						fifty6Wedge50Data={fifty6Wedge50Data}
						setFifty6Wedge50Data={setFifty6Wedge50Data}
						fifty6Wedge25Data={fifty6Wedge25Data}
						setFifty6Wedge25Data={setFifty6Wedge25Data}
						// Shot Totals
						fifty6WedgeShotCounter100={fifty6WedgeShotCounter100}
						setFifty6WedgeShotCounter100={setFifty6WedgeShotCounter100}
						fifty6WedgeShotCounter75={fifty6WedgeShotCounter75}
						setFifty6WedgeShotCounter75={setFifty6WedgeShotCounter75}
						fifty6WedgeShotCounter50={fifty6WedgeShotCounter50}
						setFifty6WedgeShotCounter50={setFifty6WedgeShotCounter50}
						fifty6WedgeShotCounter25={fifty6WedgeShotCounter25}
						setFifty6WedgeShotCounter25={setFifty6WedgeShotCounter25}
						// Historical Value
						historicalAverageFifty6Wedge100={historicalAverageFifty6Wedge100}
						setHistoricalAverageFifty6Wedge100={
							setHistoricalAverageFifty6Wedge100
						}
						historicalAverageFifty6Wedge75={historicalAverageFifty6Wedge75}
						setHistoricalAverageFifty6Wedge75={
							setHistoricalAverageFifty6Wedge75
						}
						historicalAverageFifty6Wedge50={historicalAverageFifty6Wedge50}
						setHistoricalAverageFifty6Wedge50={
							setHistoricalAverageFifty6Wedge50
						}
						historicalAverageFifty6Wedge25={historicalAverageFifty6Wedge25}
						setHistoricalAverageFifty6Wedge25={
							setHistoricalAverageFifty6Wedge25
						}
						// Variance
						highVarianceFifty6Wedge100={highVarianceFifty6Wedge100}
						setHighVarianceFifty6Wedge100={setHighVarianceFifty6Wedge100}
						highVarianceFifty6Wedge75={highVarianceFifty6Wedge75}
						setHighVarianceFifty6Wedge75={setHighVarianceFifty6Wedge75}
						highVarianceFifty6Wedge50={highVarianceFifty6Wedge50}
						setHighVarianceFifty6Wedge50={setHighVarianceFifty6Wedge50}
						highVarianceFifty6Wedge25={highVarianceFifty6Wedge25}
						setHighVarianceFifty6Wedge25={setHighVarianceFifty6Wedge25}
						lowVarianceFifty6Wedge100={lowVarianceFifty6Wedge100}
						setLowVarianceFifty6Wedge100={setLowVarianceFifty6Wedge100}
						lowVarianceFifty6Wedge75={lowVarianceFifty6Wedge75}
						setLowVarianceFifty6Wedge75={setLowVarianceFifty6Wedge75}
						lowVarianceFifty6Wedge50={lowVarianceFifty6Wedge50}
						setLowVarianceFifty6Wedge50={setLowVarianceFifty6Wedge50}
						lowVarianceFifty6Wedge25={lowVarianceFifty6Wedge25}
						setLowVarianceFifty6Wedge25={setLowVarianceFifty6Wedge25}
						// Fifty8 Wedge
						fifty8Wedge100Data={fifty8Wedge100Data}
						setFifty8Wedge100Data={setFifty8Wedge100Data}
						fifty8Wedge75Data={fifty8Wedge75Data}
						setFifty8Wedge75Data={setFifty8Wedge75Data}
						fifty8Wedge50Data={fifty8Wedge50Data}
						setFifty8Wedge50Data={setFifty8Wedge50Data}
						fifty8Wedge25Data={fifty8Wedge25Data}
						setFifty8Wedge25Data={setFifty8Wedge25Data}
						// Shot Totals
						fifty8WedgeShotCounter100={fifty8WedgeShotCounter100}
						setFifty8WedgeShotCounter100={setFifty8WedgeShotCounter100}
						fifty8WedgeShotCounter75={fifty8WedgeShotCounter75}
						setFifty8WedgeShotCounter75={setFifty8WedgeShotCounter75}
						fifty8WedgeShotCounter50={fifty8WedgeShotCounter50}
						setFifty8WedgeShotCounter50={setFifty8WedgeShotCounter50}
						fifty8WedgeShotCounter25={fifty8WedgeShotCounter25}
						setFifty8WedgeShotCounter25={setFifty8WedgeShotCounter25}
						// Historical Value
						historicalAverageFifty8Wedge100={historicalAverageFifty8Wedge100}
						setHistoricalAverageFifty8Wedge100={
							setHistoricalAverageFifty8Wedge100
						}
						historicalAverageFifty8Wedge75={historicalAverageFifty8Wedge75}
						setHistoricalAverageFifty8Wedge75={
							setHistoricalAverageFifty8Wedge75
						}
						historicalAverageFifty8Wedge50={historicalAverageFifty8Wedge50}
						setHistoricalAverageFifty8Wedge50={
							setHistoricalAverageFifty8Wedge50
						}
						historicalAverageFifty8Wedge25={historicalAverageFifty8Wedge25}
						setHistoricalAverageFifty8Wedge25={
							setHistoricalAverageFifty8Wedge25
						}
						// Variance
						highVarianceFifty8Wedge100={highVarianceFifty8Wedge100}
						setHighVarianceFifty8Wedge100={setHighVarianceFifty8Wedge100}
						highVarianceFifty8Wedge75={highVarianceFifty8Wedge75}
						setHighVarianceFifty8Wedge75={setHighVarianceFifty8Wedge75}
						highVarianceFifty8Wedge50={highVarianceFifty8Wedge50}
						setHighVarianceFifty8Wedge50={setHighVarianceFifty8Wedge50}
						highVarianceFifty8Wedge25={highVarianceFifty8Wedge25}
						setHighVarianceFifty8Wedge25={setHighVarianceFifty8Wedge25}
						lowVarianceFifty8Wedge100={lowVarianceFifty8Wedge100}
						setLowVarianceFifty8Wedge100={setLowVarianceFifty8Wedge100}
						lowVarianceFifty8Wedge75={lowVarianceFifty8Wedge75}
						setLowVarianceFifty8Wedge75={setLowVarianceFifty8Wedge75}
						lowVarianceFifty8Wedge50={lowVarianceFifty8Wedge50}
						setLowVarianceFifty8Wedge50={setLowVarianceFifty8Wedge50}
						lowVarianceFifty8Wedge25={lowVarianceFifty8Wedge25}
						setLowVarianceFifty8Wedge25={setLowVarianceFifty8Wedge25}
						// Sixty Wedge
						sixtyWedge100Data={sixtyWedge100Data}
						setSixtyWedge100Data={setSixtyWedge100Data}
						sixtyWedge75Data={sixtyWedge75Data}
						setSixtyWedge75Data={setSixtyWedge75Data}
						sixtyWedge50Data={sixtyWedge50Data}
						setSixtyWedge50Data={setSixtyWedge50Data}
						sixtyWedge25Data={sixtyWedge25Data}
						setSixtyWedge25Data={setSixtyWedge25Data}
						// Shot Totals
						sixtyWedgeShotCounter100={sixtyWedgeShotCounter100}
						setSixtyWedgeShotCounter100={setSixtyWedgeShotCounter100}
						sixtyWedgeShotCounter75={sixtyWedgeShotCounter75}
						setSixtyWedgeShotCounter75={setSixtyWedgeShotCounter75}
						sixtyWedgeShotCounter50={sixtyWedgeShotCounter50}
						setSixtyWedgeShotCounter50={setSixtyWedgeShotCounter50}
						sixtyWedgeShotCounter25={sixtyWedgeShotCounter25}
						setSixtyWedgeShotCounter25={setSixtyWedgeShotCounter25}
						// Historical Value
						historicalAverageSixtyWedge100={historicalAverageSixtyWedge100}
						setHistoricalAverageSixtyWedge100={
							setHistoricalAverageSixtyWedge100
						}
						historicalAverageSixtyWedge75={historicalAverageSixtyWedge75}
						setHistoricalAverageSixtyWedge75={setHistoricalAverageSixtyWedge75}
						historicalAverageSixtyWedge50={historicalAverageSixtyWedge50}
						setHistoricalAverageSixtyWedge50={setHistoricalAverageSixtyWedge50}
						historicalAverageSixtyWedge25={historicalAverageSixtyWedge25}
						setHistoricalAverageSixtyWedge25={setHistoricalAverageSixtyWedge25}
						// Variance
						highVarianceSixtyWedge100={highVarianceSixtyWedge100}
						setHighVarianceSixtyWedge100={setHighVarianceSixtyWedge100}
						highVarianceSixtyWedge75={highVarianceSixtyWedge75}
						setHighVarianceSixtyWedge75={setHighVarianceSixtyWedge75}
						highVarianceSixtyWedge50={highVarianceSixtyWedge50}
						setHighVarianceSixtyWedge50={setHighVarianceSixtyWedge50}
						highVarianceSixtyWedge25={highVarianceSixtyWedge25}
						setHighVarianceSixtyWedge25={setHighVarianceSixtyWedge25}
						lowVarianceSixtyWedge100={lowVarianceSixtyWedge100}
						setLowVarianceSixtyWedge100={setLowVarianceSixtyWedge100}
						lowVarianceSixtyWedge75={lowVarianceSixtyWedge75}
						setLowVarianceSixtyWedge75={setLowVarianceSixtyWedge75}
						lowVarianceSixtyWedge50={lowVarianceSixtyWedge50}
						setLowVarianceSixtyWedge50={setLowVarianceSixtyWedge50}
						lowVarianceSixtyWedge25={lowVarianceSixtyWedge25}
						setLowVarianceSixtyWedge25={setLowVarianceSixtyWedge25}
						// Calculations
						calculateWeightedAverage={calculateWeightedAverage}
						calculateStats={calculateStats}
						shotMeanFunction100={shotMeanFunction100}
						shotMeanFunction75={shotMeanFunction75}
						shotMeanFunction50={shotMeanFunction50}
						shotMeanFunction25={shotMeanFunction25}
						shotMean100={shotMean100}
						shotMean75={shotMean75}
						// Weighted Average
						shotWeightedAverage={shotWeightedAverage}
						shotWeightedAverage1={shotWeightedAverage1}
						shotWeightedAverage2={shotWeightedAverage2}
						//
						shotTotalCounter100={shotTotalCounter100}
						// Club Averages
						driver100Average={driver100Average}
						{...props}
					/>
				)}
			</Tab.Screen>
			<Tab.Screen options={{ headerShown: false }} name='Reserve'>
				{(props) => <ReserveScreen {...props} />}
			</Tab.Screen>
			<Tab.Screen options={{ headerShown: false }} name='Add Shot'>
				{(props) => (
					<MyStatsScreen
						// Woods
						driver100Data={driver100Data}
						setDriver100Data={setDriver100Data}
						driver75Data={driver75Data}
						setDriver75Data={setDriver75Data}
						threeWood100Data={threeWood100Data}
						setThreeWood100Data={setThreeWood100Data}
						threeWood75Data={threeWood75Data}
						setThreeWood75Data={setThreeWood75Data}
						fiveWood100Data={fiveWood100Data}
						setFiveWood100Data={setFiveWood100Data}
						fiveWood75Data={fiveWood75Data}
						setFiveWood75Data={setFiveWood75Data}
						sevenWood100Data={sevenWood100Data}
						setSevenWood100Data={setSevenWood100Data}
						sevenWood75Data={sevenWood75Data}
						setSevenWood75Data={setSevenWood75Data}
						// Hybrids
						// Two Hybrid
						twoHybrid100Data={twoHybrid100Data}
						setTwoHybrid100Data={setTwoHybrid100Data}
						twoHybrid75Data={twoHybrid75Data}
						setTwoHybrid75Data={setTwoHybrid75Data}
						// Three Hybrid
						threeHybrid100Data={threeHybrid100Data}
						setThreeHybrid100Data={setThreeHybrid100Data}
						threeHybrid75Data={threeHybrid75Data}
						setThreeHybrid75Data={setThreeHybrid75Data}
						// Four Hybrid
						fourHybrid100Data={fourHybrid100Data}
						setFourHybrid100Data={setFourHybrid100Data}
						fourHybrid75Data={fourHybrid75Data}
						setFourHybrid75Data={setFourHybrid75Data}
						// Five Hybrid
						fiveHybrid100Data={fiveHybrid100Data}
						setFiveHybrid100Data={setFiveHybrid100Data}
						fiveHybrid75Data={fiveHybrid75Data}
						setFiveHybrid75Data={setFiveHybrid75Data}
						// Six Hybrid
						sixHybrid100Data={sixHybrid100Data}
						setSixHybrid100Data={setSixHybrid100Data}
						sixHybrid75Data={sixHybrid75Data}
						setSixHybrid75Data={setSixHybrid75Data}
						// Seven Hybrid
						sevenHybrid100Data={sevenHybrid100Data}
						setSevenHybrid100Data={setSevenHybrid100Data}
						sevenHybrid75Data={sevenHybrid75Data}
						setSevenHybrid75Data={setSevenHybrid75Data}
						// Irons
						// Two Iron
						twoIron100Data={twoIron100Data}
						setTwoIron100Data={setTwoIron100Data}
						twoIron75Data={twoIron75Data}
						setTwoIron75Data={setTwoIron75Data}
						twoIron50Data={twoIron50Data}
						setTwoIron50Data={setTwoIron50Data}
						twoIron25Data={twoIron25Data}
						setTwoIron25Data={setTwoIron25Data}
						// Three Iron
						threeIron100Data={threeIron100Data}
						setThreeIron100Data={setThreeIron100Data}
						threeIron75Data={threeIron75Data}
						setThreeIron75Data={setThreeIron75Data}
						threeIron50Data={threeIron50Data}
						setThreeIron50Data={setThreeIron50Data}
						threeIron25Data={threeIron25Data}
						setThreeIron25Data={setThreeIron25Data}
						// Four Iron
						fourIron100Data={fourIron100Data}
						setFourIron100Data={setFourIron100Data}
						fourIron75Data={fourIron75Data}
						setFourIron75Data={setFourIron75Data}
						fourIron50Data={fourIron50Data}
						setFourIron50Data={setFourIron50Data}
						fourIron25Data={fourIron25Data}
						setFourIron25Data={setFourIron25Data}
						// Five Iron
						fiveIron100Data={fiveIron100Data}
						setFiveIron100Data={setFiveIron100Data}
						fiveIron75Data={fiveIron75Data}
						setFiveIron75Data={setFiveIron75Data}
						fiveIron50Data={fiveIron50Data}
						setFiveIron50Data={setFiveIron50Data}
						fiveIron25Data={fiveIron25Data}
						setFiveIron25Data={setFiveIron25Data}
						// Six Iron
						sixIron100Data={sixIron100Data}
						setSixIron100Data={setSixIron100Data}
						sixIron75Data={sixIron75Data}
						setSixIron75Data={setSixIron75Data}
						sixIron50Data={sixIron50Data}
						setSixIron50Data={setSixIron50Data}
						sixIron25Data={sixIron25Data}
						setSixIron25Data={setSixIron25Data}
						// Seven Iron
						sevenIron100Data={sevenIron100Data}
						setSevenIron100Data={setSevenIron100Data}
						sevenIron75Data={sevenIron75Data}
						setSevenIron75Data={setSevenIron75Data}
						sevenIron50Data={sevenIron50Data}
						setSevenIron50Data={setSevenIron50Data}
						sevenIron25Data={sevenIron25Data}
						setSevenIron25Data={setSevenIron25Data}
						// Eight Iron
						eightIron100Data={eightIron100Data}
						setEightIron100Data={setEightIron100Data}
						eightIron75Data={eightIron75Data}
						setEightIron75Data={setEightIron75Data}
						eightIron50Data={eightIron50Data}
						setEightIron50Data={setEightIron50Data}
						eightIron25Data={eightIron25Data}
						setEightIron25Data={setEightIron25Data}
						// Nine Iron
						nineIron100Data={nineIron100Data}
						setNineIron100Data={setNineIron100Data}
						nineIron75Data={nineIron75Data}
						setNineIron75Data={setNineIron75Data}
						nineIron50Data={nineIron50Data}
						setNineIron50Data={setNineIron50Data}
						nineIron25Data={nineIron25Data}
						setNineIron25Data={setNineIron25Data}
						// Wedges
						// Pitching Wedge
						pWedge100Data={pWedge100Data}
						setPWedge100Data={setPWedge100Data}
						pWedge75Data={pWedge75Data}
						setPWedge75Data={setPWedge75Data}
						pWedge50Data={pWedge50Data}
						setPWedge50Data={setPWedge50Data}
						pWedge25Data={pWedge25Data}
						setPWedge25Data={setPWedge25Data}
						// Forty8 Wedge
						forty8Wedge100Data={forty8Wedge100Data}
						setForty8Wedge100Data={setForty8Wedge100Data}
						forty8Wedge75Data={forty8Wedge75Data}
						setForty8Wedge75Data={setForty8Wedge75Data}
						forty8Wedge50Data={forty8Wedge50Data}
						setForty8Wedge50Data={setForty8Wedge50Data}
						forty8Wedge25Data={forty8Wedge25Data}
						setForty8Wedge25Data={setForty8Wedge25Data}
						// Fifty Wedge
						fiftyWedge100Data={fiftyWedge100Data}
						setFiftyWedge100Data={setFiftyWedge100Data}
						fiftyWedge75Data={fiftyWedge75Data}
						setFiftyWedge75Data={setFiftyWedge75Data}
						fiftyWedge50Data={fiftyWedge50Data}
						setFiftyWedge50Data={setFiftyWedge50Data}
						fiftyWedge25Data={fiftyWedge25Data}
						setFiftyWedge25Data={setFiftyWedge25Data}
						// Fifty2 Wedge
						fifty2Wedge100Data={fifty2Wedge100Data}
						setFifty2Wedge100Data={setFifty2Wedge100Data}
						fifty2Wedge75Data={fifty2Wedge75Data}
						setFifty2Wedge75Data={setFifty2Wedge75Data}
						fifty2Wedge50Data={fifty2Wedge50Data}
						setFifty2Wedge50Data={setFifty2Wedge50Data}
						fifty2Wedge25Data={fifty2Wedge25Data}
						setFifty2Wedge25Data={setFifty2Wedge25Data}
						// Fifty4 Wedge
						fifty4Wedge100Data={fifty4Wedge100Data}
						setFifty4Wedge100Data={setFifty4Wedge100Data}
						fifty4Wedge75Data={fifty4Wedge75Data}
						setFifty4Wedge75Data={setFifty4Wedge75Data}
						fifty4Wedge50Data={fifty4Wedge50Data}
						setFifty4Wedge50Data={setFifty4Wedge50Data}
						fifty4Wedge25Data={fifty4Wedge25Data}
						setFifty4Wedge25Data={setFifty4Wedge25Data}
						// Fifty6 Wedge
						fifty6Wedge100Data={fifty6Wedge100Data}
						setFifty6Wedge100Data={setFifty6Wedge100Data}
						fifty6Wedge75Data={fifty6Wedge75Data}
						setFifty6Wedge75Data={setFifty6Wedge75Data}
						fifty6Wedge50Data={fifty6Wedge50Data}
						setFifty6Wedge50Data={setFifty6Wedge50Data}
						fifty6Wedge25Data={fifty6Wedge25Data}
						setFifty6Wedge25Data={setFifty6Wedge25Data}
						// Fifty8 Wedge
						fifty8Wedge100Data={fifty8Wedge100Data}
						setFifty8Wedge100Data={setFifty8Wedge100Data}
						fifty8Wedge75Data={fifty8Wedge75Data}
						setFifty8Wedge75Data={setFifty8Wedge75Data}
						fifty8Wedge50Data={fifty8Wedge50Data}
						setFifty8Wedge50Data={setFifty8Wedge50Data}
						fifty8Wedge25Data={fifty8Wedge25Data}
						setFifty8Wedge25Data={setFifty8Wedge25Data}
						// Sixty Wedge
						sixtyWedge100Data={sixtyWedge100Data}
						setSixtyWedge100Data={setSixtyWedge100Data}
						sixtyWedge75Data={sixtyWedge75Data}
						setSixtyWedge75Data={setSixtyWedge75Data}
						sixtyWedge50Data={sixtyWedge50Data}
						setSixtyWedge50Data={setSixtyWedge50Data}
						sixtyWedge25Data={sixtyWedge25Data}
						setSixtyWedge25Data={setSixtyWedge25Data}
						clubSelected={clubSelected}
						setClubSelected={setClubSelected}
						newShotDistance={newShotDistance}
						setNewShotDistance={setNewShotDistance}
						selectedValue={selectedValue}
						setSelectedValue={setSelectedValue}
						selectedPower={selectedPower}
						setSelectedPower={setSelectedPower}
						selectedLabel={selectedLabel}
						setSelectedLabel={setSelectedLabel}
						// driver100={driver100}
						// driver80={driver80}
						// threeWood100={threeWood100}
						// threeWood80={threeWood80}
						clubsInMyBag={clubsInMyBag}
						clubsInMyBag2={clubsInMyBag2}
						shotArray={shotArray}
						setShotArray={setShotArray}
						// handleButtonPressToAddShot={handleButtonPressToAddShot}
						// shotWeightedAverage={shotWeightedAverage}
						// shotAverage={shotAverage}
						// driver100Data={driver100Data}
						// setDriver100Data={setDriver100Data}
						// driver75Data={driver75Data}
						// setDriver75Data={setDriver75Data}
						// threeWood100Data={threeWood100Data}
						// setThreeWood100Data={setThreeWood100Data}
						// threeWood75Data={threeWood75Data}
						// setThreeWood75Data={setThreeWood75Data}
						// fiveWood100Data={fiveWood100Data}
						// setFiveWood100Data={setFiveWood100Data}
						// fiveWood75Data={fiveWood75Data}
						// setFiveWood75Data={setFiveWood75Data}
						// sevenWood100Data={sevenWood100Data}
						// setSevenWood100Data={setSevenWood100Data}
						// sevenWood75Data={sevenWood75Data}
						// setSevenWood75Data={setSevenWood75Data}
						useCustomState={useCustomState}
						{...props}
					/>
				)}
			</Tab.Screen>
			<Tab.Screen options={{ headerShown: false }} name='Profile'>
				{(props) => (
					<MyProfileScreen
						playersName={playersName}
						setPlayersName={setPlayersName}
						username={username}
						setUsername={setUsername}
						// Can't share state between Tab.Screen and Stack.Screen. The state values below won't work.
						name={name}
						// setFormData={setFormData}
						// firstName={firstName}
						// lastName={lastName}
						email={email}
						{...props}
					/>
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
