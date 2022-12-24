import React from 'react'
import {StyleSheet} from 'react-native'
import Colors from './AppColors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,

    },
    titleText:{
        fontFamily: 'sans-serif-condensed'
    },
    buttonText:{
        textAlign: 'center'
    },
    inputStyle:{
        marginTop: 20,
        width: "50%"
    },
    subText:{
        margintop:100
    },
    answerButton:{
        backgroundColor: Colors.ocean,
        width: "40%",
        height: "10%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    HomeImage:{
        marginTop: 20,
        width: 350,
        height: 190,
        borderRadius: 20,
        resizeMode: "stretch"
    },
    finalImage:{
        marginTop: 20,
        width: 350,
        height: 250,
        borderRadius: 20,
        resizeMode: "stretch"
    }
})