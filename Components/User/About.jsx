import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import Loader from '../Loader/Loader';

import Constants from 'expo-constants';
const API_BASE_URL = Constants.expoConfig.extra.API_BASE_URL;
export default function About() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const aboutUsText = "Mode Haven is your ultimate destination for premium quality shirts and fashion accessories. Founded with a passion for style and elegance, we bring you a curated collection that combines classic designs with modern trends.";
  const missionText = "Our mission is to empower individuals to express their unique personality through high-quality, comfortable, and stylish clothing. We envision a world where every person feels confident and sophisticated in what they wear.";

  return (
    <ScrollView style={styles.container}>
      <Animatable.Text animation="fadeInUp" style={styles.title}>About Mode Haven</Animatable.Text>

      {/* About Us Section */}
      <View style={styles.section}>
        <Animatable.View animation="zoomIn" style={styles.imageContainer}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1441984908796-9039b052e98b?q=80&w=1470&auto=format&fit=crop" }} style={styles.image} />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.textContainer}>
          <Text style={styles.text}>{aboutUsText}</Text>
        </Animatable.View>
      </View>

      {/* Mission & Vision Section */}
      <Text style={styles.sectionTitle}>Mission & Vision</Text>
      <View style={styles.section}>
        <Animatable.View animation="zoomIn" style={styles.missionContainer}>
          <Text style={styles.missionText}>{missionText}</Text>
        </Animatable.View>
      </View>

      {/* Team Section */}
      <View style={styles.ownerContainer}>
        <Animatable.Text animation="fadeInUp" style={styles.position}>Founder & Lead Designer</Animatable.Text>
        <View style={styles.ownerDetails}>
          <Animatable.Image animation="zoomIn" source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop" }} style={styles.ownerImage} />
          <View>
            <Text style={styles.ownerName}>Alex Mode</Text>
            <Text style={styles.text}>With over 15 years in the fashion industry, Alex founded Mode Haven to redefine casual and formal wear.</Text>
            <Text style={styles.contact}><Text style={styles.bold}>Contact:</Text> hello@modehaven.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20,paddingTop:20,paddingBottom:55, backgroundColor: '#FFF' },
   loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#000', alignSelf:'center'},
  section: { flexDirection: 'column', gap: 10, marginBottom: 20 },
  imageContainer: { alignItems: 'center' },
  image: { width: '100%', height: 350, borderRadius: 10 },
  textContainer: { paddingHorizontal: 10 },
  text: { fontSize: 16, color: '#333',textAlign:'justify' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#000' , alignSelf:'center'},
  missionContainer: { backgroundColor: '#282828', padding: 15, borderRadius: 8 },
  missionText: { color: 'white', fontSize: 16 ,textAlign:'justify'},
  ownerContainer: { marginBottom: 100 },
  position: { backgroundColor: '#AA6231', color: 'white',textAlign:'center',paddingVertical:10, borderRadius: 5, fontSize: 18, fontWeight: 'bold' },
  ownerDetails: { flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 10 },
  ownerImage: { width: 150, height: 150, borderRadius: 10, borderWidth: 1, borderColor: '#ccc' },
  ownerName: { fontSize: 18, fontWeight: 'bold' },
  contact: { fontSize: 16, marginTop: 5 },
  bold: { fontWeight: 'bold' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
