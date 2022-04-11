import React, { useState } from "react";

import { TextInput } from "react-native-paper";

import styles from "./searchBar.styles";

import Arrow from "../../../assets/images/arrow.png";
import Pin from "../../../assets/images/pin.png";

export type SearchBarProps = {
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



const SearchBar: React.FC<SearchBarProps> = ({
  inputFieldStyle,
  testId,
  keyboardType,
  search,
  placeholderText,
  placeholderTextColor,
}): JSX.Element => {
  const [searchText, setSearchText] = useState("");

  return (
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
      activeOutlineColor={'#0077FF'}
      left={<TextInput.Icon  name={Pin} color={"#4398FA"} />}
      right={<TextInput.Icon name={Arrow} color={"#00C9E4"} />}
    />
  );
};

export default SearchBar;
