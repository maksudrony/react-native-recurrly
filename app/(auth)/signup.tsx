import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'


const signUp = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/signin">Sign In</Link>
    </View>
  )
}

export default signUp