import React, { Component } from 'react'
import { ActivityIndicator, View, Text, StyleSheet, FlatList } from 'react-native'
import BaseScreenLayout from '../components/BaseScreenLayout'
import { getSchedule } from '../services/api'
import FeedItem from '../components/FeedItem'
import { formatDate } from '../utils';

const styles = StyleSheet.create({
    content: {
        width: '100%',
    },
    emptyContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
    },
    error: {
        textAlign: 'center',
    },
})

class FeedScreen extends Component {
    static navigationOptions = {
        title: 'Super Film',
    }

    state = {
        items: [],
        isLoading: true,
        isError: false,
    }

    componentDidMount() {
        const dateString = this.props.navigation.getParam('dateString', '')
        getSchedule(dateString).then(feed => this.setState(
            { items: feed.map(item => ({
                        title: item.show.name,
                        season: item.season,
                        episode: item.number,
                        year: (new Date(item.show.premiered)).getFullYear(),
                        imageURL: item.show.image ? item.show.image.medium : null,
                    })),
                    isLoading: false
                }).catch(err => {
                    console.error(err)
                    this.setState({ isLoading: false, isError: true })
                })
        )
    }

    get formattedDate() {
        const dateString = this.props.navigation.getParam('dateString', '')
        const date = new Date(dateString)
        return formatDate(date)
    }

    get Loader() {
        return (
            <View style={styles.emptyContent}>
                <ActivityIndicator color="#212121" />
            </View>
        )
    }

    get Error() {
        return (
            <View style={styles.emptyContent}>
                <Text style={styles.error}>Error occurred.</Text>
            </View>
        )
    }

    get Header() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {this.formattedDate}
                </Text>
            </View>
        )
    }

    get Content() {
        const { items, isLoading, isError } = this.state
        if (isError) {
            return this.Error
        }
        if (isLoading) {
            return this.Loader
        }
        return (
            <FlatList
                contentContainerStyle={styles.content}
                data={items}
                renderItem={FeedItem}
                keyExtractor={({ title, season, episode }) => title + season + episode}
                ListHeaderComponent={this.Header}
            />
        )
    }

    render() {
        return (
            <BaseScreenLayout>
                {this.Content}
            </BaseScreenLayout>
        )
    }
}

export default FeedScreen
