import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    imageWrapper: {
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 10,
    },
    image: {
        height: 120,
        width: 120 * 210 / 295,
        borderRadius: 4,
    },
    descriptionWrapper: {
        justifyContent: 'space-between',
        flex: 1,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    year: {
        color: '#747474'
    },
    seasonEpisodeWrapper: {
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        padding: 8,
        width: '100%',
        borderRadius: 8,
    },
    block: {
        flex: 1,
        alignItems: 'center',
    },
    blockText: {
        color: '#747474',
    },
})

const FeedItem = ({
    item: {
        imageURL,
        title,
        year,
        season,
        episode,
    }
}) => (
    <View style={styles.item} key={title}>
        <View style={styles.imageWrapper}>
            {imageURL
                ? (
                    <Image source={{ uri: imageURL }} resizeMode="contain" style={styles.image} />
                )
                : (
                    <Text>NO IMAGE</Text>
                )
            }
        </View>
        <View style={styles.descriptionWrapper}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
            </View>
            <View style={styles.seasonEpisodeWrapper}>
                <View style={styles.block}>
                    <Text style={styles.blockText}>Season: {season}</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.blockText}>Episode: {episode}</Text>
                </View>
            </View>
        </View>
    </View>
)

export default FeedItem
