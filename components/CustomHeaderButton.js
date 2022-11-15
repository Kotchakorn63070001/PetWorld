import { View, Text, Platform } from 'react-native'
import React from 'react'
import { HeaderButton, HeaderButtons } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={24}
        color="black"
        // style={{margin: 0}}
    />
  )
}

export default CustomHeaderButton;