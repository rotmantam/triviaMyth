import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import StartingScreen from './StartingScreen.js'
import FinalScreen from './FinalScreen.js'
import QuestionScreen from './QuestionScreen.js'

const CharacterStackNavigator = createNativeStackNavigator()
export const CharacterStack = () =>{
    return(
        <CharacterStackNavigator.Navigator >
            <CharacterStackNavigator.Screen name = 'Starting Screen' component ={StartingScreen} options={{headerBackVisible: false}} />
            <CharacterStackNavigator.Screen name = 'Final Screen' component ={FinalScreen} options={{headerBackVisible: false}}/>
            <CharacterStackNavigator.Screen name = 'Question Screen' component={QuestionScreen} options={{headerBackVisible: false}}/>
        </CharacterStackNavigator.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator()
export const TabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='start' component={StartingScreen} />
            <Tab.Screen name='final' component={FinalScreen} />
        </Tab.Navigator>
    )
}