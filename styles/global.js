import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({

    container:{
        flex:1,
        padding:24
    },
    titleText: {
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,

    },
    item: {
        padding:16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})
