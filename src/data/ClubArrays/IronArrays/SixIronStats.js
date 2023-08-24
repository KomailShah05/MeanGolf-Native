import React, { useState } from "react";

export const SixIronData = () => {

    // State
    const [sixIron100Data, setSixIron100Data] = useState([]);
    const [sixIron75Data, setSixIron75Data] = useState([]);
    const [sixIron50Data, setSixIron50Data] = useState([]);
    const [sixIron25Data, setSixIron25Data] = useState([]);

    const [sixIronShotCounter100, setSixIronShotCounter100] = useState();
    const [sixIronShotCounter75, setSixIronShotCounter75] = useState();
    const [sixIronShotCounter50, setSixIronShotCounter50] = useState();
    const [sixIronShotCounter25, setSixIronShotCounter25] = useState();
    // Historical Average
    const [historicalAverageSixIron100, setHistoricalAverageSixIron100] = useState();
    const [historicalAverageSixIron75, setHistoricalAverageSixIron75] = useState();
    const [historicalAverageSixIron50, setHistoricalAverageSixIron50] = useState();
    const [historicalAverageSixIron25, setHistoricalAverageSixIron25] = useState();
    // Variance
    const [highVarianceSixIron100, setHighVarianceSixIron100] = useState();
    const [highVarianceSixIron75, setHighVarianceSixIron75] = useState();
    const [highVarianceSixIron50, setHighVarianceSixIron50] = useState();
    const [highVarianceSixIron25, setHighVarianceSixIron25] = useState();
    const [lowVarianceSixIron100, setLowVarianceSixIron100] = useState();
    const [lowVarianceSixIron75, setLowVarianceSixIron75] = useState();
    const [lowVarianceSixIron50, setLowVarianceSixIron50] = useState();
    const [lowVarianceSixIron25, setLowVarianceSixIron25] = useState();

    // Six Iron Weighted Average

    // Six Iron Historical Average
    const calculateHistoricalAverageSixIron100 = () => {
        if (sixIron100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixIron100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixIron100(Math.round(sum / sixIron100Data.length));
        return historicalAverageSixIron100;
    };
    const calculateHistoricalAverageSixIron75 = () => {
        if (sixIron75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixIron75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixIron75(Math.round(sum / sixIron75Data.length));
        return historicalAverageSixIron75;
    };
    const calculateHistoricalAverageSixIron50 = () => {
        if (sixIron50Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixIron50Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixIron50(Math.round(sum / sixIron50Data.length));
        return historicalAverageSixIron50;
    };
    const calculateHistoricalAverageSixIron25 = () => {
        if (sixIron25Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixIron25Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixIron25(Math.round(sum / sixIron25Data.length));
        return historicalAverageSixIron25;
    };


    // Six Iron Total Shots
    const sixIronShotTotalCounter100 = () => {
        setSixIronShotCounter100(sixIron100Data.length);
        return sixIronShotCounter100;
    };
    const sixIronShotTotalCounter75 = () => {
        setSixIronShotCounter75(sixIron75Data.length);
        return sixIronShotCounter75;
    };
    const sixIronShotTotalCounter50 = () => {
        setSixIronShotCounter50(sixIron50Data.length);
        return sixIronShotCounter50;
    };
    const sixIronShotTotalCounter25 = () => {
        setSixIronShotCounter25(sixIron25Data.length);
        return sixIronShotCounter25;
    };

    // Six Iron Variance

    const calculateHighVarianceSixIron100 = () => {
        const historicalAverage = historicalAverageSixIron100;
        const highestValue = Math.max(...sixIron100Data);
        setHighVarianceSixIron100(highestValue - historicalAverage);
        return highVarianceSixIron100;
    };
    const calculateHighVarianceSixIron75 = () => {
        const historicalAverage = historicalAverageSixIron75;
        const highestValue = Math.max(...sixIron75Data);
        setHighVarianceSixIron75(highestValue - historicalAverage);
        return highVarianceSixIron75;
    };
    const calculateLowVarianceSixIron100 = () => {
        const historicalAverage = historicalAverageSixIron100;
        const lowestValue = Math.min(...sixIron100Data);
        setLowVarianceSixIron100(lowestValue - historicalAverage);
        return lowVarianceSixIron100;
    };
    const calculateLowVarianceSixIron75 = () => {
        const historicalAverage = historicalAverageSixIron75;
        const lowestValue = Math.min(...sixIron75Data);
        setLowVarianceSixIron75(lowestValue - historicalAverage);
        return lowVarianceSixIron75;
    };

    return {
        sixIron100Data,
        setSixIron100Data,
        sixIron75Data,
        setSixIron75Data,
        sixIron50Data,
        setSixIron50Data,
        sixIron25Data,
        setSixIron25Data,
        // Shot Totals
        sixIronShotCounter100,
        setSixIronShotCounter100,
        sixIronShotCounter75,
        setSixIronShotCounter75,
        sixIronShotCounter50,
        setSixIronShotCounter50,
        sixIronShotCounter25,
        setSixIronShotCounter25,
        // Historical Value
        historicalAverageSixIron100,
        setHistoricalAverageSixIron100,
        historicalAverageSixIron75,
        setHistoricalAverageSixIron75,
        historicalAverageSixIron50,
        setHistoricalAverageSixIron50,
        historicalAverageSixIron25,
        setHistoricalAverageSixIron25,
        // Variance
        highVarianceSixIron100,
        setHighVarianceSixIron100,
        highVarianceSixIron75,
        setHighVarianceSixIron75,
        highVarianceSixIron50,
        setHighVarianceSixIron50,
        highVarianceSixIron25,
        setHighVarianceSixIron25,
        lowVarianceSixIron100,
        setLowVarianceSixIron100,
        lowVarianceSixIron75,
        setLowVarianceSixIron75,
        lowVarianceSixIron50,
        setLowVarianceSixIron50,
        lowVarianceSixIron25,
        setLowVarianceSixIron25,
    };
};

export default SixIronData;
