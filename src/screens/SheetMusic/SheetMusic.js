import React from "react";
import { View, Text } from "react-native";
import styles from "./SheetMusic.styles";
import Pdf from "react-native-pdf";

const SheetMusic = ({ route }) => {
  // Get the music item passed from the Home screen
  const { musicItem } = route.params;
  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{musicItem.title}</Text>
      <Text style={styles.composer}>{musicItem.composer}</Text>
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    </View>
  );
};

export default SheetMusic;
