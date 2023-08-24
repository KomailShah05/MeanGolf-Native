// Code from the first data list (render list) on the first
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity onPress={() => console.log(`Pressed ${item.club}`)}>
//             <View style={mainStyles.listRow}>
//                 <View style={mainStyles.row}>
//                     {/* Club Row */}
//                     <View style={{}}>
//                         <Text style={[mainStyles.header2, { color: "blue" }]}>{item.club}</Text>
//                     </View>
//                     {/* 100% yardage */}
//                     <View style={{ alignItems: "center", }}>
//                         <View style={[mainStyles.pillBackground100, {}]}>
//                             {/* Swing Percent */}
//                             <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>100%</Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', paddingTop: 5, }}>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, borderRightWidth: 1, borderRightColor: "#707070" }}>
//                                 <Text style={mainStyles.smallText}>yards</Text>
//                                 {/* Shot distance */}
//                                 <Text style={mainStyles.header2}>{item.power}</Text>
//                             </View>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
//                                 <Text style={mainStyles.smallText}>+/-</Text>
//                                 {/* Shot standard deviation */}
//                                 <Text style={mainStyles.header2}>{driver100Deviation}</Text>
//                             </View>
//                         </View>
//                     </View>
//                     {/* 75% yardage */}
//                     <View style={{ alignItems: "center", }}>
//                         <View style={[mainStyles.pillBackground75, {}]}>
//                             {/* Swing Percent */}
//                             <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>75%</Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', paddingTop: 5, }}>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, borderRightWidth: 1, borderRightColor: "#707070" }}>
//                                 <Text style={mainStyles.smallText}>yards</Text>
//                                 {/* Shot distance */}
//                                 <Text style={mainStyles.header2}>{item.power}</Text>
//                             </View>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
//                                 <Text style={mainStyles.smallText}>+/-</Text>
//                                 {/* Shot standard deviation */}
//                                 <Text style={mainStyles.header2}>{driver100Deviation}</Text>
//                             </View>
//                         </View>
//                     </View>
//                     {/* 50% yardage */}
//                     <View style={{ alignItems: "center", }}>
//                         <View style={[mainStyles.pillBackground50, {}]}>
//                             {/* Swing Percent */}
//                             <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>50%</Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', paddingTop: 5, }}>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, borderRightWidth: 1, borderRightColor: "#707070" }}>
//                                 <Text style={mainStyles.smallText}>yards</Text>
//                                 {/* Shot distance */}
//                                 <Text style={mainStyles.header2}>{item.power}</Text>
//                             </View>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
//                                 <Text style={mainStyles.smallText}>+/-</Text>
//                                 {/* Shot standard deviation */}
//                                 <Text style={mainStyles.header2}>{driver100Deviation}</Text>
//                             </View>
//                         </View>
//                     </View>
//                     {/* 25% yardage */}
//                     <View style={{ alignItems: "center", }}>
//                         <View style={[mainStyles.pillBackground25, {}]}>
//                             {/* Swing Percent */}
//                             <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>25%</Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', paddingTop: 5, }}>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, borderRightWidth: 1, borderRightColor: "#707070" }}>
//                                 <Text style={mainStyles.smallText}>yards</Text>
//                                 {/* Shot distance */}
//                                 <Text style={mainStyles.header2}>{item.power}</Text>
//                             </View>
//                             <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
//                                 <Text style={mainStyles.smallText}>+/-</Text>
//                                 {/* Shot standard deviation */}
//                                 <Text style={mainStyles.header2}>{driver100Deviation}</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// };

