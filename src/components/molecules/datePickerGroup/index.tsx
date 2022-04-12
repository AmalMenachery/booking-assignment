import React, { useState } from "react";

import { TextInput } from "react-native-paper";
import styles from "./datePickerGroup.styles";

import Calendar from "src/assets/svg/calendar.svg";

//TODO : change to actual Date picker modal

export type DatePickerGroupProps = {
  inputFieldStyle?: Object;
  testId: string;
  iconName?: any;
  color?: string;
  keyboardType?: any;
  search?: Function;
  isSearching: boolean;
  placeholderText?: string;
  iconStyle?: object;
  placeholderTextColor: string;
  debounceTime?: number;
};

const DatePickerGroup: React.FC<DatePickerGroupProps> = ({
  inputFieldStyle,
  testId,
  keyboardType,
  search,
  placeholderText,
  placeholderTextColor,
}): JSX.Element => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <TextInput
        testID={testId}
        placeholder={placeholderText ? placeholderText : ""}
        dense
        placeholderTextColor={placeholderTextColor}
        mode="outlined"
        style={[styles.defaultInputFieldStyle, inputFieldStyle]}
        editable={true}
        keyboardType={keyboardType || "default"}
        onChangeText={(value) => {
          setSearchText(value);
        }}
        value={searchText}
        outlineColor={"#A0BCDB"}
        activeOutlineColor={"#0077FF"}
        left={<TextInput.Icon name={Calendar}/>}
      />
    </>
  );
};

export default DatePickerGroup;
