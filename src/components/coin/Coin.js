import React from 'react';
import { Text,TouchableOpacity,Image,View} from 'react-native';
import {stylesCoin} from './CoinStyle';


const Coin = ({item}) => {
        return (
            <TouchableOpacity style={stylesCoin.container}>
                <Image source = {{ uri: item.image }} style={stylesCoin.image}/>
                <View style={stylesCoin.textContainer}>
                    <Text style={stylesCoin.named}> {item.name} </Text>
                    <Text style={stylesCoin.symbol}> {item.symbol.toUpperCase()} </Text>
                    <Text style={stylesCoin.price}> ${item.current_price}</Text>
                    {item.price_change_percentage_24h > 0 ?
                    <Text style={stylesCoin.changePercent}>({(item.price_change_percentage_24h).toFixed(2)}%)</Text>
                     :
                    <Text style={stylesCoin.changePercentRed}>({(item.price_change_percentage_24h).toFixed(2)}%)</Text>
                    }
                </View>
            </TouchableOpacity>
       );
};

export default Coin;



