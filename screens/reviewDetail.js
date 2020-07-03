import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ReviewDetail({ navigation }) {
return(
    <View style = {styles.container}>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('date')}</Text>
        <Text>{navigation.getParam('author')}</Text>
        <Text>{navigation.getParam('description')}</Text>
        <Text>{navigation.getParam('url')}</Text>
    </View>
)

}

const styles = StyleSheet.create({

    container: {
        padding:24,

    }
})