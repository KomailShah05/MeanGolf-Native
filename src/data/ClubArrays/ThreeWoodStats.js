import React, { useState } from "react";

export const ThreeWoodData = () => {

    // Temporary
    // const [threeWood100Data, setThreeWood100Data] = useState([{ "distance": 287, "key": 1 }, { "distance": 285, "key": 2 }, { "distance": 292, "key": 3 }, { "distance": 293, "key": 4 }, { "distance": 287, "key": 5 }, { "distance": 289, "key": 6 }]);
    // const [threeWood75Data, setThreeWood75Data] = useState([{ "distance": 283, "key": 1 }, { "distance": 280, "key": 2 }, { "distance": 275, "key": 3 }, { "distance": 276, "key": 4 }, { "distance": 276, "key": 5 }, { "distance": 280, "key": 6 }]);
    // // State
    const [threeWood100Data, setThreeWood100Data] = useState([]);
    const [threeWood75Data, setThreeWood75Data] = useState([]);

    const [threeWoodShotCounter100, setThreeWoodShotCounter100] = useState();
    const [threeWoodShotCounter75, setThreeWoodShotCounter75] = useState();
    // Historical Average
    const [historicalAverageThreeWood100, setHistoricalAverageThreeWood100] = useState();
    const [historicalAverageThreeWood75, setHistoricalAverageThreeWood75] = useState();
    // Variance
    const [highVarianceThreeWood100, setHighVarianceThreeWood100] = useState();
    const [highVarianceThreeWood75, setHighVarianceThreeWood75] = useState();
    const [lowVarianceThreeWood100, setLowVarianceThreeWood100] = useState();
    const [lowVarianceThreeWood75, setLowVarianceThreeWood75] = useState();

    // Three Wood Weighted Average

    // Three Wood Historical Average
    const calculateHistoricalAverageThreeWood100 = () => {
        if (threeWood100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeWood100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeWood100(Math.round(sum / threeWood100Data.length));
        return historicalAverageThreeWood100;
    };
    const calculateHistoricalAverageThreeWood75 = () => {
        if (threeWood75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeWood75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeWood75(Math.round(sum / threeWood75Data.length));
        return historicalAverageThreeWood75;
    };

    // Three Wood Total Shots
    const threeWoodShotTotalCounter100 = () => {
        setThreeWoodShotCounter100(threeWood100Data.length);
        return threeWoodShotCounter100;
    };
    const threeWoodShotTotalCounter75 = () => {
        setThreeWoodShotCounter75(threeWood75Data.length);
        return threeWoodShotCounter75;
    };

    // Three Wood Variance

    const calculateHighVarianceThreeWood100 = () => {
        const historicalAverage = historicalAverageThreeWood100;
        const highestValue = Math.max(...threeWood100Data);
        setHighVarianceThreeWood100(highestValue - historicalAverage);
        return highVarianceThreeWood100;
    };
    const calculateHighVarianceThreeWood75 = () => {
        const historicalAverage = historicalAverageThreeWood75;
        const highestValue = Math.max(...threeWood75Data);
        setHighVarianceThreeWood75(highestValue - historicalAverage);
        return highVarianceThreeWood75;
    };
    const calculateLowVarianceThreeWood100 = () => {
        const historicalAverage = historicalAverageThreeWood100;
        const lowestValue = Math.min(...threeWood100Data);
        setLowVarianceThreeWood100(lowestValue - historicalAverage);
        return lowVarianceThreeWood100;
    };
    const calculateLowVarianceThreeWood75 = () => {
        const historicalAverage = historicalAverageThreeWood75;
        const lowestValue = Math.min(...threeWood75Data);
        setLowVarianceThreeWood75(lowestValue - historicalAverage);
        return lowVarianceThreeWood75;
    };

    return {
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
    };
};

export default ThreeWoodData;