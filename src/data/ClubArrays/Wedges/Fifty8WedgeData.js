import React, { useState } from "react";

export const Fifty8WedgeData = () => {

    // State
    const [fifty8Wedge100Data, setFifty8Wedge100Data] = useState([]);
    const [fifty8Wedge75Data, setFifty8Wedge75Data] = useState([]);
    const [fifty8Wedge50Data, setFifty8Wedge50Data] = useState([]);
    const [fifty8Wedge25Data, setFifty8Wedge25Data] = useState([]);

    const [fifty8WedgeShotCounter100, setFifty8WedgeShotCounter100,] = useState()
    const [fifty8WedgeShotCounter75, setFifty8WedgeShotCounter75,] = useState()
    const [fifty8WedgeShotCounter50, setFifty8WedgeShotCounter50,] = useState()
    const [fifty8WedgeShotCounter25, setFifty8WedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFifty8Wedge100, setHistoricalAverageFifty8Wedge100] = useState();
    const [historicalAverageFifty8Wedge75, setHistoricalAverageFifty8Wedge75] = useState();
    const [historicalAverageFifty8Wedge50, setHistoricalAverageFifty8Wedge50] = useState();
    const [historicalAverageFifty8Wedge25, setHistoricalAverageFifty8Wedge25] = useState();
    // Variance
    const [highVarianceFifty8Wedge100, setHighVarianceFifty8Wedge100] = useState();
    const [highVarianceFifty8Wedge75, setHighVarianceFifty8Wedge75] = useState();
    const [highVarianceFifty8Wedge50, setHighVarianceFifty8Wedge50] = useState();
    const [highVarianceFifty8Wedge25, setHighVarianceFifty8Wedge25] = useState();
    const [lowVarianceFifty8Wedge100, setLowVarianceFifty8Wedge100] = useState();
    const [lowVarianceFifty8Wedge75, setLowVarianceFifty8Wedge75] = useState();
    const [lowVarianceFifty8Wedge50, setLowVarianceFifty8Wedge50] = useState();
    const [lowVarianceFifty8Wedge25, setLowVarianceFifty8Wedge25] = useState();


    return {
        fifty8Wedge100Data,
        setFifty8Wedge100Data,
        fifty8Wedge75Data,
        setFifty8Wedge75Data,
        fifty8Wedge50Data,
        setFifty8Wedge50Data,
        fifty8Wedge25Data,
        setFifty8Wedge25Data,
        // Shot Totals
        fifty8WedgeShotCounter100,
        setFifty8WedgeShotCounter100,
        fifty8WedgeShotCounter75,
        setFifty8WedgeShotCounter75,
        fifty8WedgeShotCounter50,
        setFifty8WedgeShotCounter50,
        fifty8WedgeShotCounter25,
        setFifty8WedgeShotCounter25,
        // Historical Value
        historicalAverageFifty8Wedge100,
        setHistoricalAverageFifty8Wedge100,
        historicalAverageFifty8Wedge75,
        setHistoricalAverageFifty8Wedge75,
        historicalAverageFifty8Wedge50,
        setHistoricalAverageFifty8Wedge50,
        historicalAverageFifty8Wedge25,
        setHistoricalAverageFifty8Wedge25,
        // Variance
        highVarianceFifty8Wedge100,
        setHighVarianceFifty8Wedge100,
        highVarianceFifty8Wedge75,
        setHighVarianceFifty8Wedge75,
        highVarianceFifty8Wedge50,
        setHighVarianceFifty8Wedge50,
        highVarianceFifty8Wedge25,
        setHighVarianceFifty8Wedge25,
        lowVarianceFifty8Wedge100,
        setLowVarianceFifty8Wedge100,
        lowVarianceFifty8Wedge75,
        setLowVarianceFifty8Wedge75,
        lowVarianceFifty8Wedge50,
        setLowVarianceFifty8Wedge50,
        lowVarianceFifty8Wedge25,
        setLowVarianceFifty8Wedge25,
    };
};

export default Fifty8WedgeData;