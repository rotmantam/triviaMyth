import React from 'react'
import {View, Text } from 'react-native'
import Style from '../utilis/AppStyles.js'
import { decode } from 'html-entities'
const WrongListItem = ({question, answer, correctAnswer}) =>{
    return(
        <View>
            <Text >{decode(question)}</Text>
            <Text style={{color: "red"}}>{decode(answer)}</Text>
            <Text style={{color: "green"}}>{decode(correctAnswer)}</Text>
        </View>
       
    )

}

export default WrongListItem