driver100,
    driver75,
    threeWood100,
    threeWood75,
    fiveWood100,
    fiveWood75,
    sevenWood100,
    sevenWood75,
    twoHybrid100,
    twoHybrid75,
    threeHybrid100,
    threeHybrid75,
    fourHybrid100,
    fourHybrid75,
    fiveHybrid100,
    fiveHybrid75,
    sixHybrid100,
    sixHybrid75,
    sevenHybrid100,
    sevenHybrid75,
    twoIron100,
    twoIron75,
    twoIron50,
    twoIron25,
    threeIron100,
    threeIron75,
    threeIron50,
    threeIron25,
    fourIron100,
    fourIron75,
    fourIron50,
    fourIron25,
    fiveIron100,
    fiveIron75,
    fiveIron50,
    fiveIron25,
    sixIron100,
    sixIron75,
    sixIron50,
    sixIron25,
    sevenIron75,
    sevenIron50,
    sevenIron25,
    eightIron100,
    eightIron75,
    eightIron50,
    eightIron25,
    nineIron100,
    nineIron75,
    nineIron50,
    nineIron25,
    pWedge100,
    pWedge75,
    pWedge50,
    pWedge25,
    forty8Wedge100,
    forty8Wedge75,
    forty8Wedge50,
    forty8Wedge25,
    fiftyWedge100,
    fiftyWedge75,
    fiftyWedge50,
    fiftyWedge25,
    fifty2Wedge100,
    fifty2Wedge75,
    fifty2Wedge50,
    fifty2Wedge25,
    fifty4Wedge100,
    fifty4Wedge75,
    fifty4Wedge50,
    fifty4Wedge25,
    fifty6Wedge100,
    fifty6Wedge75,
    fifty6Wedge50,
    fifty6Wedge25,
    fifty8Wedge100,
    fifty8Wedge75,
    fifty8Wedge50,
    fifty8Wedge25,
    sixtyWedge100,
    sixtyWedge75,
    sixtyWedge50,
    sixtyWedge25

// import {
//     driver100,
//     driver75,
//     threeWood100,
//     threeWood75,
//     fiveWood100,
//     fiveWood75,
//     sevenWood100,
//     sevenWood75,
//     twoHybrid100,
//     twoHybrid75,
//     threeHybrid100,
//     threeHybrid75,
//     fourHybrid100,
//     fourHybrid75,
//     fiveHybrid100,
//     fiveHybrid75,
//     sixHybrid100,
//     sixHybrid75,
//     sevenHybrid100,
//     sevenHybrid75,
//     twoIron100,
//     twoIron75,
//     twoIron50,
//     twoIron25,
//     threeIron100,
//     threeIron75,
//     threeIron50,
//     threeIron25,
//     fourIron100,
//     fourIron75,
//     fourIron50,
//     fourIron25,
//     fiveIron100,
//     fiveIron75,
//     fiveIron50,
//     fiveIron25,
//     sixIron100,
//     sixIron75,
//     sixIron50,
//     sixIron25,
//     sevenIron100,
//     sevenIron75,
//     sevenIron50,
//     sevenIron25,
//     eightIron100,
//     eightIron75,
//     eightIron50,
//     eightIron25,
//     nineIron100,
//     nineIron75,
//     nineIron50,
//     nineIron25,
//     pWedge100,
//     pWedge75,
//     pWedge50,
//     pWedge25,
//     forty8Wedge100,
//     forty8Wedge75,
//     forty8Wedge50,
//     forty8Wedge25,
//     fiftyWedge100,
//     fiftyWedge75,
//     fiftyWedge50,
//     fiftyWedge25,
//     fifty2Wedge100,
//     fifty2Wedge75,
//     fifty2Wedge50,
//     fifty2Wedge25,
//     fifty4Wedge100,
//     fifty4Wedge75,
//     fifty4Wedge50,
//     fifty4Wedge25,
//     fifty6Wedge100,
//     fifty6Wedge75,
//     fifty6Wedge50,
//     fifty6Wedge25,
//     fifty8Wedge100,
//     fifty8Wedge75,
//     fifty8Wedge50,
//     fifty8Wedge25,
//     sixtyWedge100,
//     sixtyWedge75,
//     sixtyWedge50,
//     sixtyWedge25,
//     setDriver100,
//     setDriver75,
//     setThreeWood100,
//     setThreeWood75,
//     setFiveWood100,
//     setFiveWood75,
//     setSevenWood100,
//     setSevenWood75,
//     setTwoHybrid100,
//     setTwoHybrid75,
//     setThreeHybrid100,
//     setThreeHybrid75,
//     setFourHybrid100,
//     setFourHybrid75,
//     setFiveHybrid100,
//     setFiveHybrid75,
//     setSixHybrid100,
//     setSixHybrid75,
//     setSevenHybrid100,
//     setSevenHybrid75,
//     setTwoIron100,
//     setTwoIron75,
//     setTwoIron50,
//     setTwoIron25,
//     setThreeIron100,
//     setThreeIron75,
//     setThreeIron50,
//     setThreeIron25,
//     setFourIron100,
//     setFourIron75,
//     setFourIron50,
//     setFourIron25,
//     setFiveIron100,
//     setFiveIron75,
//     setFiveIron50,
//     setFiveIron25,
//     setSixIron100,
//     setSixIron75,
//     setSixIron50,
//     setSixIron25,
//     setSevenIron100,
//     setSevenIron75,
//     setSevenIron50,
//     setSevenIron25,
//     setEightIron100,
//     setEightIron75,
//     setEightIron50,
//     setEightIron25,
//     setNineIron100,
//     setNineIron75,
//     setNineIron50,
//     setNineIron25,
//     setPWedge100,
//     setPWedge75,
//     setPWedge50,
//     setPWedge25,
//     setForty8Wedge100,
//     setForty8Wedge75,
//     setForty8Wedge50,
//     setForty8Wedge25,
//     setFiftyWedge100,
//     setFiftyWedge75,
//     setFiftyWedge50,
//     setFiftyWedge25,
//     setFifty2Wedge100,
//     setFifty2Wedge75,
//     setFifty2Wedge50,
//     setFifty2Wedge25,
//     setFifty4Wedge100,
//     setFifty4Wedge75,
//     setFifty4Wedge50,
//     setFifty4Wedge25,
//     setFifty6Wedge100,
//     setFifty6Wedge75,
//     setFifty6Wedge50,
//     setFifty6Wedge25,
//     setFifty8Wedge100,
//     setFifty8Wedge75,
//     setFifty8Wedge50,
//     setFifty8Wedge25,
//     setSixtyWedge100,
//     setSixtyWedge75,
//     setSixtyWedge50,
//     setSixtyWedge25
// } from './src/data/shotData/MyShots';
// } from './src/data/clubArray/clubArrays';

