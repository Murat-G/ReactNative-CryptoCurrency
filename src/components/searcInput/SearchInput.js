import React from 'react';
import { TextInput, View} from 'react-native';
import { inputStyles } from './SearchInputStyle';


const SearchInput = (props) => {
    return (
        <View style={inputStyles.containerSearch}>
            <TextInput
                onChangeText={value => props.searchValue(value)}
                placeholder="Search a Coin Name"
                style={inputStyles.search}
            />
        </View>
    );
};

export default SearchInput;


