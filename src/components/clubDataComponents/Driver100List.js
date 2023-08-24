import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { driver100, driver80 } from '../data/woodsData/WoodsStats';

// const driver100 = [301, 297, 288, 315, 303, 291, 299, 300, 303, 298];

const Driver100List = () => {
    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={driver100}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Driver100List;