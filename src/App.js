import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import DetailCoins from './pages/DetailCoins';
import Exchange from './pages/Exchange';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeComponent() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: true }}>
            <Stack.Screen name="ExchangePage" component={Home} />
            <Stack.Screen name="DetailCoinsPage" component={DetailCoins} />
        </Stack.Navigator>
    );
}


function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeComponent} />
                <Tab.Screen name="ExchangeComponentPage" component={Exchange} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
