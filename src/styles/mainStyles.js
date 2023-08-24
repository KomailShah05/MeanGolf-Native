import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
	//colors
	mainBlue: {
		color: '#4D90FF',
	},
	mainRed: {
		color: '#EA594C',
	},
	mainYellow: {
		color: '#FDBA02',
	},
	mainGreen: {
		color: '#1EC36A',
	},
	mainDarkGray: {
		color: '#4D4D4D',
	},
	mainLightGray: {
		color: '#F5F5F5',
	},
	//main container
	container: {
		// backgroundColor: "pink",
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: 'white',
	},
	screenContainer: {
		// backgroundColor: "red",
		// flex: 1,
		alignItems: 'stretch',
		paddingHorizontal: 20,
		paddingVertical: 50,
	},
	// App Layout
	row: {
		// backgroundColor: "green",
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		paddingBottom: 5,
	},
	row2: {
		// backgroundColor: "green",
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap',
		paddingBottom: 5,
	},
	listRow: {
		// backgroundColor: 'white',
		backgroundColor: '#eee',
		padding: 10,
		marginBottom: 15,
		borderRadius: 5,
	},
	// Text Styling
	header1: {
		fontSize: 20,
		fontWeight: '800',
	},
	header2: {
		fontSize: 18,
		fontWeight: '800',
	},
	header3: {
		fontSize: 16,
		fontWeight: '700',
	},
	header4: {
		fontSize: 14,
		fontWeight: '600',
	},
	mdText: {
		fontSize: 12,
		color: '#707070',
	},
	smallText: {
		fontSize: 10,
		color: '#707070',
	},
	// Containers/Backgrounds
	inputBackground: {
		borderRadius: 5,
		// backgroundColor: "green",
		borderColor: '#707070',
		borderWidth: 1,
	},
	pillBackground100: {
		backgroundColor: '#707070',
		borderRadius: 10,
	},
	pillBackground75: {
		backgroundColor: '#808080',
		// backgroundColor: "#707070",
		borderRadius: 10,
		// opacity: .75,
	},
	pillBackground50: {
		backgroundColor: '#9D9D9D',
		// backgroundColor: "#707070",
		borderRadius: 10,
		// opacity: .5,
	},
	pillBackground25: {
		backgroundColor: '#B4B4B4',
		// backgroundColor: "#707070",
		borderRadius: 10,
		// opacity: .25,
	},
	searchbarInput: {
		padding: 10,
		backgroundColor: '#F5F5F5',
		borderRadius: 5,
	},
	searchBarText: {
		// color: '#707070',
		color: 'black',
		fontSize: 14,
	},
});

export default mainStyles;
