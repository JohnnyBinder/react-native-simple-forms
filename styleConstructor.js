import { StyleSheet } from 'react-native';

const defaultStyle = {
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  errorContainer: {

  },
  errorText: {
    color: 'red'
  }
};

export default function createStyle(customStyle={}) {
  const style = {...defaultStyle, ...customStyle};

  return StyleSheet.create({
    ...style
  });
}