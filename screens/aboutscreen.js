import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About EcoAware</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

        {/* Logo card */}
        <View style={styles.card}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🌿</Text>
          </View>
          <Text style={styles.appName}>EcoAware</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
          <Text style={styles.description}>
            EcoAware is a sustainability awareness application designed to educate, inspire, and challenge users to learn more about our planet's most pressing environmental issues. Our goal is to make environmental education accessible and engaging for everyone.
          </Text>
        </View>

        {/* Our Mission */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🌍</Text>
            <Text style={styles.sectionTitleOrange}>Our Mission</Text>
          </View>
          <Text style={styles.bodyText}>
            We believe that awareness is the first step toward meaningful action. By providing clear, factual information about climate change, pollution, and conservation, we hope to empower individuals to make more sustainable choices in their daily lives.
          </Text>
        </View>

        {/* What We Cover */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🌿</Text>
            <Text style={styles.sectionTitleGreen}>What We Cover</Text>
          </View>
          {['🌡️  Climate Change', '🗑️  Plastic Pollution', '🌲  Deforestation', '💧  Water Scarcity', '☀️  Renewable Energy'].map((item, i, arr) => (
            <View key={item} style={[styles.coverItem, i < arr.length - 1 && styles.coverItemBorder]}>
              <Text style={styles.coverText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Credit */}
        <View style={styles.credit}>
          <Text style={styles.creditText}>Developed as part of BTEC IT Unit 7 · 2024</Text>
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
  container: { padding: 20, gap: 14 },
  card: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#eeeede', padding: 20, alignItems: 'center' },
  logoCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#f0eed8', borderWidth: 1, borderColor: '#e0ddb8', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  logoEmoji: { fontSize: 28 },
  appName: { fontSize: 28, fontWeight: '800', color: '#1a3a2a', marginBottom: 4 },
  version: { fontSize: 13, color: '#aaa', marginBottom: 16 },
  description: { fontSize: 13, color: '#4a6a5a', lineHeight: 21, textAlign: 'left', alignSelf: 'stretch' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12, alignSelf: 'flex-start' },
  sectionIcon: { fontSize: 18 },
  sectionTitleOrange: { fontSize: 17, fontWeight: '700', color: '#c47a2b' },
  sectionTitleGreen: { fontSize: 17, fontWeight: '700', color: '#2d6a4f' },
  bodyText: { fontSize: 13, color: '#4a6a5a', lineHeight: 21, alignSelf: 'stretch' },
  coverItem: { paddingVertical: 10, alignSelf: 'stretch' },
  coverItemBorder: { borderBottomWidth: 1, borderBottomColor: '#f0f0e8' },
  coverText: { fontSize: 14, color: '#4a6a5a' },
  credit: { backgroundColor: '#f0eed8', borderRadius: 12, padding: 14, alignItems: 'center' },
  creditText: { fontSize: 12, color: '#8a9a8a' },
});
