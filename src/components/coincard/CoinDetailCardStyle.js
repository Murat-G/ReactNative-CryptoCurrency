import { StyleSheet, Dimensions } from 'react-native';

export const detailStyles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 15,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    coinName: {
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        display: 'flex',
        width: Dimensions.get('window').width * 0.80,
        height: Dimensions.get('window').height * 0.50,
        marginTop: 25,
        // backgroundColor:'#37474f',
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.1,
        padding: 10,
        margin: 15,
    },
    named: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    symbol: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    titleName: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        width: 130,
    },
    changePercent: {
        fontSize: 16,
        color: 'green',
        // marginLeft: 5,
        fontWeight: 'bold',
    },
    changePercentRed: {
        fontSize: 16,
        color: 'red',
        // marginLeft: 5,
        fontWeight: 'bold',
    },
    coinVolume: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
