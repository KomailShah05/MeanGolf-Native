import React, { useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import mainStyles from '../styles/mainStyles';

const ClubSelectorScreen = ({ navigation }) => {

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <View style={{ backgroundColor: '#eee', borderRadius: 5, margin: 10, }}>
            <TouchableOpacity
                // onPress={() => console.log("Driver Pressed")}
                // style={{ padding: 10, }}
                onPress={handlePress}
                style={{ padding: 15, borderRadius: 5, backgroundColor: isPressed ? '#aaa' : 'transparent', }}
            >
                <Text style={[mainStyles.header2, {}]}>{clubOption}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ClubSelectorScreen;