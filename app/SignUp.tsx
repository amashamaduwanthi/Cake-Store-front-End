import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {User} from "../model/User";
import {registerUser} from "../reducer/UserSlice";

export default function SignUp() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch<AppDispatch>();




    function handleSignUp() {
        console.log("User Registered:", { name, email, password });
        const user:User={email:email, password:password};
        dispatch(registerUser(user));

        router.replace("/dashboard"); // Redirect to dashboard after signup
    }

    return (
        <LinearGradient
            colors={["#FFD1DC", "#FFE4E1"]}
            style={styles.gradientBackground}
        >
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Create Account</Text>
                <Text style={styles.signInText}>Sign Up</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="John Doe"
                    placeholderTextColor="#777"
                    onChangeText={setName}
                    autoCapitalize="words"
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="john@email.com"
                    placeholderTextColor="#777"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="******"
                    placeholderTextColor="#777"
                    secureTextEntry
                    onChangeText={setPassword}
                />

                <Pressable
                    style={({ pressed }) => [
                        styles.signInButton,
                        pressed && styles.signInButtonPressed,
                    ]}
                    onPress={handleSignUp}
                >
                    <Text style={styles.signInButtonText}>Sign Up</Text>
                </Pressable>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpPrompt}>Already have an account?</Text>
                    <Pressable onPress={() => router.push("/")}>
                        <Text style={styles.signUpText}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    topContainer: {
        flex: 2,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        alignItems: "center",
    },
    titleText: {
        fontSize: 28,
        color: "#FF6B6B",
        fontWeight: "bold",
        marginBottom: 10,
    },
    signInText: {
        fontSize: 20,
        color: "#555",
        fontWeight: "bold",
        marginBottom: 30,
    },
    formContainer: {
        flex: 2,
        backgroundColor: "#FFF5F7",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 30,
        paddingVertical: 60,
    },
    bottomContainer: {
        backgroundColor: "#FFF5F7",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpPrompt: {
        color: "#555",
        fontSize: 14,
        marginRight: 5,
    },
    signUpText: {
        color: "#FF6B6B",
        fontSize: 14,
        fontWeight: "600",
    },
    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 6,
        fontWeight: "500",
    },
    inputField: {
        backgroundColor: "#FFE4E1",
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderRadius: 10,
        fontSize: 16,
        color: "#333",
        marginBottom: 25,
    },
    signInButton: {
        backgroundColor: "#FF6B6B",
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    signInButtonPressed: {
        backgroundColor: "#E45858",
    },
    signInButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

