import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
  body_container: {
    margin: 10,
    backgroundColor: '#eceff1',
    padding: 5,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { width: 80, minHeight: 80, resizeMode: 'contain', borderRadius: 50 },
  text: { marginLeft: 10, fontSize: 20, fontWeight: '300' },
});
