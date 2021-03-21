import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView,View, FlatList,Text } from 'react-native';

const Exchange = (props) => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const responser = await axios.get('https://api.coingecko.com/api/v3/exchanges');
    setExchanges(responser.data);
  };

  const renderExchanges = ({ item }) => {
    return (
      <View>
          <Text> {item.name} </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={exchanges}
          renderItem={renderExchanges}
        />
      </View>
    </SafeAreaView>
  );
};

export default Exchange;