// Old Shot arrays taken from the MyBAg Props
// Old Shot Arrays
driver100 = { driver100 }
driver75 = { driver75 }
threeWood100 = { threeWood100 }
threeWood75 = { threeWood75 }
fiveWood100 = { fiveWood100 }
fiveWood75 = { fiveWood75 }
sevenWood100 = { sevenWood100 }
sevenWood75 = { sevenWood75 }
twoHybrid100 = { twoHybrid100 }
twoHybrid75 = { twoHybrid75 }
// twoHybrid50={twoHybrid50}
threeHybrid100 = { threeHybrid100 }
threeHybrid75 = { threeHybrid75 }
// threeHybrid50={threeHybrid50}
fourHybrid100 = { fourHybrid100 }
fourHybrid75 = { fourHybrid75 }
// fourHybrid50={fourHybrid50}
fiveHybrid100 = { fiveHybrid100 }
fiveHybrid75 = { fiveHybrid75 }
// fiveHybrid50={fiveHybrid50}
sixHybrid100 = { sixHybrid100 }
sixHybrid75 = { sixHybrid75 }
// sixHybrid50={sixHybrid50}
sevenHybrid100 = { sevenHybrid100 }
sevenHybrid75 = { sevenHybrid75 }
// sevenHybrid50={sevenHybrid50}
// Iron
twoIron100 = { twoIron100 }
threeIron100 = { threeIron100 }
fourIron100 = { fourIron100 }
fiveIron100 = { fiveIron100 }
sixIron100 = { sixIron100 }
sevenIron100 = { sevenIron100 }
eightIron100 = { eightIron100 }
nineIron100 = { nineIron100 }
twoIron75 = { twoIron75 }
threeIron75 = { threeIron75 }
fourIron75 = { fourIron75 }
fiveIron75 = { fiveIron75 }
sixIron75 = { sixIron75 }
sevenIron75 = { sevenIron75 }
eightIron75 = { eightIron75 }
nineIron75 = { nineIron75 }
twoIron50 = { twoIron50 }
threeIron50 = { threeIron50 }
fourIron50 = { fourIron50 }
fiveIron50 = { fiveIron50 }
sixIron50 = { sixIron50 }
sevenIron50 = { sevenIron50 }
eightIron50 = { eightIron50 }
nineIron50 = { nineIron50 }
// Wedges
pWedge100 = { pWedge100 }
pWedge75 = { pWedge75 }
pWedge50 = { pWedge50 }
pWedge25 = { pWedge25 }
forty8Wedge100 = { forty8Wedge100 }
forty8Wedge75 = { forty8Wedge75 }
forty8Wedge50 = { forty8Wedge50 }
forty8Wedge25 = { forty8Wedge25 }
fiftyWedge100 = { fiftyWedge100 }
fiftyWedge75 = { fiftyWedge75 }
fiftyWedge50 = { fiftyWedge50 }
fiftyWedge25 = { fiftyWedge25 }
fifty2Wedge100 = { fifty2Wedge100 }
fifty2Wedge75 = { fifty2Wedge75 }
fifty2Wedge50 = { fifty2Wedge50 }
fifty2Wedge25 = { fifty2Wedge25 }
fifty4Wedge100 = { fifty4Wedge100 }
fifty4Wedge75 = { fifty4Wedge75 }
fifty4Wedge50 = { fifty4Wedge50 }
fifty4Wedge25 = { fifty4Wedge25 }
fifty6Wedge100 = { fifty6Wedge100 }
fifty6Wedge75 = { fifty6Wedge75 }
fifty6Wedge50 = { fifty6Wedge50 }
fifty6Wedge25 = { fifty6Wedge25 }
fifty8Wedge100 = { fifty8Wedge100 }
fifty8Wedge75 = { fifty8Wedge75 }
fifty8Wedge50 = { fifty8Wedge50 }
fifty8Wedge25 = { fifty8Wedge25 }
sixtyWedge100 = { sixtyWedge100 }
sixtyWedge75 = { sixtyWedge75 }
sixtyWedge50 = { sixtyWedge50 }
sixtyWedge25 = { sixtyWedge25 }

