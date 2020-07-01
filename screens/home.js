import React , {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList,TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import {globalStyles} from '../styles/global'

export default function Home({navigation}) {

const URL = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=b4f92e0bac40405fb6ce51d66dedebde';

const [articles, setArticles] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect(() => {

    fetch(URL)
    .then((response) => response.json())
    .then((json) => setArticles(json.articles))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));


}, []);

/*const [isLoading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);
*/


/*useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setMovies(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

/*const [reviews, setReviews] = useState([
    {title : 'interstellar', rating: 5, body:'buerf', key:'1'},
    {title : 'dark knight', rating: 5, body:'buerf', key:'2'},
    {title : 'spider-man', rating: 5, body:'buerf', key:'3'},
    {title : 'the martian', rating: 5, body:'buerf', key:'4'},
]);*/

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