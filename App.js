import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EventList from './EventList';

export default function App() {
  return (
    <EventList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
