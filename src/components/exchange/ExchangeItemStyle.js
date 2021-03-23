import { StyleSheet, Dimensions } from 'react-native';

export const stylesPlatform = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 5,
        backgroundColor: '#cecefe',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerLeft: {
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.40,
    },
    containerRight: {
        display: 'flex',
        flexDirection: 'column',
    },
    named: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:3,
    },
    score: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },

    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
    },
    image: {
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').height * 0.05,
        padding: 20,
        margin: 15,
    },
    url: {
        textAlign: 'center',
        fontSize: 11,
        color: '#550080',
        fontWeight: '700',
    },
});
