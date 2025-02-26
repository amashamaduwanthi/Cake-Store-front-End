import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const cakes = [
    { id: '1', name: 'Chocolate Cake', price: '$15', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/chocolate.jpg') },
    { id: '2', name: 'Strawberry Cake', price: '$18', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/red_velvet.jpg') },
    { id: '3', name: 'Vanilla Cake', price: '$12', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/yummy-lemon-pie.jpg') },
    { id: '4', name: 'Red Velvet Cake', price: '$20', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/choco.jpg') },
    { id: '5', name: 'Gato Cake', price: '$15', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/choco.jpg') },
    { id: '6', name: 'Special Cake', price: '$30', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/special.png') },
];

const CakePage = () => {
    const [cart, setCart] = useState<{ id: string; name: string; price: string }[]>([]);

    const addToCart = (cake: { id: string; name: string; price: string }) => {
        setCart((prevCart) => [...prevCart, cake]);
        Alert.alert('Added to Cart', `${cake.name} has been added to your cart.`);
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        Alert.alert('Removed from Cart', `The item has been removed from your cart.`);
    };

    const placeOrder = () => {
        if (cart.length === 0) {
            Alert.alert('No items in the cart', 'Please add items to the cart before placing an order.');
        } else {

            Alert.alert('Order Placed', `Your order for ${cart.length} items has been placed.`);
            setCart([]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Our Cakes</Text>
            <Text style={styles.cartText}>🛒 Cart: {cart.length} items</Text>

            <FlatList
                data={cakes}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />


            <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder}>
                <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>


            {cart.length > 0 && (
                <View style={styles.cartSection}>
                    <Text style={styles.cartTitle}>Cart Details</Text>
                    {cart.map((item) => (
                        <View key={item.id} style={styles.cartItem}>
                            <Text style={styles.cartItemText}>
                                {item.name} - {item.price}
                            </Text>
                            <TouchableOpacity
                                style={styles.removeButton}
                                onPress={() => removeFromCart(item.id)}
                            >
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F7',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6B6B',
        textAlign: 'center',
        marginVertical: 10,
    },
    cartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    price: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    placeOrderButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    placeOrderText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartSection: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    cartItem: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartItemText: {
        fontSize: 16,
        color: '#555',
    },
    removeButton: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default CakePage;
