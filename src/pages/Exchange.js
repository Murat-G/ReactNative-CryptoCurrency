import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView,View, FlatList} from 'react-native';
import ExchangeItem from '../components/exchange/ExchangeItem';
import SearchInput from '../components/searcInput/SearchInput';

let originalList = [];

const Exchange = (props) => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    const responser = await axios.get('https://api.coingecko.com/api/v3/exchanges');
    setExchanges(responser.data);
    originalList = [...responser.data];
  };

  const renderExchanges = ({ item }) => {
    return (
      <View>
        <ExchangeItem item={item} />
      </View>
    );
  };

const filteredExchanges = (value) => {
    const filterItem = originalList.filter((i) => {
    const text = value.toLowerCase();
    const platform = i.name.toLowerCase();

      return platform.includes(text);
    });
    setExchanges(filterItem);
};

  return (
    <SafeAreaView>
      <View>
        <SearchInput searchValue={value=> filteredExchanges(value)} holder="Search a Exchange Platform"/>
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
