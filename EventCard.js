import React from 'react';
import { Text, View, Stylesheet } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts } from './api';

const styles = Stylesheet.create({

});

export default function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  })
};