// Taken from MyStats Props Screen
driver100 = { driver100 }
driver75 = { driver75 }
threeWood100 = { threeWood100 }
threeWood75 = { threeWood75 }
fiveWood100 = { fiveWood100 }
fiveWood75 = { fiveWood75 }
sevenWood100 = { sevenWood100 }
sevenWood75 = { sevenWood75 }
twoHybrid100 = { twoHybrid100 }
twoHybrid75 = { twoHybrid75 }
threeHybrid100 = { threeHybrid100 }
threeHybrid75 = { threeHybrid75 }
fourHybrid100 = { fourHybrid100 }
fourHybrid75 = { fourHybrid75 }
fiveHybrid100 = { fiveHybrid100 }
fiveHybrid75 = { fiveHybrid75 }
sixHybrid100 = { sixHybrid100 }
sixHybrid75 = { sixHybrid75 }
sevenHybrid100 = { sevenHybrid100 }
sevenHybrid75 = { sevenHybrid75 }
twoIron100 = { twoIron100 }
twoIron75 = { twoIron75 }
twoIron50 = { twoIron50 }
twoIron25 = { twoIron25 }
threeIron100 = { threeIron100 }
threeIron75 = { threeIron75 }
threeIron50 = { threeIron50 }
threeIron25 = { threeIron25 }
fourIron100 = { fourIron100 }
fourIron75 = { fourIron75 }
fourIron50 = { fourIron50 }
fourIron25 = { fourIron25 }
fiveIron100 = { fiveIron100 }
fiveIron75 = { fiveIron75 }
fiveIron50 = { fiveIron50 }
fiveIron25 = { fiveIron25 }
sixIron100 = { sixIron100 }
sixIron75 = { sixIron75 }
sixIron50 = { sixIron50 }
sixIron25 = { sixIron25 }
sevenIron100 = { sevenIron100 }
sevenIron75 = { sevenIron75 }
sevenIron50 = { sevenIron50 }
sevenIron25 = { sevenIron25 }
eightIron100 = { eightIron100 }
eightIron75 = { eightIron75 }
eightIron50 = { eightIron50 }
eightIron25 = { eightIron25 }
nineIron100 = { nineIron100 }
nineIron75 = { nineIron75 }
nineIron50 = { nineIron50 }
nineIron25 = { nineIron25 }
pWedge100 = { pWedge100 }
pWedge75 = { pWedge75 }
pWedge50 = { pWedge50 }
pWedge25 = { pWedge25 }
forty8Wedge100 = { forty8Wedge100 }
forty8Wedge75 = { forty8Wedge75 }
forty8Wedge50 = { forty8Wedge50 }
forty8Wedge25 = { forty8Wedge25 }
fiftyWedge100 = { fiftyWedge100 }
fiftyWedge75 = { fiftyWedge75 }
fiftyWedge50 = { fiftyWedge50 }
fiftyWedge25 = { fiftyWedge25 }
fifty2Wedge100 = { fifty2Wedge100 }
fifty2Wedge75 = { fifty2Wedge75 }
fifty2Wedge50 = { fifty2Wedge50 }
fifty2Wedge25 = { fifty2Wedge25 }
fifty4Wedge100 = { fifty4Wedge100 }
fifty4Wedge75 = { fifty4Wedge75 }
fifty4Wedge50 = { fifty4Wedge50 }
fifty4Wedge25 = { fifty4Wedge25 }
fifty6Wedge100 = { fifty6Wedge100 }
fifty6Wedge75 = { fifty6Wedge75 }
fifty6Wedge50 = { fifty6Wedge50 }
fifty6Wedge25 = { fifty6Wedge25 }
fifty8Wedge100 = { fifty8Wedge100 }
fifty8Wedge75 = { fifty8Wedge75 }
fifty8Wedge50 = { fifty8Wedge50 }
fifty8Wedge25 = { fifty8Wedge25 }
sixtyWedge100 = { sixtyWedge100 }
sixtyWedge75 = { sixtyWedge75 }
sixtyWedge50 = { sixtyWedge50 }
sixtyWedge25 = { sixtyWedge25 }
setDriver100 = { setDriver100 }
setDriver75 = { setDriver75 }
setThreeWood100 = { setThreeWood100 }
setThreeWood75 = { setThreeWood75 }
setFiveWood100 = { setFiveWood100 }
setFiveWood75 = { setFiveWood75 }
setSevenWood100 = { setSevenWood100 }
setSevenWood75 = { setSevenWood75 }
setTwoHybrid100 = { setTwoHybrid100 }
setTwoHybrid75 = { setTwoHybrid75 }
setThreeHybrid100 = { setThreeHybrid100 }
setThreeHybrid75 = { setThreeHybrid75 }
setFourHybrid100 = { setFourHybrid100 }
setFourHybrid75 = { setFourHybrid75 }
setFiveHybrid100 = { setFiveHybrid100 }
setFiveHybrid75 = { setFiveHybrid75 }
setSixHybrid100 = { setSixHybrid100 }
setSixHybrid75 = { setSixHybrid75 }
setSevenHybrid100 = { setSevenHybrid100 }
setSevenHybrid75 = { setSevenHybrid75 }
setTwoIron100 = { setTwoIron100 }
setTwoIron75 = { setTwoIron75 }
setTwoIron50 = { setTwoIron50 }
setTwoIron25 = { setTwoIron25 }
setThreeIron100 = { setThreeIron100 }
setThreeIron75 = { setThreeIron75 }
setThreeIron50 = { setThreeIron50 }
setThreeIron25 = { setThreeIron25 }
setFourIron100 = { setFourIron100 }
setFourIron75 = { setFourIron75 }
setFourIron50 = { setFourIron50 }
setFourIron25 = { setFourIron25 }
setFiveIron100 = { setFiveIron100 }
setFiveIron75 = { setFiveIron75 }
setFiveIron50 = { setFiveIron50 }
setFiveIron25 = { setFiveIron25 }
setSixIron100 = { setSixIron100 }
setSixIron75 = { setSixIron75 }
setSixIron50 = { setSixIron50 }
setSixIron25 = { setSixIron25 }
setSevenIron100 = { setSevenIron100 }
setSevenIron75 = { setSevenIron75 }
setSevenIron50 = { setSevenIron50 }
setSevenIron25 = { setSevenIron25 }
setEightIron100 = { setEightIron100 }
setEightIron75 = { setEightIron75 }
setEightIron50 = { setEightIron50 }
setEightIron25 = { setEightIron25 }
setNineIron100 = { setNineIron100 }
setNineIron75 = { setNineIron75 }
setNineIron50 = { setNineIron50 }
setNineIron25 = { setNineIron25 }
setPWedge100 = { setPWedge100 }
setPWedge75 = { setPWedge75 }
setPWedge50 = { setPWedge50 }
setPWedge25 = { setPWedge25 }
setForty8Wedge100 = { setForty8Wedge100 }
setForty8Wedge75 = { setForty8Wedge75 }
setForty8Wedge50 = { setForty8Wedge50 }
setForty8Wedge25 = { setForty8Wedge25 }
setFiftyWedge100 = { setFiftyWedge100 }
setFiftyWedge75 = { setFiftyWedge75 }
setFiftyWedge50 = { setFiftyWedge50 }
setFiftyWedge25 = { setFiftyWedge25 }
setFifty2Wedge100 = { setFifty2Wedge100 }
setFifty2Wedge75 = { setFifty2Wedge75 }
setFifty2Wedge50 = { setFifty2Wedge50 }
setFifty2Wedge25 = { setFifty2Wedge25 }
setFifty4Wedge100 = { setFifty4Wedge100 }
setFifty4Wedge75 = { setFifty4Wedge75 }
setFifty4Wedge50 = { setFifty4Wedge50 }
setFifty4Wedge25 = { setFifty4Wedge25 }
setFifty6Wedge100 = { setFifty6Wedge100 }
setFifty6Wedge75 = { setFifty6Wedge75 }
setFifty6Wedge50 = { setFifty6Wedge50 }
setFifty6Wedge25 = { setFifty6Wedge25 }
setFifty8Wedge100 = { setFifty8Wedge100 }
setFifty8Wedge75 = { setFifty8Wedge75 }
setFifty8Wedge50 = { setFifty8Wedge50 }
setFifty8Wedge25 = { setFifty8Wedge25 }
setSixtyWedge100 = { setSixtyWedge100 }
setSixtyWedge75 = { setSixtyWedge75 }
setSixtyWedge50 = { setSixtyWedge50 }
setSixtyWedge25 = { setSixtyWedge25 }

