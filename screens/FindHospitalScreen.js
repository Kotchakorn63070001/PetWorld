import React, { useState } from "react"; 
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, {Callout, Circle, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from 'expo-location';
import { useEffect } from "react";

const FindMyPetScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [pin, setPin] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  })

  const {width, height} = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGTITUE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [initial, setInitial] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  // const [latAndLong, setlatAndLon] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // })


  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location){
        setLocation(location)
        setInitial({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGTITUE_DELTA,
        })
        setPin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGTITUE_DELTA,
        })
        console.log(initial)
      }
    })();
  }, []);

    // type InputAutocompleteProps = {
    //   label: String,
    //   placeholder: String,
    //   onPlaceSelected: (details: import("react-native-google-places-autocomplete").GooglePlaceDetail | null) => void;
    // };

    // function InputAutoComplete({
    //   label, 
    //   placeholder,
    //   onPlaceSelected,
    // }: InputAutocompleteProps) {
    //   return(
    //     <>
    //       <Text>{label}</Text>
    //       <GooglePlacesAutocomplete
    //         styles={{textInput: styles.input}}
    //         placeholder={placeholder || ""}
    //         fetchDetails
    //         onPress={(data, details = null) => {
    //           onPlaceSelected(details);
    //         }}
    //         query={{
    //           key: 'AIzaSyB00rYeJlCVHBosX_5ACq2RouT5ohZnEoE',
    //           language: 'th',
    //         }}
    //       />
    //     </>
    //   )
    // }


    return(
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          provider={PROVIDER_GOOGLE}
          initialRegion={initial}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          <Marker 
            coordinate={pin}
            pinColor='green'
            draggable={true}
            onDragStart={(e) => {
              console.log("Drag start", e.nativeEvent.coordinate)
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
              })
            }}
          >
              <Callout>
                <Text>คุณอยู่ที่นี่</Text>
              </Callout>
          </Marker>
        </MapView>
        <View style={styles.searchContainer}>
          <GooglePlacesAutocomplete
            styles={{textInput: styles.input}}
            placeholder='ค้นหาโรงพยาบาลสัตว์'
            fetchDetails={true}
            GooglePlacesSearchQuery={{
              rankby: 'distance'
            }}
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
              console.log(data, details);
              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGTITUE_DELTA
              })
            }}
            query={{
              key: 'AIzaSyB00rYeJlCVHBosX_5ACq2RouT5ohZnEoE',
              language: 'th',
              components: 'country:th',
              type: 'establishment',
              radius: 30000,
              location: `${region.latitude}, ${region.longitude}`
            }}
          />
        </View>

      </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    searchContainer: {
      position: 'absolute',
      width: '90%',
      backgroundColor: 'white',
      shadowColor: 'white',
      shadowOffset: {
          width: 2, 
          height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 4,
      padding: 8,
      borderRadius: 8,
      top: 5,
    },
    input: {
      borderColor: '#888',
      borderWidth: 1,
    }
  }
);

export default FindMyPetScreen;