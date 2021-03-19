import { StyleSheet,Dimensions } from 'react-native';

export const stylesCoin = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor:'#cecefe',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    containerLeft:{
        display:'flex',
        flexDirection:'column',
        width: Dimensions.get('window').width * 0.35,
    },
    containerRight: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width: Dimensions.get('window').width * 0.40,
    },
    named: {
        color: 'black',
        alignItems:'center',
        fontSize: 14,
        marginRight: 15,
        fontWeight:'bold',
    },
    symbol: {
        color: 'white',
        fontWeight:'bold',
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
        fontSize: 12,
        color: 'green',
        marginLeft: 5,
        fontWeight:'bold',
    },
    changePercentRed:{
        fontSize: 12,
        color: 'red',
        marginLeft: 5,
        fontWeight:'bold',
    },
});
