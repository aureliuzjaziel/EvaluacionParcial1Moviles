import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Ejercicio4 = () => {
  return (
    <View style={styles.container}>
            
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
  )
}
export default Ejercicio4
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
        
        position: 'relative',
        alignSelf: 'flex-end',
        
        
        
        
        
    },
    caja2: {
        
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        position: 'relative',
        alignSelf: 'flex-start',
        
        
        
        
    },
    caja3: {
        
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'cyan',
        position: 'relative', 
        
        top: 0, 
        
        
    },
})