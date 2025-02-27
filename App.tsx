import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ejercicio6 from './src/Screen/Ejercicio6'
import Ejercicio5 from './src/Screen/Ejercicio5'
import Ejercicio4 from './src/Screen/Ejercicio4'
import Ejercicio3 from './src/Screen/Ejercicio3'
import Ejercicio2 from './src/Screen/Ejercicio2'
import Ejercicio1 from './src/Screen/Ejercicio1'
import Ejercicio7 from './src/Screen/Ejercicio7'
import Ejercicio8 from './src/Screen/Ejercicio8'
import Ejercicio9 from './src/Screen/Ejercicio9'
import Ejercicio10 from './src/Screen/Ejercicio10'

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2 /> */}
      {/* <Ejercicio3 /> */}
      {/* <Ejercicio4 /> */}
      {/* <Ejercicio5 /> */}
      {/* <Ejercicio6 /> */}
      {/* <Ejercicio7 /> */}
      {/* <Ejercicio8 /> */}
      {/* <Ejercicio9 /> */}
      <Ejercicio10 />
    </SafeAreaView>
  )
}

export default App