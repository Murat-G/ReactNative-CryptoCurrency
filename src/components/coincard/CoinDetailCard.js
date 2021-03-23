import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { detailStyles } from './CoinDetailCardStyle';

const CoinDetailCard = ({ selectedCoin }) => {
    function formatDollar(number) {
        var p = number.toFixed(2).split('.');
        return '$' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1];
    }
    return (
        <SafeAreaView style={detailStyles.container}>

            <View style={detailStyles.header}>
                <Image source={{ uri: selectedCoin.image }} style={detailStyles.image} />
                <View style={detailStyles.coinName}>
                    <Text style={detailStyles.named}> {selectedCoin.name} </Text>
                    <Text style={detailStyles.symbol}> {selectedCoin.symbol.toUpperCase()} </Text>
                </View>
            </View>

            <View style={detailStyles.card}>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>Price:</Text>
                    <Text style={detailStyles.price}> {formatDollar(selectedCoin.current_price)} </Text>
                </View>

                {
                    selectedCoin.price_change_percentage_24h > 0
                        ?
                        <View style={detailStyles.info}>
                            <Text style={detailStyles.titleName}>24h:</Text>
                            <Text style={detailStyles.changePercent}>({(selectedCoin.price_change_percentage_24h).toFixed(2)}%)</Text>
                        </View>
                        :
                        <View style={detailStyles.info}>
                            <Text style={detailStyles.titleName}>24h:</Text>
                            <Text style={detailStyles.changePercentRed}>({(selectedCoin.price_change_percentage_24h).toFixed(2)}%)</Text>
                        </View>
                }


                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>Trading Volume:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.total_volume)}</Text>
                </View>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>Market Cap:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.market_cap)}</Text>
                </View>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>24h High:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.high_24h)}</Text>
                </View>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>24h Low:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.low_24h)}</Text>
                </View>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>All Time High:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.ath)}</Text>
                </View>

                <View style={detailStyles.info}>
                    <Text style={detailStyles.titleName}>All Time Low:</Text>
                    <Text style={detailStyles.coinVolume}>{formatDollar(selectedCoin.atl)}</Text>
                </View>

            </View>
        </SafeAreaView>

    );
};

export default CoinDetailCard;


