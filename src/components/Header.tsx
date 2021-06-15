import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface IHeader{
  visualMode: string;
}

export function Header({ visualMode } : IHeader ) {
  return (
    <View style={[styles.header, visualMode === "light" ? styles.lightHeader : styles.darkHeader]}>
      <Text style={[styles.headerText, visualMode === "light" ? styles.lightHeaderText : styles.darkHeaderText]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }, visualMode === "light" ? styles.lightHeaderText : styles.darkHeaderText]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lightHeader: {
    backgroundColor: '#273FAD',
  },
  darkHeader: {
    backgroundColor: '#483C67',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  lightHeaderText: {
    color: '#FFF',
  },
  darkHeaderText: {
    color: '#E1E1E6',
  }
});
