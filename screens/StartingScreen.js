import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native'
import {TextInput} from 'react-native-paper'
import Style from '.././utilis/AppStyles.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StartingScreen = ({navigation}) =>{
    const  startGame = async() =>{
        const response = await fetch(`https://opentdb.com/api.php?amount=${questionAmount}&category=20`)
        const json = await response.json()
        navigation.navigate('Question Screen', {data: json.results, name})
    }




    const [name, setName] = useState("")
    const [questionAmount, setAmount] = useState("10")

    useEffect (() =>{//Replace any non numeric letter in questions amount input by the use of regax
        setAmount(questionAmount.replace(/[^0-9]/g, ''))
    }, [questionAmount])

    return(
        <View style = {Style.container}>
               <Button //Start game
                    title="START"
                    onPress={() =>startGame()}/>
                    
                <Image //Home image
                    style = {Style.HomeImage}
                    source={{uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Collage-Maker-29-Jul-2022-0619-PM.jpg"}}
                />

                <TextInput //Name input
                    label={"Name"}
                    style ={Style.inputStyle}
                    onChangeText = {(name) => setName(name)}
                    value={name}
                />
                <TextInput //Questions amount input
                    label={"Question Amount"}
                    value={questionAmount}
                    onChangeText = {(amount) => {setAmount(amount)}}
                    keyboardType = "number-pad"
                    style ={Style.inputStyle}
                    
                />


            
        </View>
    )
}

export default StartingScreen;