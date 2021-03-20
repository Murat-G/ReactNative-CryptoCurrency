import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { detailStyles } from './CoinDetailCardStyle';

const CoinDetailCard = ({ selectedCoin }) => {
    console.log(selectedCoin);
    return (
        <SafeAreaView style={detailStyles.container}>
            <View style={detailStyles.header}>
                <Image source={{ uri: selectedCoin.image }} style={detailStyles.image} />
                <View style={detailStyles.coinName}>
                    <Text style={detailStyles.named}> {selectedCoin.name} </Text>
                    <Text style={detailStyles.symbol}> {selectedCoin.symbol.toUpperCase()} </Text>
                    <Text style={detailStyles.coinVolume}> {selectedCoin.total_volume.toLocaleString()} </Text>
                    <Text style={detailStyles.coinVolume}> {selectedCoin.market_cap.toLocaleString()} </Text>
                </View>
            </View>
            <View style={detailStyles.card}>
                <Text style={detailStyles.price}> ${selectedCoin.current_price} </Text>
                {
                    selectedCoin.price_change_percentage_24h > 0
                    ?
                    <Text style={detailStyles.changePercent}>({(selectedCoin.price_change_percentage_24h).toFixed(2)}%)</Text>
                    :
                    <Text style={detailStyles.changePercentRed}>({(selectedCoin.price_change_percentage_24h).toFixed(2)}%)</Text>
                }
            </View>
        </SafeAreaView>

    );
};

export default CoinDetailCard;


