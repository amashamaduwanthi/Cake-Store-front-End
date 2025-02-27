import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Order from "../../model/PlaceOrder";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { saveOrder } from "../../reducer/PlaceOrderSlice";

const PlaceOrder = () => {
    const route = useRoute();
    const { cart } = route.params || { cart: [] };

    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [totalPrice, setTotalPrice] = useState(0); // ✅ New state for total price
    const dispatch = useDispatch<AppDispatch>();

    // Function to calculate total price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
        }, 0);
    };

    // Update total price whenever cart changes
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cart]); // ✅ Runs when cart updates

    const confirmOrder = () => {
        if (!customerName.trim() || !contactNumber.trim()) {
            Alert.alert('Missing Details', 'Please enter your name and contact number.');
            return;
        }
        const order = new Order(totalPrice,customerName, Number(contactNumber), address);

        // Save order
        dispatch(saveOrder(order));

        Alert.alert(
            'Order Confirmed',
            `Thank you, ${customerName}! Your order for ${cart.length} items has been placed.`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Order Details</Text>

            {cart.length > 0 ? (
                <>
                    {cart.map((item, index) => (
                        <Text key={index} style={styles.itemText}>
                            {item.name} - {item.price}
                        </Text>
                    ))}

                    <Text style={styles.totalText}>Total Payment: ${totalPrice.toFixed(2)}</Text> {/* ✅ Uses state */}

                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Customer Details</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            value={customerName}
                            onChangeText={setCustomerName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your contact number"
                            value={contactNumber}
                            onChangeText={setContactNumber}
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Address"
                            value={address}
                            onChangeText={setAddress}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
                        <Text style={styles.confirmButtonText}>Confirm Order</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.itemText}>No items in the order.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF5F7',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: '#fff',
        padding: 10,
        width: '90%',
        textAlign: 'center',
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 8,
        textAlign: 'center',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    card: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginVertical: 8,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    confirmButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        marginTop: 20,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PlaceOrder;






