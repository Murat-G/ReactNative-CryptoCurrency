import { StyleSheet,Dimensions } from 'react-native';

export const stylesCoin = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor:'#cecefe',
        alignItems:'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    named: {
        width: Dimensions.get('window').width * 0.25,
        color: 'white',
        alignItems:'center',
        fontSize: 14,
        marginRight: 15,
        fontWeight:'bold',
        padding:5,
    },
    symbol: {
        color: 'white',
        fontWeight:'bold',
        width: Dimensions.get('window').width * 0.20,
    },

    price: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 14,
    },
    image:{
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').height * 0.05,
        padding: 20,
        margin: 15,
    },
    changePercent: {
        fontSize: 10,
        color: 'green',
        marginLeft: 5,
    },
    changePercentRed:{
        fontSize: 10,
        color: 'red',
        marginLeft: 5,
    },
});
