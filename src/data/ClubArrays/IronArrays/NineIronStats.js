import React, { useState } from "react";

export const NineIronData = () => {

    // State
    const [nineIron100Data, setNineIron100Data] = useState([]);
    const [nineIron75Data, setNineIron75Data] = useState([]);
    const [nineIron50Data, setNineIron50Data] = useState([]);
    const [nineIron25Data, setNineIron25Data] = useState([]);

    const [nineIronShotCounter100, setNineIronShotCounter100,] = useState()
    const [nineIronShotCounter75, setNineIronShotCounter75,] = useState()
    const [nineIronShotCounter50, setNineIronShotCounter50,] = useState()
    const [nineIronShotCounter25, setNineIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageNineIron100, setHistoricalAverageNineIron100] = useState();
    const [historicalAverageNineIron75, setHistoricalAverageNineIron75] = useState();
    const [historicalAverageNineIron50, setHistoricalAverageNineIron50] = useState();
    const [historicalAverageNineIron25, setHistoricalAverageNineIron25] = useState();
    // Variance
    const [highVarianceNineIron100, setHighVarianceNineIron100] = useState();
    const [highVarianceNineIron75, setHighVarianceNineIron75] = useState();
    const [highVarianceNineIron50, setHighVarianceNineIron50] = useState();
    const [highVarianceNineIron25, setHighVarianceNineIron25] = useState();
    const [lowVarianceNineIron100, setLowVarianceNineIron100] = useState();
    const [lowVarianceNineIron75, setLowVarianceNineIron75] = useState();
    const [lowVarianceNineIron50, setLowVarianceNineIron50] = useState();
    const [lowVarianceNineIron25, setLowVarianceNineIron25] = useState();

    // Nine Iron Weighted Average

    // Nine Iron Historical Average
    const calculateHistoricalAverageNineIron100 = () => {
        if (nineIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = nineIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageNineIron100(Math.round(sum / nineIron100Data.length));
        return historicalAverageNineIron100;
    };
    const calculateHistoricalAverageNineIron75 = () => {
        if (nineIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = nineIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageNineIron75(Math.round(sum / nineIron75Data.length));
        return historicalAverageNineIron75;
    };
    const calculateHistoricalAverageNineIron50 = () => {
        if (nineIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = nineIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageNineIron50(Math.round(sum / nineIron50Data.length));
        return historicalAverageNineIron50;
    };
    const calculateHistoricalAverageNineIron25 = () => {
        if (nineIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = nineIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageNineIron25(Math.round(sum / nineIron25Data.length));
        return historicalAverageNineIron25;
    };


    // Nine Iron Total Shots
    const nineIronShotTotalCounter100 = () => {
        setNineIronShotCounter100(nineIron100Data.length)
        return nineIronShotCounter100
    };
    const nineIronShotTotalCounter75 = () => {
        setNineIronShotCounter75(nineIron75Data.length)
        return nineIronShotCounter75
    };
    const nineIronShotTotalCounter50 = () => {
        setNineIronShotCounter50(nineIron50Data.length)
        return nineIronShotCounter50
    };
    const nineIronShotTotalCounter25 = () => {
        setNineIronShotCounter25(nineIron25Data.length)
        return nineIronShotCounter25
    };

    // Nine Iron Variance

    const calculateHighVarianceNineIron100 = () => {
        const historicalAverage = historicalAverageNineIron100;
        const highestValue = Math.max(...nineIron100Data);
        setHighVarianceNineIron100(highestValue - historicalAverage);
        return highVarianceNineIron100;
    }
    const calculateHighVarianceNineIron75 = () => {
        const historicalAverage = historicalAverageNineIron75;
        const highestValue = Math.max(...nineIron75Data);
        setHighVarianceNineIron75(highestValue - historicalAverage);
        return highVarianceNineIron75;
    }
    const calculateLowVarianceNineIron100 = () => {
        const historicalAverage = historicalAverageNineIron100;
        const lowestValue = Math.min(...nineIron100Data);
        setLowVarianceNineIron100(lowestValue - historicalAverage);
        return lowVarianceNineIron100;
    }
    const calculateLowVarianceNineIron75 = () => {
        const historicalAverage = historicalAverageNineIron75;
        const lowestValue = Math.min(...nineIron75Data);
        setLowVarianceNineIron75(lowestValue - historicalAverage);
        return lowVarianceNineIron75;
    }

    return {
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
    };
};

export default NineIronData;
