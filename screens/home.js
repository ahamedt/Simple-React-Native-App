import React , {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList,TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import {globalStyles} from '../styles/global'

export default function Home({navigation}) {

const URL = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=I TOOK OUT THE API KEY';

const [articles, setArticles] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect(() => {

    fetch(URL)
    .then((response) => response.json())
    .then((json) => setArticles(json.articles))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));


}, []);


const pressHandler = () => {
    navigation.navigate('ReviewDetail');
    
}
return(
    <View style = {globalStyles.container}>
    <SafeAreaView>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={articles}
        keyExtractor={(item,index) =>index.toString()}
        renderItem = {( {item} ) => (
            <TouchableOpacity onPress={() =>navigation.navigate('ReviewDetail', item)}>
                <Text style = {globalStyles.item}> {item.title} </Text>
            </TouchableOpacity>
        )

        }
        
        />
        )}
     </SafeAreaView>
    </View>
)

}

const styles = StyleSheet.create({

    container: {
        padding:24,

    }
})
