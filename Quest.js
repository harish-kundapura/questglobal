import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

 const Quest = () => {
    
  return (
   <View>
   <Text>harish</Text>
   <TouchableOpacity onPress={handlePress} style={{color:"red",backgroundColor:"red"}}>
   <Text>Press Me</Text>
   </TouchableOpacity>
   </View>
  )
}
export default Quest

