import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

interface FooterItem {
  label: string;
  iconSource: any; // Bisa berupa number (untuk require()) atau URI
  onPress: () => void;
  accessibilityLabel: string;
}

interface FooterProps {
  items: FooterItem[];
}

const Footer: React.FC<FooterProps> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item, activeIndex === index && styles.pressedItem]}
          onPress={() => {
            setActiveIndex(index);
            item.onPress();
          }}
          onBlur={() => setActiveIndex(null)}
          activeOpacity={1}
          accessibilityLabel={item.accessibilityLabel}>
          <Image
            source={item.iconSource}
            style={styles.icon}
            accessibilityLabel={`${item.label} Icon`}
          />
          <Text
            style={[styles.text, activeIndex === index && styles.pressedText]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#F2A602',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 100,
    width: '100%', // Lebar footer menyesuaikan layar
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  pressedItem: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  pressedText: {
    color: '#F2A602',
  },
});

export default Footer;
