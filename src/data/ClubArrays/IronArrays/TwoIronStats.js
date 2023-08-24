import React, { useState } from "react";

export const TwoIronData = () => {

    // State
    const [twoIron100Data, setTwoIron100Data] = useState([]);
    const [twoIron75Data, setTwoIron75Data] = useState([]);
    const [twoIron50Data, setTwoIron50Data] = useState([]);
    const [twoIron25Data, setTwoIron25Data] = useState([]);

    const [twoIronShotCounter100, setTwoIronShotCounter100,] = useState()
    const [twoIronShotCounter75, setTwoIronShotCounter75,] = useState()
    const [twoIronShotCounter50, setTwoIronShotCounter50,] = useState()
    const [twoIronShotCounter25, setTwoIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageTwoIron100, setHistoricalAverageTwoIron100] = useState();
    const [historicalAverageTwoIron75, setHistoricalAverageTwoIron75] = useState();
    const [historicalAverageTwoIron50, setHistoricalAverageTwoIron50] = useState();
    const [historicalAverageTwoIron25, setHistoricalAverageTwoIron25] = useState();
    // Variance
    const [highVarianceTwoIron100, setHighVarianceTwoIron100] = useState();
    const [highVarianceTwoIron75, setHighVarianceTwoIron75] = useState();
    const [highVarianceTwoIron50, setHighVarianceTwoIron50] = useState();
    const [highVarianceTwoIron25, setHighVarianceTwoIron25] = useState();
    const [lowVarianceTwoIron100, setLowVarianceTwoIron100] = useState();
    const [lowVarianceTwoIron75, setLowVarianceTwoIron75] = useState();
    const [lowVarianceTwoIron50, setLowVarianceTwoIron50] = useState();
    const [lowVarianceTwoIron25, setLowVarianceTwoIron25] = useState();

    // Two Iron Weighted Average

    // Two Iron Historical Average
    const calculateHistoricalAverageTwoIron100 = () => {
        if (twoIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoIron100(Math.round(sum / twoIron100Data.length));
        return historicalAverageTwoIron100;
    };
    const calculateHistoricalAverageTwoIron75 = () => {
        if (twoIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoIron75(Math.round(sum / twoIron75Data.length));
        return historicalAverageTwoIron75;
    };
    const calculateHistoricalAverageTwoIron50 = () => {
        if (twoIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoIron50(Math.round(sum / twoIron50Data.length));
        return historicalAverageTwoIron50;
    };
    const calculateHistoricalAverageTwoIron25 = () => {
        if (twoIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoIron25(Math.round(sum / twoIron25Data.length));
        return historicalAverageTwoIron25;
    };


    // Two Iron Total Shots
    const twoIronShotTotalCounter100 = () => {
        setTwoIronShotCounter100(twoIron100Data.length)
        return twoIronShotCounter100
    };
    const twoIronShotTotalCounter75 = () => {
        setTwoIronShotCounter75(twoIron75Data.length)
        return twoIronShotCounter75
    };
    const twoIronShotTotalCounter50 = () => {
        setTwoIronShotCounter50(twoIron50Data.length)
        return twoIronShotCounter50
    };
    const twoIronShotTotalCounter25 = () => {
        setTwoIronShotCounter25(twoIron25Data.length)
        return twoIronShotCounter25
    };

    // Two Iron Variance

    const calculateHighVarianceTwoIron100 = () => {
        const historicalAverage = historicalAverageTwoIron100;
        const highestValue = Math.max(...twoIron100Data);
        setHighVarianceTwoIron100(highestValue - historicalAverage);
        return highVarianceTwoIron100;
    }
    const calculateHighVarianceTwoIron75 = () => {
        const historicalAverage = historicalAverageTwoIron75;
        const highestValue = Math.max(...twoIron75Data);
        setHighVarianceTwoIron75(highestValue - historicalAverage);
        return highVarianceTwoIron75;
    }
    const calculateLowVarianceTwoIron100 = () => {
        const historicalAverage = historicalAverageTwoIron100;
        const lowestValue = Math.min(...twoIron100Data);
        setLowVarianceTwoIron100(lowestValue - historicalAverage);
        return lowVarianceTwoIron100;
    }
    const calculateLowVarianceTwoIron75 = () => {
        const historicalAverage = historicalAverageTwoIron75;
        const lowestValue = Math.min(...twoIron75Data);
        setLowVarianceTwoIron75(lowestValue - historicalAverage);
        return lowVarianceTwoIron75;
    }

    return {
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
    };
};

export default TwoIronData;
