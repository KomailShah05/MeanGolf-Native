import React, { useState } from "react";

export const EightIronData = () => {

    // State
    const [eightIron100Data, setEightIron100Data] = useState([]);
    const [eightIron75Data, setEightIron75Data] = useState([]);
    const [eightIron50Data, setEightIron50Data] = useState([]);
    const [eightIron25Data, setEightIron25Data] = useState([]);

    const [eightIronShotCounter100, setEightIronShotCounter100,] = useState()
    const [eightIronShotCounter75, setEightIronShotCounter75,] = useState()
    const [eightIronShotCounter50, setEightIronShotCounter50,] = useState()
    const [eightIronShotCounter25, setEightIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageEightIron100, setHistoricalAverageEightIron100] = useState();
    const [historicalAverageEightIron75, setHistoricalAverageEightIron75] = useState();
    const [historicalAverageEightIron50, setHistoricalAverageEightIron50] = useState();
    const [historicalAverageEightIron25, setHistoricalAverageEightIron25] = useState();
    // Variance
    const [highVarianceEightIron100, setHighVarianceEightIron100] = useState();
    const [highVarianceEightIron75, setHighVarianceEightIron75] = useState();
    const [highVarianceEightIron50, setHighVarianceEightIron50] = useState();
    const [highVarianceEightIron25, setHighVarianceEightIron25] = useState();
    const [lowVarianceEightIron100, setLowVarianceEightIron100] = useState();
    const [lowVarianceEightIron75, setLowVarianceEightIron75] = useState();
    const [lowVarianceEightIron50, setLowVarianceEightIron50] = useState();
    const [lowVarianceEightIron25, setLowVarianceEightIron25] = useState();

    // Eight Iron Weighted Average

    // Eight Iron Historical Average
    const calculateHistoricalAverageEightIron100 = () => {
        if (eightIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = eightIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageEightIron100(Math.round(sum / eightIron100Data.length));
        return historicalAverageEightIron100;
    };
    const calculateHistoricalAverageEightIron75 = () => {
        if (eightIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = eightIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageEightIron75(Math.round(sum / eightIron75Data.length));
        return historicalAverageEightIron75;
    };
    const calculateHistoricalAverageEightIron50 = () => {
        if (eightIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = eightIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageEightIron50(Math.round(sum / eightIron50Data.length));
        return historicalAverageEightIron50;
    };
    const calculateHistoricalAverageEightIron25 = () => {
        if (eightIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = eightIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageEightIron25(Math.round(sum / eightIron25Data.length));
        return historicalAverageEightIron25;
    };


    // Eight Iron Total Shots
    const eightIronShotTotalCounter100 = () => {
        setEightIronShotCounter100(eightIron100Data.length)
        return eightIronShotCounter100
    };
    const eightIronShotTotalCounter75 = () => {
        setEightIronShotCounter75(eightIron75Data.length)
        return eightIronShotCounter75
    };
    const eightIronShotTotalCounter50 = () => {
        setEightIronShotCounter50(eightIron50Data.length)
        return eightIronShotCounter50
    };
    const eightIronShotTotalCounter25 = () => {
        setEightIronShotCounter25(eightIron25Data.length)
        return eightIronShotCounter25
    };

    // Eight Iron Variance

    const calculateHighVarianceEightIron100 = () => {
        const historicalAverage = historicalAverageEightIron100;
        const highestValue = Math.max(...eightIron100Data);
        setHighVarianceEightIron100(highestValue - historicalAverage);
        return highVarianceEightIron100;
    }
    const calculateHighVarianceEightIron75 = () => {
        const historicalAverage = historicalAverageEightIron75;
        const highestValue = Math.max(...eightIron75Data);
        setHighVarianceEightIron75(highestValue - historicalAverage);
        return highVarianceEightIron75;
    }
    const calculateLowVarianceEightIron100 = () => {
        const historicalAverage = historicalAverageEightIron100;
        const lowestValue = Math.min(...eightIron100Data);
        setLowVarianceEightIron100(lowestValue - historicalAverage);
        return lowVarianceEightIron100;
    }
    const calculateLowVarianceEightIron75 = () => {
        const historicalAverage = historicalAverageEightIron75;
        const lowestValue = Math.min(...eightIron75Data);
        setLowVarianceEightIron75(lowestValue - historicalAverage);
        return lowVarianceEightIron75;
    }

    return {
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
    };
};

export default EightIronData;
