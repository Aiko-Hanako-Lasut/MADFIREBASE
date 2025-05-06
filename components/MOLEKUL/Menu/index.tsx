/* eslint-disable prettier/prettier */

// components/MOLEKUL/Menu.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface MenuItem {
  iconSource: any; // you can tighten this if you import PNG types
  label: string;
  onPress: () => void;
}

interface MenuDrawerProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({navigation}) => {
  const menuItems: MenuItem[] = [
    {
      iconSource: require('../../../assets/Home.png'),
      label: 'Home',
      onPress: () => {
        navigation.navigate('Home');
      },
    },
    {
      iconSource: require('../../../assets/Home.png'),
      label: 'Create Quiz',
      onPress: () => {
        navigation.navigate('CreateQuiz');
      },
    },
    {
      iconSource: require('../../../assets/reportnote.png'),
      label: 'Report',
      onPress: () => {
        navigation.navigate('ReportScreen');
      },
    },
    {
      iconSource: require('../../../assets/Home.png'),
      label: 'About Us',
      onPress: () => {
        navigation.navigate('About');
      },
    },
    // …any other items
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/LogoCalico.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>MAKE YOUR STUDY FUN</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.item}
              onPress={item.onPress}>
              <View style={styles.itemIndicator} />
              <Image
                source={item.iconSource}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Ornament */}
        <View style={styles.bottomOrnament} />
      </View>
    </SafeAreaView>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#FFDA63',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {width: 120, height: 40},
  subtitle: {fontSize: 12, color: '#000', marginTop: 2},
  menuItemsContainer: {flex: 1},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 5,
  },
  itemIndicator: {
    width: 5,
    height: '100%',
    backgroundColor: '#008080',
    marginRight: 15,
  },
  icon: {width: 24, height: 24, marginRight: 15},
  label: {fontSize: 16, color: '#000'},
  bottomOrnament: {
    height: 60,
    backgroundColor: 'rgba(255, 218, 99, 0.5)',
  },
});
