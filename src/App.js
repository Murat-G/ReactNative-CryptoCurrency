import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import DetailCoins from './pages/DetailCoins';
import Exchange from './pages/Exchange';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#e91e63' }}>
                <Tab.Screen name="Home" component={HomeComponent} options={{
                    tabBarLabel: 'Coins',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="table-large" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="ExchangeComponentPage" component={Exchange}
                    options={{
                        tabBarLabel: 'Exchange Platforms',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="format-columns" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
