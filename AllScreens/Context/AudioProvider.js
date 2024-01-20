import { Alert, Text, View } from "react-native";
import React, { Component, createContext } from "react";
import * as MediaLibrary from "expo-media-library";

export const AudioContext = createContext
export class AudioProvider extends Component {
  constructor(props) {
    super(props);
  }
  permissionAlert = () => {
    Alert.alert("Permission Required", "Need permision to access audio files", [
      { text: "I am ready", onPress: () => this.getPermission() },
      { text: "cancel", onPress: () => this.permissionAlert() },
    ]);
  };

  getAudioFiles = async () => {
    const media = await MediaLibrary.getAlbumsAsync({
      mediaType: "audio",
    });
    console.log(media);
  };
  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if (permission.granted) {
      // we will be able to access audio files
      this.getAudioFiles()
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        // Display alert to allow permission
        this.permissionAlert();
      }
      if (status === "granted") {
        // access to all audio
        this.getAudioFiles
      }
      if (status === "denied" && !canAskAgain) {
        // error displayed
      }
    }
  };

  componentDidMount() {
    this.getPermission();
  }

  render() {
    return <AudioContext.Provider value={{}}>
      {this.props.children}
    </AudioContext.Provider>
  }
}

export default AudioProvider;
