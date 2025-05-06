import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StyleProp,
  ImageStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  iconPosition?: 'left' | 'right';
  iconSource?: any; // Tipe untuk source gambar (bisa 'ImageSourcePropType' jika diimpor dari 'react-native')
  iconStyle?: StyleProp<ImageStyle>; // Untuk menerima style khusus ikon
  onPress?: () => void; // Tambahkan onPress handler jika diperlukan
}

const Button: React.FC<ButtonProps> = ({
  title,
  backgroundColor = 'blue',
  textColor = 'white',
  iconPosition = 'right',
  iconSource,
  iconStyle,
  onPress,
}) => {
  const titleStyle = [styles.text, {color: textColor}];
  const buttonStyle = [styles.button, {backgroundColor}, styles.row];
  const iconSpacingStyle =
    iconPosition === 'left' ? {marginRight: 8} : {marginLeft: 8}; // Spasi dinamis

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {iconSource && iconPosition === 'left' && (
        <Image
          source={iconSource}
          style={[styles.icon, iconStyle, iconSpacingStyle]}
        />
      )}
      <Text style={titleStyle}>{title}</Text>
      {iconSource && iconPosition === 'right' && (
        <Image
          source={iconSource}
          style={[styles.icon, iconStyle, iconSpacingStyle]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Agar ikon dan teks sejajar vertikal
  },
  icon: {
    width: 33,
    height: 33,
  },
});

export default Button;
