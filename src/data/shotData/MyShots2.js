import React, { useState } from "react";

export const useCustomState = () => {

    // const driver100Formula = (driver100) => {
    //     const sum = driver100.reduce((acc, val) => acc + val, 0);
    //     const average = sum / driver100.length;
    //     return average;
    // };
    // const driver100Average = driver100Formula();

    // Woods
    // Driver
    const [driver100, setDriver100] = useState([]);
    const [driver75, setDriver75] = useState([]);
    // Three Wood
    const [threeWood100, setThreeWood100] = useState([]);
    const [threeWood75, setThreeWood75] = useState([]);
    // Five Wood
    const [fiveWood100, setFiveWood100] = useState([]);
    const [fiveWood75, setFiveWood75] = useState([]);
    // Seven Wood
    const [sevenWood100, setSevenWood100] = useState([]);
    const [sevenWood75, setSevenWood75] = useState([]);
    // Hybrids
    const [twoHybrid100, setTwoHybrid100] = useState([]);
    const [twoHybrid75, setTwoHybrid75] = useState([]);
    const [threeHybrid100, setThreeHybrid100] = useState([]);
    const [threeHybrid75, setThreeHybrid75] = useState([]);
    const [fourHybrid100, setFourHybrid100] = useState([]);
    const [fourHybrid75, setFourHybrid75] = useState([]);
    const [fiveHybrid100, setFiveHybrid100] = useState([]);
    const [fiveHybrid75, setFiveHybrid75] = useState([]);
    const [sixHybrid100, setSixHybrid100] = useState([]);
    const [sixHybrid75, setSixHybrid75] = useState([]);
    const [sevenHybrid100, setSevenHybrid100] = useState([]);
    const [sevenHybrid75, setSevenHybrid75] = useState([]);
    // Iron
    // 2 Iron
    const [twoIron100, setTwoIron100] = useState([]);
    const [twoIron75, setTwoIron75] = useState([]);
    const [twoIron50, setTwoIron50] = useState([]);
    const [twoIron25, setTwoIron25] = useState([]);
    // 3 Iron
    const [threeIron100, setThreeIron100] = useState([]);
    const [threeIron75, setThreeIron75] = useState([]);
    const [threeIron50, setThreeIron50] = useState([]);
    const [threeIron25, setThreeIron25] = useState([]);
    // 4 Iron
    const [fourIron100, setFourIron100] = useState([]);
    const [fourIron75, setFourIron75] = useState([]);
    const [fourIron50, setFourIron50] = useState([]);
    const [fourIron25, setFourIron25] = useState([]);
    // 5 Iron
    const [fiveIron100, setFiveIron100] = useState([]);
    const [fiveIron75, setFiveIron75] = useState([]);
    const [fiveIron50, setFiveIron50] = useState([]);
    const [fiveIron25, setFiveIron25] = useState([]);
    // 6 Iron
    const [sixIron100, setSixIron100] = useState([]);
    const [sixIron75, setSixIron75] = useState([]);
    const [sixIron50, setSixIron50] = useState([]);
    const [sixIron25, setSixIron25] = useState([]);
    // 7 Iron
    const [sevenIron100, setSevenIron100] = useState([]);
    const [sevenIron75, setSevenIron75] = useState([]);
    const [sevenIron50, setSevenIron50] = useState([]);
    const [sevenIron25, setSevenIron25] = useState([]);
    // 8 Iron
    const [eightIron100, setEightIron100] = useState([]);
    const [eightIron75, setEightIron75] = useState([]);
    const [eightIron50, setEightIron50] = useState([]);
    const [eightIron25, setEightIron25] = useState([]);
    // 9 Iron
    const [nineIron100, setNineIron100] = useState([]);
    const [nineIron75, setNineIron75] = useState([]);
    const [nineIron50, setNineIron50] = useState([]);
    const [nineIron25, setNineIron25] = useState([]);

    // Wedges
    // PW
    const [pWedge100, setPWedge100] = useState([]);
    const [pWedge75, setPWedge75] = useState([]);
    const [pWedge50, setPWedge50] = useState([]);
    const [pWedge25, setPWedge25] = useState([]);
    // 48
    const [forty8Wedge100, setForty8Wedge100] = useState([]);
    const [forty8Wedge75, setForty8Wedge75] = useState([]);
    const [forty8Wedge50, setForty8Wedge50] = useState([]);
    const [forty8Wedge25, setForty8Wedge25] = useState([]);
    // 50
    const [fiftyWedge100, setFiftyWedge100] = useState([]);
    const [fiftyWedge75, setFiftyWedge75] = useState([]);
    const [fiftyWedge50, setFiftyWedge50] = useState([]);
    const [fiftyWedge25, setFiftyWedge25] = useState([]);
    // 52
    const [fifty2Wedge100, setFifty2Wedge100] = useState([]);
    const [fifty2Wedge75, setFifty2Wedge75] = useState([]);
    const [fifty2Wedge50, setFifty2Wedge50] = useState([]);
    const [fifty2Wedge25, setFifty2Wedge25] = useState([]);
    // 54
    const [fifty4Wedge100, setFifty4Wedge100] = useState([]);
    const [fifty4Wedge75, setFifty4Wedge75] = useState([]);
    const [fifty4Wedge50, setFifty4Wedge50] = useState([]);
    const [fifty4Wedge25, setFifty4Wedge25] = useState([]);
    // 56
    const [fifty6Wedge100, setFifty6Wedge100] = useState([]);
    const [fifty6Wedge75, setFifty6Wedge75] = useState([]);
    const [fifty6Wedge50, setFifty6Wedge50] = useState([]);
    const [fifty6Wedge25, setFifty6Wedge25] = useState([]);
    // 58
    const [fifty8Wedge100, setFifty8Wedge100] = useState([]);
    const [fifty8Wedge75, setFifty8Wedge75] = useState([]);
    const [fifty8Wedge50, setFifty8Wedge50] = useState([]);
    const [fifty8Wedge25, setFifty8Wedge25] = useState([]);
    // 60
    const [sixtyWedge100, setSixtyWedge100] = useState([]);
    const [sixtyWedge75, setSixtyWedge75] = useState([]);
    const [sixtyWedge50, setSixtyWedge50] = useState([]);
    const [sixtyWedge25, setSixtyWedge25] = useState([]);

    return {
        // Woods
        driver100,
        setDriver100,
        driver75,
        setDriver75,
        threeWood100,
        setThreeWood100,
        threeWood75,
        setThreeWood75,
        fiveWood100,
        setFiveWood100,
        fiveWood75,
        setFiveWood75,
        sevenWood100,
        setSevenWood100,
        sevenWood75,
        setSevenWood75,
        // Hybrids
        twoHybrid100,
        setTwoHybrid100,
        twoHybrid75,
        setTwoHybrid75,
        threeHybrid100,
        setThreeHybrid100,
        threeHybrid75,
        setThreeHybrid75,
        fourHybrid100,
        setFourHybrid100,
        fourHybrid75,
        setFourHybrid75,
        fiveHybrid100,
        setFiveHybrid100,
        fiveHybrid75,
        setFiveHybrid75,
        sixHybrid100,
        setSixHybrid100,
        sixHybrid75,
        setSixHybrid75,
        sevenHybrid100,
        setSevenHybrid100,
        sevenHybrid75,
        setSevenHybrid75,
        // Irons
        twoIron100,
        setTwoIron100,
        twoIron75,
        setTwoIron75,
        twoIron50,
        setTwoIron50,
        twoIron25,
        setTwoIron25,
        threeIron100,
        setThreeIron100,
        threeIron75,
        setThreeIron75,
        threeIron50,
        setThreeIron50,
        threeIron25,
        setThreeIron25,
        fourIron100,
        setFourIron100,
        fourIron75,
        setFourIron75,
        fourIron50,
        setFourIron50,
        fourIron25,
        setFourIron25,
        fiveIron100,
        setFiveIron100,
        fiveIron75,
        setFiveIron75,
        fiveIron50,
        setFiveIron50,
        fiveIron25,
        setFiveIron25,
        sixIron100,
        setSixIron100,
        sixIron75,
        setSixIron75,
        sixIron50,
        setSixIron50,
        sixIron25,
        setSixIron25,
        sevenIron100,
        setSevenIron100,
        sevenIron75,
        setSevenIron75,
        sevenIron50,
        setSevenIron50,
        sevenIron25,
        setSevenIron25,
        eightIron100,
        setEightIron100,
        eightIron75,
        setEightIron75,
        eightIron50,
        setEightIron50,
        eightIron25,
        setEightIron25,
        nineIron100,
        setNineIron100,
        nineIron75,
        setNineIron75,
        nineIron50,
        setNineIron50,
        nineIron25,
        setNineIron25,
        // Wedges
        pWedge100,
        setPWedge100,
        pWedge75,
        setPWedge75,
        pWedge50,
        setPWedge50,
        pWedge25,
        setPWedge25,
        forty8Wedge100,
        setForty8Wedge100,
        forty8Wedge75,
        setForty8Wedge75,
        forty8Wedge50,
        setForty8Wedge50,
        forty8Wedge25,
        setForty8Wedge25,
        fiftyWedge100,
        setFiftyWedge100,
        fiftyWedge75,
        setFiftyWedge75,
        fiftyWedge50,
        setFiftyWedge50,
        fiftyWedge25,
        setFiftyWedge25,
        fifty2Wedge100,
        setFifty2Wedge100,
        fifty2Wedge75,
        setFifty2Wedge75,
        fifty2Wedge50,
        setFifty2Wedge50,
        fifty2Wedge25,
        setFifty2Wedge25,
        fifty4Wedge100,
        setFifty4Wedge100,
        fifty4Wedge75,
        setFifty4Wedge75,
        fifty4Wedge50,
        setFifty4Wedge50,
        fifty4Wedge25,
        setFifty4Wedge25,
        fifty6Wedge100,
        setFifty6Wedge100,
        fifty6Wedge75,
        setFifty6Wedge75,
        fifty6Wedge50,
        setFifty6Wedge50,
        fifty6Wedge25,
        setFifty6Wedge25,
        fifty8Wedge100,
        setFifty8Wedge100,
        fifty8Wedge75,
        setFifty8Wedge75,
        fifty8Wedge50,
        setFifty8Wedge50,
        fifty8Wedge25,
        setFifty8Wedge25,
        sixtyWedge100,
        setSixtyWedge100,
        sixtyWedge75,
        setSixtyWedge75,
        sixtyWedge50,
        setSixtyWedge50,
        sixtyWedge25,
        setSixtyWedge25,
        // Averages

    };
};

export default useCustomState;
