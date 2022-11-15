import React, { useEffect, useState } from "react"; 
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import Logo from '../assets/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const SignInScreen = () => {
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const {height} = useWindowDimensions();
    
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace('AllTab');
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with : ', user.email);
            
        })
        .catch(error => alert(error.message))
    }

    const onSignInPressed = () => {
        console.warn("Sign in");
        //validate user

        
        
    }
    const onSignUpPressed = () => {
        console.warn("Sign Up");
        navigation.navigate('SignUp');
        
    }

    return(
        <View style={styles.container}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />
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

            <CustomButton 
                text="Sign In" 
                onPress={handleLogin}
            />
            <CustomButton 
                text="Don't have an account? Create one" 
                onPress={onSignUpPressed} 
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
    paddingTop: 50,
    // justifyContent: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
    // height: 350,
  }
});

export default SignInScreen;