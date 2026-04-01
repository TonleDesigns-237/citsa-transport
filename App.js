import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");

  const ridePrices = {
    standard: 4500,
    comfort: 6500,
    premium: 8500,
  };

  const calculatePrice = () => {
    if (pickup && destination) {
      return ridePrices[rideType];
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Image
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ODMCvcTUVyAw3QBTleG-VQHaHa%3Fpid%3DApi&f=1&ipt=ef223bb168fa44f2a8b1a3238b9c6aabbbda867f0f064343656274eafea7528a&ipo=images",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>CITSA Transport</Text>
        <Text style={styles.subtitle}>Yaoundé - Douala</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.locationInput}>
            <View style={styles.iconCircle}>
              <Ionicons name="location-sharp" size={20} color="#bc1a1a" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Point de départ"
              placeholderTextColor="#999"
              value={pickup}
              onChangeText={setPickup}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.locationInput}>
            <View style={styles.iconCircle}>
              <Ionicons name="navigate-circle" size={20} color="#bc1a1a" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Destination"
              placeholderTextColor="#999"
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        <View style={styles.routeCard}>
          <FontAwesome5 name="road" size={24} color="#bc1a1a" />
          <View style={styles.routeTextContainer}>
            <Text style={styles.routeTitle}>Route Douala - Yaoundé</Text>
            <Text style={styles.routeDistance}>~ 210 km | 2h30 - 3h</Text>
            <Text style={styles.routeDesc}>Nouvelle autoroute à péage</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Choisissez votre course</Text>

        <TouchableOpacity
          style={[styles.rideOption, rideType === "standard" && styles.selectedRide]}
          onPress={() => setRideType("standard")}
        >
          <View style={styles.rideIcon}>
            <Ionicons name="car" size={28} color={rideType === "standard" ? "#bc1a1a" : "#666"} />
          </View>
          <View style={styles.rideInfo}>
            <Text style={styles.rideName}>Standard</Text>
            <Text style={styles.rideDesc}>Véhicule économique • 4 places</Text>
          </View>
          <Text style={[styles.ridePrice, rideType === "standard" && styles.selectedPrice]}>4 500 FCFA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rideOption, rideType === "comfort" && styles.selectedRide]}
          onPress={() => setRideType("comfort")}
        >
          <View style={styles.rideIcon}>
            <FontAwesome5 name="car-side" size={24} color={rideType === "comfort" ? "#bc1a1a" : "#666"} />
          </View>
          <View style={styles.rideInfo}>
            <Text style={styles.rideName}>Comfort</Text>
            <Text style={styles.rideDesc}>Véhicule confortable • Climatisation</Text>
          </View>
          <Text style={[styles.ridePrice, rideType === "comfort" && styles.selectedPrice]}>6 500 FCFA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rideOption, rideType === "premium" && styles.selectedRide]}
          onPress={() => setRideType("premium")}
        >
          <View style={styles.rideIcon}>
            <FontAwesome5 name="caravan" size={24} color={rideType === "premium" ? "#bc1a1a" : "#666"} />
          </View>
          <View style={styles.rideInfo}>
            <Text style={styles.rideName}>Premium</Text>
            <Text style={styles.rideDesc}>SUV • Espace VIP • 6 places</Text>
          </View>
          <Text style={[styles.ridePrice, rideType === "premium" && styles.selectedPrice]}>8 500 FCFA</Text>
        </TouchableOpacity>

        {pickup && destination && (
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Réserver • {calculatePrice()} FCFA</Text>
          </TouchableOpacity>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>CITSA Transport • Siège: Yaoundé</Text>
          <Text style={styles.footerSmall}>Sécurité • Ponctualité • Tradition</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#000", paddingTop: 20, paddingBottom: 30, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#bc1a1a" },
  logo: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: "#bc1a1a", marginBottom: 12 },
  title: { fontSize: 20, fontWeight: "bold", color: "#fff", letterSpacing: 1 },
  subtitle: { fontSize: 12, color: "#bc1a1a", marginTop: 4 },
  card: { backgroundColor: "#fff", margin: 16, marginTop: 20, borderRadius: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4, borderWidth: 1, borderColor: "#eee" },
  locationInput: { flexDirection: "row", alignItems: "center", padding: 16 },
  iconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#fff0f0", justifyContent: "center", alignItems: "center", marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: "#333" },
  divider: { height: 1, backgroundColor: "#eee", marginLeft: 52 },
  routeCard: { flexDirection: "row", backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 8, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#eee", alignItems: "center" },
  routeTextContainer: { marginLeft: 12, flex: 1 },
  routeTitle: { fontSize: 14, fontWeight: "600", color: "#000" },
  routeDistance: { fontSize: 12, color: "#666", marginTop: 2 },
  routeDesc: { fontSize: 10, color: "#bc1a1a", marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#000", marginHorizontal: 16, marginTop: 20, marginBottom: 12 },
  rideOption: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", marginHorizontal: 16, marginVertical: 6, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#eee" },
  selectedRide: { borderColor: "#bc1a1a", backgroundColor: "#fff5f5", borderWidth: 2 },
  rideIcon: { width: 48, alignItems: "center" },
  rideInfo: { flex: 1, marginLeft: 8 },
  rideName: { fontSize: 16, fontWeight: "600", color: "#000" },
  rideDesc: { fontSize: 12, color: "#666", marginTop: 2 },
  ridePrice: { fontSize: 16, fontWeight: "bold", color: "#666" },
  selectedPrice: { color: "#bc1a1a" },
  bookButton: { backgroundColor: "#bc1a1a", marginHorizontal: 16, marginTop: 24, marginBottom: 16, padding: 18, borderRadius: 12, alignItems: "center" },
  bookButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  footer: { alignItems: "center", paddingVertical: 24, marginTop: 8, borderTopWidth: 1, borderTopColor: "#eee" },
  footerText: { fontSize: 12, color: "#666" },
  footerSmall: { fontSize: 10, color: "#999", marginTop: 4 },
});



