import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about'
const screens = {
    About:{
        screen: About,
        navigationOptions:{
            title: 'About the App'
        }
    },
    
   
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee'}

    }
});

export default AboutStack;



