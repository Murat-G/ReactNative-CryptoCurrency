import {StyleSheet,Dimensions} from 'react-native';

export const detailStyles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    coinName:{
     display:'flex',
    },
    // card:{
    //     display:'flex',
    //     width: Dimensions.get('window').width * 0.80,
    //     height: Dimensions.get('window').height * 0.50,
    //     backgroundColor:'#37474f',
    //     alignItems:'center',
    //     justifyContent:'center',
    // },
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.1,
        padding: 10,
        margin: 15,
    },
    changePercent: {
        fontSize: 16,
        color: 'green',
        marginLeft: 5,
        fontWeight:'bold',
        textAlign:'center',
    },
    changePercentRed:{
        fontSize: 16,
        color: 'red',
        marginLeft: 5,
        fontWeight:'bold',
        textAlign:'center',
    },
    named: {
        color: 'black',
        alignItems:'center',
        fontSize: 20,
        fontWeight:'bold',
    },
    symbol: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 20,
    },
    price: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 18,
    },
    coinVolume : {
        width: 155,
      },
});
