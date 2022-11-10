import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  inner_container: { flex: 1, padding: 5 },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a52a2a',
  },
  area: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a52a2a',
  },
  body_container: {borderTopWidth: 1, borderColor: '#bdbdbd', marginTop: 5, paddingTop: 5},
  instruction: {},
  yt_button: { backgroundColor: 'red', flex: 1, margin: 10, padding: 10, borderRadius: 5},
  yt_text: { color: 'white', textAlign: 'center'},
});
