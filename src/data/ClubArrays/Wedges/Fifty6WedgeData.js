import React, { useState } from "react";

export const Fifty6WedgeData = () => {

    // State
    const [fifty6Wedge100Data, setFifty6Wedge100Data] = useState([]);
    const [fifty6Wedge75Data, setFifty6Wedge75Data] = useState([]);
    const [fifty6Wedge50Data, setFifty6Wedge50Data] = useState([]);
    const [fifty6Wedge25Data, setFifty6Wedge25Data] = useState([]);

    const [fifty6WedgeShotCounter100, setFifty6WedgeShotCounter100,] = useState()
    const [fifty6WedgeShotCounter75, setFifty6WedgeShotCounter75,] = useState()
    const [fifty6WedgeShotCounter50, setFifty6WedgeShotCounter50,] = useState()
    const [fifty6WedgeShotCounter25, setFifty6WedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFifty6Wedge100, setHistoricalAverageFifty6Wedge100] = useState();
    const [historicalAverageFifty6Wedge75, setHistoricalAverageFifty6Wedge75] = useState();
    const [historicalAverageFifty6Wedge50, setHistoricalAverageFifty6Wedge50] = useState();
    const [historicalAverageFifty6Wedge25, setHistoricalAverageFifty6Wedge25] = useState();
    // Variance
    const [highVarianceFifty6Wedge100, setHighVarianceFifty6Wedge100] = useState();
    const [highVarianceFifty6Wedge75, setHighVarianceFifty6Wedge75] = useState();
    const [highVarianceFifty6Wedge50, setHighVarianceFifty6Wedge50] = useState();
    const [highVarianceFifty6Wedge25, setHighVarianceFifty6Wedge25] = useState();
    const [lowVarianceFifty6Wedge100, setLowVarianceFifty6Wedge100] = useState();
    const [lowVarianceFifty6Wedge75, setLowVarianceFifty6Wedge75] = useState();
    const [lowVarianceFifty6Wedge50, setLowVarianceFifty6Wedge50] = useState();
    const [lowVarianceFifty6Wedge25, setLowVarianceFifty6Wedge25] = useState();


    return {
        fifty6Wedge100Data,
        setFifty6Wedge100Data,
        fifty6Wedge75Data,
        setFifty6Wedge75Data,
        fifty6Wedge50Data,
        setFifty6Wedge50Data,
        fifty6Wedge25Data,
        setFifty6Wedge25Data,
        // Shot Totals
        fifty6WedgeShotCounter100,
        setFifty6WedgeShotCounter100,
        fifty6WedgeShotCounter75,
        setFifty6WedgeShotCounter75,
        fifty6WedgeShotCounter50,
        setFifty6WedgeShotCounter50,
        fifty6WedgeShotCounter25,
        setFifty6WedgeShotCounter25,
        // Historical Value
        historicalAverageFifty6Wedge100,
        setHistoricalAverageFifty6Wedge100,
        historicalAverageFifty6Wedge75,
        setHistoricalAverageFifty6Wedge75,
        historicalAverageFifty6Wedge50,
        setHistoricalAverageFifty6Wedge50,
        historicalAverageFifty6Wedge25,
        setHistoricalAverageFifty6Wedge25,
        // Variance
        highVarianceFifty6Wedge100,
        setHighVarianceFifty6Wedge100,
        highVarianceFifty6Wedge75,
        setHighVarianceFifty6Wedge75,
        highVarianceFifty6Wedge50,
        setHighVarianceFifty6Wedge50,
        highVarianceFifty6Wedge25,
        setHighVarianceFifty6Wedge25,
        lowVarianceFifty6Wedge100,
        setLowVarianceFifty6Wedge100,
        lowVarianceFifty6Wedge75,
        setLowVarianceFifty6Wedge75,
        lowVarianceFifty6Wedge50,
        setLowVarianceFifty6Wedge50,
        lowVarianceFifty6Wedge25,
        setLowVarianceFifty6Wedge25,
    };
};

export default Fifty6WedgeData;