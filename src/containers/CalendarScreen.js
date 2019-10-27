import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import BaseScreenLayout from '../components/BaseScreenLayout'
import { Calendar } from 'react-native-calendars'
import tv from '../img/tv.png'

const styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    },
    image: {
        width: 150,
        height: 150,
    },
    imageWrapper: {
        paddingBottom: 32,
    },
    subtitle: {
        textAlign: 'center',
    },
})

class CalendarScreen extends Component {
    static navigationOptions = {
        title: 'Super Film',
    }

    onDayPress = ({ dateString }) =>
        this.props.navigation.navigate('Feed', { dateString })

    render() {
        return (
            <BaseScreenLayout>
                <View style={styles.topContainer}>
                    <View style={styles.imageWrapper}>
                        <Image source={tv} resizeMode="contain" style={styles.image} />
                    </View>
                    <Text style={styles.subtitle}>
                        For a list of TV shows, please select the desired{'\n'}month and day.
                    </Text>
                </View>
                <View>
                    <Calendar
                        onDayPress={this.onDayPress}
                        monthFormat="MMMM"
                        firstDay={1}
                        hideDayNames
                    />
                </View>
            </BaseScreenLayout>
        )
    }
}

export default CalendarScreen
