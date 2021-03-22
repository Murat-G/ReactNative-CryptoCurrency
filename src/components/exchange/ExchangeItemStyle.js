import { StyleSheet,Dimensions } from 'react-native';

export const stylesPlatform = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 5,
        backgroundColor:'#cecefe',
    },
    topContainer:{
        display:'flex',
        flexDirection: 'row',
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
        flexDirection:'column',
    },
    named: {
        color: 'black',
        alignItems:'center',
        fontSize: 14,
        marginRight: 15,
        fontWeight:'bold',
    },
    score: {
        color: 'black',
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
    url:{
        textAlign:'center',
        fontSize: 12,
        color: 'purple'    },
});
