import React, { useState } from "react";

export const ThreeHybridData = () => {

    // State
    const [threeHybrid100Data, setThreeHybrid100Data] = useState([]);
    const [threeHybrid75Data, setThreeHybrid75Data] = useState([]);

    const [threeHybridShotCounter100, setThreeHybridShotCounter100] = useState();
    const [threeHybridShotCounter75, setThreeHybridShotCounter75] = useState();
    // Historical Average
    const [historicalAverageThreeHybrid100, setHistoricalAverageThreeHybrid100] = useState();
    const [historicalAverageThreeHybrid75, setHistoricalAverageThreeHybrid75] = useState();
    // Variance
    const [highVarianceThreeHybrid100, setHighVarianceThreeHybrid100] = useState();
    const [highVarianceThreeHybrid75, setHighVarianceThreeHybrid75] = useState();
    const [lowVarianceThreeHybrid100, setLowVarianceThreeHybrid100] = useState();
    const [lowVarianceThreeHybrid75, setLowVarianceThreeHybrid75] = useState();

    // Three Hybrid Weighted Average

    // Three Hybrid Historical Average
    const calculateHistoricalAverageThreeHybrid100 = () => {
        if (threeHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeHybrid100(Math.round(sum / threeHybrid100Data.length));
        return historicalAverageThreeHybrid100;
    };
    const calculateHistoricalAverageThreeHybrid75 = () => {
        if (threeHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeHybrid75(Math.round(sum / threeHybrid75Data.length));
        return historicalAverageThreeHybrid75;
    };

    // Three Hybrid Total Shots
    const threeHybridShotTotalCounter100 = () => {
        setThreeHybridShotCounter100(threeHybrid100Data.length);
        return threeHybridShotCounter100;
    };
    const threeHybridShotTotalCounter75 = () => {
        setThreeHybridShotCounter75(threeHybrid75Data.length);
        return threeHybridShotCounter75;
    };

    // Three Hybrid Variance

    const calculateHighVarianceThreeHybrid100 = () => {
        const historicalAverage = historicalAverageThreeHybrid100;
        const highestValue = Math.max(...threeHybrid100Data);
        setHighVarianceThreeHybrid100(highestValue - historicalAverage);
        return highVarianceThreeHybrid100;
    };
    const calculateHighVarianceThreeHybrid75 = () => {
        const historicalAverage = historicalAverageThreeHybrid75;
        const highestValue = Math.max(...threeHybrid75Data);
        setHighVarianceThreeHybrid75(highestValue - historicalAverage);
        return highVarianceThreeHybrid75;
    };
    const calculateLowVarianceThreeHybrid100 = () => {
        const historicalAverage = historicalAverageThreeHybrid100;
        const lowestValue = Math.min(...threeHybrid100Data);
        setLowVarianceThreeHybrid100(lowestValue - historicalAverage);
        return lowVarianceThreeHybrid100;
    };
    const calculateLowVarianceThreeHybrid75 = () => {
        const historicalAverage = historicalAverageThreeHybrid75;
        const lowestValue = Math.min(...threeHybrid75Data);
        setLowVarianceThreeHybrid75(lowestValue - historicalAverage);
        return lowVarianceThreeHybrid75;
    };

    return {
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
    };

};

export default ThreeHybridData;