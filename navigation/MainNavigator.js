import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerToggleButton, DrawerItem } from "@react-navigation/drawer";
import { Item } from "react-navigation-header-buttons";
import { HeaderButtons } from "react-navigation-header-buttons";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import FindMyPetScreen from "../screens/FindMyPetScreen";
import HelpFindHomeScreen from "../screens/HelpFindHomeScreen";
import DiscussProblemScreen from "../screens/DiscussProblemScreen";
import FindHospitalScreen from "../screens/FindHospitalScreen";
import BasicRearingScreen from "../screens/BasicRearingScreen";
import ReminderScreen from "../screens/ReminderScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreateFindMyPetScreen from "../screens/CreateFindMyPetScreen";
// import EditFindMyPostScreen from "../screens/EditFindMyPostScreen";
// import EditFindMyPost from "../screens/EditFindMyPost";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CreateDiscussProblemScreen from "../screens/CreateDiscussProblemScreen";
import CreateFindHomeScreen from "../screens/CreateFindHomeScreen";
import DetailFindMyPetScreen from "../screens/DetailFindMyPetScreen";

import { auth } from "../firebase";

{/* Parnn */}
import CreatePetsScreen  from "../screens/CreatePetsScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import EditProfileScreen from "../screens/EditProfileScreen";
import EditPetScreen from "../screens/EditPetScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyBottomTab(){
    return(
        <BottomTab.Navigator initialRouteName="FindMyPet" 
            screenOptions={{
                tabBarPosition: 'top',
                // headerLeft: () => {
                //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                //         <Item title="calendar" iconName="calendar" onPress={() => {}} />
                //         <Item title="notifications" iconName="notifications-sharp" onPress={() => {}} />
                //         <Item title="chat" iconName="chatbubble-ellipses-sharp" onPress={() => {}} />
                //     </HeaderButtons>
                // },
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="calendar" iconName="calendar" onPress={() => {}} />
                        <Item title="notifications" iconName="notifications-sharp" onPress={() => {}} />
                        <Item title="chat" iconName="chatbubble-ellipses-sharp" onPress={() => {}} />
                    </HeaderButtons>
                ),
                headerTitleAlign: 'center',
            }}>
            <BottomTab.Screen name="FindMyPet" component={FindMyPetScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name="pets" size={24} color={color} />
                    },
                    title: 'ตามหาสัตว์เลี้ยง'
                    
                }}
            />
            <BottomTab.Screen name="HelpFindHome" component={HelpFindHomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="md-home" size={24} color={color} />
                    },
                    title: 'ช่วยหาบ้าน'
                }}
            />
            <BottomTab.Screen name="DiscussProblem" component={DiscussProblemScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <FontAwesome5 name="lightbulb" size={24} color={color} />
                    },
                    title: 'ปรึกษาปัญหา'
                }}
            />
            <BottomTab.Screen name="FindHospital" component={FindHospitalScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="location" size={24} color={color} />
                    },
                    title: 'ค้นหาโรงพยาบาล'
                }}
            />
            <BottomTab.Screen name="BasicRearing" component={BasicRearingScreen}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="heart-circle-sharp" size={24} color={color} />
                    },
                    title: 'วิธีการเลี้ยงดู'
                }}
            />
        </BottomTab.Navigator>
    );
}

function MyStack(){
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,    
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="CreateFindMyPet" component={CreateFindMyPetScreen}/>
            {/* <Stack.Screen name="EditFindMyPost" component={EditFindMyPostScreen}/> */}
            {/* <Stack.Screen name="EditFindMyPost" component={EditFindMyPost}/> */}
            <Stack.Screen name="CreateDiscussProblem" component={CreateDiscussProblemScreen}/>
            <Stack.Screen name="CreateFindHome" component={CreateFindHomeScreen} />
            <Stack.Screen name="DetailFindMyPet" component={DetailFindMyPetScreen}/>
            {/* Parnn */}
            <Stack.Screen name="EditPet" component={EditPetScreen}/>
            <Stack.Screen name="CreatePet" component={CreatePetsScreen}/>
            {/* <Stack.Screen name="EditProfile" component={EditProfileScreen }/> */}
            
            <Stack.Screen name="AllTab" component={MyBottomTab}/>
        </Stack.Navigator>
    );
}

export default function MainNavigator(){
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
          navigation.navigate("SignIn");
        })
      }
    return(
        // <NavigationContainer>
        //     <Stack.Navigator 
        //         screenOptions={{
        //             headerShown: false,
                     
        //         }}>
        //         {/* <AllNavigator.Screen name="TopTabBar" component={MyTobTab}/> */}
        //         <Stack.Screen name="SignIn" component={SignInScreen}/>
        //         <Stack.Screen name="SignUp" component={SignUpScreen}/>
        //         <Stack.Screen name="AllTab" component={MyBottomTab} 
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
        // <NavigationContainer>
            <Drawer.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
                drawerContent={
                    props => {
                        return(
                            <DrawerContentScrollView {...props}>
                                <DrawerItemList {...props}/>
                                <DrawerItem label="logout" onPress={handleSignOut}/>
                            </DrawerContentScrollView>
                        )
                    }
                }>
                <Drawer.Screen name="Home" component={MyStack}/>
                {/* Parnn */}
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
            </Drawer.Navigator>
        //  </NavigationContainer>
    );
}
