import React, { useState } from "react";

export const SevenIronData = () => {

    // State
    const [sevenIron100Data, setSevenIron100Data] = useState([]);
    const [sevenIron75Data, setSevenIron75Data] = useState([]);
    const [sevenIron50Data, setSevenIron50Data] = useState([]);
    const [sevenIron25Data, setSevenIron25Data] = useState([]);

    const [sevenIronShotCounter100, setSevenIronShotCounter100,] = useState()
    const [sevenIronShotCounter75, setSevenIronShotCounter75,] = useState()
    const [sevenIronShotCounter50, setSevenIronShotCounter50,] = useState()
    const [sevenIronShotCounter25, setSevenIronShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageSevenIron100, setHistoricalAverageSevenIron100] = useState();
    const [historicalAverageSevenIron75, setHistoricalAverageSevenIron75] = useState();
    const [historicalAverageSevenIron50, setHistoricalAverageSevenIron50] = useState();
    const [historicalAverageSevenIron25, setHistoricalAverageSevenIron25] = useState();
    // Variance
    const [highVarianceSevenIron100, setHighVarianceSevenIron100] = useState();
    const [highVarianceSevenIron75, setHighVarianceSevenIron75] = useState();
    const [highVarianceSevenIron50, setHighVarianceSevenIron50] = useState();
    const [highVarianceSevenIron25, setHighVarianceSevenIron25] = useState();
    const [lowVarianceSevenIron100, setLowVarianceSevenIron100] = useState();
    const [lowVarianceSevenIron75, setLowVarianceSevenIron75] = useState();
    const [lowVarianceSevenIron50, setLowVarianceSevenIron50] = useState();
    const [lowVarianceSevenIron25, setLowVarianceSevenIron25] = useState();

    // Seven Iron Weighted Average

    // Seven Iron Historical Average
    const calculateHistoricalAverageSevenIron100 = () => {
        if (sevenIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenIron100(Math.round(sum / sevenIron100Data.length));
        return historicalAverageSevenIron100;
    };
    const calculateHistoricalAverageSevenIron75 = () => {
        if (sevenIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenIron75(Math.round(sum / sevenIron75Data.length));
        return historicalAverageSevenIron75;
    };
    const calculateHistoricalAverageSevenIron50 = () => {
        if (sevenIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenIron50(Math.round(sum / sevenIron50Data.length));
        return historicalAverageSevenIron50;
    };
    const calculateHistoricalAverageSevenIron25 = () => {
        if (sevenIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenIron25(Math.round(sum / sevenIron25Data.length));
        return historicalAverageSevenIron25;
    };


    // Seven Iron Total Shots
    const sevenIronShotTotalCounter100 = () => {
        setSevenIronShotCounter100(sevenIron100Data.length)
        return sevenIronShotCounter100
    };
    const sevenIronShotTotalCounter75 = () => {
        setSevenIronShotCounter75(sevenIron75Data.length)
        return sevenIronShotCounter75
    };
    const sevenIronShotTotalCounter50 = () => {
        setSevenIronShotCounter50(sevenIron50Data.length)
        return sevenIronShotCounter50
    };
    const sevenIronShotTotalCounter25 = () => {
        setSevenIronShotCounter25(sevenIron25Data.length)
        return sevenIronShotCounter25
    };

    // Seven Iron Variance

    const calculateHighVarianceSevenIron100 = () => {
        const historicalAverage = historicalAverageSevenIron100;
        const highestValue = Math.max(...sevenIron100Data);
        setHighVarianceSevenIron100(highestValue - historicalAverage);
        return highVarianceSevenIron100;
    }
    const calculateHighVarianceSevenIron75 = () => {
        const historicalAverage = historicalAverageSevenIron75;
        const highestValue = Math.max(...sevenIron75Data);
        setHighVarianceSevenIron75(highestValue - historicalAverage);
        return highVarianceSevenIron75;
    }
    const calculateLowVarianceSevenIron100 = () => {
        const historicalAverage = historicalAverageSevenIron100;
        const lowestValue = Math.min(...sevenIron100Data);
        setLowVarianceSevenIron100(lowestValue - historicalAverage);
        return lowVarianceSevenIron100;
    }
    const calculateLowVarianceSevenIron75 = () => {
        const historicalAverage = historicalAverageSevenIron75;
        const lowestValue = Math.min(...sevenIron75Data);
        setLowVarianceSevenIron75(lowestValue - historicalAverage);
        return lowVarianceSevenIron75;
    }

    return {
        sevenIron100Data,
        setSevenIron100Data,
        sevenIron75Data,
        setSevenIron75Data,
        sevenIron50Data,
        setSevenIron50Data,
        sevenIron25Data,
        setSevenIron25Data,
        // Shot Totals
        sevenIronShotCounter100,
        setSevenIronShotCounter100,
        sevenIronShotCounter75,
        setSevenIronShotCounter75,
        sevenIronShotCounter50,
        setSevenIronShotCounter50,
        sevenIronShotCounter25,
        setSevenIronShotCounter25,
        // Historical Value
        historicalAverageSevenIron100,
        setHistoricalAverageSevenIron100,
        historicalAverageSevenIron75,
        setHistoricalAverageSevenIron75,
        historicalAverageSevenIron50,
        setHistoricalAverageSevenIron50,
        historicalAverageSevenIron25,
        setHistoricalAverageSevenIron25,
        // Variance
        highVarianceSevenIron100,
        setHighVarianceSevenIron100,
        highVarianceSevenIron75,
        setHighVarianceSevenIron75,
        highVarianceSevenIron50,
        setHighVarianceSevenIron50,
        highVarianceSevenIron25,
        setHighVarianceSevenIron25,
        lowVarianceSevenIron100,
        setLowVarianceSevenIron100,
        lowVarianceSevenIron75,
        setLowVarianceSevenIron75,
        lowVarianceSevenIron50,
        setLowVarianceSevenIron50,
        lowVarianceSevenIron25,
        setLowVarianceSevenIron25,
    };
};

export default SevenIronData;
