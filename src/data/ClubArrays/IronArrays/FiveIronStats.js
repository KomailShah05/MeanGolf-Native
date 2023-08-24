import React, { useState } from "react";

export const FiveIronData = () => {

    // State
    const [fiveIron100Data, setFiveIron100Data] = useState([]);
    const [fiveIron75Data, setFiveIron75Data] = useState([]);
    const [fiveIron50Data, setFiveIron50Data] = useState([]);
    const [fiveIron25Data, setFiveIron25Data] = useState([]);

    const [fiveIronShotCounter100, setFiveIronShotCounter100,] = useState()
    const [fiveIronShotCounter75, setFiveIronShotCounter75,] = useState()
    const [fiveIronShotCounter50, setFiveIronShotCounter50,] = useState()
    const [fiveIronShotCounter25, setFiveIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFiveIron100, setHistoricalAverageFiveIron100] = useState();
    const [historicalAverageFiveIron75, setHistoricalAverageFiveIron75] = useState();
    const [historicalAverageFiveIron50, setHistoricalAverageFiveIron50] = useState();
    const [historicalAverageFiveIron25, setHistoricalAverageFiveIron25] = useState();
    // Variance
    const [highVarianceFiveIron100, setHighVarianceFiveIron100] = useState();
    const [highVarianceFiveIron75, setHighVarianceFiveIron75] = useState();
    const [highVarianceFiveIron50, setHighVarianceFiveIron50] = useState();
    const [highVarianceFiveIron25, setHighVarianceFiveIron25] = useState();
    const [lowVarianceFiveIron100, setLowVarianceFiveIron100] = useState();
    const [lowVarianceFiveIron75, setLowVarianceFiveIron75] = useState();
    const [lowVarianceFiveIron50, setLowVarianceFiveIron50] = useState();
    const [lowVarianceFiveIron25, setLowVarianceFiveIron25] = useState();

    // Five Iron Weighted Average

    // Five Iron Historical Average
    const calculateHistoricalAverageFiveIron100 = () => {
        if (fiveIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveIron100(Math.round(sum / fiveIron100Data.length));
        return historicalAverageFiveIron100;
    };
    const calculateHistoricalAverageFiveIron75 = () => {
        if (fiveIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveIron75(Math.round(sum / fiveIron75Data.length));
        return historicalAverageFiveIron75;
    };
    const calculateHistoricalAverageFiveIron50 = () => {
        if (fiveIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveIron50(Math.round(sum / fiveIron50Data.length));
        return historicalAverageFiveIron50;
    };
    const calculateHistoricalAverageFiveIron25 = () => {
        if (fiveIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveIron25(Math.round(sum / fiveIron25Data.length));
        return historicalAverageFiveIron25;
    };

    // Five Iron Total Shots
    const fiveIronShotTotalCounter100 = () => {
        setFiveIronShotCounter100(fiveIron100Data.length)
        return fiveIronShotCounter100
    };
    const fiveIronShotTotalCounter75 = () => {
        setFiveIronShotCounter75(fiveIron75Data.length)
        return fiveIronShotCounter75
    };
    const fiveIronShotTotalCounter50 = () => {
        setFiveIronShotCounter50(fiveIron50Data.length)
        return fiveIronShotCounter50
    };
    const fiveIronShotTotalCounter25 = () => {
        setFiveIronShotCounter25(fiveIron25Data.length)
        return fiveIronShotCounter25
    };

    // Five Iron Variance

    const calculateHighVarianceFiveIron100 = () => {
        const historicalAverage = historicalAverageFiveIron100;
        const highestValue = Math.max(...fiveIron100Data);
        setHighVarianceFiveIron100(highestValue - historicalAverage);
        return highVarianceFiveIron100;
    }
    const calculateHighVarianceFiveIron75 = () => {
        const historicalAverage = historicalAverageFiveIron75;
        const highestValue = Math.max(...fiveIron75Data);
        setHighVarianceFiveIron75(highestValue - historicalAverage);
        return highVarianceFiveIron75;
    }
    const calculateLowVarianceFiveIron100 = () => {
        const historicalAverage = historicalAverageFiveIron100;
        const lowestValue = Math.min(...fiveIron100Data);
        setLowVarianceFiveIron100(lowestValue - historicalAverage);
        return lowVarianceFiveIron100;
    }
    const calculateLowVarianceFiveIron75 = () => {
        const historicalAverage = historicalAverageFiveIron75;
        const lowestValue = Math.min(...fiveIron75Data);
        setLowVarianceFiveIron75(lowestValue - historicalAverage);
        return lowVarianceFiveIron75;
    }

    return {
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
    };
};

export default FiveIronData;
