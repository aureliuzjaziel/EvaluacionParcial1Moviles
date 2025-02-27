import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Ejercicio2 = () => {
  return (
    <View style={styles.container}>
            
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
  )
}
export default Ejercicio2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008DDA',
        //justifyContent: 'center',
        alignItems: 'center',
        
    },
    caja1: {
        
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: '#41C9E2',
        alignSelf:'flex-end',
    },
    caja2: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        alignSelf:'flex-end',
        
    },
    caja3: {
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'cyan',
        alignSelf:'flex-end',
        
    },
})
