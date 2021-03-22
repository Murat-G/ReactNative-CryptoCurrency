import React from 'react';
import { TextInput, View} from 'react-native';
import { inputStyles } from './SearchInputStyle';


const SearchInput = (props) => {
    return (
        <View style={inputStyles.containerSearch}>
            <TextInput
                onChangeText={value => props.searchValue(value)}
                placeholder={props.holder}
                style={inputStyles.search}
            />
        </View>
    );
};

export default SearchInput;


