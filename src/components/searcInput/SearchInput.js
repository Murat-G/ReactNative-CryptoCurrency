import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';



const SearchInput = (props) => {
    return (
        <View style={styles.containerSearch}>
            <TextInput
                onChangeText={value => props.searchValue(value)}
                placeholder="Search a Coin"
                style={styles.search}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    search: {
        width: Dimensions.get('window').width * 0.85,
        padding: 10,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 20,
        alignSelf: 'center',
    },
    containerSearch: {
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#A9508B',
    },
});