// taken from import to Stats.js
// Shot Arrays
driver100, driver75, threeWood100, threeWood75, fiveWood100, fiveWood75, sevenWood100, sevenWood75,
    twoHybrid100, twoHybrid75, threeHybrid100, threeHybrid75, fourHybrid100, fourHybrid75, fiveHybrid100, fiveHybrid75, sixHybrid100, sixHybrid75, sevenHybrid100, sevenHybrid75,
    twoIron100, twoIron75, twoIron50, twoIron25, threeIron100, threeIron75, threeIron50, threeIron25, fourIron100, fourIron75, fourIron50, fourIron25,
    fiveIron100, fiveIron75, fiveIron50, fiveIron25, sixIron100, sixIron75, sixIron50, sixIron25,
    sevenIron100, sevenIron75, sevenIron50, sevenIron25, eightIron100, eightIron75, eightIron50, eightIron25,
    nineIron100, nineIron75, nineIron50, nineIron25, pWedge100, pWedge75, pWedge50, pWedge25,
    forty8Wedge100, forty8Wedge75, forty8Wedge50, forty8Wedge25, fiftyWedge100, fiftyWedge75, fiftyWedge50, fiftyWedge25, fifty2Wedge100, fifty2Wedge75, fifty2Wedge50,
    fifty2Wedge25, fifty4Wedge100, fifty4Wedge75, fifty4Wedge50, fifty4Wedge25, fifty6Wedge100, fifty6Wedge75, fifty6Wedge50, fifty6Wedge25,
    fifty8Wedge100, fifty8Wedge75, fifty8Wedge50, fifty8Wedge25, sixtyWedge100, sixtyWedge75, sixtyWedge50, sixtyWedge25,
    // setClubs
    setDriver100, setDriver75, setThreeWood100, setThreeWood75, setFiveWood100, setFiveWood75, setSevenWood100, setSevenWood75,
    setTwoHybrid100, setTwoHybrid75, setThreeHybrid100, setThreeHybrid75, setFourHybrid100, setFourHybrid75, setFiveHybrid100, setFiveHybrid75, setSixHybrid100,
    setSixHybrid75, setSevenHybrid100, setSevenHybrid75, setTwoIron100, setTwoIron75, setTwoIron50, setTwoIron25,
    setThreeIron100, setThreeIron75, setThreeIron50, setThreeIron25,
    setFourIron100, setFourIron75, setFourIron50, setFourIron25,
    setFiveIron100, setFiveIron75, setFiveIron50, setFiveIron25,
    setSixIron100, setSixIron75, setSixIron50, setSixIron25,
    setSevenIron100, setSevenIron75, setSevenIron50, setSevenIron25,
    setEightIron100, setEightIron75, setEightIron50, setEightIron25,
    setNineIron100, setNineIron75, setNineIron50, setNineIron25,
    setPWedge100, setPWedge75, setPWedge50, setPWedge25,
    setForty8Wedge100, setForty8Wedge75, setForty8Wedge50, setForty8Wedge25,
    setFiftyWedge100, setFiftyWedge75, setFiftyWedge50, setFiftyWedge25,
    setFifty2Wedge100, setFifty2Wedge75, setFifty2Wedge50, setFifty2Wedge25,
    setFifty4Wedge100, setFifty4Wedge75, setFifty4Wedge50, setFifty4Wedge25,
    setFifty6Wedge100, setFifty6Wedge75, setFifty6Wedge50, setFifty6Wedge25,
    setFifty8Wedge100, setFifty8Wedge75, setFifty8Wedge50, setFifty8Wedge25,
    setSixtyWedge100, setSixtyWedge75, setSixtyWedge50, setSixtyWedge25