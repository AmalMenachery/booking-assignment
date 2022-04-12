import React, { useEffect, useMemo, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import styles from "./styles";

interface ChildAgeProps {
  age?: number;
  setAge: (number, key) => any;
}

const ChildAge: React.FC<ChildAgeProps> = ({ age = 1, setAge = () => {} }) => {
  const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <View style={styles.countContainer}>
      <View style={styles.label}>
        <Text>Child Age</Text>
      </View>
      <View style={styles.counterView}>
        <SelectDropdown
          data={ages}
          defaultButtonText={"Age"}
          dropdownIconPosition={"right"}
          buttonStyle={styles.dropdown4BtnStyle}
          buttonTextStyle={styles.dropdown4BtnTxtStyle}
          dropdownStyle={styles.dropdown4DropdownStyle}
          rowStyle={styles.dropdown4RowStyle}
          rowTextStyle={styles.dropdown4RowTxtStyle}
          onSelect={(selectedItem, index) => {
            setAge(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#0071F3"}
                size={18}
              />
            );
          }}
        />
      </View>
      <View style={styles.closeIcon}>
        <IconButton icon={"close"} color={"red"} />
      </View>
    </View>
  );
};

export default ChildAge;
