import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/home'
import About from './screens/about'
import Navigator from './routes/drawer'

export default function App() {
  return (
      
        <Navigator />
    
  );
}


