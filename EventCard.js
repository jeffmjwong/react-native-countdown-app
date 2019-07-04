import React from 'react';
import { Text, View, Stylesheet } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts } from './api';

const styles = Stylesheet.create({

});

export default function EventCard({ event }) {

}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  })
};
