import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { getEvents } from './api';

import EventCard from './EventCard';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f3f3f3'
  }
})
class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      });
    }, 500);

    getEvents()
      .then(events => this.setState({ events }))
      .catch(error => console.log(error))
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("form");
  }

  render() {
    return [
      <FlatList
        key="flatlist"
        style={styles.list}
        data={this.state.events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} />
        )}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ];
  }
};

export default EventList;
