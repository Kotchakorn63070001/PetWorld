import React, { useState } from "react"; 
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = () => {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();
    
    ///testttt
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with : ', user.email);
            
        })
        .catch(error => alert(error.message))
    }

    const onSignInPressed = () => {
        // console.warn("Sign In");
        navigation.navigate('SignIn');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>

            <TouchableOpacity style={styles.avatar}>
                <Ionicons name="ios-add" size={40} color="white" style={{marginTop: 4, marginLeft: 2}}/>
            </TouchableOpacity>

            {/* <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
            /> */}
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
            />
            {/* <CustomInput 
                placeholder="Repeat Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry
            /> */}

            <CustomButton 
                text="Register" 
                onPress={handleSignUp}
            />
            <CustomButton 
                text="Have an account? Sign in" 
                onPress={onSignInPressed} 
                type="TERTIARY"
            />
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    // justifyContent: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
    // height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1e2e6",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SignUpScreen;