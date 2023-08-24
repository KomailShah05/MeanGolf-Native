import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	SafeAreaView,
	Keyboard,
	TouchableWithoutFeedback,
	FlatList,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import mainStyles from '../styles/mainStyles';

// Club Data
import { calculateStats } from '../data/ClubArrays/DriverStats';

export const ClubPickerScreen = ({
	clubsInMyBag2,
	calculateWeightedAverage,
	shotMeanFunction100,
	// New Shot Arrays
	driver100Data,
	driver75Data,
	threeWood100Data,
	threeWood75Data,
	fiveWood100Data,
	fiveWood75Data,
	sevenWood100Data,
	sevenWood75Data,
	// Set New Shot Arrays
	setDriver100Data,
	setDriver75Data,
	setThreeWood100Data,
	setThreeWood75Data,
	setFiveWood100Data,
	setFiveWood75Data,
	setSevenWood100Data,
	setSevenWood75Data,
	// Hybrids
	// Two Hybrid
	twoHybrid100Data,
	setTwoHybrid100Data,
	twoHybrid75Data,
	setTwoHybrid75Data,
	// Three Hybrid
	threeHybrid100Data,
	setThreeHybrid100Data,
	threeHybrid75Data,
	setThreeHybrid75Data,
	// Four Hybrid
	fourHybrid100Data,
	setFourHybrid100Data,
	fourHybrid75Data,
	setFourHybrid75Data,
	// Five Hybrid
	fiveHybrid100Data,
	setFiveHybrid100Data,
	fiveHybrid75Data,
	setFiveHybrid75Data,
	// Six Hybrid
	sixHybrid100Data,
	setSixHybrid100Data,
	sixHybrid75Data,
	setSixHybrid75Data,
	// Seven Hybrid
	sevenHybrid100Data,
	setSevenHybrid100Data,
	sevenHybrid75Data,
	setSevenHybrid75Data,
	// Irons
	// Two Iron
	twoIron100Data,
	setTwoIron100Data,
	twoIron75Data,
	setTwoIron75Data,
	twoIron50Data,
	setTwoIron50Data,
	twoIron25Data,
	setTwoIron25Data,
	// Three Iron
	threeIron100Data,
	setThreeIron100Data,
	threeIron75Data,
	setThreeIron75Data,
	threeIron50Data,
	setThreeIron50Data,
	threeIron25Data,
	setThreeIron25Data,
	// Four Iron
	fourIron100Data,
	setFourIron100Data,
	fourIron75Data,
	setFourIron75Data,
	fourIron50Data,
	setFourIron50Data,
	fourIron25Data,
	setFourIron25Data,
	// Five Iron
	fiveIron100Data,
	setFiveIron100Data,
	fiveIron75Data,
	setFiveIron75Data,
	fiveIron50Data,
	setFiveIron50Data,
	fiveIron25Data,
	setFiveIron25Data,
	// Six Iron
	sixIron100Data,
	setSixIron100Data,
	sixIron75Data,
	setSixIron75Data,
	sixIron50Data,
	setSixIron50Data,
	sixIron25Data,
	setSixIron25Data,
	// Seven Iron
	sevenIron100Data,
	setSevenIron100Data,
	sevenIron75Data,
	setSevenIron75Data,
	sevenIron50Data,
	setSevenIron50Data,
	sevenIron25Data,
	setSevenIron25Data,
	// Eight Iron
	eightIron100Data,
	setEightIron100Data,
	eightIron75Data,
	setEightIron75Data,
	eightIron50Data,
	setEightIron50Data,
	eightIron25Data,
	setEightIron25Data,
	// Nine Iron
	nineIron100Data,
	setNineIron100Data,
	nineIron75Data,
	setNineIron75Data,
	nineIron50Data,
	setNineIron50Data,
	nineIron25Data,
	setNineIron25Data,
	// Wedge
	// P Wedge
	pWedge100Data,
	setPWedge100Data,
	pWedge75Data,
	setPWedge75Data,
	pWedge50Data,
	setPWedge50Data,
	pWedge25Data,
	setPWedge25Data,
	// Forty8 Wedge
	forty8Wedge100Data,
	setForty8Wedge100Data,
	forty8Wedge75Data,
	setForty8Wedge75Data,
	forty8Wedge50Data,
	setForty8Wedge50Data,
	forty8Wedge25Data,
	setForty8Wedge25Data,
	// Fifty Wedge
	fiftyWedge100Data,
	setFiftyWedge100Data,
	fiftyWedge75Data,
	setFiftyWedge75Data,
	fiftyWedge50Data,
	setFiftyWedge50Data,
	fiftyWedge25Data,
	setFiftyWedge25Data,
	// Fifty2 Wedge
	fifty2Wedge100Data,
	setFifty2Wedge100Data,
	fifty2Wedge75Data,
	setFifty2Wedge75Data,
	fifty2Wedge50Data,
	setFifty2Wedge50Data,
	fifty2Wedge25Data,
	setFifty2Wedge25Data,
	// Fifty4 Wedge
	fifty4Wedge100Data,
	setFifty4Wedge100Data,
	fifty4Wedge75Data,
	setFifty4Wedge75Data,
	fifty4Wedge50Data,
	setFifty4Wedge50Data,
	fifty4Wedge25Data,
	setFifty4Wedge25Data,
	// Fifty6 Wedge
	fifty6Wedge100Data,
	setFifty6Wedge100Data,
	fifty6Wedge75Data,
	setFifty6Wedge75Data,
	fifty6Wedge50Data,
	setFifty6Wedge50Data,
	fifty6Wedge25Data,
	setFifty6Wedge25Data,
	// Fifty8 Wedge
	fifty8Wedge100Data,
	setFifty8Wedge100Data,
	fifty8Wedge75Data,
	setFifty8Wedge75Data,
	fifty8Wedge50Data,
	setFifty8Wedge50Data,
	fifty8Wedge25Data,
	setFifty8Wedge25Data,
	// Sixty Wedge
	sixtyWedge100Data,
	setSixtyWedge100Data,
	sixtyWedge75Data,
	setSixtyWedge75Data,
	sixtyWedge50Data,
	setSixtyWedge50Data,
	sixtyWedge25Data,
	setSixtyWedge25Data,
}) => {
	// Add into the code if a distance is further than you can reach, suggest two clubs to hit to get to that spot.
	// useEffect(() => {
	//     const weightedAverage = driver100WeightedAverage();
	//     setDriver100WeightedAve(weightedAverage);
	// }, [driver100Data]);

	// Woods
	const driver100Ave = calculateWeightedAverage(driver100Data);
	const driver75Ave = shotMeanFunction100(driver75Data);
	const threeWood100Ave = shotMeanFunction100(threeWood100Data);
	const threeWood75Ave = shotMeanFunction100(threeWood75Data);
	const fiveWood100Ave = shotMeanFunction100(fiveWood100Data);
	const fiveWood75Ave = shotMeanFunction100(fiveWood75Data);
	const sevenWood100Ave = shotMeanFunction100(sevenWood100Data);
	const sevenWood75Ave = shotMeanFunction100(sevenWood75Data);
	// Hybrids
	const twoHybrid100Ave = shotMeanFunction100(twoHybrid100Data);
	const twoHybrid75Ave = shotMeanFunction100(twoHybrid75Data);
	const threeHybrid100Ave = shotMeanFunction100(threeHybrid100Data);
	const threeHybrid75Ave = shotMeanFunction100(threeHybrid75Data);
	const fourHybrid100Ave = shotMeanFunction100(fourHybrid100Data);
	const fourHybrid75Ave = shotMeanFunction100(fourHybrid75Data);
	const fiveHybrid100Ave = shotMeanFunction100(fiveHybrid100Data);
	const fiveHybrid75Ave = shotMeanFunction100(fiveHybrid75Data);
	const sixHybrid100Ave = shotMeanFunction100(sixHybrid100Data);
	const sixHybrid75Ave = shotMeanFunction100(sixHybrid75Data);
	const sevenHybrid100Ave = shotMeanFunction100(sevenHybrid100Data);
	const sevenHybrid75Ave = shotMeanFunction100(sevenHybrid75Data);
	// Irons
	const twoIron100Ave = shotMeanFunction100(twoIron100Data);
	const twoIron75Ave = shotMeanFunction100(twoIron75Data);
	const twoIron50Ave = shotMeanFunction100(twoIron50Data);
	const threeIron100Ave = shotMeanFunction100(threeIron100Data);
	const threeIron75Ave = shotMeanFunction100(threeIron75Data);
	const threeIron50Ave = shotMeanFunction100(threeIron50Data);
	const fourIron100Ave = shotMeanFunction100(fourIron100Data);
	const fourIron75Ave = shotMeanFunction100(fourIron75Data);
	const fourIron50Ave = shotMeanFunction100(fourIron50Data);
	const fiveIron100Ave = shotMeanFunction100(fiveIron100Data);
	const fiveIron75Ave = shotMeanFunction100(fiveIron75Data);
	const fiveIron50Ave = shotMeanFunction100(fiveIron50Data);
	const sixIron100Ave = shotMeanFunction100(sixIron100Data);
	const sixIron75Ave = shotMeanFunction100(sixIron75Data);
	const sixIron50Ave = shotMeanFunction100(sixIron50Data);
	const sevenIron100Ave = shotMeanFunction100(sevenIron100Data);
	const sevenIron75Ave = shotMeanFunction100(sevenIron75Data);
	const sevenIron50Ave = shotMeanFunction100(sevenIron50Data);
	const eightIron100Ave = shotMeanFunction100(eightIron100Data);
	const eightIron75Ave = shotMeanFunction100(eightIron75Data);
	const eightIron50Ave = shotMeanFunction100(eightIron50Data);
	const nineIron100Ave = shotMeanFunction100(nineIron100Data);
	const nineIron75Ave = shotMeanFunction100(nineIron75Data);
	const nineIron50Ave = shotMeanFunction100(nineIron50Data);
	// Wedges
	const pWedge100Ave = shotMeanFunction100(pWedge100Data);
	const pWedge75Ave = shotMeanFunction100(pWedge75Data);
	const pWedge50Ave = shotMeanFunction100(pWedge50Data);
	const pWedge25Ave = shotMeanFunction100(pWedge25Data);
	const forty8Wedge100Ave = shotMeanFunction100(forty8Wedge100Data);
	const forty8Wedge75Ave = shotMeanFunction100(forty8Wedge75Data);
	const forty8Wedge50Ave = shotMeanFunction100(forty8Wedge50Data);
	const forty8Wedge25Ave = shotMeanFunction100(forty8Wedge25Data);

	const fiftyWedge100Ave = shotMeanFunction100(fiftyWedge100Data);
	const fiftyWedge75Ave = shotMeanFunction100(fiftyWedge75Data);
	const fiftyWedge50Ave = shotMeanFunction100(fiftyWedge50Data);
	const fiftyWedge25Ave = shotMeanFunction100(fiftyWedge25Data);

	const fifty2Wedge100Ave = shotMeanFunction100(fifty2Wedge100Data);
	const fifty2Wedge75Ave = shotMeanFunction100(fifty2Wedge75Data);
	const fifty2Wedge50Ave = shotMeanFunction100(fifty2Wedge50Data);
	const fifty2Wedge25Ave = shotMeanFunction100(fifty2Wedge25Data);

	const fifty4Wedge100Ave = shotMeanFunction100(fifty4Wedge100Data);
	const fifty4Wedge75Ave = shotMeanFunction100(fifty4Wedge75Data);
	const fifty4Wedge50Ave = shotMeanFunction100(fifty4Wedge50Data);
	const fifty4Wedge25Ave = shotMeanFunction100(fifty4Wedge25Data);

	const fifty6Wedge100Ave = shotMeanFunction100(fifty6Wedge100Data);
	const fifty6Wedge75Ave = shotMeanFunction100(fifty6Wedge75Data);
	const fifty6Wedge50Ave = shotMeanFunction100(fifty6Wedge50Data);
	const fifty6Wedge25Ave = shotMeanFunction100(fifty6Wedge25Data);

	const fifty8Wedge100Ave = shotMeanFunction100(fifty8Wedge100Data);
	const fifty8Wedge75Ave = shotMeanFunction100(fifty8Wedge75Data);
	const fifty8Wedge50Ave = shotMeanFunction100(fifty8Wedge50Data);
	const fifty8Wedge25Ave = shotMeanFunction100(fifty8Wedge25Data);

	const sixtyWedge100Ave = shotMeanFunction100(sixtyWedge100Data);
	const sixtyWedge75Ave = shotMeanFunction100(sixtyWedge75Data);
	const sixtyWedge50Ave = shotMeanFunction100(sixtyWedge50Data);
	const sixtyWedge25Ave = shotMeanFunction100(sixtyWedge25Data);

	const [distance, setDistance] = useState('0');
	const rangeValue = 10;
	const shotMin = 0;

	// const ClubChoices = (number) => {
	// 	if (number < 10) {
	// 		return <Text></Text>;
	// 	} else if (number > 10) {
	// 		return <Text>Distance is above 10</Text>;
	// 	} else {
	// 		return <Text>I'm dumb</Text>;
	// 	}
	// };

	const ShotTypePicker = () => {
		if (distance === 0) {
			return null;
		} else {
			const metConditions = [];

			if (
				Math.abs(driver100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 1 && item.status === 'active'
				) &&
				driver100Ave > shotMin
			) {
				metConditions.push({
					key: 1,
					shotDistance: driver100Ave,
					clubType: 'Driver',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(driver75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 1 && item.status === 'active'
				) &&
				driver75Ave > shotMin
			) {
				metConditions.push({
					key: 2,
					shotDistance: driver75Ave,
					clubType: 'Driver',
					shotType: 'Fairway Finder',
				});
			}
			if (
				Math.abs(threeWood100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 2 && item.status === 'active'
				) &&
				threeWood100Ave > shotMin
			) {
				metConditions.push({
					key: 3,
					shotDistance: threeWood100Ave,
					clubType: '3 Wood',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(threeWood75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 2 && item.status === 'active'
				) &&
				threeWood75Ave > shotMin
			) {
				metConditions.push({
					key: 4,
					shotDistance: threeWood75Ave,
					clubType: '3 Wood',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(fiveWood100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 3 && item.status === 'active'
				) &&
				fiveWood100Ave > shotMin
			) {
				metConditions.push({
					key: 5,
					shotDistance: fiveWood100Ave,
					clubType: '5 Wood',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fiveWood75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 3 && item.status === 'active'
				) &&
				fiveWood75Ave > shotMin
			) {
				metConditions.push({
					key: 6,
					shotDistance: fiveWood75Ave,
					clubType: '5 Wood',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(sevenWood100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 4 && item.status === 'active'
				) &&
				sevenWood100Ave > shotMin
			) {
				metConditions.push({
					key: 7,
					shotDistance: sevenWood100Ave,
					clubType: '7 Wood',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sevenWood75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 4 && item.status === 'active'
				) &&
				sevenWood75Ave > shotMin
			) {
				metConditions.push({
					key: 8,
					shotDistance: sevenWood75Ave,
					clubType: '7 Wood',
					shotType: 'Easy Swing',
				});
			}
			// Hybrids
			if (
				Math.abs(twoHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 5 && item.status === 'active'
				) &&
				twoHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 9,
					shotDistance: twoHybrid100Ave,
					clubType: '2 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(twoHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 5 && item.status === 'active'
				) &&
				twoHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 10,
					shotDistance: twoHybrid75Ave,
					clubType: '2 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(threeHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 6 && item.status === 'active'
				) &&
				threeHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 11,
					shotDistance: threeHybrid100Ave,
					clubType: '3 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(threeHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 6 && item.status === 'active'
				) &&
				threeHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 12,
					shotDistance: threeHybrid75Ave,
					clubType: '3 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(fourHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 7 && item.status === 'active'
				) &&
				fourHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 13,
					shotDistance: fourHybrid100Ave,
					clubType: '4 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fourHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 7 && item.status === 'active'
				) &&
				fourHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 14,
					shotDistance: fourHybrid75Ave,
					clubType: '4 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(fiveHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 8 && item.status === 'active'
				) &&
				fiveHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 15,
					shotDistance: fiveHybrid100Ave,
					clubType: '5 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fiveHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 8 && item.status === 'active'
				) &&
				fiveHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 16,
					shotDistance: fiveHybrid75Ave,
					clubType: '5 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(sixHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 9 && item.status === 'active'
				) &&
				sixHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 17,
					shotDistance: sixHybrid100Ave,
					clubType: '6 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sixHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 9 && item.status === 'active'
				) &&
				sixHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 18,
					shotDistance: sixHybrid75Ave,
					clubType: '6 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(sevenHybrid100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 10 && item.status === 'active'
				) &&
				sevenHybrid100Ave > shotMin
			) {
				metConditions.push({
					key: 19,
					shotDistance: sevenHybrid100Ave,
					clubType: '7 Hybrid',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sevenHybrid75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 10 && item.status === 'active'
				) &&
				sevenHybrid75Ave > shotMin
			) {
				metConditions.push({
					key: 20,
					shotDistance: sevenHybrid75Ave,
					clubType: '7 Hybrid',
					shotType: 'Easy Swing',
				});
			}
			// Irons
			// 2 Iron
			if (
				Math.abs(twoIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 11 && item.status === 'active'
				) &&
				twoIron100Ave > shotMin
			) {
				metConditions.push({
					key: 20,
					shotDistance: twoIron100Ave,
					clubType: '2 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(twoIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 11 && item.status === 'active'
				) &&
				twoIron75Ave > shotMin
			) {
				metConditions.push({
					key: 21,
					shotDistance: twoIron75Ave,
					clubType: '2 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(twoIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 11 && item.status === 'active'
				) &&
				twoIron50Ave > shotMin
			) {
				metConditions.push({
					key: 22,
					shotDistance: twoIron50Ave,
					clubType: '2 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 3 Iron
			if (
				Math.abs(threeIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 12 && item.status === 'active'
				) &&
				threeIron100Ave > shotMin
			) {
				metConditions.push({
					key: 23,
					shotDistance: threeIron100Ave,
					clubType: '3 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(threeIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 12 && item.status === 'active'
				) &&
				threeIron75Ave > shotMin
			) {
				metConditions.push({
					key: 24,
					shotDistance: threeIron75Ave,
					clubType: '3 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(threeIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 12 && item.status === 'active'
				) &&
				threeIron50Ave > shotMin
			) {
				metConditions.push({
					key: 25,
					shotDistance: threeIron50Ave,
					clubType: '3 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 4 Iron
			if (
				Math.abs(fourIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 13 && item.status === 'active'
				) &&
				fourIron100Ave > shotMin
			) {
				metConditions.push({
					key: 26,
					shotDistance: fourIron100Ave,
					clubType: '4 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fourIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 13 && item.status === 'active'
				) &&
				fourIron75Ave > shotMin
			) {
				metConditions.push({
					key: 27,
					shotDistance: fourIron75Ave,
					clubType: '4 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(fourIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 13 && item.status === 'active'
				) &&
				fourIron50Ave > shotMin
			) {
				metConditions.push({
					key: 28,
					shotDistance: fourIron50Ave,
					clubType: '4 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 5 Iron
			if (
				Math.abs(fiveIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 14 && item.status === 'active'
				) &&
				fiveIron100Ave > shotMin
			) {
				metConditions.push({
					key: 29,
					shotDistance: fiveIron100Ave,
					clubType: '5 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fiveIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 14 && item.status === 'active'
				) &&
				fiveIron75Ave > shotMin
			) {
				metConditions.push({
					key: 30,
					shotDistance: fiveIron75Ave,
					clubType: '5 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(fiveIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 14 && item.status === 'active'
				) &&
				fiveIron50Ave > shotMin
			) {
				metConditions.push({
					key: 31,
					shotDistance: fiveIron50Ave,
					clubType: '5 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 6 Iron
			if (
				Math.abs(sixIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 15 && item.status === 'active'
				) &&
				sixIron100Ave > shotMin
			) {
				metConditions.push({
					key: 32,
					shotDistance: sixIron100Ave,
					clubType: '6 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sixIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 15 && item.status === 'active'
				) &&
				sixIron75Ave > shotMin
			) {
				metConditions.push({
					key: 33,
					shotDistance: sixIron75Ave,
					clubType: '6 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(sixIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 15 && item.status === 'active'
				) &&
				sixIron50Ave > shotMin
			) {
				metConditions.push({
					key: 34,
					shotDistance: sixIron50Ave,
					clubType: '6 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 7 Iron
			if (
				Math.abs(sevenIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 16 && item.status === 'active'
				) &&
				fourIron50Ave > shotMin
			) {
				metConditions.push({
					key: 35,
					shotDistance: sevenIron100Ave,
					clubType: '7 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sevenIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 16 && item.status === 'active'
				) &&
				fourIron50Ave > shotMin
			) {
				metConditions.push({
					key: 36,
					shotDistance: sevenIron75Ave,
					clubType: '7 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(sevenIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 16 && item.status === 'active'
				) &&
				fourIron50Ave > shotMin
			) {
				metConditions.push({
					key: 37,
					shotDistance: sevenIron50Ave,
					clubType: '7 Iron',
					shotType: 'Punch Shot',
				});
			}
			// 8 Iron
			if (
				Math.abs(eightIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 17 && item.status === 'active'
				) &&
				eightIron100Ave > shotMin
			) {
				metConditions.push({
					key: 38,
					shotDistance: eightIron100Ave,
					clubType: '8 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(eightIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 17 && item.status === 'active'
				) &&
				eightIron75Ave > shotMin
			) {
				metConditions.push({
					key: 39,
					shotDistance: eightIron75Ave,
					clubType: '8 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(eightIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) =>
						item.id === 17 &&
						item.status === 'active' &&
						eightIron50Ave > shotMin
				)
			) {
				metConditions.push({
					key: 40,
					shotDistance: eightIron50Ave,
					clubType: '8 Iron',
					shotType: 'Punch Shot',
				});
			}

			// 9 Iron
			if (
				Math.abs(nineIron100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 18 && item.status === 'active'
				) &&
				nineIron100Ave > shotMin
			) {
				metConditions.push({
					key: 41,
					shotDistance: nineIron100Ave,
					clubType: '9 Iron',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(nineIron75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 18 && item.status === 'active'
				) &&
				nineIron75Ave > shotMin
			) {
				metConditions.push({
					key: 42,
					shotDistance: nineIron75Ave,
					clubType: '9 Iron',
					shotType: 'Easy Swing',
				});
			}
			if (
				Math.abs(nineIron50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 18 && item.status === 'active'
				) &&
				nineIron50Ave > shotMin
			) {
				metConditions.push({
					key: 43,
					shotDistance: nineIron50Ave,
					clubType: '9 Iron',
					shotType: 'Punch Shot',
				});
			}
			// Wedges
			// P Wedge
			if (
				Math.abs(pWedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 19 && item.status === 'active'
				) &&
				pWedge100Ave > shotMin
			) {
				metConditions.push({
					key: 44,
					shotDistance: pWedge100Ave,
					clubType: 'P Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(pWedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 19 && item.status === 'active'
				) &&
				pWedge75Ave > shotMin
			) {
				metConditions.push({
					key: 45,
					shotDistance: pWedge75Ave,
					clubType: 'P Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(pWedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 19 && item.status === 'active'
				) &&
				pWedge50Ave > shotMin
			) {
				metConditions.push({
					key: 46,
					shotDistance: pWedge50Ave,
					clubType: 'P Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(pWedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 19 && item.status === 'active'
				) &&
				pWedge25Ave > shotMin
			) {
				metConditions.push({
					key: 47,
					shotDistance: pWedge25Ave,
					clubType: 'P Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 48 Wedge
			if (
				Math.abs(forty8Wedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 20 && item.status === 'active'
				) &&
				forty8Wedge100Ave > shotMin
			) {
				metConditions.push({
					key: 48,
					shotDistance: forty8Wedge100Ave,
					clubType: '48 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(forty8Wedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 20 && item.status === 'active'
				) &&
				forty8Wedge75Ave > shotMin
			) {
				metConditions.push({
					key: 49,
					shotDistance: forty8Wedge75Ave,
					clubType: '48 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(forty8Wedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 20 && item.status === 'active'
				) &&
				forty8Wedge50Ave > shotMin
			) {
				metConditions.push({
					key: 50,
					shotDistance: forty8Wedge50Ave,
					clubType: '48 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(forty8Wedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 20 && item.status === 'active'
				) &&
				forty8Wedge25Ave > shotMin
			) {
				metConditions.push({
					key: 51,
					shotDistance: forty8Wedge25Ave,
					clubType: '48 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 50 Wedge
			if (
				Math.abs(fiftyWedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 21 && item.status === 'active'
				) &&
				fiftyWedge100Ave > shotMin
			) {
				metConditions.push({
					key: 52,
					shotDistance: fiftyWedge100Ave,
					clubType: '50 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fiftyWedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 21 && item.status === 'active'
				) &&
				fiftyWedge75Ave > shotMin
			) {
				metConditions.push({
					key: 53,
					shotDistance: fiftyWedge75Ave,
					clubType: '50 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(fiftyWedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 21 && item.status === 'active'
				) &&
				fiftyWedge50Ave > shotMin
			) {
				metConditions.push({
					key: 54,
					shotDistance: fiftyWedge50Ave,
					clubType: '50 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(fiftyWedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 21 && item.status === 'active'
				) &&
				fiftyWedge25Ave > shotMin
			) {
				metConditions.push({
					key: 55,
					shotDistance: fiftyWedge25Ave,
					clubType: '50 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 52 Wedge
			if (
				Math.abs(fifty2Wedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 22 && item.status === 'active'
				) &&
				fifty2Wedge100Ave > shotMin
			) {
				metConditions.push({
					key: 56,
					shotDistance: fifty2Wedge100Ave,
					clubType: '52 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fifty2Wedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 22 && item.status === 'active'
				) &&
				fifty2Wedge75Ave > shotMin
			) {
				metConditions.push({
					key: 57,
					shotDistance: fifty2Wedge75Ave,
					clubType: '52 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(fifty2Wedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 22 && item.status === 'active'
				) &&
				fifty2Wedge50Ave > shotMin
			) {
				metConditions.push({
					key: 58,
					shotDistance: fifty2Wedge50Ave,
					clubType: '52 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(fifty2Wedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 22 && item.status === 'active'
				) &&
				fifty2Wedge25Ave > shotMin
			) {
				metConditions.push({
					key: 59,
					shotDistance: fifty2Wedge25Ave,
					clubType: '52 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 54 Wedge
			if (
				Math.abs(fifty4Wedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 23 && item.status === 'active'
				) &&
				fifty4Wedge100Ave > shotMin
			) {
				metConditions.push({
					key: 60,
					shotDistance: fifty4Wedge100Ave,
					clubType: '54 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fifty4Wedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 23 && item.status === 'active'
				) &&
				fifty4Wedge75Ave > shotMin
			) {
				metConditions.push({
					key: 61,
					shotDistance: fifty4Wedge75Ave,
					clubType: '54 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(fifty4Wedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 23 && item.status === 'active'
				) &&
				fifty4Wedge50Ave > shotMin
			) {
				metConditions.push({
					key: 62,
					shotDistance: fifty4Wedge50Ave,
					clubType: '54 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(fifty4Wedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 23 && item.status === 'active'
				) &&
				fifty4Wedge25Ave > shotMin
			) {
				metConditions.push({
					key: 63,
					shotDistance: fifty4Wedge25Ave,
					clubType: '54 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 56 Wedge
			if (
				Math.abs(fifty6Wedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 24 && item.status === 'active'
				) &&
				fifty6Wedge100Ave > shotMin
			) {
				metConditions.push({
					key: 64,
					shotDistance: fifty6Wedge100Ave,
					clubType: '56 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fifty6Wedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 24 && item.status === 'active'
				) &&
				fifty6Wedge75Ave > shotMin
			) {
				metConditions.push({
					key: 65,
					shotDistance: fifty6Wedge75Ave,
					clubType: '56 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(fifty6Wedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 24 && item.status === 'active'
				) &&
				fifty6Wedge50Ave > shotMin
			) {
				metConditions.push({
					key: 66,
					shotDistance: fifty6Wedge50Ave,
					clubType: '56 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(fifty6Wedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 24 && item.status === 'active'
				) &&
				fifty6Wedge25Ave > shotMin
			) {
				metConditions.push({
					key: 67,
					shotDistance: fifty6Wedge25Ave,
					clubType: '56 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 58 Wedge
			if (
				Math.abs(fifty8Wedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 25 && item.status === 'active'
				) &&
				fifty8Wedge100Ave > shotMin
			) {
				metConditions.push({
					key: 68,
					shotDistance: fifty8Wedge100Ave,
					clubType: '58 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(fifty8Wedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 25 && item.status === 'active'
				) &&
				fifty8Wedge75Ave > shotMin
			) {
				metConditions.push({
					key: 69,
					shotDistance: fifty8Wedge75Ave,
					clubType: '58 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(fifty8Wedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 25 && item.status === 'active'
				) &&
				fifty8Wedge50Ave > shotMin
			) {
				metConditions.push({
					key: 70,
					shotDistance: fifty8Wedge50Ave,
					clubType: '58 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(fifty8Wedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 25 && item.status === 'active'
				) &&
				fifty8Wedge25Ave > shotMin
			) {
				metConditions.push({
					key: 71,
					shotDistance: fifty8Wedge25Ave,
					clubType: '58 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// 60 Wedge
			if (
				Math.abs(sixtyWedge100Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 26 && item.status === 'active'
				) &&
				sixtyWedge100Ave > shotMin
			) {
				metConditions.push({
					key: 72,
					shotDistance: sixtyWedge100Ave,
					clubType: '60 Wedge',
					shotType: 'Full Swing',
				});
			}
			if (
				Math.abs(sixtyWedge75Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 26 && item.status === 'active'
				) &&
				sixtyWedge75Ave > shotMin
			) {
				metConditions.push({
					key: 73,
					shotDistance: sixtyWedge75Ave,
					clubType: '60 Wedge',
					shotType: '3/4 Swing',
				});
			}
			if (
				Math.abs(sixtyWedge50Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 26 && item.status === 'active'
				) &&
				sixtyWedge50Ave > shotMin
			) {
				metConditions.push({
					key: 74,
					shotDistance: sixtyWedge50Ave,
					clubType: '60 Wedge',
					shotType: 'Half Swing',
				});
			}
			if (
				Math.abs(sixtyWedge25Ave - distance) <= rangeValue &&
				clubsInMyBag2.some(
					(item) => item.id === 26 && item.status === 'active'
				) &&
				sixtyWedge25Ave > shotMin
			) {
				metConditions.push({
					key: 75,
					shotDistance: sixtyWedge25Ave,
					clubType: '60 Wedge',
					shotType: 'Quarter Swing',
				});
			}
			// return metConditions;
			return metConditions.length === 0 ? null : metConditions;
		}
	};

	const handleDistanceChange = (text) => {
		if (/^\d*$/.test(text)) {
			setDistance(text);
		}
	};

	// const noShot = ShotTypePicker();

	const renderClubItem = ({ item }) => (
		<View style={{}}>
			<View
				style={[
					mainStyles.listRow,
					{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					},
				]}
			>
				<View style={{ flex: 4, flexDirection: 'row' }}>
					<View style={{ paddingHorizontal: 10 }}>
						<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>Club</Text>
						<Text style={[mainStyles.header1, { color: 'blue' }]}>
							{item.clubType}
						</Text>
					</View>
				</View>
				<View
					style={{ flex: 4, paddingHorizontal: 10, alignItems: 'flex-start' }}
				>
					<View>
						<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
							Shot Type
						</Text>
						<Text
							style={[
								mainStyles.header3,
								{ paddingVertical: 2, fontWeight: '800' },
							]}
						>
							{item.shotType}
						</Text>
					</View>
				</View>
				<View
					style={{ flex: 2, alignItems: 'flex-end', paddingHorizontal: 10 }}
				>
					<View>
						<Text style={[mainStyles.mdText, { color: '#4d4d4d' }]}>
							Distance
						</Text>
						<Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>
							{item.shotDistance}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);

	// Create a function that says if distance === driver100
	return (
		<SafeAreaView style={mainStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={[mainStyles.screenContainer, { flex: 1 }]}>
					<Text
						style={[
							mainStyles.header1,
							{ alignSelf: 'center', paddingBottom: 30, fontSize: 30 },
						]}
					>
						Club Suggestions
					</Text>
					<View style={{ alignItems: 'center' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={[mainStyles.header1, { paddingRight: 5 }]}>
								Distance:
							</Text>
							<View style={mainStyles.inputBackground}>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										paddingHorizontal: 5,
									}}
								>
									{/* <TextInput
										placeholder={distance}
										maxLength={3}
										keyboardType='numeric'
										style={{
											padding: 10,
											paddingHorizontal: 10,
											fontSize: 20,
											fontWeight: '800',
										}}
										onChangeText={(text) => setDistance(text)}
									/> */}
									{/* <TextInput
										placeholder={distance}
										maxLength={3}
										keyboardType={
											Platform.OS === 'ios' ? 'numeric' : 'number-pad'
										}
										style={{
											padding: 10,
											paddingHorizontal: 10,
											fontSize: 20,
											fontWeight: '800',
										}}
										onChangeText={handleDistanceChange}
										value={distance}
									/> */}
									<TextInput
										placeholder='0'
										placeholderTextColor='gray'
										maxLength={3}
										keyboardType={
											Platform.OS === 'ios' ? 'numeric' : 'number-pad'
										}
										style={{
											padding: 10,
											paddingHorizontal: 10,
											fontSize: 20,
											fontWeight: '800',
											color: 'blue',
										}}
										onChangeText={handleDistanceChange}
										value={distance === '0' ? '' : distance}
									/>
									<Text style={mainStyles.header2}>yds</Text>
								</View>
							</View>
						</View>
						<View style={{ paddingTop: 10 }}>
							<Text style={[mainStyles.smallText, { fontSize: 12 }]}>
								How far are you from the target?
							</Text>
						</View>
					</View>
					<View style={{ paddingVertical: 20 }}>
						<View>
							<Text style={mainStyles.header1}>Suggested shots to hit:</Text>
						</View>
						<View>
							{(() => {
								if (distance === '0') {
									return (
										<Text style={{ color: '#707070', paddingVertical: 5 }}>
											Change the distance to see clubs...
										</Text>
									);
								} else if (
									ShotTypePicker() === null ||
									ShotTypePicker().length === 0
								) {
									return (
										<Text style={{ color: '#707070', paddingVertical: 5 }}>
											No shots for this distance...
										</Text>
									);
								} else {
									return null;
								}
							})()}
						</View>
						<View style={{}}>
							<View style={{ padding: 10 }}>
								{/* <FlatList
									data={ShotTypePicker()}
									renderItem={renderItem}
									keyExtractor={(item, id, index) => item.id.toString()}
								/> */}
								<FlatList
									data={ShotTypePicker()}
									renderItem={renderClubItem}
									keyExtractor={(item) => item.key.toString()}
								/>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

export default ClubPickerScreen;
