import React from "react";
import { View } from "react-native";
import { GuestDetail } from "../../../types/guestDetail";
import Button from "../../atoms/button";
import DatePickerGroup from "../../molecules/datePickerGroup";
import GuestBox from "../../molecules/guestBox";
import SearchBar from "../../molecules/searchBar";
import styles from "./guestSearchBox.styles";

type GuestSearchBoxProps = {
  guestDetails?: GuestDetail[];
  updateDetails:Function;
};

const GuestSearchBox: React.FC<GuestSearchBoxProps> = ({ guestDetails,updateDetails }) => {
  return (
    <View style={[styles.container, styles.shadowProperty]}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.checkInDetails}>
        <View style={styles.datePicker}>
          <DatePickerGroup />
        </View>
        <View style={styles.guestBox}>
          <GuestBox guestDetails={guestDetails} updateDetails={updateDetails} />
        </View>
      </View>
      <View style={styles.button}>
        <Button label="Search" />
      </View>
    </View>
  );
};
export default GuestSearchBox;
