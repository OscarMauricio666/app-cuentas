import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InComeScreen() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={[styles.containerWelcome, , styles.card3, styles.cardElevated3]}>
            <Text style={styles.texts}>Ingresos</Text>
        </View>
      </View>
      <View style={styles.containerBody}>
        <View style={[styles.containerIncome, styles.card1, styles.cardElevated1]}>
            <Text style={styles.texts}>Crear Cuenta</Text>
        </View>
        <View style={[styles.containerOutlets, styles.card2, styles.cardElevated2]}>
            <Text style={styles.texts}>Cuentas Activas</Text>
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
        //alignItems: 'center',
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
    },
    card1:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated1:{
        backgroundColor:'blue',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    card2:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated2:{
        backgroundColor:'blue',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    card3:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated3:{
        backgroundColor:'green',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
})