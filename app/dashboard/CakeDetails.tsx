import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const cakes = [
    { id: '1', name: 'Chocolate Cake', price: '$15', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/chocolate.jpg') },
    { id: '2', name: 'Strawberry Cake', price: '$18', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/red_velvet.jpg') },
    { id: '3', name: 'Vanilla Cake', price: '$12', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/yummy-lemon-pie.jpg') },
    { id: '4', name: 'Red Velvet Cake', price: '$20', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/choco.jpg') },
    { id: '5', name: 'Gato Cake', price: '$15', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/choco.jpg') },
    { id: '6', name: 'Special Cake ', price: '$30', image: require('/home/amasha/WebstormProjects/cake-store-mobile/assets/special.png') },
];

const CakePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Our Cakes</Text>
            <FlatList
                data={cakes}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
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
        marginVertical: 20,
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
});

export default CakePage;
