import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { detailStyles } from './CoinDetailCardStyle';

const CoinDetailCard = ({ selectedCoin }) => {
    function formatDollar(number) {
        var p = number.toFixed(2).split('.');
        return '$' + p[0].split('').reverse().reduce(function(acc, num, i, orig) {
            return  num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1];
    }
    return (
        <SafeAreaView style={detailStyles.container}>
            <View style={detailStyles.header}>
                <Image source={{ uri: selectedCoin.image }} style={detailStyles.image} />
                <View style={detailStyles.coinName}>
                    <Text style={detailStyles.named}> {selectedCoin.name} </Text>
                    <Text style={detailStyles.symbol}> {selectedCoin.symbol.toUpperCase()} </Text>
                    <Text style={detailStyles.coinVolume}> {formatDollar(selectedCoin.total_volume)} </Text>
                    <Text style={detailStyles.coinVolume}> {formatDollar(selectedCoin.market_cap)} </Text>
                </View>
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


