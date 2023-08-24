import React, { useState } from "react";

export const SixtyWedgeData = () => {

    // State
    const [sixtyWedge100Data, setSixtyWedge100Data] = useState([]);
    const [sixtyWedge75Data, setSixtyWedge75Data] = useState([]);
    const [sixtyWedge50Data, setSixtyWedge50Data] = useState([]);
    const [sixtyWedge25Data, setSixtyWedge25Data] = useState([]);

    const [sixtyWedgeShotCounter100, setSixtyWedgeShotCounter100,] = useState()
    const [sixtyWedgeShotCounter75, setSixtyWedgeShotCounter75,] = useState()
    const [sixtyWedgeShotCounter50, setSixtyWedgeShotCounter50,] = useState()
    const [sixtyWedgeShotCounter25, setSixtyWedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageSixtyWedge100, setHistoricalAverageSixtyWedge100] = useState();
    const [historicalAverageSixtyWedge75, setHistoricalAverageSixtyWedge75] = useState();
    const [historicalAverageSixtyWedge50, setHistoricalAverageSixtyWedge50] = useState();
    const [historicalAverageSixtyWedge25, setHistoricalAverageSixtyWedge25] = useState();
    // Variance
    const [highVarianceSixtyWedge100, setHighVarianceSixtyWedge100] = useState();
    const [highVarianceSixtyWedge75, setHighVarianceSixtyWedge75] = useState();
    const [highVarianceSixtyWedge50, setHighVarianceSixtyWedge50] = useState();
    const [highVarianceSixtyWedge25, setHighVarianceSixtyWedge25] = useState();
    const [lowVarianceSixtyWedge100, setLowVarianceSixtyWedge100] = useState();
    const [lowVarianceSixtyWedge75, setLowVarianceSixtyWedge75] = useState();
    const [lowVarianceSixtyWedge50, setLowVarianceSixtyWedge50] = useState();
    const [lowVarianceSixtyWedge25, setLowVarianceSixtyWedge25] = useState();


    return {
        sixtyWedge100Data,
        setSixtyWedge100Data,
        sixtyWedge75Data,
        setSixtyWedge75Data,
        sixtyWedge50Data,
        setSixtyWedge50Data,
        sixtyWedge25Data,
        setSixtyWedge25Data,
        // Shot Totals
        sixtyWedgeShotCounter100,
        setSixtyWedgeShotCounter100,
        sixtyWedgeShotCounter75,
        setSixtyWedgeShotCounter75,
        sixtyWedgeShotCounter50,
        setSixtyWedgeShotCounter50,
        sixtyWedgeShotCounter25,
        setSixtyWedgeShotCounter25,
        // Historical Value
        historicalAverageSixtyWedge100,
        setHistoricalAverageSixtyWedge100,
        historicalAverageSixtyWedge75,
        setHistoricalAverageSixtyWedge75,
        historicalAverageSixtyWedge50,
        setHistoricalAverageSixtyWedge50,
        historicalAverageSixtyWedge25,
        setHistoricalAverageSixtyWedge25,
        // Variance
        highVarianceSixtyWedge100,
        setHighVarianceSixtyWedge100,
        highVarianceSixtyWedge75,
        setHighVarianceSixtyWedge75,
        highVarianceSixtyWedge50,
        setHighVarianceSixtyWedge50,
        highVarianceSixtyWedge25,
        setHighVarianceSixtyWedge25,
        lowVarianceSixtyWedge100,
        setLowVarianceSixtyWedge100,
        lowVarianceSixtyWedge75,
        setLowVarianceSixtyWedge75,
        lowVarianceSixtyWedge50,
        setLowVarianceSixtyWedge50,
        lowVarianceSixtyWedge25,
        setLowVarianceSixtyWedge25,
    };
};

export default SixtyWedgeData;