import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Ejercicio5 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}
export default Ejercicio5
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008DDA',
        justifyContent: 'center',
        //flexDirection: 'column',
        alignItems: 'center',

    },
    caja1: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: '#41C9E2',
        position: 'absolute',
        top: 0,
        left: 0,

    },
    caja2: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        position: 'absolute',

    },
    caja3: {

        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'cyan',
        position: 'absolute',
        bottom: 0,
        right: 0,


    },
})