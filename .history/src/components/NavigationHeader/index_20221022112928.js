import React, {useContext} from 'react';
import {StatusBar, TouchableOpacity, StyleSheet, Platform, View, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import MainContext from '../../context/index';

const NavigationHeader = ({navigation, onChangeText}) => {
  const {logout} = useContext(MainContext);
  return <View style={[Styles.container, {height:50]}>
    <Text>{StatusBar.currentHeight}</Text>
  </View>;
};

const Styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#EAEAEA',
    borderRadius: 50,
    right: 10,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 10,
  },
  searchBarContainer: {
    left: 10,
    bottom: 5,
    right: 65,
    backgroundColor: '#EAEAEA',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBarLabel: {
    marginLeft: 10,
    color: '#666666',
    fontWeight: '500',
    fontSize: 14,
  },
  container: {
    width: '100%',
    //        height : 92,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    backgroundColor: '#fafafa',
  },
});
export default NavigationHeader;
