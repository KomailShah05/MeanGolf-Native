// Changing driver100 to driver100Data 6.3.23
import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
	Span,
	ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
// import { ButtonGroup, } from '@ui-kitten/components';
//Styles
import mainStyles from '../styles/mainStyles';

// Data
import { clubsInMyBag2 } from '../data/clubsInMyBag';
// import {
//     shotMeanFunction100,
//     shotMean100,
//     shotMean75,
//     shotMean50,
//     shotMean25,
//     setShotMean100,
//     setShotMean75,
//     setShotMean50,
//     setShotMean25,
// } from '../data/Formulas';

const MyBagScreen = ({
	navigation,
	// Calculations
	calculateStats,
	shotMeanFunction100,
	shotMeanFunction75,
	shotMeanFunction50,
	shotMeanFunction25,
	shotMean100,
	shotMean75,
	// Old Calc
	shotWeightedAverage,
	shotWeightedAverage1,
	shotWeightedAverage2,
	shotTotalCounter100,
	// New Woods
	//Driver
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
	//Three Wood
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
	//Five Wood
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
	// Seven Wood
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

	// Hybrids
	//Two Hybrid
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
	//Three Hybrid
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

	// Four Hybrid
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

	// Five Hybrid
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

	// Six Hybrid
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
	// Seven Hybrid
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

	// Irons
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

	// Three Iron
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

	// Four Iron
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

	// Five Iron
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

	// Six Iron
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

	// Seven Iron
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

	// Eight Iron
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

	// Nine Iron
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

	// Wedges
	// Pitching Wedge
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

	// Forty8 Wedge
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

	// Fifty Wedge
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

	// Fifty2 Wedge
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

	// Fifty4 Wedge
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

	// Fifty6 Wedge
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

	// Fifty8 Wedge
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

	// Sixty
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

	// Woods
	driver100,
	driver75,
	threeWood100,
	threeWood75,
	fiveWood100,
	fiveWood75,
	sevenWood100,
	sevenWood75,
	twoHybrid100,
	twoHybrid75,
	threeHybrid100,
	threeHybrid75,
	fourHybrid100,
	fourHybrid75,
	fiveHybrid100,
	fiveHybrid75,
	sixHybrid100,
	sixHybrid75,
	sevenHybrid100,
	sevenHybrid75,
	// Irons
	twoIron100,
	twoIron75,
	twoIron50,
	threeIron100,
	threeIron75,
	threeIron50,
	fourIron100,
	fourIron75,
	fourIron50,
	fiveIron100,
	fiveIron75,
	fiveIron50,
	sixIron100,
	sixIron75,
	sixIron50,
	sevenIron100,
	sevenIron75,
	sevenIron50,
	eightIron100,
	eightIron75,
	eightIron50,
	nineIron100,
	nineIron75,
	nineIron50,
	// Wedges
	pWedge100,
	pWedge75,
	pWedge50,
	pWedge25,
	forty8Wedge100,
	forty8Wedge75,
	forty8Wedge50,
	forty8Wedge25,
	fiftyWedge100,
	fiftyWedge75,
	fiftyWedge50,
	fiftyWedge25,
	fifty2Wedge100,
	fifty2Wedge75,
	fifty2Wedge50,
	fifty2Wedge25,
	fifty4Wedge100,
	fifty4Wedge75,
	fifty4Wedge50,
	fifty4Wedge25,
	fifty6Wedge100,
	fifty6Wedge75,
	fifty6Wedge50,
	fifty6Wedge25,
	fifty8Wedge100,
	fifty8Wedge75,
	fifty8Wedge50,
	fifty8Wedge25,
	sixtyWedge100,
	sixtyWedge75,
	sixtyWedge50,
	sixtyWedge25,
	// Club Averages
	driver100Average,
}) => {
	// Open Expanded View
	const [expandedItems, setExpandedItems] = useState({});
	const openExpandedShotView = (item) => {
		// Toggle the openExpandedView state for the specific item
		setExpandedItems((prevExpandedItems) => {
			const updatedExpandedItems = { ...prevExpandedItems };
			updatedExpandedItems[item.id] = !updatedExpandedItems[item.id];
			return updatedExpandedItems;
		});
	};

	const renderClubItem = ({ item }) => {
		const minNumOfShots = 1;
		shotFunction100 = () => {
			// Woods
			if (item.value === 'driver' && driver100Data.length > minNumOfShots) {
				// return shotWeightedAverage(driver100Data);
				return shotMeanFunction100(driver100Data);
			} else if (
				item.value === '3wood' &&
				threeWood100Data.length > minNumOfShots
			) {
				// return shotWeightedAverage(threeWood100Data);
				return shotMeanFunction100(threeWood100Data);
			} else if (
				item.value === '5wood' &&
				fiveWood100Data.length > minNumOfShots
			) {
				// return shotWeightedAverage(fiveWood100Data);
				return shotMeanFunction100(fiveWood100Data);
			} else if (
				item.value === '7wood' &&
				sevenWood100Data.length > minNumOfShots
			) {
				// return shotWeightedAverage(sevenWood100Data);
				return shotMeanFunction100(sevenWood100Data);
			}
			// Hybrids
			else if (
				item.value === '2hybrid' &&
				twoHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(twoHybrid100Data);
			} else if (
				item.value === '3hybrid' &&
				threeHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(threeHybrid100Data);
			} else if (
				item.value === '4hybrid' &&
				fourHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fourHybrid100Data);
			} else if (
				item.value === '5hybrid' &&
				fiveHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fiveHybrid100Data);
			} else if (
				item.value === '6hybrid' &&
				sixHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(sixHybrid100Data);
			} else if (
				item.value === '7hybrid' &&
				sevenHybrid100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(sevenHybrid100Data);
			}
			// Irons
			else if (
				item.value === '2Iron' &&
				twoIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(twoIron100Data);
			} else if (
				item.value === '3Iron' &&
				threeIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(threeIron100Data);
			} else if (
				item.value === '4Iron' &&
				fourIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fourIron100Data);
			} else if (
				item.value === '5Iron' &&
				fiveIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fiveIron100Data);
			} else if (
				item.value === '6Iron' &&
				sixIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(sixIron100Data);
			} else if (
				item.value === '7Iron' &&
				sevenIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(sevenIron100Data);
			} else if (
				item.value === '8Iron' &&
				eightIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(eightIron100Data);
			} else if (
				item.value === '9Iron' &&
				nineIron100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(nineIron100Data);
			}
			// Wedge
			else if (
				item.value === 'Pwedge' &&
				pWedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(pWedge100Data);
			} else if (
				item.value === '48wedge' &&
				forty8Wedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(forty8Wedge100Data);
			} else if (
				item.value === '50wedge' &&
				fiftyWedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fiftyWedge100Data);
			} else if (
				item.value === '52wedge' &&
				fifty2Wedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fifty2Wedge100Data);
			} else if (
				item.value === '54wedge' &&
				fifty4Wedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fifty4Wedge100Data);
			} else if (
				item.value === '56wedge' &&
				fifty6Wedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fifty6Wedge100Data);
			} else if (
				item.value === '58wedge' &&
				fifty8Wedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(fifty8Wedge100Data);
			} else if (
				item.value === '60wedge' &&
				sixtyWedge100Data.length > minNumOfShots
			) {
				return shotMeanFunction100(sixtyWedge100Data);
			}

			// null
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};
		shotFunction75 = () => {
			// Driver
			if (item.value === 'driver' && driver75Data.length > 5) {
				// return shotWeightedAverage(driver75Data);
				return shotMeanFunction75(driver75Data);
			} else if (item.value === '3wood' && threeWood75Data.length > 0) {
				// return shotWeightedAverage(threeWood75Data);
				return shotMeanFunction75(threeWood75Data);
			} else if (item.value === '5wood' && fiveWood75Data.length > 0) {
				// return shotWeightedAverage(fiveWood75Data);
				return shotMeanFunction75(fiveWood75Data);
			} else if (item.value === '7wood' && sevenWood75Data.length > 0) {
				// return shotWeightedAverage(sevenWood75Data);
				return shotMeanFunction75(sevenWood75Data);
			}
			// Hybrids
			else if (item.value === '2hybrid' && twoHybrid75Data.length > 0) {
				return shotMeanFunction75(twoHybrid75Data);
			} else if (item.value === '3hybrid' && threeHybrid75Data.length > 0) {
				return shotMeanFunction75(threeHybrid75Data);
			} else if (item.value === '4hybrid' && fourHybrid75Data.length > 0) {
				return shotMeanFunction75(fourHybrid75Data);
			} else if (item.value === '5hybrid' && fiveHybrid75Data.length > 0) {
				return shotMeanFunction75(fiveHybrid75Data);
			} else if (item.value === '6hybrid' && sixHybrid75Data.length > 0) {
				return shotMeanFunction75(sixHybrid75Data);
			} else if (item.value === '7hybrid' && sevenHybrid75Data.length > 0) {
				return shotMeanFunction75(sevenHybrid75Data);
			}
			// Irons
			else if (item.value === '2Iron' && twoIron75Data.length > 0) {
				return shotMeanFunction75(twoIron75Data);
			} else if (item.value === '3Iron' && threeIron75Data.length > 0) {
				return shotMeanFunction75(threeIron75Data);
			} else if (item.value === '4Iron' && fourIron75Data.length > 0) {
				return shotMeanFunction75(fourIron75Data);
			} else if (item.value === '5Iron' && fiveIron75Data.length > 0) {
				return shotMeanFunction75(fiveIron75Data);
			} else if (item.value === '6Iron' && sixIron75Data.length > 0) {
				return shotMeanFunction75(sixIron75Data);
			} else if (item.value === '7Iron' && sevenIron75Data.length > 0) {
				return shotMeanFunction75(sevenIron75Data);
			} else if (item.value === '8Iron' && eightIron75Data.length > 0) {
				return shotMeanFunction75(eightIron75Data);
			} else if (item.value === '9Iron' && nineIron75Data.length > 0) {
				return shotMeanFunction75(nineIron75Data);
			}
			// Wedge
			else if (item.value === 'Pwedge' && pWedge75Data.length > 0) {
				return shotMeanFunction75(pWedge75Data);
			} else if (item.value === '48wedge' && forty8Wedge75Data.length > 0) {
				return shotMeanFunction75(forty8Wedge75Data);
			} else if (item.value === '50wedge' && fiftyWedge75Data.length > 0) {
				return shotMeanFunction75(fiftyWedge75Data);
			} else if (item.value === '52wedge' && fifty2Wedge75Data.length > 0) {
				return shotMeanFunction75(fifty2Wedge75Data);
			} else if (item.value === '54wedge' && fifty4Wedge75Data.length > 0) {
				return shotMeanFunction75(fifty4Wedge75Data);
			} else if (item.value === '56wedge' && fifty6Wedge75Data.length > 0) {
				return shotMeanFunction75(fifty6Wedge75Data);
			} else if (item.value === '58wedge' && fifty8Wedge75Data.length > 0) {
				return shotMeanFunction75(fifty8Wedge75Data);
			} else if (item.value === '60wedge' && sixtyWedge75Data.length > 0) {
				return shotMeanFunction75(sixtyWedge75Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};
		shotFunction50 = () => {
			// Irons
			if (item.value === '2Iron' && twoIron50Data.length > 0) {
				return shotMeanFunction50(twoIron50Data);
			} else if (item.value === '3Iron' && threeIron50Data.length > 0) {
				return shotMeanFunction50(threeIron50Data);
			} else if (item.value === '4Iron' && fourIron50Data.length > 0) {
				return shotMeanFunction50(fourIron50Data);
			} else if (item.value === '5Iron' && fiveIron50Data.length > 0) {
				return shotMeanFunction50(fiveIron50Data);
			} else if (item.value === '6Iron' && sixIron50Data.length > 0) {
				return shotMeanFunction50(sixIron50Data);
			} else if (item.value === '7Iron' && sevenIron50Data.length > 0) {
				return shotMeanFunction50(sevenIron50Data);
			} else if (item.value === '8Iron' && eightIron50Data.length > 0) {
				return shotMeanFunction50(eightIron50Data);
			} else if (item.value === '9Iron' && nineIron50Data.length > 0) {
				return shotMeanFunction50(nineIron50Data);
			}
			// Wedge
			else if (item.value === 'Pwedge' && pWedge50Data.length > 0) {
				return shotMeanFunction50(pWedge50Data);
			} else if (item.value === '48wedge' && forty8Wedge50Data.length > 0) {
				return shotMeanFunction50(forty8Wedge50Data);
			} else if (item.value === '50wedge' && fiftyWedge50Data.length > 0) {
				return shotMeanFunction50(fiftyWedge50Data);
			} else if (item.value === '52wedge' && fifty2Wedge50Data.length > 0) {
				return shotMeanFunction50(fifty2Wedge50Data);
			} else if (item.value === '54wedge' && fifty4Wedge50Data.length > 0) {
				return shotMeanFunction50(fifty4Wedge50Data);
			} else if (item.value === '56wedge' && fifty6Wedge50Data.length > 0) {
				return shotMeanFunction50(fifty6Wedge50Data);
			} else if (item.value === '58wedge' && fifty8Wedge50Data.length > 0) {
				return shotMeanFunction50(fifty8Wedge50Data);
			} else if (item.value === '60wedge' && sixtyWedge50Data.length > 0) {
				return shotMeanFunction50(sixtyWedge50Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};

		shotFunction25 = () => {
			// Wedge
			if (item.value === 'Pwedge' && pWedge25Data.length > 0) {
				return shotMeanFunction25(pWedge25Data);
			} else if (item.value === '48wedge' && forty8Wedge25Data.length > 0) {
				return shotMeanFunction25(forty8Wedge25Data);
			} else if (item.value === '50wedge' && fiftyWedge25Data.length > 0) {
				return shotMeanFunction25(fiftyWedge25Data);
			} else if (item.value === '52wedge' && fifty2Wedge25Data.length > 0) {
				return shotMeanFunction25(fifty2Wedge25Data);
			} else if (item.value === '54wedge' && fifty4Wedge25Data.length > 0) {
				return shotMeanFunction25(fifty4Wedge25Data);
			} else if (item.value === '56wedge' && fifty6Wedge25Data.length > 0) {
				return shotMeanFunction25(fifty6Wedge25Data);
			} else if (item.value === '58wedge' && fifty8Wedge25Data.length > 0) {
				return shotMeanFunction25(fifty8Wedge25Data);
			} else if (item.value === '60wedge' && sixtyWedge25Data.length > 0) {
				return shotMeanFunction25(sixtyWedge25Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};

		const average100 = shotFunction100();
		const average75 = shotFunction75();
		const average50 = shotFunction50();
		const average25 = shotFunction25();

		const calculateStats100 = () => {
			// Woods
			if (item.value === 'driver') {
				return calculateStats(driver100Data);
			} else if (item.value === '3wood') {
				return calculateStats(threeWood100Data);
			} else if (item.value === '5wood') {
				return calculateStats(fiveWood100Data);
			} else if (item.value === '7wood') {
				return calculateStats(sevenWood100Data);
			}
			// Hybrids
			else if (item.value === '2hybrid') {
				return calculateStats(twoHybrid100Data);
			} else if (item.value === '3hybrid') {
				return calculateStats(threeHybrid100Data);
			} else if (item.value === '4hybrid') {
				return calculateStats(fourHybrid100Data);
			} else if (item.value === '5hybrid') {
				return calculateStats(fiveHybrid100Data);
			} else if (item.value === '6hybrid') {
				return calculateStats(sixHybrid100Data);
			} else if (item.value === '7hybrid') {
				return calculateStats(sevenHybrid100Data);
			}
			// Irons
			else if (item.value === '2Iron') {
				return calculateStats(twoIron100Data);
			} else if (item.value === '3Iron') {
				return calculateStats(threeIron100Data);
			} else if (item.value === '4Iron') {
				return calculateStats(fourIron100Data);
			} else if (item.value === '5Iron') {
				return calculateStats(fiveIron100Data);
			} else if (item.value === '6Iron') {
				return calculateStats(sixIron100Data);
			} else if (item.value === '7Iron') {
				return calculateStats(sevenIron100Data);
			} else if (item.value === '8Iron') {
				return calculateStats(eightIron100Data);
			} else if (item.value === '9Iron') {
				return calculateStats(nineIron100Data);
			}
			// Wedge
			else if (item.value === 'Pwedge') {
				return calculateStats(pWedge100Data);
			} else if (item.value === '48wedge') {
				return calculateStats(forty8Wedge100Data);
			} else if (item.value === '50wedge') {
				return calculateStats(fiftyWedge100Data);
			} else if (item.value === '52wedge') {
				return calculateStats(fifty2Wedge100Data);
			} else if (item.value === '54wedge') {
				return calculateStats(fifty4Wedge100Data);
			} else if (item.value === '56wedge') {
				return calculateStats(fifty6Wedge100Data);
			} else if (item.value === '58wedge') {
				return calculateStats(fifty8Wedge100Data);
			} else if (item.value === '60wedge') {
				return calculateStats(sixtyWedge100Data);
			}
			// null
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};
		const calculateStats75 = () => {
			// Driver
			if (item.value === 'driver') {
				return calculateStats(driver75Data);
			} else if (item.value === '3wood') {
				return calculateStats(threeWood75Data);
			} else if (item.value === '5wood') {
				return calculateStats(fiveWood75Data);
			} else if (item.value === '7wood') {
				return calculateStats(sevenWood75Data);
			}
			// Hybrids
			else if (item.value === '2hybrid') {
				return calculateStats(twoHybrid75Data);
			} else if (item.value === '3hybrid') {
				return calculateStats(threeHybrid75Data);
			} else if (item.value === '4hybrid') {
				return calculateStats(fourHybrid75Data);
			} else if (item.value === '5hybrid') {
				return calculateStats(fiveHybrid75Data);
			} else if (item.value === '6hybrid') {
				return calculateStats(sixHybrid75Data);
			} else if (item.value === '7hybrid') {
				return calculateStats(sevenHybrid75Data);
			}
			// Irons
			else if (item.value === '2Iron') {
				return calculateStats(twoIron75Data);
			} else if (item.value === '3Iron') {
				return calculateStats(threeIron75Data);
			} else if (item.value === '4Iron') {
				return calculateStats(fourIron75Data);
			} else if (item.value === '5Iron') {
				return calculateStats(fiveIron75Data);
			} else if (item.value === '6Iron') {
				return calculateStats(sixIron75Data);
			} else if (item.value === '7Iron') {
				return calculateStats(sevenIron75Data);
			} else if (item.value === '8Iron') {
				return calculateStats(eightIron75Data);
			} else if (item.value === '9Iron') {
				return calculateStats(nineIron75Data);
			}
			// Wedge
			else if (item.value === 'Pwedge') {
				return calculateStats(pWedge75Data);
			} else if (item.value === '48wedge') {
				return calculateStats(forty8Wedge75Data);
			} else if (item.value === '50wedge') {
				return calculateStats(fiftyWedge75Data);
			} else if (item.value === '52wedge') {
				return calculateStats(fifty2Wedge75Data);
			} else if (item.value === '54wedge') {
				return calculateStats(fifty4Wedge75Data);
			} else if (item.value === '56wedge') {
				return calculateStats(fifty6Wedge75Data);
			} else if (item.value === '58wedge') {
				return calculateStats(fifty8Wedge75Data);
			} else if (item.value === '60wedge') {
				return calculateStats(sixtyWedge75Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};
		const calculateStats50 = () => {
			// Irons
			if (item.value === '2Iron') {
				return calculateStats(twoIron50Data);
			} else if (item.value === '3Iron') {
				return calculateStats(threeIron50Data);
			} else if (item.value === '4Iron') {
				return calculateStats(fourIron50Data);
			} else if (item.value === '5Iron') {
				return calculateStats(fiveIron50Data);
			} else if (item.value === '6Iron') {
				return calculateStats(sixIron50Data);
			} else if (item.value === '7Iron') {
				return calculateStats(sevenIron50Data);
			} else if (item.value === '8Iron') {
				return calculateStats(eightIron50Data);
			} else if (item.value === '9Iron') {
				return calculateStats(nineIron50Data);
			}
			// Wedge
			else if (item.value === 'Pwedge') {
				return calculateStats(pWedge50Data);
			} else if (item.value === '48wedge') {
				return calculateStats(forty8Wedge50Data);
			} else if (item.value === '50wedge') {
				return calculateStats(fiftyWedge50Data);
			} else if (item.value === '52wedge') {
				return calculateStats(fifty2Wedge50Data);
			} else if (item.value === '54wedge') {
				return calculateStats(fifty4Wedge50Data);
			} else if (item.value === '56wedge') {
				return calculateStats(fifty6Wedge50Data);
			} else if (item.value === '58wedge') {
				return calculateStats(fifty8Wedge50Data);
			} else if (item.value === '60wedge') {
				return calculateStats(sixtyWedge50Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};

		const calculateStats25 = () => {
			// Wedge
			if (item.value === 'Pwedge' && pWedge25Data.length > 0) {
				return calculateStats(pWedge25Data);
			} else if (item.value === '48wedge') {
				return calculateStats(forty8Wedge25Data);
			} else if (item.value === '50wedge') {
				return calculateStats(fiftyWedge25Data);
			} else if (item.value === '52wedge') {
				return calculateStats(fifty2Wedge25Data);
			} else if (item.value === '54wedge') {
				return calculateStats(fifty4Wedge25Data);
			} else if (item.value === '56wedge') {
				return calculateStats(fifty6Wedge25Data);
			} else if (item.value === '58wedge') {
				return calculateStats(fifty8Wedge25Data);
			} else if (item.value === '60wedge') {
				return calculateStats(sixtyWedge25Data);
			}
			// Else
			else {
				return (
					<Text
						style={[mainStyles.mdText, { fontWeight: '400', fontSize: 11 }]}
					>
						hit more shots
					</Text>
				);
			}
		};

		// Other Stats
		const stats100 = calculateStats100();
		const stats75 = calculateStats75();
		const stats50 = calculateStats50();
		const stats25 = calculateStats25();

		// Placeholder for additional stats
		const additionalStatsPlaceholder = () => {
			if (stats100 === null) {
				return <Text>TBD</Text>;
			} else {
				// Proceed with the calculation using the non-null value
				// Use the stats100 variable here or return it if needed
				return stats100;
			}
		};

		// Full Shot
		const fullShotLabelFunction = () => {
			if (item.clubType === 'wood') {
				// const fullShot = "100%"
				const fullShot = 'Full Swing';
				return fullShot;
			} else if (item.clubType === 'hybrid') {
				const fullShot = 'Full Swing';
				// const fullShot = "Full Shot"
				return fullShot;
			} else if (item.clubType === 'iron' || item.clubType === 'wedge') {
				const fullShot = 'Full Swing';
				// const fullShot = "Full Shot"
				return fullShot;
			} else {
				return 'Full Shot';
			}
		};
		// 3/4 Swing
		const seventyFiveShotLabelFunction = () => {
			if (item.value === 'driver') {
				const fullShot = 'Fairway Finder';
				return fullShot;
			} else if (item.clubType === 'wood') {
				const fullShot = 'Easy Swing';
				return fullShot;
			} else if (item.clubType === 'hybrid') {
				const fullShot = 'Easy Swing';
				return fullShot;
			} else if (item.clubType === 'iron') {
				const fullShot = '3/4 Swing';
				return fullShot;
			} else if (item.clubType === 'wedge') {
				const fullShot = '3/4 Swing';
				return fullShot;
			} else {
				return '3/4';
			}
		};
		// 1/2 Swing
		const fiftyShotLabelFunction = () => {
			if (item.clubType === 'iron') {
				const fullShot = 'Punch Shot';
				return fullShot;
			} else if (item.clubType === 'wedge') {
				const fullShot = 'Half Swing';
				return fullShot;
			} else {
				return 'Half Swing';
			}
		};
		// 1/4 Swing
		const twentyFiveShotLabelFunction = () => {
			if (item.clubType === 'wedge') {
				const fullShot = 'Quarter Swing';
				return fullShot;
			} else {
				return '1/4 Swing';
			}
		};
		const fullShotLabel = fullShotLabelFunction();
		const seventyFiveShotLabel = seventyFiveShotLabelFunction();
		const fiftyShotLabel = fiftyShotLabelFunction();
		const twentyFiveShotLabel = twentyFiveShotLabelFunction();

		if (item.clubType === 'wood' || item.clubType === 'hybrid') {
			return (
				// <Text key={item.id}>{item.club}</Text>
				<TouchableOpacity
					onPress={() => {
						console.log(
							`Club: ${item.club} Value: ${item.value} ID: ${item.id}`
						);
						openExpandedShotView(item);
					}}
				>
					<View style={[mainStyles.listRow, { padding: 0 }]}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								paddingVertical: 5,
								backgroundColor: '#d6d6d6',
								borderTopRightRadius: 10,
								borderTopLeftRadius: 10,
							}}
						>
							<View style={{ padding: 10 }}>
								<Text
									style={[mainStyles.header1, { color: 'blue' }]}
									key={item.id}
								>
									{item.club}
								</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
								alignItems: 'stretch',
								backgroundColor: '#eee',
								borderRadius: 10,
								padding: 10,
							}}
						>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingHorizontal: 5,
									paddingTop: 5,
								}}
							>
								<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
									Shot Type
								</Text>
								<Text
									style={[
										mainStyles.mdText,
										{ color: '#4d4d4d', paddingHorizontal: 5 },
									]}
								>
									Avg. Distance
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: 'flex-start',
									paddingHorizontal: 5,
									paddingBottom: 10,
								}}
							>
								{/* 100% yardage */}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{fullShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'flex-end',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average100}
											</Text>
											{/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats100.upperVariance}/{stats100.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{seventyFiveShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average75}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats75.upperVariance}/{stats75.lowerVariance}
											</Text>
										</View>
									</View>
								)}
							</View>
						</View>
					</View>
				</TouchableOpacity>
			);
		} else if (item.clubType === 'iron') {
			return (
				<TouchableOpacity
					onPress={() => {
						console.log(`Pressed ${item.club} & ${item.value}`);
						openExpandedShotView(item);
					}}
				>
					<View style={[mainStyles.listRow, { padding: 0 }]}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								paddingVertical: 5,
								backgroundColor: '#d6d6d6',
								borderTopRightRadius: 10,
								borderTopLeftRadius: 10,
							}}
						>
							<View style={{ padding: 10 }}>
								<Text
									style={[mainStyles.header1, { color: 'blue' }]}
									key={item.id}
								>
									{item.club}
								</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
								alignItems: 'stretch',
								backgroundColor: '#eee',
								borderRadius: 10,
								padding: 10,
							}}
						>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingHorizontal: 5,
									paddingTop: 5,
								}}
							>
								<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
									Shot Type
								</Text>
								<Text
									style={[
										mainStyles.mdText,
										{ color: '#4d4d4d', paddingHorizontal: 5 },
									]}
								>
									Avg. Distance
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: 'flex-start',
									paddingHorizontal: 5,
									paddingBottom: 10,
								}}
							>
								{/* 100% yardage */}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{fullShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'flex-end',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average100}
											</Text>
											{/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats100.upperVariance}/{stats100.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{seventyFiveShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average75}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats75.upperVariance}/{stats75.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{fiftyShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average50}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats50.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats50.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats50.upperVariance}/{stats50.lowerVariance}
											</Text>
										</View>
									</View>
								)}
							</View>
						</View>
						{/* {expandedItems[item.id] && (
                            // {openExpandedView ?
                            //     (

                            <View style={{}}>
                                <View style={{ backgroundColor: '#eee', paddingHorizontal: 10, }}>
                                    <Text>Testing</Text>
                                </View>
                            </View>
                        )
                            //  : null
                        } */}
					</View>
				</TouchableOpacity>
			);
		} else if (item.clubType === 'wedge') {
			return (
				// <Text key={item.id}>{item.club}</Text>
				<TouchableOpacity
					onPress={() => {
						console.log(`Pressed ${item.club} & ${item.value}`);
						openExpandedShotView(item);
					}}
				>
					<View style={[mainStyles.listRow, { padding: 0 }]}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								paddingVertical: 5,
								backgroundColor: '#d6d6d6',
								borderTopRightRadius: 10,
								borderTopLeftRadius: 10,
							}}
						>
							<View style={{ padding: 10 }}>
								<Text
									style={[mainStyles.header1, { color: 'blue' }]}
									key={item.id}
								>
									{item.club}
								</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
								alignItems: 'stretch',
								backgroundColor: '#eee',
								borderRadius: 10,
								padding: 10,
							}}
						>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingHorizontal: 5,
									paddingTop: 5,
								}}
							>
								<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
									Shot Type
								</Text>
								<Text
									style={[
										mainStyles.mdText,
										{ color: '#4d4d4d', paddingHorizontal: 5 },
									]}
								>
									Avg. Distance
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: 'flex-start',
									paddingHorizontal: 5,
									paddingBottom: 10,
								}}
							>
								{/* 100% yardage */}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{fullShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												flexDirection: 'row',
												alignItems: 'flex-end',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average100}
											</Text>
											{/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats100.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats100.upperVariance}/{stats100.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{seventyFiveShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average75}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats75.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats75.upperVariance}/{stats75.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{fiftyShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average50}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats50.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats50.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats50.upperVariance}/{stats50.lowerVariance}
											</Text>
										</View>
									</View>
								)}
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										alignItems: 'center',
										borderBottomWidth: 0.75,
										borderBottomColor: 'gray',
									}}
								>
									<View style={{ flex: 3, paddingBottom: 3 }}>
										<Text
											style={[
												mainStyles.header3,
												{ paddingVertical: 2, fontWeight: '800' },
											]}
										>
											{twentyFiveShotLabel}
										</Text>
									</View>
									<View
										style={{
											flex: 3,
											alignItems: 'flex-end',
											paddingBottom: 5,
										}}
									>
										<View
											style={{
												alignItems: 'center',
												padding: 5,
												borderRadius: 5,
												paddingHorizontal: 10,
											}}
										>
											<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
												{average25}
											</Text>
										</View>
									</View>
								</View>
								{expandedItems[item.id] && (
									<View
										style={{
											flex: 1,
											paddingVertical: 10,
											flexDirection: 'row',
											justifyContent: 'space-between',
											paddingBottom: 10,
										}}
									>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Total Shots
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats25.totalShots}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Historical Avg.
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												{stats25.mean}
											</Text>
										</View>
										<View
											style={{ backgroundColor: '#eee', paddingHorizontal: 10 }}
										>
											<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
												Variance
											</Text>
											<Text style={[mainStyles.header3, { color: '#4d4d4d' }]}>
												+{stats25.upperVariance}/{stats25.lowerVariance}
											</Text>
										</View>
									</View>
								)}
							</View>
						</View>
					</View>
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	};

	return (
		<SafeAreaView style={mainStyles.container}>
			<View style={[mainStyles.screenContainer, { paddingBottom: 150 }]}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						paddingBottom: 20,
					}}
				>
					<Text style={[mainStyles.header1, { fontSize: 30 }]}>My Bag</Text>
					<TouchableOpacity
						style={{ padding: 5 }}
						onPress={() =>
							navigation.navigate('Help', console.log('Go to Help'))
						}
					>
						<Feather name='info' size={20} color='black' />
					</TouchableOpacity>
				</View>
				<View
					style={{
						paddingBottom: 20,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
					}}
				>
					<Text style={mainStyles.header1}>Clubs in my bag:</Text>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(
								'ClubSelector',
								console.log('Go club selector')
							)
						}
						style={{ alignItems: 'center' }}
					>
						<Text style={mainStyles.smallText}>Edit Bag</Text>
						<Feather name='edit' size={24} color='black' />
					</TouchableOpacity>
				</View>
				<FlatList
					data={clubsInMyBag2.filter((item) => item.status === 'active')}
					renderItem={renderClubItem}
					keyExtractor={(item) => item.id.toString()}
					style={{}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default MyBagScreen;
