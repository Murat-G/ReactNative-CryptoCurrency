import { StyleSheet, Dimensions } from 'react-native';


export const inputStyles = StyleSheet.create({
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
        backgroundColor: '#efefef',
    },
});