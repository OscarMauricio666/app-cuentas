import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={styles.containerWelcome}>
            <Text style={styles.texts}>Bienvenidos</Text>
        </View>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.containerIncome}>
            <Text style={styles.texts}>Ingresos</Text>
        </View>
        <View style={styles.containerOutlets}>
            <Text style={styles.texts}>Salidas</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerMain:{
        flexDirection: 'column',
        padding: 10,
        flex: 1,
        backgroundColor: '#D9D9D9'
    },
    containerHeader:{
        flexDirection: 'row',
        width:'100%',
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerWelcome:{
        backgroundColor: '#F88080',
        width: 315,
        height: 70,
        justifyContent: 'center',

    },
    containerBody:{
        flexDirection: 'row',
        flex:1,
        width: '100%',
        height: 200,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 100,


    },
    containerIncome:{
        backgroundColor: '#54CE40',
        width: 150,
        height: 400,
        margin: 21,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerOutlets:{
        backgroundColor: '#31C5E5',
        width: 150,
        height: 400,
        margin: 21,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texts:{
        textAlign: 'center',
    }
})