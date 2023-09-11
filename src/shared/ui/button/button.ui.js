import { Pressable, StyleSheet, Text, Platform, View } from 'react-native';

export const Button = ({ children, onPress, variant = 'default', containerStyle }) => {
  const rootStyles = [containerStyle, styles.default.root, styles[variant].root];

  const getRootStyles = ({ pressed }) => {
    return pressed ? [...rootStyles, styles.pressable] : rootStyles;
  };

  return <View style={{ overflow: 'hidden', width: '100%', borderRadius: 20 }}>
        <Pressable android_ripple={{ color: '#ccc' }} onPress={onPress} style={getRootStyles}>
            <Text style={[styles.default.text, styles[variant].text]}>{children}</Text>
        </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  pressable: {
    opacity: Platform.OS === 'ios' ? 0.7 : 1
  },
  default: {
    root: {
      paddingVertical: 30,
      paddingHorizontal: 15,
      backgroundColor: '#000',
      borderRadius: 20
    },
    text: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: '700',
      color: '#fff'
    }
  },
  primary: {
    root: {
      backgroundColor: '#000'
    },
    text: {
      color: 'red'
    }
  },
  secondary: {
    root: {
      backgroundColor: '#fff'
    },
    text: {
      color: '#000'
    }
  }
});
