import { StyleSheet,Dimensions } from 'react-native';

export const stylesCoin = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor:'#cecefe',
        borderRadius:35,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    containerLeft:{
        display:'flex',
        flexDirection:'column',
        width: Dimensions.get('window').width * 0.40,
    },
    containerRight: {
        display:'flex',
        width: Dimensions.get('window').width * 0.30,
    },
    textInfo:{
        display: 'flex',
        flexDirection: 'row',
        padding:5,
        alignItems:'center',
    },
    named: {
        color: 'black',
        fontSize: 14,
        fontWeight:'bold',
    },
    symbol: {
        color: 'white',
        fontWeight:'bold',
    },

    price: {
        color: 'black',
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
        fontWeight:'bold',
    },
    changePercentRed:{
        fontSize: 12,
        color: 'red',
        fontWeight:'bold',
    },
    iconContainer:{
        justifyContent:'center',
    },
});
