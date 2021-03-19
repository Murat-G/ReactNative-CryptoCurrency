import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { stylesCoin } from './CoinStyle';


const Coin = (props) => {
    return (
        <View style={stylesCoin.container}>
            <Image source={{ uri: props.item.image }} style={stylesCoin.image} />
            <View style={stylesCoin.textContainer}>
                <View style={stylesCoin.containerLeft}>
                    <Text style={stylesCoin.named}> {props.item.name} </Text>
                    <Text style={stylesCoin.symbol}> {props.item.symbol.toUpperCase()} </Text>
                </View>
                <View style={stylesCoin.containerRight}>
                    <Text style={stylesCoin.price}> ${props.item.current_price}</Text>
                    {
                        props.item.price_change_percentage_24h > 0
                        ?
                        <Text style={stylesCoin.changePercent}>({(props.item.price_change_percentage_24h).toFixed(2)}%)</Text>
                        :
                        <Text style={stylesCoin.changePercentRed}>({(props.item.price_change_percentage_24h).toFixed(2)}%)</Text>
                    }
                </View>
            </View>
             <TouchableOpacity onPress ={() => props.navigation.navigate('DetailCoinsPage')}>
                 <Text> &gt; </Text>
             </TouchableOpacity>
        </View>
    );
};

export default Coin;



