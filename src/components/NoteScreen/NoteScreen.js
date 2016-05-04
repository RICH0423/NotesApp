'use strict'

var React = require('react-native');

import styles from './noteScreenStyles';
import SimpleButton from '../SimpleButton';

var {
  StyleSheet,
  TextInput,
  View
} = React;

class NoteScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {note:Object.assign({}, props.note)};
  }

  updateNote(title, body) {
    var note = Object.assign(this.state.note, {title:title, body:body});
    this.props.onChangeNote(note);
    this.setState(note);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus={true}
            autoCapitalize="sentences"
            placeholder="Untitled"
            style={[styles.textInput, styles.title]}
            onEndEditing={(text) => {this.refs.body.focus()}}
            underlineColorAndroid="transparent"
            value={this.state.note.title}
            onChangeText={(title) => this.updateNote(title, this.state.note.body)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            ref="body"
            multiline={true}
            placeholder="Start typing"
            style={[styles.textInput, styles.body]}
            textAlignVertical="top"
            underlineColorAndroid="transparent"
            value={this.state.note.body}
            onChangeText={(body) => this.updateNote(this.state.note.title, body)}
          />
        </View>
        
        <SimpleButton
              onPress={() => this.props.navigator.pop()}
              customText="Confirm"
              style={styles.simpleButton}
              textStyle={styles.simpleButtonText}
            />
      </View>
    );
  }
}

export default NoteScreen;

