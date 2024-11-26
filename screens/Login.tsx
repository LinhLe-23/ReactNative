
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            const rs = await signInWithEmailAndPassword(auth, email, password);
            if (rs.user) { // Kiểm tra nếu đăng nhập thành công
                console.log('User logged in:', rs.user.email); // Log email của user
                navigation.navigate('Welcome'); // Chuyển hướng tới màn hình "Welcome"
            }
        } catch (error) {
            console.log('Login failed:', error.message); // Log lỗi nếu xảy ra
            // Make sure the error is properly caught
            Alert.alert('Login Failed', 'Error: ' + error.message); // Hiển thị lỗi cho người dùng
        }
    
    };    
    
    return (
        <ImageBackground
            source={require('../assets/nen.png')}
            style={styles.background}
        >

            <View style={styles.tieude}>
                <Text style={styles.tuade}>TRƯỜNG ĐẠI HỌC CẦN THƠ</Text>
                <Text style={styles.tuade}>KHOA CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</Text>
                <Image
                    source={require('../assets/ctu.png')}
                    style={{ width: 100, height: 100, marginTop: 10 }}
                />
            </View>

            <View>
                <Text style={styles.sinhvien}>Học phần: LẬP TRÌNH DI ĐỘNG ĐA NỀN TẢNG</Text>
                <Text style={styles.sinhvien}>Họ và tên: Tiêu Lê Gia Linh</Text>
                <Text style={styles.sinhvien}>MSSV: B2203561</Text>
            </View>

            <View>
                <Text style={styles.welcomeText}>CHÀO MỪNG</Text>
                <Text style={styles.subText}>Hãy đăng nhập để trải nghiệm ứng dụng</Text>

                <View style={styles.dangnhap}>
                    <Image
                        source={require('../assets/user.png')}
                        style={{ width: 30, height: 30 }}
                    />
                    <TextInput
                        placeholder="Tên đăng nhập"
                        value={email}
                        onChangeText={setEmail}
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={styles.dangnhap}>
                    <Image
                        source={require('../assets/password.png')}
                        style={{ width: 30, height: 30 }}
                    />
                    <TextInput
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        style={{ flex: 1 }}
                    />
                </View>

                <TouchableOpacity style={{ alignItems: 'center' }} onPress={click}>
                    <View style={styles.nutdangnhap}>
                        <Text style={{ fontSize: 16, color: 'lightcyan', fontWeight: 'bold' }}>ĐĂNG NHẬP</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=> navigation.navigate('Signin')}>
                    <Text style={styles.dangky}>Đăng ký tài khoản</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, // Bao phủ toàn bộ màn hình
        resizeMode: 'cover', // Đảm bảo hình ảnh co dãn để phủ đầy
        alignItems: 'center',
    },

    tieude: {
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
    },

    tuade: {
        color: 'darkcyan',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    sinhvien: {
        textAlign: 'left',
        left: -20,
        color: 'gray',
        top: 10
    },

    welcomeText: {
        fontSize: 30,
        color: 'darkcyan',
        textAlign: 'center',
        marginTop: 50,
        fontWeight: 'bold',
    },

    subText: {
        color: 'darkcyan',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },

    dangnhap: {
        flexDirection: 'row',
        width: 340,
        height: 45,
        borderColor: 'darkcyan',
        borderWidth: 1.5,
        borderRadius: 20,
        paddingHorizontal: 10,
        gap: 10,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền nhẹ cho ô nhập
    },

    nutdangnhap: {
        width: 150,
        height: 45,
        backgroundColor: 'darkcyan',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20
    },

    dangky: {
        color: 'cadet blue',
        fontSize: 18,
        fontWeight: 'thin',
        textDecorationLine: 'underline',
        top: 60
    }

});

export default Login;
