import { View, Pressable, Text, StyleSheet, Platform} from 'react-native'

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[StyleSheet.gridItem, { backgroundColor: color}]}>
            <Pressable android_ripple={{color: '#ccc'}}
                        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}
                        onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'White',
        
    }
})