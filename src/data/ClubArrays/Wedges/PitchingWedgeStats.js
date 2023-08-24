import React, { useState } from "react";

export const PWedgeData = () => {

    // State
    const [pWedge100Data, setPWedge100Data] = useState([]);
    const [pWedge75Data, setPWedge75Data] = useState([]);
    const [pWedge50Data, setPWedge50Data] = useState([]);
    const [pWedge25Data, setPWedge25Data] = useState([]);

    const [pWedgeShotCounter100, setPWedgeShotCounter100,] = useState()
    const [pWedgeShotCounter75, setPWedgeShotCounter75,] = useState()
    const [pWedgeShotCounter50, setPWedgeShotCounter50,] = useState()
    const [pWedgeShotCounter25, setPWedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAveragePWedge100, setHistoricalAveragePWedge100] = useState();
    const [historicalAveragePWedge75, setHistoricalAveragePWedge75] = useState();
    const [historicalAveragePWedge50, setHistoricalAveragePWedge50] = useState();
    const [historicalAveragePWedge25, setHistoricalAveragePWedge25] = useState();
    // Variance
    const [highVariancePWedge100, setHighVariancePWedge100] = useState();
    const [highVariancePWedge75, setHighVariancePWedge75] = useState();
    const [highVariancePWedge50, setHighVariancePWedge50] = useState();
    const [highVariancePWedge25, setHighVariancePWedge25] = useState();
    const [lowVariancePWedge100, setLowVariancePWedge100] = useState();
    const [lowVariancePWedge75, setLowVariancePWedge75] = useState();
    const [lowVariancePWedge50, setLowVariancePWedge50] = useState();
    const [lowVariancePWedge25, setLowVariancePWedge25] = useState();


    return {
        pWedge100Data,
        setPWedge100Data,
        pWedge75Data,
        setPWedge75Data,
        pWedge50Data,
        setPWedge50Data,
        pWedge25Data,
        setPWedge25Data,
        // Shot Totals
        pWedgeShotCounter100,
        setPWedgeShotCounter100,
        pWedgeShotCounter75,
        setPWedgeShotCounter75,
        pWedgeShotCounter50,
        setPWedgeShotCounter50,
        pWedgeShotCounter25,
        setPWedgeShotCounter25,
        // Historical Value
        historicalAveragePWedge100,
        setHistoricalAveragePWedge100,
        historicalAveragePWedge75,
        setHistoricalAveragePWedge75,
        historicalAveragePWedge50,
        setHistoricalAveragePWedge50,
        historicalAveragePWedge25,
        setHistoricalAveragePWedge25,
        // Variance
        highVariancePWedge100,
        setHighVariancePWedge100,
        highVariancePWedge75,
        setHighVariancePWedge75,
        highVariancePWedge50,
        setHighVariancePWedge50,
        highVariancePWedge25,
        setHighVariancePWedge25,
        lowVariancePWedge100,
        setLowVariancePWedge100,
        lowVariancePWedge75,
        setLowVariancePWedge75,
        lowVariancePWedge50,
        setLowVariancePWedge50,
        lowVariancePWedge25,
        setLowVariancePWedge25,
    };
};

export default PWedgeData;
