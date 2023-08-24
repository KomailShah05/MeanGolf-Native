import React, { useState } from "react";

export const Forty8WedgeData = () => {

    // State
    const [forty8Wedge100Data, setForty8Wedge100Data] = useState([]);
    const [forty8Wedge75Data, setForty8Wedge75Data] = useState([]);
    const [forty8Wedge50Data, setForty8Wedge50Data] = useState([]);
    const [forty8Wedge25Data, setForty8Wedge25Data] = useState([]);

    const [forty8WedgeShotCounter100, setForty8WedgeShotCounter100,] = useState()
    const [forty8WedgeShotCounter75, setForty8WedgeShotCounter75,] = useState()
    const [forty8WedgeShotCounter50, setForty8WedgeShotCounter50,] = useState()
    const [forty8WedgeShotCounter25, setForty8WedgeShotCounter25,] = useState()
    // Historical Average
    const [historicalAverageForty8Wedge100, setHistoricalAverageForty8Wedge100] = useState();
    const [historicalAverageForty8Wedge75, setHistoricalAverageForty8Wedge75] = useState();
    const [historicalAverageForty8Wedge50, setHistoricalAverageForty8Wedge50] = useState();
    const [historicalAverageForty8Wedge25, setHistoricalAverageForty8Wedge25] = useState();
    // Variance
    const [highVarianceForty8Wedge100, setHighVarianceForty8Wedge100] = useState();
    const [highVarianceForty8Wedge75, setHighVarianceForty8Wedge75] = useState();
    const [highVarianceForty8Wedge50, setHighVarianceForty8Wedge50] = useState();
    const [highVarianceForty8Wedge25, setHighVarianceForty8Wedge25] = useState();
    const [lowVarianceForty8Wedge100, setLowVarianceForty8Wedge100] = useState();
    const [lowVarianceForty8Wedge75, setLowVarianceForty8Wedge75] = useState();
    const [lowVarianceForty8Wedge50, setLowVarianceForty8Wedge50] = useState();
    const [lowVarianceForty8Wedge25, setLowVarianceForty8Wedge25] = useState();


    return {
        forty8Wedge100Data,
        setForty8Wedge100Data,
        forty8Wedge75Data,
        setForty8Wedge75Data,
        forty8Wedge50Data,
        setForty8Wedge50Data,
        forty8Wedge25Data,
        setForty8Wedge25Data,
        // Shot Totals
        forty8WedgeShotCounter100,
        setForty8WedgeShotCounter100,
        forty8WedgeShotCounter75,
        setForty8WedgeShotCounter75,
        forty8WedgeShotCounter50,
        setForty8WedgeShotCounter50,
        forty8WedgeShotCounter25,
        setForty8WedgeShotCounter25,
        // Historical Value
        historicalAverageForty8Wedge100,
        setHistoricalAverageForty8Wedge100,
        historicalAverageForty8Wedge75,
        setHistoricalAverageForty8Wedge75,
        historicalAverageForty8Wedge50,
        setHistoricalAverageForty8Wedge50,
        historicalAverageForty8Wedge25,
        setHistoricalAverageForty8Wedge25,
        // Variance
        highVarianceForty8Wedge100,
        setHighVarianceForty8Wedge100,
        highVarianceForty8Wedge75,
        setHighVarianceForty8Wedge75,
        highVarianceForty8Wedge50,
        setHighVarianceForty8Wedge50,
        highVarianceForty8Wedge25,
        setHighVarianceForty8Wedge25,
        lowVarianceForty8Wedge100,
        setLowVarianceForty8Wedge100,
        lowVarianceForty8Wedge75,
        setLowVarianceForty8Wedge75,
        lowVarianceForty8Wedge50,
        setLowVarianceForty8Wedge50,
        lowVarianceForty8Wedge25,
        setLowVarianceForty8Wedge25,
    };
};

export default Forty8WedgeData;