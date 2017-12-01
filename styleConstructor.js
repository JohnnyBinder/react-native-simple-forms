import { StyleSheet } from 'react-native';

const defaultStyle = {
  container: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    padding: 5
  },
  errorText: {
    color: 'red'
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export default function createStyle(customStyle={}) {
  const style = Object.assign({}, {...defaultStyle}, {...customStyle});

  return StyleSheet.create({
    ...style
  });
}
