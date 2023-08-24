import React, { useState } from "react";

export const Fifty2WedgeData = () => {

    // State
    const [fifty2Wedge100Data, setFifty2Wedge100Data] = useState([]);
    const [fifty2Wedge75Data, setFifty2Wedge75Data] = useState([]);
    const [fifty2Wedge50Data, setFifty2Wedge50Data] = useState([]);
    const [fifty2Wedge25Data, setFifty2Wedge25Data] = useState([]);

    const [fifty2WedgeShotCounter100, setFifty2WedgeShotCounter100,] = useState()
    const [fifty2WedgeShotCounter75, setFifty2WedgeShotCounter75,] = useState()
    const [fifty2WedgeShotCounter50, setFifty2WedgeShotCounter50,] = useState()
    const [fifty2WedgeShotCounter25, setFifty2WedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageFifty2Wedge100, setHistoricalAverageFifty2Wedge100] = useState();
    const [historicalAverageFifty2Wedge75, setHistoricalAverageFifty2Wedge75] = useState();
    const [historicalAverageFifty2Wedge50, setHistoricalAverageFifty2Wedge50] = useState();
    const [historicalAverageFifty2Wedge25, setHistoricalAverageFifty2Wedge25] = useState();
    // Variance
    const [highVarianceFifty2Wedge100, setHighVarianceFifty2Wedge100] = useState();
    const [highVarianceFifty2Wedge75, setHighVarianceFifty2Wedge75] = useState();
    const [highVarianceFifty2Wedge50, setHighVarianceFifty2Wedge50] = useState();
    const [highVarianceFifty2Wedge25, setHighVarianceFifty2Wedge25] = useState();
    const [lowVarianceFifty2Wedge100, setLowVarianceFifty2Wedge100] = useState();
    const [lowVarianceFifty2Wedge75, setLowVarianceFifty2Wedge75] = useState();
    const [lowVarianceFifty2Wedge50, setLowVarianceFifty2Wedge50] = useState();
    const [lowVarianceFifty2Wedge25, setLowVarianceFifty2Wedge25] = useState();


    return {
        fifty2Wedge100Data,
        setFifty2Wedge100Data,
        fifty2Wedge75Data,
        setFifty2Wedge75Data,
        fifty2Wedge50Data,
        setFifty2Wedge50Data,
        fifty2Wedge25Data,
        setFifty2Wedge25Data,
        // Shot Totals
        fifty2WedgeShotCounter100,
        setFifty2WedgeShotCounter100,
        fifty2WedgeShotCounter75,
        setFifty2WedgeShotCounter75,
        fifty2WedgeShotCounter50,
        setFifty2WedgeShotCounter50,
        fifty2WedgeShotCounter25,
        setFifty2WedgeShotCounter25,
        // Historical Value
        historicalAverageFifty2Wedge100,
        setHistoricalAverageFifty2Wedge100,
        historicalAverageFifty2Wedge75,
        setHistoricalAverageFifty2Wedge75,
        historicalAverageFifty2Wedge50,
        setHistoricalAverageFifty2Wedge50,
        historicalAverageFifty2Wedge25,
        setHistoricalAverageFifty2Wedge25,
        // Variance
        highVarianceFifty2Wedge100,
        setHighVarianceFifty2Wedge100,
        highVarianceFifty2Wedge75,
        setHighVarianceFifty2Wedge75,
        highVarianceFifty2Wedge50,
        setHighVarianceFifty2Wedge50,
        highVarianceFifty2Wedge25,
        setHighVarianceFifty2Wedge25,
        lowVarianceFifty2Wedge100,
        setLowVarianceFifty2Wedge100,
        lowVarianceFifty2Wedge75,
        setLowVarianceFifty2Wedge75,
        lowVarianceFifty2Wedge50,
        setLowVarianceFifty2Wedge50,
        lowVarianceFifty2Wedge25,
        setLowVarianceFifty2Wedge25,
    };
};

export default Fifty2WedgeData;