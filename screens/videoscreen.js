import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export default function VideoScreen() {
  const router = useRouter();

  const openVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=VTJGpMdrlAs');
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Watch & Learn</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

        {/* Video box */}
        <TouchableOpacity style={styles.videoBox} onPress={openVideo}>
          <View style={styles.playCircle}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
          <Text style={styles.videoLinkText}>🔗  Sustainability — Our Planet, Our Future</Text>
        </TouchableOpacity>

        {/* Article card */}
        <View style={styles.articleCard}>
          <Text style={styles.articleTitle}>Our Planet, Our Responsibility</Text>
          <Text style={styles.articleBody}>
            Sustainability is not just a buzzword; it's a necessity for the survival of our planet and future generations. Every action we take, from the products we buy to the energy we consume, has an impact on the environment.
          </Text>
          <Text style={styles.articleBody}>
            By understanding the interconnectedness of natural systems and human activities, we can make more informed choices. Small, everyday decisions — like reducing plastic use, conserving water, and supporting sustainable practices — collectively create significant positive change.
          </Text>
        </View>

        {/* Warning */}
        <View style={styles.warning}>
          <Text style={styles.warningText}>⚠️  Requires internet connection. Please ensure Wi-Fi or mobile data is enabled.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#faf9ee' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16, gap: 12 },
  backBtn: { padding: 4 },
  backArrow: { fontSize: 22, color: '#1a3a2a', fontWeight: '700' },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a3a2a' },
  container: { padding: 20, gap: 16 },
  videoBox: { borderRadius: 14, backgroundColor: '#2d6a4f', height: 190, alignItems: 'center', justifyContent: 'center', gap: 14 },
  playCircle: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'center', justifyContent: 'center' },
  playIcon: { fontSize: 22, color: 'white', marginLeft: 3 },
  videoLinkText: { color: 'rgba(255,255,255,0.75)', fontSize: 12 },
  articleCard: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#eeeede', padding: 20, gap: 12 },
  articleTitle: { fontSize: 20, fontWeight: '800', color: '#1a3a2a', lineHeight: 26 },
  articleBody: { fontSize: 13, color: '#4a6a5a', lineHeight: 21 },
  warning: { backgroundColor: '#fff8e6', borderWidth: 1, borderColor: '#f0c070', borderRadius: 10, padding: 12 },
  warningText: { fontSize: 12, color: '#8a5a00', lineHeight: 18 },
});
