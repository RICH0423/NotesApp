'use strict'

import styles from './homeScreenStyles';
import SimpleButton from '../SimpleButton';
import NoteList from '../NoteList';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView
} = React;


class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.notes.length > 0 ?
          <NoteList notes={this.props.notes} onSelectNote={this.props.onSelectNote}/> :
        (
          <View style={styles.center}>
            <Text style={styles.noNotesText}>You haven't created any notes!</Text>

            <SimpleButton
              onPress={() => this.props.navigator.push({
                name: 'createNote',
                note: {
                  id: new Date().getTime(),
                  title: '',
                  body: '',
                  isSaved: false
                }
              })}
              customText="Create Note"
              style={styles.simpleButton}
              textStyle={styles.simpleButtonText}
            />
          </View>
        )}
      </View>
    );
  }
}

export default HomeScreen;
