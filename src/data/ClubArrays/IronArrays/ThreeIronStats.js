import React, { useState } from "react";

export const ThreeIronData = () => {

    // State
    const [threeIron100Data, setThreeIron100Data] = useState([]);
    const [threeIron75Data, setThreeIron75Data] = useState([]);
    const [threeIron50Data, setThreeIron50Data] = useState([]);
    const [threeIron25Data, setThreeIron25Data] = useState([]);

    const [threeIronShotCounter100, setThreeIronShotCounter100] = useState();
    const [threeIronShotCounter75, setThreeIronShotCounter75] = useState();
    const [threeIronShotCounter50, setThreeIronShotCounter50] = useState();
    const [threeIronShotCounter25, setThreeIronShotCounter25] = useState();
    // Historical Average
    const [historicalAverageThreeIron100, setHistoricalAverageThreeIron100] = useState();
    const [historicalAverageThreeIron75, setHistoricalAverageThreeIron75] = useState();
    const [historicalAverageThreeIron50, setHistoricalAverageThreeIron50] = useState();
    const [historicalAverageThreeIron25, setHistoricalAverageThreeIron25] = useState();
    // Variance
    const [highVarianceThreeIron100, setHighVarianceThreeIron100] = useState();
    const [highVarianceThreeIron75, setHighVarianceThreeIron75] = useState();
    const [highVarianceThreeIron50, setHighVarianceThreeIron50] = useState();
    const [highVarianceThreeIron25, setHighVarianceThreeIron25] = useState();
    const [lowVarianceThreeIron100, setLowVarianceThreeIron100] = useState();
    const [lowVarianceThreeIron75, setLowVarianceThreeIron75] = useState();
    const [lowVarianceThreeIron50, setLowVarianceThreeIron50] = useState();
    const [lowVarianceThreeIron25, setLowVarianceThreeIron25] = useState();

    // Three Iron Weighted Average

    // Three Iron Historical Average
    const calculateHistoricalAverageThreeIron100 = () => {
        if (threeIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeIron100(Math.round(sum / threeIron100Data.length));
        return historicalAverageThreeIron100;
    };
    const calculateHistoricalAverageThreeIron75 = () => {
        if (threeIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeIron75(Math.round(sum / threeIron75Data.length));
        return historicalAverageThreeIron75;
    };
    const calculateHistoricalAverageThreeIron50 = () => {
        if (threeIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeIron50(Math.round(sum / threeIron50Data.length));
        return historicalAverageThreeIron50;
    };
    const calculateHistoricalAverageThreeIron25 = () => {
        if (threeIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = threeIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageThreeIron25(Math.round(sum / threeIron25Data.length));
        return historicalAverageThreeIron25;
    };


    // Three Iron Total Shots
    const threeIronShotTotalCounter100 = () => {
        setThreeIronShotCounter100(threeIron100Data.length);
        return threeIronShotCounter100;
    };
    const threeIronShotTotalCounter75 = () => {
        setThreeIronShotCounter75(threeIron75Data.length);
        return threeIronShotCounter75;
    };
    const threeIronShotTotalCounter50 = () => {
        setThreeIronShotCounter50(threeIron50Data.length);
        return threeIronShotCounter50;
    };
    const threeIronShotTotalCounter25 = () => {
        setThreeIronShotCounter25(threeIron25Data.length);
        return threeIronShotCounter25;
    };

    // Three Iron Variance

    const calculateHighVarianceThreeIron100 = () => {
        const historicalAverage = historicalAverageThreeIron100;
        const highestValue = Math.max(...threeIron100Data);
        setHighVarianceThreeIron100(highestValue - historicalAverage);
        return highVarianceThreeIron100;
    };
    const calculateHighVarianceThreeIron75 = () => {
        const historicalAverage = historicalAverageThreeIron75;
        const highestValue = Math.max(...threeIron75Data);
        setHighVarianceThreeIron75(highestValue - historicalAverage);
        return highVarianceThreeIron75;
    };
    const calculateLowVarianceThreeIron100 = () => {
        const historicalAverage = historicalAverageThreeIron100;
        const lowestValue = Math.min(...threeIron100Data);
        setLowVarianceThreeIron100(lowestValue - historicalAverage);
        return lowVarianceThreeIron100;
    };
    const calculateLowVarianceThreeIron75 = () => {
        const historicalAverage = historicalAverageThreeIron75;
        const lowestValue = Math.min(...threeIron75Data);
        setLowVarianceThreeIron75(lowestValue - historicalAverage);
        return lowVarianceThreeIron75;
    };

    return {
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
    };
};

export default ThreeIronData;

