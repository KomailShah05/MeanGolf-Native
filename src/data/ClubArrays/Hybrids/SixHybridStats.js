import React, { useState } from "react";

export const SixHybridData = () => {

    // State
    const [sixHybrid100Data, setSixHybrid100Data] = useState([]);
    const [sixHybrid75Data, setSixHybrid75Data] = useState([]);

    const [sixHybridShotCounter100, setSixHybridShotCounter100,] = useState()
    const [sixHybridShotCounter75, setSixHybridShotCounter75,] = useState()
    // Historical Average
    const [historicalAverageSixHybrid100, setHistoricalAverageSixHybrid100] = useState();
    const [historicalAverageSixHybrid75, setHistoricalAverageSixHybrid75] = useState();
    // Variance
    const [highVarianceSixHybrid100, setHighVarianceSixHybrid100] = useState();
    const [highVarianceSixHybrid75, setHighVarianceSixHybrid75] = useState();
    const [lowVarianceSixHybrid100, setLowVarianceSixHybrid100] = useState();
    const [lowVarianceSixHybrid75, setLowVarianceSixHybrid75] = useState();

    // Six Hybrid Weighted Average

    // Six Hybrid Historical Average
    const calculateHistoricalAverageSixHybrid100 = () => {
        if (sixHybrid100Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixHybrid100Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixHybrid100(Math.round(sum / sixHybrid100Data.length));
        return historicalAverageSixHybrid100;
    };
    const calculateHistoricalAverageSixHybrid75 = () => {
        if (sixHybrid75Data.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = sixHybrid75Data.reduce((acc, value) => acc + value, 0);
        setHistoricalAverageSixHybrid75(Math.round(sum / sixHybrid75Data.length));
        return historicalAverageSixHybrid75;
    };

    // Six Hybrid Total Shots
    const sixHybridShotTotalCounter100 = () => {
        setSixHybridShotCounter100(sixHybrid100Data.length)
        return sixHybridShotCounter100
    };
    const sixHybridShotTotalCounter75 = () => {
        setSixHybridShotCounter75(sixHybrid75Data.length)
        return sixHybridShotCounter75
    };

    // Six Hybrid Variance

    const calculateHighVarianceSixHybrid100 = () => {
        const historicalAverage = historicalAverageSixHybrid100;
        const highestValue = Math.max(...sixHybrid100Data);
        setHighVarianceSixHybrid100(highestValue - historicalAverage);
        return highVarianceSixHybrid100;
    }
    const calculateHighVarianceSixHybrid75 = () => {
        const historicalAverage = historicalAverageSixHybrid75;
        const highestValue = Math.max(...sixHybrid75Data);
        setHighVarianceSixHybrid75(highestValue - historicalAverage);
        return highVarianceSixHybrid75;
    }
    const calculateLowVarianceSixHybrid100 = () => {
        const historicalAverage = historicalAverageSixHybrid100;
        const lowestValue = Math.min(...sixHybrid100Data);
        setLowVarianceSixHybrid100(lowestValue - historicalAverage);
        return lowVarianceSixHybrid100;
    }
    const calculateLowVarianceSixHybrid75 = () => {
        const historicalAverage = historicalAverageSixHybrid75;
        const lowestValue = Math.min(...sixHybrid75Data);
        setLowVarianceSixHybrid75(lowestValue - historicalAverage);
        return lowVarianceSixHybrid75;
    }

    return {
        sixHybrid100Data,
        setSixHybrid100Data,
        sixHybrid75Data,
        setSixHybrid75Data,
        // Shot Totals
        sixHybridShotCounter100,
        setSixHybridShotCounter100,
        sixHybridShotCounter75,
        setSixHybridShotCounter75,
        // Historical Average
        historicalAverageSixHybrid100,
        setHistoricalAverageSixHybrid100,
        historicalAverageSixHybrid75,
        setHistoricalAverageSixHybrid75,
        // Variance
        highVarianceSixHybrid100,
        setHighVarianceSixHybrid100,
        highVarianceSixHybrid75,
        setHighVarianceSixHybrid75,
        lowVarianceSixHybrid100,
        setLowVarianceSixHybrid100,
        lowVarianceSixHybrid75,
        setLowVarianceSixHybrid75,
    };
};

export default SixHybridData;
