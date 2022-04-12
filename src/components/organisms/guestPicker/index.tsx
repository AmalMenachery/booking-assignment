import React, { useEffect, useMemo, useState } from "react";
import { View, Modal, ScrollView } from "react-native";
import Button from "../../atoms/button";
import Header from "../../atoms/header";
import RoomCard from "../roomCard";
import styles from "./guestPicker.styles";
import { FontAwesome } from "@expo/vector-icons";
import { GuestDetail } from "../../../types/guestDetail";

type GuestPickerProps = {
  guestDetails?: GuestDetail[];
  visible?: boolean;
  onClose: Function;
  updateDetails: Function;
};

const GuestPicker: React.FC<GuestPickerProps> = ({
  guestDetails,
  visible = false,
  onClose,
  updateDetails,
}) => {
  const [guestPickerDetails, setDetails] = useState<GuestDetail>();
  const [guestCounter, setCounter] = useState(2);
  const SearchButtonLabel = useMemo(() => {
    let guestCount = 0;
    guestPickerDetails?.forEach((room) => {
      guestCount += room?.adults + room?.children;
    });
    setCounter(guestCount);
    return ` Search ${guestPickerDetails?.length} rooms • ${guestCount} guests`;
  }, [visible, guestPickerDetails]);

  useEffect(() => {
    setDetails(guestDetails);
  }, [guestDetails]);

  const addRoom = () => {
    if (guestPickerDetails?.length > 7) {
      return;
    } else {
      setDetails((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 10000), adults: 2, children: 0 },
      ]);
    }
  };

  const updateRoom = (roomId, newRoomDetails) => {
    if (!newRoomDetails) {
      // Remove Room
      setDetails((prev) => {
        return [...prev].filter((room) => room?.id !== roomId);
      });
    } else {
      setDetails((prev) => {
        return prev?.map((room) => {
          if (room?.id === roomId) {
            return { ...newRoomDetails };
          }
          return room;
        });
      });
    }
  };

  const closeModal = () => {
    updateDetails(guestCounter, guestPickerDetails);
    onClose();
  };

  const addRoomButton = useMemo(() => {
    if (guestPickerDetails?.length < 8) {
      return (
        <View style={styles.btnContainer}>
          <Button
            icon={<FontAwesome name={"plus"} color={"#0071F3"} />}
            label="Add Room"
            btnStyle={styles.outlineBtn}
            labelStyle={styles.btnLabel}
            isDisabled={guestPickerDetails?.length > 7}
            onPress={() => addRoom()}
          />
        </View>
      );
    }
  }, [guestPickerDetails]);

  return (
    <Modal presentationStyle="pageSheet" visible={visible}>
      <Header title={"Who is staying?"} backAction={closeModal} />
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {guestPickerDetails &&
            guestPickerDetails?.map((room, index) => (
              <RoomCard
                id={room?.id}
                index={index}
                key={room?.id}
                room={room}
                updateRoom={(roomId, details) => updateRoom(roomId, details)}
              />
            ))}
        </ScrollView>
        {addRoomButton}
        <View style={styles.btnContainer}>
          <Button
            label={SearchButtonLabel}
            icon={<FontAwesome name={"search"} color={"#FFF"} size={18} />}
          />
        </View>
      </View>
    </Modal>
  );
};
export default GuestPicker;
