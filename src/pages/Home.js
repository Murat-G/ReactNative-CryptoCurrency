import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const responser = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCoins(responser.data);
  };

  const renderCoins = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
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
