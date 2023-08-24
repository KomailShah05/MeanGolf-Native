import React, { useState } from 'react';

export const StatCalculations = () => {
	const [shotMean100, setShotMean100] = useState(0);
	const [shotMean75, setShotMean75] = useState(0);
	const [shotMean50, setShotMean50] = useState(0);
	const [shotMean25, setShotMean25] = useState(0);

	const [meanValues, setMeanValues] = useState({});

	// Function to calculate mean and total shots
	// const calculateStats = (array) => {
	//     const totalShots = array.length;
	//     const distances = array.map((shot) => shot.distance); // Extract the distances from each shot
	//     const sum = distances.reduce((acc, distance) => acc + distance, 0);
	//     const mean = totalShots > 0 ? Math.round(sum / totalShots) : 0;
	//     const upperVariance = Math.round(Math.max(...distances) - mean);
	//     const lowerVariance = Math.round(Math.min(...distances) - mean);
	//     return { totalShots, mean, upperVariance, lowerVariance };
	// };
	const calculateStats = (array, setArray) => {
		const totalShots = array.length;
		const distances = array.map((shot) => shot.distance); // Extract the distances from each shot
		const sum = distances.reduce((acc, distance) => acc + distance, 0);
		const mean = totalShots > 0 ? Math.round(sum / totalShots) : 0;
		// const upperVariance = Math.round(Math.max(...distances) - mean);
		// const lowerVariance = Math.round(Math.min(...distances) - mean);
		const upperVariance =
			distances.length > 0 ? Math.round(Math.max(...distances) - mean) : 0;
		const lowerVariance =
			distances.length > 0 ? Math.round(Math.min(...distances) - mean) : 0;

		return { totalShots, mean, upperVariance, lowerVariance };
	};

	function calculateWeightedAverage(array, distance) {
		const firstSetWeight = 0.5; // Weight for the first set of values (1-10)
		const secondSetWeight = 0.3; // Weight for the second set of values (11-20)
		const thirdSetWeight = 0.2; // Weight for the third set of values (21-30)

		if (distance === 0) {
			return 0; // Handle the case when distance is 0
		}

		if (array.length >= 30) {
			let sum = 0;
			let weightSum = 0;

			for (let i = 0; i < 30; i++) {
				let weight;

				if (i < 10) {
					weight = firstSetWeight;
				} else if (i < 20) {
					weight = secondSetWeight;
				} else {
					weight = thirdSetWeight;
				}

				sum += array[i].distance * weight;
				weightSum += weight;
			}
			// remove this eventually
			console.log('Shots over 30');
			return Math.round(sum / weightSum);
		}

		if (array.length > 0 && array.length < 30) {
			const distances = array.map((item) => item.distance);
			const sum = distances.reduce((acc, value) => acc + value, 0);
			const average = Math.round(sum / distances.length);
			// remove this eventually
			console.log('Shots between 1 - 30');
			return average;
		}

		return 0; // Handle the case when array is empty or length is negative
	}

	const shotMeanFunction100 = (arrayUsed) => {
		const distances = arrayUsed.map((item) => item.distance);
		if (distances.length === 0) {
			return 0; // Return 0 if the array is empty
		}

		const sum = distances.reduce((acc, value) => acc + value, 0);
		const average = Math.round(sum / distances.length);
		return average;
	};
	const shotMeanFunction75 = (arrayUsed) => {
		const distances = arrayUsed.map((item) => item.distance);
		if (distances.length === 0) {
			// setShotMean75(0); // Update state value with 0 if the array is empty
			return 0;
		}

		const sum = distances.reduce((acc, value) => acc + value, 0);
		const average = Math.round(sum / distances.length);
		// setShotMean75(average); // Update state value with the calculated average
		return average;
	};
	const shotMeanFunction50 = (arrayUsed) => {
		const distances = arrayUsed.map((item) => item.distance);
		if (distances.length === 0) {
			// setShotMean75(0); // Update state value with 0 if the array is empty
			return 0;
		}

		const sum = distances.reduce((acc, value) => acc + value, 0);
		const average = Math.round(sum / distances.length);
		// setShotMean75(average); // Update state value with the calculated average
		return average;
	};
	const shotMeanFunction25 = (arrayUsed) => {
		const distances = arrayUsed.map((item) => item.distance);
		if (distances.length === 0) {
			// setShotMean75(0); // Update state value with 0 if the array is empty
			return 0;
		}

		const sum = distances.reduce((acc, value) => acc + value, 0);
		const average = Math.round(sum / distances.length);
		// setShotMean75(average); // Update state value with the calculated average
		return average;
	};

	return {
		calculateWeightedAverage,
		calculateStats,
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
	};
};

export default StatCalculations;
