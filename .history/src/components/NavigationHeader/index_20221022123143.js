import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconButton, Label} from '../index';
import MainContext from '../../context/index';

import {Colors, DesignTokens} from '../theme';

const NavigationHeader = ({navigation, onChangeText}) => {
  const {logout} = useContext(MainContext);
  return (
    <View style={[Styles.container]}>
      <IconButton icon="power-settings-new" />
      <View style={Styles.headerTitleContainer}>
        <Label
          style={{
            fontSize: DesignTokens.fontSizes.header,
            fontWeight: DesignTokens.fontWeights.medium,
          }}
          text="Anasayfa"
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: DesignTokens.heights.header,
    flexDirection: 'row',
    paddingLeft: DesignTokens.spaces.item,
    paddingRight: DesignTokens.spaces.item,
    paddingTop: DesignTokens.heights.statusbar,
    backgroundColor: Colors.headerBackground,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
export default NavigationHeader;
