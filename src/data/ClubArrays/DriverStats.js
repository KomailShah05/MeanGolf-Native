import React, { useState } from 'react';
import {
	calculateWeightedAverage,
	historicalAverage,
	shotMeanFunction100,
	shotMean100,
	setShotMean100,
} from '../../data/Formulas';

export const DriverData = () => {
	// Temporary Driver Stats
	// const [driver100Data, setDriver100Data] = useState([
	// 	{ distance: 301, key: 1 },
	// 	{ distance: 299, key: 2 },
	// 	{ distance: 304, key: 3 },
	// 	{ distance: 310, key: 4 },
	// 	{ distance: 303, key: 5 },
	// 	{ distance: 301, key: 6 },
	// ]);
	// const [driver75Data, setDriver75Data] = useState([
	// 	{ distance: 285, key: 1 },
	// 	{ distance: 288, key: 2 },
	// 	{ distance: 291, key: 3 },
	// 	{ distance: 286, key: 4 },
	// 	{ distance: 287, key: 5 },
	// 	{ distance: 281, key: 6 },
	// ]);
	// State
	const [driver100Data, setDriver100Data] = useState([]);
	const [driver75Data, setDriver75Data] = useState([]);
	const [driver100WeightedAve, setDriver100WeightedAve] = useState(0);
	const [driver75WeightedAve, setDriver75WeightedAve] = useState(0);

	const [driverShotCounter100, setDriverShotCounter100] = useState();
	const [driverShotCounter75, setDriverShotCounter75] = useState();
	// Historical Average
	const [historicalAverageDriver100, setHistoricalAverageDriver100] =
		useState();
	const [historicalAverageDriver75, setHistoricalAverageDriver75] = useState();
	// Variance
	const [highVarianceDriver100, setHighVarianceDriver100] = useState();
	const [highVarianceDriver75, setHighVarianceDriver75] = useState();
	const [lowVarianceDriver100, setLowVarianceDriver100] = useState();
	const [lowVarianceDriver75, setLowVarianceDriver75] = useState();

	// Driver Weighted Average
	// const driver100WeightedAverage = () => {
	//     // if (driver100Data.length < 31 ) {
	//     //     return calculateWeightedAverage(driver100Data);
	//     // } else {
	//     //     const calculateHistoricalAverageDriver100 = () => {
	//     //         if (driver100Data.length === 0) {
	//     //             return 0; // Return 0 if the array is empty to avoid division by zero
	//     //         }

	//     //         const sum = driver100Data.reduce((acc, value) => acc + value, 0);
	//     //         setHistoricalAverageDriver100(Math.round(sum / array.length));
	//     //         return historicalAverageDriver100;
	//     //     };
	//     // }
	// };
	// Driver Weighted Average
	const driver100WeightedAverage = () => {
		return shotMeanFunction100(driver100Data);
	};

	// Update driver100WeightedAve state
	const updateDriver100WeightedAve = () => {
		const weightedAverage = driver100WeightedAverage();
		setDriver100WeightedAve(weightedAverage);
	};
	const driver75WeightedAverage = () => {
		return shotMeanFunction100(driver75Data);
	};

	// Update driver75WeightedAve state
	const updateDriver75WeightedAve = () => {
		const weightedAverage = driver75WeightedAverage();
		setDriver75WeightedAve(weightedAverage);
	};

	// Driver Historical Average
	const calculateHistoricalAverageDriver100 = () => {
		if (driver100Data.length === 0) {
			return 0; // Return 0 if the array is empty to avoid division by zero
		}

		const sum = driver100Data.reduce((acc, value) => acc + value, 0);
		setHistoricalAverageDriver100(Math.round(sum / array.length));
		return historicalAverageDriver100;
	};
	const calculateHistoricalAverageDriver75 = () => {
		if (driver75Data.length === 0) {
			return 0; // Return 0 if the array is empty to avoid division by zero
		}

		const sum = driver75Data.reduce((acc, value) => acc + value, 0);
		setHistoricalAverageDriver75(Math.round(sum / array.length));
		return historicalAverageDriver75;
	};

	// Driver Total Shots
	const driverShotTotalCounter100 = () => {
		setDriverShotCounter100(driver100Data.length);
		return driverShotCounter100;
	};
	const driverShotTotalCounter75 = () => {
		setDriverShotCounter75(driver75Data.length);
		return driverShotCounter75;
	};

	// Driver Variance

	const calculateHighVarianceDriver100 = () => {
		const historicalAverage = historicalAverageDriver100;
		const highestValue = Math.max(...driver100Data);
		setHighVarianceDriver100(highestValue - historicalAverage);
		return highVarianceDriver100;
	};
	const calculateHighVarianceDriver75 = () => {
		const historicalAverage = historicalAverageDriver75;
		const highestValue = Math.max(...driver75Data);
		setHighVarianceDriver75(highestValue - historicalAverage);
		return highVarianceDriver75;
	};
	const calculateLowVarianceDriver100 = () => {
		const historicalAverage = historicalAverageDriver100;
		const lowestValue = Math.low(...driver100Data);
		setLowVarianceDriver100(lowestValue - historicalAverage);
		return lowVarianceDriver100;
	};
	const calculateLowVarianceDriver75 = () => {
		const historicalAverage = historicalAverageDriver75;
		const lowestValue = Math.low(...driver75Data);
		setLowVarianceDriver75(lowestValue - historicalAverage);
		return lowVarianceDriver75;
	};

	return {
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
		// Weighted Average
		updateDriver100WeightedAve,
		updateDriver75WeightedAve,
		driver100WeightedAverage,
		driver75WeightedAverage,
	};
};

export default DriverData;
