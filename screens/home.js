import React , {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList,TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import {globalStyles} from '../styles/global'
import AddArticle from './addArticle'

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

const submitHandler = (title, date,author, description) =>{


    setArticles((prevArticles) =>{
        return [
            {title:title, date:date,author:author, description:description, key: Math.random().toString()},
            ...prevArticles
        ]
    })
}
/*const [userArticles, setUserArticles] = useState({
    author: 'bruh', title:'bruh moment', description:'hmmm', key:'1'}

)


const pressHandler = () => {
    navigation.navigate('ReviewDetail');
    
}*/
return(
    <View style = {globalStyles.container}>
    <SafeAreaView>
        <View>
            <AddArticle submitHandler={submitHandler}/>
        </View>
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
       /* <FlatList
        data = {userArticles}
        renderItem = { ({item}) => (
            <TouchableOpacity onPress={() =>navigation.navigate('ReviewDetail', item)}>
                <Text style = {globalStyles.item}> {item.title} </Text>
            </TouchableOpacity>
        )
        }

        />

        )}*/
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