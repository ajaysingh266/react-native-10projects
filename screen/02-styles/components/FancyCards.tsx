import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: '',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City</Text>
          <Text style={styles.cardDescription}>Pink City</Text>
          <Text style={styles.cardFooter}>12min away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#fff',
    // color: '#000',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#000',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000',
  },
});
