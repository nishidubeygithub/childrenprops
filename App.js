// import React from 'react'
// import AboutScreen from "./src/screen/AboutScreen"

// const App = () => {
//   return (
//     <AboutScreen/>
//       )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import {View, Text, Button, SafeAreaView} from "react-native"

const Example = () => {
  const [count, setCount] = useState(0);

useEffect(() => {
    console.log({count})
  });

  return (
    <SafeAreaView >
      <Text>You clicked {count} times</Text>
      <Button title ="Click" onPress={() => setCount(count + 1)}>
      </Button>
    </SafeAreaView>
  );
}
export default Example