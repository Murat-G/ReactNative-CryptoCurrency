import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView,View, FlatList } from 'react-native';
import Coin from '../components/coin/Coin.js';
import SearchInput from '../components/searcInput/SearchInput';

let originalList = [];

const Home = (props) => {
  const [coins, setCoins] = useState([]);
  // const [coinValue, setCoinValue] = useState('');

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const responser = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
    setCoins(responser.data);
    originalList = [...responser.data];
  };
  console.log(originalList);
  const renderCoins = ({ item }) => {
    return (
      <View>
        <Coin item={item}/>
      </View>
    );
  };

const filteredCoins = (value) => {
    const filterCoin = originalList.filter((i) => {
    const text = value.toLowerCase();
    const coin = i.name.toLowerCase();

      return coin.includes(text);
    });
    setCoins(filterCoin);
};

  return (
    <SafeAreaView>
      <View>
        <SearchInput searchValue={value=> filteredCoins(value)}  />
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={coins}
          renderItem={renderCoins}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
