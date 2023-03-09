import React from 'react';
import {StyleSheet,View,Text, Image, TouchableOpacity} from 'react-native'

const PaymentSuccessful = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.topic}>Payment Successful</Text>
        <Text style={styles.text}>Lorem Ispum is simply a dummy text of the printing
            and typesetting industry's standard dummy text ever since 1500s, 
            when an unknown printer took a gallery.
        </Text>
        <Image source={require("../assets/addtocart.png")} style={styles.image}/>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
          <View style={styles.options}>
            <TouchableOpacity onPress={()=> {
                navigation.navigate("AddToCart")
            }}>
                <Text>Previous</Text>
            </TouchableOpacity>
          <View style={styles.swiperOptions}>
                <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                <TouchableOpacity style={[styles.swiper,styles.active]}></TouchableOpacity>
            </View>
          </View>
    </View>
    );
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 25
    },

    topic: {
        fontSize: 35,
        fontWeight: 700,
        marginBottom: 10
    },

    text: {
        color: 'grey',
        fontSize: 18,
        fontWeight:400,
    },

   
    image: {
        width:350,
        height: 250,
        alignSelf: 'center',
        marginVertical: 30
    },

    btn: {
        backgroundColor: '#6C63FF',
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: 17,
        paddingHorizontal: 120,
        borderRadius: 80
    },
    
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center'
    },
    options: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    swiperOptions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    swiper: {
        width:10,
        height: 10,
        borderRadius: 50,
        backgroundColor: "gray",
        marginHorizontal: 2.5
    },

    active: {
        width:25,
        backgroundColor: "#6C63FF",
    },
})
export default PaymentSuccessful;
