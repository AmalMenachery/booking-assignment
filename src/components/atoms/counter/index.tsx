import React  from "react";

import { View,Text } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "./styles";

interface Props {
  count?: number;
  setCount: (number, key) => any;
  minVal: number;
  maxVal?: number;
}

const Counter: React.FC<Props> = ({
  count = 1,
  setCount = () => {},
  minVal = 1,
  maxVal = 2,
}) => {
  const IncrementIcon = () => {
    const onPress = () => {
      if (!maxVal || count < maxVal) {
        setCount(count + 1, "plus");
      }
    };
    return (
      <IconButton
        icon={"plus"}
        onPress={onPress}
        style={styles.iconContainer}
        color={count === Number(maxVal) ? "#979797" : "#0071F3"}
      />
    );
  };

  const DecrementIcon = () => {
    const onPress = () => {
      if (count > minVal) {
        setCount(count - 1);
      }
    };
    return (
      <IconButton
        icon={"minus"}
        onPress={onPress}
        style={styles.iconContainer}
        color={count === Number(minVal) ? "#979797" : "#0071F3"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <DecrementIcon />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{count}</Text>
      </View>
      <IncrementIcon />
    </View>
  );
};

export default Counter;
