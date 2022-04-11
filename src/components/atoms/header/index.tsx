import React from "react";
import { ImageBackground, View, Text, Image, Modal } from "react-native";
import { Appbar } from "react-native-paper";
import styles from "./header.styles";

export type HeaderProps = {
  title: string;
  backIcon?: string;
  backAction: Function;
};

const Header: React.FC<HeaderProps> = ({
  title,
  backIcon = "close",
  backAction,
}) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon={backIcon} color={"#0071F3"} onPress={()=>{backAction()}} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
export default Header;
