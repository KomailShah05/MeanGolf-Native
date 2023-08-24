import React, { useState } from "react";

export const SevenHybridData = () => {

    // State
    const [sevenHybrid100Data, setSevenHybrid100Data] = useState([]);
    const [sevenHybrid75Data, setSevenHybrid75Data] = useState([]);

    const [sevenHybridShotCounter100, setSevenHybridShotCounter100,] = useState()
    const [sevenHybridShotCounter75, setSevenHybridShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageSevenHybrid100, setHistoricalAverageSevenHybrid100] = useState();
    const [historicalAverageSevenHybrid75, setHistoricalAverageSevenHybrid75] = useState();
    // Variance
    const [highVarianceSevenHybrid100, setHighVarianceSevenHybrid100] = useState();
    const [highVarianceSevenHybrid75, setHighVarianceSevenHybrid75] = useState();
    const [lowVarianceSevenHybrid100, setLowVarianceSevenHybrid100] = useState();
    const [lowVarianceSevenHybrid75, setLowVarianceSevenHybrid75] = useState();

    // Seven Hybrid Weighted Average

    // Seven Hybrid Historical Average
    const calculateHistoricalAverageSevenHybrid100 = () => {
        if (sevenHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenHybrid100(Math.round(sum / sevenHybrid100Data.length));
        return historicalAverageSevenHybrid100;
    };
    const calculateHistoricalAverageSevenHybrid75 = () => {
        if (sevenHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sevenHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSevenHybrid75(Math.round(sum / sevenHybrid75Data.length));
        return historicalAverageSevenHybrid75;
    };

    // Seven Hybrid Total Shots
    const sevenHybridShotTotalCounter100 = () => {
        setSevenHybridShotCounter100(sevenHybrid100Data.length)
        return sevenHybridShotCounter100
    };
    const sevenHybridShotTotalCounter75 = () => {
        setSevenHybridShotCounter75(sevenHybrid75Data.length)
        return sevenHybridShotCounter75
    };

    // Seven Hybrid Variance

    const calculateHighVarianceSevenHybrid100 = () => {
        const historicalAverage = historicalAverageSevenHybrid100;
        const highestValue = Math.max(...sevenHybrid100Data);
        setHighVarianceSevenHybrid100(highestValue - historicalAverage);
        return highVarianceSevenHybrid100;
    }
    const calculateHighVarianceSevenHybrid75 = () => {
        const historicalAverage = historicalAverageSevenHybrid75;
        const highestValue = Math.max(...sevenHybrid75Data);
        setHighVarianceSevenHybrid75(highestValue - historicalAverage);
        return highVarianceSevenHybrid75;
    }
    const calculateLowVarianceSevenHybrid100 = () => {
        const historicalAverage = historicalAverageSevenHybrid100;
        const lowestValue = Math.min(...sevenHybrid100Data);
        setLowVarianceSevenHybrid100(lowestValue - historicalAverage);
        return lowVarianceSevenHybrid100;
    }
    const calculateLowVarianceSevenHybrid75 = () => {
        const historicalAverage = historicalAverageSevenHybrid75;
        const lowestValue = Math.min(...sevenHybrid75Data);
        setLowVarianceSevenHybrid75(lowestValue - historicalAverage);
        return lowVarianceSevenHybrid75;
    }

    return {
        sevenHybrid100Data,
        setSevenHybrid100Data,
        sevenHybrid75Data,
        setSevenHybrid75Data,
        // Shot Totals
        sevenHybridShotCounter100,
        setSevenHybridShotCounter100,
        sevenHybridShotCounter75,
        setSevenHybridShotCounter75,
        // Historical Average
        historicalAverageSevenHybrid100,
        setHistoricalAverageSevenHybrid100,
        historicalAverageSevenHybrid75,
        setHistoricalAverageSevenHybrid75,
        // Variance
        highVarianceSevenHybrid100,
        setHighVarianceSevenHybrid100,
        highVarianceSevenHybrid75,
        setHighVarianceSevenHybrid75,
        lowVarianceSevenHybrid100,
        setLowVarianceSevenHybrid100,
        lowVarianceSevenHybrid75,
        setLowVarianceSevenHybrid75,
    };
};

export default SevenHybridData;
