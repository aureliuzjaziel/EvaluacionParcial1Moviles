import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Ejercicio1 = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);

    const clasificarNumeros = () => {
        const paresTemp: number[] = [];
        const imparesTemp: number[] = [];
        numeros.forEach(num => {
            if (num % 2 === 0) {
                paresTemp.push(num);
            } else {
                imparesTemp.push(num);
            }
        });
        setPares(paresTemp);
        setImpares(imparesTemp);
    };

    const resetear = () => {
        setPares([]);
        setImpares([]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ejercicio 4</Text>
            <Text style={styles.titulo}>BIENVENIDO</Text>
            <Text style={styles.texto}>Vector: {numeros.join(', ')}</Text>
            <Button title="CLASIFICAR" onPress={clasificarNumeros} />

            <Button title="RESET" onPress={resetear} />{pares.length > 0 && (<>
                    <Text style={styles.texto}>Pares: {pares.join(', ')}</Text>
                    <Text style={styles.texto}>Impares: {impares.join(', ')}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    texto: {
        fontSize: 18,
        marginBottom: 8,
    },
    
});

export default Ejercicio1;
