import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetail'
const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Welcome'
        }
    },
    ReviewDetail :{
        screen: ReviewDetail,
        navigationOptions:{
            title: 'Details'
        }
    },
    
   
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee'}
    }
    });

//export default createAppContainer(HomeStack);
export default HomeStack;