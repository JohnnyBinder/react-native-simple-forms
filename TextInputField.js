import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styleConstructor from '../style/styleConstructor';

const TextInputField = ({styles, underlineColorAndroid, stateName, label, placeholder, keyboardType, value, onChange, errors}) => {

  const style = styleConstructor(styles);

  getErrors = () => {
    let output = [];

      errors.map((error) => {
        output.push(<Text key={error} style={style.errorText}>{error}</Text>)
      });

    return output;
  };


  return (
    <View style={style.container}>
      <View style={style.mainQuestionContainer}>
        <View style={style.labelContainer}>
          <Text style={style.label}>{label}</Text>
        </View>
        <TextInput
          style={style.textInput}
         underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : 'rgba(0,0,0,0)'}
         keyboardType={keyboardType ? keyboardType : 'default'}
         placeholder={placeholder}
         value={value}
         onChangeText={(text) => onChange(stateName, text)}
       />
      </View>
      <View>
        {getErrors()}
      </View>
    </View>
  );
};

export default TextInputField;