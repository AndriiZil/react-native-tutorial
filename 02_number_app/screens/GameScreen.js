import { Text, View, StyleSheet } from 'react-native';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Openent's Gues</Text>
      <View>
        <Text>Higher or lower?</Text>
        <Text>+ -</Text>
      </View>
      <View>
        <Text>LOG</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  }
});

export default GameScreen;
