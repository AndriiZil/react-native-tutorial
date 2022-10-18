import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem({ item, onDelete }) {
  return (
    <Pressable
      android_ripple={styles.androidRipple}
      onPress={onDelete.bind(this, item.key)}
      style={({pressed}) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem} key={item.key}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  androidRipple: {
    color: '#dddddd'
  },
  pressedItem: {
    opacity: 0.5,
  }
})

export default GoalItem;
