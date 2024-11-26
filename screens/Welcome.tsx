import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {

    return (
        <ImageBackground
            source={require('../assets/nen.png')} // Thay đổi ảnh nền tại đây
            style={styles.background}
        >
            <View style={styles.container}>
                {/* Tiêu đề */}
                <Text style={styles.title}>ỨNG DỤNG SINH VIÊN</Text>

                {/* Mô tả ngắn */}
                <Text style={styles.subtitle}>Chào mừng bạn đến với hệ thống của chúng tôi</Text>

                {/* Nút Đăng xuất */}
                <TouchableOpacity style={styles.logoutButton} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        color: 'darkcyan',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'darkcyan',
        textAlign: 'center',
        marginBottom: 40,
    },
    logoutButton: {
        backgroundColor: 'darkcyan',
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
