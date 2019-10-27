import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
})

const BaseScreenLayout = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
)

export default BaseScreenLayout
