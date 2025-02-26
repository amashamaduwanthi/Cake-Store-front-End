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

export default function Index() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (email === "user" && password === "1234") {
            router.replace("/dashboard");
        }
    }

    return (
        <LinearGradient
            colors={["#FFD1DC", "#FFE4E1"]}
            style={styles.gradientBackground}
        >
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Welcome CakeStore LK</Text>
                <Text style={styles.signInText}>Sign In</Text>
            </View>


            <View style={styles.formContainer}>
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

                <Pressable>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.signInButton,
                        pressed && styles.signInButtonPressed,
                    ]}
                    onPress={handleLogin}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </Pressable>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpPrompt}>Don’t have an account?</Text>
                    <Pressable>
                        <Text style={styles.signUpText}>Sign Up</Text>
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
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#FF6B6B",
        marginBottom: 30,
        fontSize: 14,
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
