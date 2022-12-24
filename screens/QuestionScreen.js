import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, BackHandler} from 'react-native'
import { decode } from 'html-entities'
import Style from '.././utilis/AppStyles.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const QuestionScreen = (props) =>{
    const {data, name} = props.route.params
    const navigation = props.navigation

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true) //Remove the option for android user to go back
    backHandler.remove()

    const TIME = 30
    const questionsArray = []

    for (let i = 0; i < data.length; i++){ //Create question array using data sent from api
        let item = {"correct" : data[i].correct_answer, "answers": data[i].incorrect_answers.slice(), "question": data[i].question}
        item.answers.push(item.correct)
        questionsArray.push(item)
    }

    const [counter, setCounter] = useState(0)
    const [currentQuestionIndex, setIndex] = useState(0)
    const [answers, setAnswers] = useState(questionsArray[0].answers)
    const [question, setQuestion] = useState(questionsArray[0].question)
    const [wrongAnswers, setWrong] = useState([])
    const [time, setTime] = useState(TIME)
    const [isRunning, setIsRunning] = useState(true)

 
    useEffect(() =>{ //Set timer interval (NOTE: EXISTING BUG, INTERVAL REMOVED ONLY AFTER GOING BACK TO HOME SCREEN. SOLVED CURRENTLY BY USING FLAG)
        const interval = setInterval(() =>{
            setTime(time => time - 1)
        }, 1000)
        return () => {clearInterval(interval)}
    }, [])

    useEffect(() =>{ //Check if time has ran out for a question
        if (time <= 0){
            CheckAnswer("null")
            setTime(TIME)
        }
    }, [time])
    useEffect (()=>{ //Set new question, move to final screen when all questions are done
        if (currentQuestionIndex == 0) { return}
        if (currentQuestionIndex < questionsArray.length){
            let shuffledAnswers = questionsArray[currentQuestionIndex].answers.sort(() =>{ return Math.random() -0.5})
            setAnswers(shuffledAnswers)
            setQuestion(questionsArray[currentQuestionIndex].question)
        }
        if (currentQuestionIndex == questionsArray.length){
            setIsRunning(false)
            navigation.navigate('Final Screen', {count: questionsArray.length, correctCount: counter, name, wrongAnswers})

        }
    },[currentQuestionIndex])

    useEffect (()=>{ //Remove option to go back in android
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    const  CheckAnswer = (answer) =>{ //Check if answer user chose is correct
        if (!isRunning){return}
        if (questionsArray[currentQuestionIndex].correct == answer){
            setCounter(counter + 1)
        }
        else{
            let wrongAnswer = {question: question, answer: answer, correctAnswer: questionsArray[currentQuestionIndex].correct}
            let temp = wrongAnswers
            temp.push(wrongAnswer)
            setWrong(temp)
        }
        setIndex(currentQuestionIndex+1)
        setTime(TIME)
    }

    return( //The view
        <View style={Style.container}>
            <Text>Time left: {time}</Text>
            <Text>{currentQuestionIndex +1}/{questionsArray.length}</Text>
            <Text style={Style.titleText}>{decode(question)}</Text>
            {answers.map(buttonInfo =>(
                <TouchableOpacity style={Style.answerButton} key={buttonInfo} onPress={() =>{CheckAnswer(buttonInfo)}}><Text>{buttonInfo}</Text></TouchableOpacity>
            ))}


        </View>
    )
}

export default QuestionScreen;