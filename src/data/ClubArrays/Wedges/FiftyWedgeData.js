import React, { useState } from "react";

export const FiftyWedgeData = () => {

    // State
    const [fiftyWedge100Data, setFiftyWedge100Data] = useState([]);
    const [fiftyWedge75Data, setFiftyWedge75Data] = useState([]);
    const [fiftyWedge50Data, setFiftyWedge50Data] = useState([]);
    const [fiftyWedge25Data, setFiftyWedge25Data] = useState([]);

    const [fiftyWedgeShotCounter100, setFiftyWedgeShotCounter100,] = useState()
    const [fiftyWedgeShotCounter75, setFiftyWedgeShotCounter75,] = useState()
    const [fiftyWedgeShotCounter50, setFiftyWedgeShotCounter50,] = useState()
    const [fiftyWedgeShotCounter25, setFiftyWedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFiftyWedge100, setHistoricalAverageFiftyWedge100] = useState();
    const [historicalAverageFiftyWedge75, setHistoricalAverageFiftyWedge75] = useState();
    const [historicalAverageFiftyWedge50, setHistoricalAverageFiftyWedge50] = useState();
    const [historicalAverageFiftyWedge25, setHistoricalAverageFiftyWedge25] = useState();
    // Variance
    const [highVarianceFiftyWedge100, setHighVarianceFiftyWedge100] = useState();
    const [highVarianceFiftyWedge75, setHighVarianceFiftyWedge75] = useState();
    const [highVarianceFiftyWedge50, setHighVarianceFiftyWedge50] = useState();
    const [highVarianceFiftyWedge25, setHighVarianceFiftyWedge25] = useState();
    const [lowVarianceFiftyWedge100, setLowVarianceFiftyWedge100] = useState();
    const [lowVarianceFiftyWedge75, setLowVarianceFiftyWedge75] = useState();
    const [lowVarianceFiftyWedge50, setLowVarianceFiftyWedge50] = useState();
    const [lowVarianceFiftyWedge25, setLowVarianceFiftyWedge25] = useState();


    return {
        fiftyWedge100Data,
        setFiftyWedge100Data,
        fiftyWedge75Data,
        setFiftyWedge75Data,
        fiftyWedge50Data,
        setFiftyWedge50Data,
        fiftyWedge25Data,
        setFiftyWedge25Data,
        // Shot Totals
        fiftyWedgeShotCounter100,
        setFiftyWedgeShotCounter100,
        fiftyWedgeShotCounter75,
        setFiftyWedgeShotCounter75,
        fiftyWedgeShotCounter50,
        setFiftyWedgeShotCounter50,
        fiftyWedgeShotCounter25,
        setFiftyWedgeShotCounter25,
        // Historical Value
        historicalAverageFiftyWedge100,
        setHistoricalAverageFiftyWedge100,
        historicalAverageFiftyWedge75,
        setHistoricalAverageFiftyWedge75,
        historicalAverageFiftyWedge50,
        setHistoricalAverageFiftyWedge50,
        historicalAverageFiftyWedge25,
        setHistoricalAverageFiftyWedge25,
        // Variance
        highVarianceFiftyWedge100,
        setHighVarianceFiftyWedge100,
        highVarianceFiftyWedge75,
        setHighVarianceFiftyWedge75,
        highVarianceFiftyWedge50,
        setHighVarianceFiftyWedge50,
        highVarianceFiftyWedge25,
        setHighVarianceFiftyWedge25,
        lowVarianceFiftyWedge100,
        setLowVarianceFiftyWedge100,
        lowVarianceFiftyWedge75,
        setLowVarianceFiftyWedge75,
        lowVarianceFiftyWedge50,
        setLowVarianceFiftyWedge50,
        lowVarianceFiftyWedge25,
        setLowVarianceFiftyWedge25,
    };
};

export default FiftyWedgeData;