import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange', padding: 10 },
  image: {
    width: deviceSize.width - 20,
    height: deviceSize.height / 3.5,
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: '#000000c0',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    padding: 10,
    fontSize: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
