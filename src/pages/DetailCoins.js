import React from 'react';
import { View } from 'react-native';
import CoinDetailCard  from '../components/coincard/CoinDetailCard';

const DetailCoins = (props) => {

    const {selectedCoin} = props.route.params;

    return (
        <View>
            <CoinDetailCard selectedCoin={selectedCoin}/>
        </View>
    );
};

export default DetailCoins;
