import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CalendarScreen from './src/containers/CalendarScreen'
import FeedScreen from './src/containers/FeedScreen'

const AppNavigator = createStackNavigator(
    {
        Calendar: {
            screen: CalendarScreen,
        },
        Feed: {
            screen: FeedScreen,
        },
    },
    {
        initialRouteName: 'Calendar',
        headerBackTitleVisible: false,
    }
)

const AppContainer = createAppContainer(AppNavigator)

console.disableYellowBox = true
const App = () => {
    return <AppContainer />
};

export default App
