import React , {useState}from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, TextInput } from 'react-native';
import {globalStyles} from '../styles/global'


export default function AddArticle({submitHandler}){

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    //how do i refactor this?
    const titlechangeHandler = (val) => {

        setTitle(val);

    }

    const datechangeHandler = (val) => {
        setDate(val);
    }
    const authorchangeHandler = (val) => {
        setAuthor(val);
    }
    const descriptionchangeHandler = (val) =>{
        setDescription(val)
    }
    return(
        <View>
            <TextInput
                style = {globalStyles.input}
                placeholder='new title'
                onChangeText={titlechangeHandler}
            />
            <TextInput
                style = {globalStyles.input}
                placeholder = 'new date'
                onChangeText = {datechangeHandler}
            />
            <TextInput 
                style = {globalStyles.input}
                placeholder = 'new author'
                onChangeText = {authorchangeHandler}
            />
            <TextInput 
                style = {globalStyles.input}
                placeholder = 'new description'
                onChangeText = {descriptionchangeHandler}
            />
            <Button onPress={() => submitHandler(title, date, author,description)} title='add article' color='coral' />
        </View>
    )



}