import React, { useState } from "react";

export const FiveHybridData = () => {

    // State
    const [fiveHybrid100Data, setFiveHybrid100Data] = useState([]);
    const [fiveHybrid75Data, setFiveHybrid75Data] = useState([]);

    const [fiveHybridShotCounter100, setFiveHybridShotCounter100,] = useState()
    const [fiveHybridShotCounter75, setFiveHybridShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageFiveHybrid100, setHistoricalAverageFiveHybrid100] = useState();
    const [historicalAverageFiveHybrid75, setHistoricalAverageFiveHybrid75] = useState();
    // Variance
    const [highVarianceFiveHybrid100, setHighVarianceFiveHybrid100] = useState();
    const [highVarianceFiveHybrid75, setHighVarianceFiveHybrid75] = useState();
    const [lowVarianceFiveHybrid100, setLowVarianceFiveHybrid100] = useState();
    const [lowVarianceFiveHybrid75, setLowVarianceFiveHybrid75] = useState();

    // Five Hybrid Weighted Average

    // Five Hybrid Historical Average
    const calculateHistoricalAverageFiveHybrid100 = () => {
        if (fiveHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveHybrid100(Math.round(sum / fiveHybrid100Data.length));
        return historicalAverageFiveHybrid100;
    };
    const calculateHistoricalAverageFiveHybrid75 = () => {
        if (fiveHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = fiveHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageFiveHybrid75(Math.round(sum / fiveHybrid75Data.length));
        return historicalAverageFiveHybrid75;
    };

    // Five Hybrid Total Shots
    const fiveHybridShotTotalCounter100 = () => {
        setFiveHybridShotCounter100(fiveHybrid100Data.length)
        return fiveHybridShotCounter100
    };
    const fiveHybridShotTotalCounter75 = () => {
        setFiveHybridShotCounter75(fiveHybrid75Data.length)
        return fiveHybridShotCounter75
    };

    // Five Hybrid Variance

    const calculateHighVarianceFiveHybrid100 = () => {
        const historicalAverage = historicalAverageFiveHybrid100;
        const highestValue = Math.max(...fiveHybrid100Data);
        setHighVarianceFiveHybrid100(highestValue - historicalAverage);
        return highVarianceFiveHybrid100;
    }
    const calculateHighVarianceFiveHybrid75 = () => {
        const historicalAverage = historicalAverageFiveHybrid75;
        const highestValue = Math.max(...fiveHybrid75Data);
        setHighVarianceFiveHybrid75(highestValue - historicalAverage);
        return highVarianceFiveHybrid75;
    }
    const calculateLowVarianceFiveHybrid100 = () => {
        const historicalAverage = historicalAverageFiveHybrid100;
        const lowestValue = Math.min(...fiveHybrid100Data);
        setLowVarianceFiveHybrid100(lowestValue - historicalAverage);
        return lowVarianceFiveHybrid100;
    }
    const calculateLowVarianceFiveHybrid75 = () => {
        const historicalAverage = historicalAverageFiveHybrid75;
        const lowestValue = Math.min(...fiveHybrid75Data);
        setLowVarianceFiveHybrid75(lowestValue - historicalAverage);
        return lowVarianceFiveHybrid75;
    }

    return {
        fiveHybrid100Data,
        setFiveHybrid100Data,
        fiveHybrid75Data,
        setFiveHybrid75Data,
        // Shot Totals
        fiveHybridShotCounter100,
        setFiveHybridShotCounter100,
        fiveHybridShotCounter75,
        setFiveHybridShotCounter75,
        // Historical Average
        historicalAverageFiveHybrid100,
        setHistoricalAverageFiveHybrid100,
        historicalAverageFiveHybrid75,
        setHistoricalAverageFiveHybrid75,
        // Variance
        highVarianceFiveHybrid100,
        setHighVarianceFiveHybrid100,
        highVarianceFiveHybrid75,
        setHighVarianceFiveHybrid75,
        lowVarianceFiveHybrid100,
        setLowVarianceFiveHybrid100,
        lowVarianceFiveHybrid75,
        setLowVarianceFiveHybrid75,
    };
};

export default FiveHybridData;
