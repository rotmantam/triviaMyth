import React, {useState, useEffect}from 'react'
import {View, Text, StyleSheet, BackHandler, TouchableOpacity, Button, FlatList, Image} from 'react-native'
import Style from '.././utilis/AppStyles.js'

import WrongListItem from "./WrongListItem.js"



const FinalScreen = (props) =>{
    
    const {correctCount, count, name, wrongAnswers} = props.route.params
    //Choose image according to user accomplishments
    let IMAGE_URL
    if (correctCount > count / 2){
        IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xEAE61N-_IoSGWS2Vy4xnLUxDTxSs8sQ8g&usqp=CAU"
    }
    else{
        IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7sGtlx5cS0oPzA-Rerl9Al62PUSxNhEA03qI2EWDANTSny3glScvlr2b0qsYjwDojVs&usqp=CAU"
    }

    const navigation = props.navigation

    //Render one wrong answer info
    const renderItem = ({ item }) => (
        <WrongListItem question={item.question} answer={item.answer} correctAnswer={item.correctAnswer}/>
    )

    useEffect (()=>{ //Remove option for user to go back
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    return( //The view
        <View style = {Style.container}>
            <Text>{name}, you have answered {correctCount} questions correctly out of {count}</Text>
            
            <Image
                    style = {Style.finalImage}
                    source={{uri: IMAGE_URL}}
                />
            <FlatList
                data={wrongAnswers}
                renderItem = {renderItem}  
            />
            <Button
                    title="Home"
                    onPress={() =>{navigation.navigate("Starting Screen")}}/>
        </View>
    )
}

export default FinalScreen;