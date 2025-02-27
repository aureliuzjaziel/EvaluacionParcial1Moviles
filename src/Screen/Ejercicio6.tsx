import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Ejercicio6 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}
export default Ejercicio6
const styles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor: '#008DDA',
        //justifyContent: 'center',
        //alignItems: 'center',
        flexDirection: 'row',
        
        


    },
    caja1: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 'auto',
        backgroundColor: '#41C9E2',
        
        
        
        
        
    },
    caja2: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        //width: 50,
        height: 'auto',
        backgroundColor: 'orange',
        
        //alignSelf: 'center',
        
        
    },
    caja3: {
        flex: 1,
        borderWidth: 5,
        borderColor: 'white',
        width: 100,
        height: 'auto',
        backgroundColor: 'cyan',
        
        
        
    },
})