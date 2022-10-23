import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Label} from '../index';
import MainContext from '../../context/index';
import {Colors, DesignTokens} from '../theme';

const NavigationHeader = ({navigation, onChangeText}) => {
  const {logout} = useContext(MainContext);
  const [isSearch, setIsSearch] = useState(false);
  if(isSearch){
    return (
        <View style={[Styles.container]}>
        <IconButton
            icon="chevron-left"
            color={Colors.primaryColor}
            style={{backgroundColor: Colors.headerBackground}}
            onPress={() => {
                setIsSearch(!isSearch)
            }}
          />
          <View style={Styles.headerTitleContainer}>
            <Label
              style={{
                fontSize: DesignTokens.fontSizes.header,
                fontWeight: DesignTokens.fontWeights.bold,
                color: Colors.primaryColor,
              }}
              text="Arama"
            />
          </View>
          <IconButton
            icon="search"
            color={Colors.primaryColor}
            style={{backgroundColor: Colors.headerBackground}}
            onPress={() => {
              alert("Arama Yap")
            }}
          />
        </View>
      );
  }else{
    return (
        <View style={[Styles.container]}>
          <IconButton
            icon="power-off"
            color={Colors.primaryColor}
            style={{backgroundColor: Colors.headerBackground}}
            onPress={() => {
              logout();
            }}
          />
          <View style={Styles.headerTitleContainer}>
            <Label
              style={{
                fontSize: DesignTokens.fontSizes.header,
                fontWeight: DesignTokens.fontWeights.bold,
                color: Colors.primaryColor,
              }}
              text="Anasayfa"
            />
          </View>
          <IconButton
            icon="search"
            color={Colors.primaryColor}
            style={{backgroundColor: Colors.headerBackground}}
            onPress={() => {
                setIsSearch(!isSearch)
            }}
          />
        </View>
      );
  }
 
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
  }
  
});
export default NavigationHeader;
