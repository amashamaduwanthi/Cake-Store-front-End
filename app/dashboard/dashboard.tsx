import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CustomerDashboard = () => {
    const featuredCakes = [
        { id: '1', name: 'Chocolate Delight', image: 'https://via.placeholder.com/100' },
        { id: '2', name: 'Strawberry Bliss', image: 'https://via.placeholder.com/100' },
        { id: '3', name: 'Vanilla Dream', image: 'https://via.placeholder.com/100' },
    ];

    const orders = [
        { id: '1', cake: 'Chocolate Cake', status: 'Delivered' },
        { id: '2', cake: 'Red Velvet', status: 'In Progress' },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Welcome Banner */}
            <View style={styles.banner}>
                <Text style={styles.welcomeText}>🎉 Welcome, Amasha!</Text>
                <Text style={styles.subtitle}>Find your perfect cake 🍰</Text>
            </View>

            {/* Featured Cakes */}
            <Text style={styles.sectionTitle}>🔥 Featured Cakes</Text>
            <FlatList
                data={featuredCakes}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cakeCard}>
                        <Image source={{ uri: item.image }} style={styles.cakeImage} />
                        <Text style={styles.cakeText}>{item.name}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />

            {/* Order Status */}
            <Text style={styles.sectionTitle}>📦 Your Orders</Text>
            {orders.map((order) => (
                <View key={order.id} style={styles.orderCard}>
                    <Text style={styles.orderText}>{order.cake}</Text>
                    <Text style={[styles.status, order.status === 'Delivered' ? styles.delivered : styles.progress]}>
                        {order.status}
                    </Text>
                </View>
            ))}

            {/* Quick Actions */}
            <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="cart-outline" size={24} color="white" />
                    <Text style={styles.actionText}>Order Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="clipboard-outline" size={24} color="white" />
                    <Text style={styles.actionText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="gift-outline" size={24} color="white" />
                    <Text style={styles.actionText}>Offers</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F0', // Light cream
        padding: 20,
    },
    banner: {
        backgroundColor: '#FFC0CB', // Soft pink
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#D8435E',
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D8435E',
        marginBottom: 10,
    },
    cakeCard: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
        elevation: 3,
    },
    cakeImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    cakeText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    orderCard: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    orderText: {
        fontSize: 16,
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 5,
    },
    delivered: {
        backgroundColor: '#4CAF50',
        color: 'white',
    },
    progress: {
        backgroundColor: '#FFA500',
        color: 'white',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#D8435E',
        paddingVertical: 15,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
    },
});

export default CustomerDashboard;
