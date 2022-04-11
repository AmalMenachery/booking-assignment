import React, { ReactElement } from "react";

import { View, TouchableWithoutFeedback, Text } from "react-native";

import styles from "./styles";
interface ButtonProps {
  label?: string;
  btnStyle?: object;
  labelStyle?: object;
  onPress?: any;
  isDisabled?: boolean;
  icon?: ReactElement;
}
const Button: React.FC<ButtonProps> = ({
  label,
  labelStyle,
  btnStyle,
  onPress,
  isDisabled = false,
  icon,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={isDisabled}>
      <View
        style={[
          styles.wrapper,
          btnStyle,
        ]}
      >
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
          <Text style={[styles.label,labelStyle]}>{label}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Button;
