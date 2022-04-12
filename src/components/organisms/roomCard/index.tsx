import React, { useEffect, useMemo, useState } from "react";
import _debounce from "lodash/debounce";
import { Pressable, Text, View } from "react-native";
import styles from "./roomCard.styles";
import GuestCounter from "../../molecules/guestCounter";
import { GuestDetail } from "../../../types/guestDetail";

interface RoomCardProps {
  room?: GuestDetail;
  updateRoom: Function;
  id: string;
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, id, updateRoom, index }) => {
  const [adults, setAdultCount] = useState(2);
  const [children, setChildrenCount] = useState(0);
  useEffect(() => {
    setAdultCount(room?.adults ? room?.adults : 2);
    setChildrenCount(room?.children ? room?.children : 0);
  }, [room]);

  const setAdults = _debounce((val: any, key: string) => {
    setAdultCount(val);
    updateRoom(id, { ...room, adults: val });
  }, 1000);

  const setChildren = _debounce((val: any, isDelete: boolean) => {
    // TODO : handle delete children & age component
    setChildrenCount(val);
    updateRoom(id, {
      ...room,
      children: val,
      childrenAges: [...(room?.childrenAges || []), { id: val, age: 0 }],
    });
  }, 1000);

  const removeRoom = _debounce(() => {
    updateRoom(id);
  }, 1000);

  const removeCard = useMemo(() => {
    if (id !== 0) {
      return (
        <Pressable
          onPress={() => {
            removeRoom();
          }}
        >
          <Text style={styles.removeText}>Remove Room</Text>
        </Pressable>
      );
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Room #{index + 1}</Text>
        {removeCard}
      </View>
      <GuestCounter
        count={adults}
        setCount={(val, key) => {
          setAdults(val, key);
        }}
      />
      <GuestCounter
        isAdult={false}
        count={children}
        setCount={(val, key) => {
          setChildren(val, key);
        }}
        childAges={room?.childrenAges}
      />
    </View>
  );
};

export default RoomCard;
