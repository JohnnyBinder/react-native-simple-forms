import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import validate from 'validate.js';
import TextInputField from './form-components/TextInputField';

export default class App extends React.Component {
  constructor() {
    super();

    this.formFieldStyles = {
      container: {
        backgroundColor: 'orange',
        margin: 10
      },
      mainQuestionContainer: {
        borderWidth: 1,
        borderColor: 'blue'
      },
      errorContainer: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        padding: 5
      },
      errorText: {
        color: 'blue'
      }
    };

    this.state = {
      formData: {
        email: '',
      },

      formConstraints: {
        'email': {
          'email': true,
          'presence': true,
          'length': {
            'minimum': 6,
            'message': 'must be at least 6 chars.'
          }
        }
      },

      formErrors: {}
    };
  }

  static navigationOptions = {
    title: 'Adding Event'
  };

  updateFormState = (key, value) => {
    let formData = this.state.formData;
    formData[key] = value;

    let formErrors = validate(formData, this.state.formConstraints);
    formErrors = Object.assign({}, formData, formErrors);

    this.setState({formData, formErrors});
  };

  getFieldErrors = (fieldName) => {
    // If there exists that fieldName in the state's formErrors object and that object is an array, return the errors
    // Otherwise, there must not be any errors, so return an empty array
    if (fieldName in this.state.formErrors && Array.isArray(this.state.formErrors[fieldName]))
      return this.state.formErrors[fieldName];
    return [];
  };

  render() {
    return (
      <View style={{paddingTop: 20}}>
        <TextInputField
          styles={this.formFieldStyles}
          stateName="email"
          onChange={this.updateFormState}
          placeholder="Email"
          value={this.state.formData.email}
          errors={this.getFieldErrors('email')}
        />
      </View>
    );
  }
}

