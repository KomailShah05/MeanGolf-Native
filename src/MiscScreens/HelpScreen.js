import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';

// Styles
import mainStyles from '../styles/mainStyles';

const HelpScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={mainStyles.container}>
			<ScrollView>
				<View style={[mainStyles.screenContainer, { flex: 1 }]}>
					<Text
						style={[
							mainStyles.header1,
							{ alignSelf: 'center', paddingBottom: 10, fontSize: 30 },
						]}
					>
						Help
					</Text>
					<View style={{ padding: 5 }}>
						<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
							Shot Types
						</Text>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Full Shot</Text>
							<Text style={mainStyles.smallText}>
								The full swing is the most common and powerful golf swing. It
								involves a complete rotation of the body and a wide swing arc to
								generate maximum club head speed and distance. In a full swing,
								the golfer takes the club back until it is parallel to the
								ground, then swings through and follows through with the club
								finishing high over the shoulder.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>3/4 Shot</Text>
							<Text style={mainStyles.smallText}>
								As the name suggests, the three-quarter swing falls between the
								half swing and full swing in terms of swing arc. The golfer
								takes the club back to about three-quarters of the full swing
								position and follows through accordingly. It offers a balance
								between power and control.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Half Shot</Text>
							<Text style={mainStyles.smallText}>
								The half swing is a shortened version of the full swing. It
								involves taking the club back only halfway or around waist
								height, and then swinging through to a similar position on the
								other side. The half swing is often used for more controlled
								shots or when less distance is needed.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Quarter Shot</Text>
							<Text style={mainStyles.smallText}>
								The quarter swing is the shortest version of the full swing. It
								involves taking the club back only to your knee or trailing
								thigh. The quarter swing is often used with wedges for short
								shots onto the green, or escaping from junk.
							</Text>
						</View>
					</View>
					<View style={{ padding: 5 }}>
						<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
							Calculations
						</Text>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>
								Avg. Distance (Weighted Average)
							</Text>
							<Text style={mainStyles.smallText}>
								The average distance is a weighted average of your 30 most
								recent shots. This means, the more recent the shot, the more
								impact it has while calculating the average. Weighting your most
								recent shots will provide you with a distance that is more
								aligned with how you are currently playing.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Total Shots</Text>
							<Text style={mainStyles.smallText}>
								Total shots counts all the shots that you have taken with that
								club for a certain shot type.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Historical Average</Text>
							<Text style={mainStyles.smallText}>
								This is the average of every shot that you have taken. It can be
								used to compare against the Weighted Average to see how your
								shot distance has changed over time.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Variance + (plus)</Text>
							<Text style={mainStyles.smallText}>
								The Variance + is how the difference between your furthest shot,
								and your weighted average. This is good to know so if there's
								trouble long, you'll know if it will come into play if you don't
								hit the perfect distance.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Variance - (minus)</Text>
							<Text style={mainStyles.smallText}>
								The Variance - is how the difference between your shortest shot,
								and your weighted average. This is helpful to know so if there's
								junk you need to clear before your target, you'll know if it
								will come into play with a certain club.
							</Text>
						</View>
					</View>
					<View style={{ padding: 5 }}>
						<Text style={[mainStyles.header3, { paddingBottom: 5 }]}>
							Elements
						</Text>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Slope</Text>
							<Text style={mainStyles.smallText}>
								All of your distances are calculated assuming a flat surface. It
								does not take into account your slope versus the target. If you
								target is playing 10 yards uphill, make sure to club up and vice
								versa.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Wind</Text>
							<Text style={mainStyles.smallText}>
								If there is wind that is hurting or helping, you'll need to
								mentally calculate how much it is impacting your distances. For
								example, if you have a 20mph wind in your face, you'll want to
								add distance to your target.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Altitude</Text>
							<Text style={mainStyles.smallText}>
								If you're home course is in South Carolina but you're on a trip
								to Colorado, the ball will fly much further than your average
								distances. Make sure to adjust accordingly.
							</Text>
						</View>
						<View style={{ paddingBottom: 5, paddingHorizontal: 10 }}>
							<Text style={mainStyles.header4}>Other Elements</Text>
							<Text style={mainStyles.smallText}>
								There are a lot of things that can impact your golf ball
								distance. If it's early in the morning versus in the afternoon,
								the ball won't always fly the distances that you've logged. You
								might need to make some adjustments while on the course.
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HelpScreen;
