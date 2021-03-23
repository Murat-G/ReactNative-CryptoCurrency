import React from 'react';
import { Text, Image, View, SafeAreaView } from 'react-native';
import { stylesPlatform } from './ExchangeItemStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ExchangeItem = ({ item }) => {

    function formatDollar(number) {
        var p = number.toFixed(2).split('.');
        return '$' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') + '.' + p[1];
    }
    return (
        <SafeAreaView style={stylesPlatform.container}>

            <View style={stylesPlatform.topContainer}>
                <Image source={{ uri: item.image }} style={stylesPlatform.image} />
                <View style={stylesPlatform.textContainer}>
                    <View style={stylesPlatform.containerLeft}>
                        <View>
                            <Text style={stylesPlatform.named}> {item.name} </Text>
                        </View>

                        <View style={stylesPlatform.scoreContainer}>
                            <Text style={stylesPlatform.score}>{item.trust_score}</Text>
                            <Icon name="star" size={17} color="#00B300" />
                        </View>
                    </View>
                    <View style={stylesPlatform.containerRight}>
                        <Text style={stylesPlatform.price}> Market Cap: {formatDollar(item.trade_volume_24h_btc)}</Text>
                    </View>
                </View>
            </View>

            <View style={stylesPlatform.bottomContainer}>
                <Text style={stylesPlatform.url}>{item.url}</Text>
            </View>

        </SafeAreaView>
    );
};

export default ExchangeItem;
