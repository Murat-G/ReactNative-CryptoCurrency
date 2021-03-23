import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { stylesCoin } from './CoinStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Coin = ({ item, onClicked }) => {
    function formatDollar(number) {
        var p = number.toFixed(2).split('.');
        return '$' + p[0].split('').reverse().reduce(function(acc, num, i, orig) {
            return  num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1];
    }
    return (
        <View style={stylesCoin.container}>
            <Image source={{ uri: item.image }} style={stylesCoin.image} />
            <View style={stylesCoin.textContainer}>
                <View style={stylesCoin.containerLeft}>
                    <Text style={stylesCoin.named}> {item.name} </Text>
                    <Text style={stylesCoin.symbol}> {item.symbol.toUpperCase()} </Text>
                </View>
                <View style={stylesCoin.containerRight}>
                    <View style={stylesCoin.textInfo}>
                        <Text> Price:</Text>
                        <Text style={stylesCoin.price}> {formatDollar(item.current_price)} </Text>
                    </View>
                    <View style={stylesCoin.textInfo}>
                        <Text> 24h </Text>
                        {
                            item.price_change_percentage_24h > 0
                                ?
                                <Text style={stylesCoin.changePercent}>({(item.price_change_percentage_24h).toFixed(2)}%)</Text>
                                :
                                <Text style={stylesCoin.changePercentRed}>({(item.price_change_percentage_24h).toFixed(2)}%)</Text>
                        }
                    </View>
                </View>
                <TouchableOpacity onPress={onClicked} style={stylesCoin.iconContainer}>
                    <Icon name="arrow-right-drop-circle" size={30} color="#69007f" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Coin;



