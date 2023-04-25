import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import {PropsWithChildren, useState} from 'react';
import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const RollTheDice = (): JSX.Element => {
  const [diceImge, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImge} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}> Roll the Dice</Text>
      </Pressable>
    </View>
  );
};

export default RollTheDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#e5e0ff',
    fontSize: 16,
    color: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
