import React from "react";

import { View, Text } from "react-native";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

const StackNavigator = createAppContainer(AppNavigator);


const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});

const BottomTabNavigator = createAppContainer(TabNavigator);


export { StackNavigator, BottomTabNavigator }
