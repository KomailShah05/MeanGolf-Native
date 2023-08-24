import React, { useState } from "react";

export const Fifty4WedgeData = () => {

    // State
    const [fifty4Wedge100Data, setFifty4Wedge100Data] = useState([]);
    const [fifty4Wedge75Data, setFifty4Wedge75Data] = useState([]);
    const [fifty4Wedge50Data, setFifty4Wedge50Data] = useState([]);
    const [fifty4Wedge25Data, setFifty4Wedge25Data] = useState([]);

    const [fifty4WedgeShotCounter100, setFifty4WedgeShotCounter100,] = useState()
    const [fifty4WedgeShotCounter75, setFifty4WedgeShotCounter75,] = useState()
    const [fifty4WedgeShotCounter50, setFifty4WedgeShotCounter50,] = useState()
    const [fifty4WedgeShotCounter25, setFifty4WedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFifty4Wedge100, setHistoricalAverageFifty4Wedge100] = useState();
    const [historicalAverageFifty4Wedge75, setHistoricalAverageFifty4Wedge75] = useState();
    const [historicalAverageFifty4Wedge50, setHistoricalAverageFifty4Wedge50] = useState();
    const [historicalAverageFifty4Wedge25, setHistoricalAverageFifty4Wedge25] = useState();
    // Variance
    const [highVarianceFifty4Wedge100, setHighVarianceFifty4Wedge100] = useState();
    const [highVarianceFifty4Wedge75, setHighVarianceFifty4Wedge75] = useState();
    const [highVarianceFifty4Wedge50, setHighVarianceFifty4Wedge50] = useState();
    const [highVarianceFifty4Wedge25, setHighVarianceFifty4Wedge25] = useState();
    const [lowVarianceFifty4Wedge100, setLowVarianceFifty4Wedge100] = useState();
    const [lowVarianceFifty4Wedge75, setLowVarianceFifty4Wedge75] = useState();
    const [lowVarianceFifty4Wedge50, setLowVarianceFifty4Wedge50] = useState();
    const [lowVarianceFifty4Wedge25, setLowVarianceFifty4Wedge25] = useState();


    return {
        fifty4Wedge100Data,
        setFifty4Wedge100Data,
        fifty4Wedge75Data,
        setFifty4Wedge75Data,
        fifty4Wedge50Data,
        setFifty4Wedge50Data,
        fifty4Wedge25Data,
        setFifty4Wedge25Data,
        // Shot Totals
        fifty4WedgeShotCounter100,
        setFifty4WedgeShotCounter100,
        fifty4WedgeShotCounter75,
        setFifty4WedgeShotCounter75,
        fifty4WedgeShotCounter50,
        setFifty4WedgeShotCounter50,
        fifty4WedgeShotCounter25,
        setFifty4WedgeShotCounter25,
        // Historical Value
        historicalAverageFifty4Wedge100,
        setHistoricalAverageFifty4Wedge100,
        historicalAverageFifty4Wedge75,
        setHistoricalAverageFifty4Wedge75,
        historicalAverageFifty4Wedge50,
        setHistoricalAverageFifty4Wedge50,
        historicalAverageFifty4Wedge25,
        setHistoricalAverageFifty4Wedge25,
        // Variance
        highVarianceFifty4Wedge100,
        setHighVarianceFifty4Wedge100,
        highVarianceFifty4Wedge75,
        setHighVarianceFifty4Wedge75,
        highVarianceFifty4Wedge50,
        setHighVarianceFifty4Wedge50,
        highVarianceFifty4Wedge25,
        setHighVarianceFifty4Wedge25,
        lowVarianceFifty4Wedge100,
        setLowVarianceFifty4Wedge100,
        lowVarianceFifty4Wedge75,
        setLowVarianceFifty4Wedge75,
        lowVarianceFifty4Wedge50,
        setLowVarianceFifty4Wedge50,
        lowVarianceFifty4Wedge25,
        setLowVarianceFifty4Wedge25,
    };
};

export default Fifty4WedgeData;