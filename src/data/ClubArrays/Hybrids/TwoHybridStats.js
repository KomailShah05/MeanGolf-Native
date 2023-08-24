import React, { useState } from "react";

export const TwoHybridData = () => {

    // State
    const [twoHybrid100Data, setTwoHybrid100Data] = useState([]);
    const [twoHybrid75Data, setTwoHybrid75Data] = useState([]);

    const [twoHybridShotCounter100, setTwoHybridShotCounter100,] = useState()
    const [twoHybridShotCounter75, setTwoHybridShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageTwoHybrid100, setHistoricalAverageTwoHybrid100] = useState();
    const [historicalAverageTwoHybrid75, setHistoricalAverageTwoHybrid75] = useState();
    // Variance
    const [highVarianceTwoHybrid100, setHighVarianceTwoHybrid100] = useState();
    const [highVarianceTwoHybrid75, setHighVarianceTwoHybrid75] = useState();
    const [lowVarianceTwoHybrid100, setLowVarianceTwoHybrid100] = useState();
    const [lowVarianceTwoHybrid75, setLowVarianceTwoHybrid75] = useState();

    // Two Hybrid Weighted Average

    // Two Hybrid Historical Average
    const calculateHistoricalAverageTwoHybrid100 = () => {
        if (twoHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoHybrid100(Math.round(sum / array.length));
        return historicalAverageTwoHybrid100;
    };
    const calculateHistoricalAverageTwoHybrid75 = () => {
        if (twoHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = twoHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageTwoHybrid75(Math.round(sum / array.length));
        return historicalAverageTwoHybrid75;
    };

    // Two Hybrid Total Shots
    const twoHybridShotTotalCounter100 = () => {
        setTwoHybridShotCounter100(twoHybrid100Data.length)
        return twoHybridShotCounter100
    };
    const twoHybridShotTotalCounter75 = () => {
        setTwoHybridShotCounter75(twoHybrid75Data.length)
        return twoHybridShotCounter75
    };

    // Two Hybrid Variance

    const calculateHighVarianceTwoHybrid100 = () => {
        const historicalAverage = historicalAverageTwoHybrid100;
        const highestValue = Math.max(...twoHybrid100Data);
        setHighVarianceTwoHybrid100(highestValue - historicalAverage);
        return highVarianceTwoHybrid100;
    }
    const calculateHighVarianceTwoHybrid75 = () => {
        const historicalAverage = historicalAverageTwoHybrid75;
        const highestValue = Math.max(...twoHybrid75Data);
        setHighVarianceTwoHybrid75(highestValue - historicalAverage);
        return highVarianceTwoHybrid75;
    }
    const calculateLowVarianceTwoHybrid100 = () => {
        const historicalAverage = historicalAverageTwoHybrid100;
        const lowestValue = Math.low(...twoHybrid100Data);
        setLowVarianceTwoHybrid100(lowestValue - historicalAverage);
        return lowVarianceTwoHybrid100;
    }
    const calculateLowVarianceTwoHybrid75 = () => {
        const historicalAverage = historicalAverageTwoHybrid75;
        const lowestValue = Math.low(...twoHybrid75Data);
        setLowVarianceTwoHybrid75(lowestValue - historicalAverage);
        return lowVarianceTwoHybrid75;
    }

    return {
        twoHybrid100Data,
        setTwoHybrid100Data,
        twoHybrid75Data,
        setTwoHybrid75Data,
        // Shot Totals
        twoHybridShotCounter100,
        setTwoHybridShotCounter100,
        twoHybridShotCounter75,
        setTwoHybridShotCounter75,
        // Historical Average
        historicalAverageTwoHybrid100,
        setHistoricalAverageTwoHybrid100,
        historicalAverageTwoHybrid75,
        setHistoricalAverageTwoHybrid75,
        // Variance
        highVarianceTwoHybrid100,
        setHighVarianceTwoHybrid100,
        highVarianceTwoHybrid75,
        setHighVarianceTwoHybrid75,
        lowVarianceTwoHybrid100,
        setLowVarianceTwoHybrid100,
        lowVarianceTwoHybrid75,
        setLowVarianceTwoHybrid75,
    };
};

export default TwoHybridData;