import React, { useState } from "react";

export const FourHybridData = () => {

    // State
    const [fourHybrid100Data, setFourHybrid100Data] = useState([]);
    const [fourHybrid75Data, setFourHybrid75Data] = useState([]);

    const [fourHybridShotCounter100, setFourHybridShotCounter100,] = useState()
    const [fourHybridShotCounter75, setFourHybridShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageFourHybrid100, setHistoricalAverageFourHybrid100] = useState();
    const [historicalAverageFourHybrid75, setHistoricalAverageFourHybrid75] = useState();
    // Variance
    const [highVarianceFourHybrid100, setHighVarianceFourHybrid100] = useState();
    const [highVarianceFourHybrid75, setHighVarianceFourHybrid75] = useState();
    const [lowVarianceFourHybrid100, setLowVarianceFourHybrid100] = useState();
    const [lowVarianceFourHybrid75, setLowVarianceFourHybrid75] = useState();

    // Four Hybrid Weighted Average

    // Four Hybrid Historical Average
    const calculateHistoricalAverageFourHybrid100 = () => {
        if (fourHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourHybrid100(Math.round(sum / fourHybrid100Data.length));
        return historicalAverageFourHybrid100;
    };
    const calculateHistoricalAverageFourHybrid75 = () => {
        if (fourHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fourHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFourHybrid75(Math.round(sum / fourHybrid75Data.length));
        return historicalAverageFourHybrid75;
    };

    // Four Hybrid Total Shots
    const fourHybridShotTotalCounter100 = () => {
        setFourHybridShotCounter100(fourHybrid100Data.length)
        return fourHybridShotCounter100
    };
    const fourHybridShotTotalCounter75 = () => {
        setFourHybridShotCounter75(fourHybrid75Data.length)
        return fourHybridShotCounter75
    };

    // Four Hybrid Variance

    const calculateHighVarianceFourHybrid100 = () => {
        const historicalAverage = historicalAverageFourHybrid100;
        const highestValue = Math.max(...fourHybrid100Data);
        setHighVarianceFourHybrid100(highestValue - historicalAverage);
        return highVarianceFourHybrid100;
    }
    const calculateHighVarianceFourHybrid75 = () => {
        const historicalAverage = historicalAverageFourHybrid75;
        const highestValue = Math.max(...fourHybrid75Data);
        setHighVarianceFourHybrid75(highestValue - historicalAverage);
        return highVarianceFourHybrid75;
    }
    const calculateLowVarianceFourHybrid100 = () => {
        const historicalAverage = historicalAverageFourHybrid100;
        const lowestValue = Math.min(...fourHybrid100Data);
        setLowVarianceFourHybrid100(lowestValue - historicalAverage);
        return lowVarianceFourHybrid100;
    }
    const calculateLowVarianceFourHybrid75 = () => {
        const historicalAverage = historicalAverageFourHybrid75;
        const lowestValue = Math.min(...fourHybrid75Data);
        setLowVarianceFourHybrid75(lowestValue - historicalAverage);
        return lowVarianceFourHybrid75;
    }

    return {
        fourHybrid100Data,
        setFourHybrid100Data,
        fourHybrid75Data,
        setFourHybrid75Data,
        // Shot Totals
        fourHybridShotCounter100,
        setFourHybridShotCounter100,
        fourHybridShotCounter75,
        setFourHybridShotCounter75,
        // Historical Average
        historicalAverageFourHybrid100,
        setHistoricalAverageFourHybrid100,
        historicalAverageFourHybrid75,
        setHistoricalAverageFourHybrid75,
        // Variance
        highVarianceFourHybrid100,
        setHighVarianceFourHybrid100,
        highVarianceFourHybrid75,
        setHighVarianceFourHybrid75,
        lowVarianceFourHybrid100,
        setLowVarianceFourHybrid100,
        lowVarianceFourHybrid75,
        setLowVarianceFourHybrid75,
    };
};

export default FourHybridData;
