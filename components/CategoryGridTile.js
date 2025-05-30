import { View, Pressable, Text, StyleSheet, Platform, ImageBackground } from 'react-native';

function CategoryGridTile({ title, color, imageUrl, onPress }) {
  console.log(imageUrl)
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#077A7D' }}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}
      >
        <ImageBackground source={{uri:imageUrl}}  style={styles.imageUrl}>
          <View style={styles.innerContainer}>
          
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#077A7D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUrl: {
    height: 150,
    width:180
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default CategoryGridTile;
