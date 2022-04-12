import React, { useState } from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import styles from "./home.styles";
import HomeBg from "src/assets/images/home-backdrop.png";
import Logo from "src/assets/svg/logo.svg";
import Partners from "src/assets/images/partners.png";
import GuestSearchBox from "../../components/organisms/guestSearchBox";
import { GuestDetail } from "../../types/guestDetail";

const Home = () => {
  const [guestDetails, setGuestDetails] = useState<GuestDetail[]>([
    { id: 0, adults: 2, children: 0 },
  ]);
  const updateGuestDetails = (guestDetails) => {
    setGuestDetails(guestDetails);
  };

  return (
    <View>
      <ImageBackground source={HomeBg} style={styles.imgBackDrop}>
        <View style={styles.container}>
          <View style={styles.logo}>
             <Logo width={'200'} height={'200'}/>
          </View>
          <View style={styles.title}>
            <Text style={styles.headerText}>
              {"Find the perfect\n deal, always."}
            </Text>
          </View>
          <View style={styles.content}>
            <GuestSearchBox
              guestDetails={guestDetails}
              updateDetails={updateGuestDetails}
            />
            <Image
              source={Partners}
              style={styles.partners}
              resizeMode={"contain"}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;
