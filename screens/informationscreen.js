import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const topics = [
  { emoji: '🌡️', bg: '#e84040', label: 'Climate Change',   summary: 'The long-term alteration of temperature and typical weather patterns.', detail: 'Average global temperatures have risen 1.1°C since pre-industrial times. The main driver is the burning of fossil fuels releasing CO2. Key actions: switch to renewables, reduce meat consumption, improve energy efficiency, plant trees.' },
  { emoji: '🗑️', bg: '#c4872a', label: 'Plastic Pollution', summary: 'The accumulation of plastic objects and particles in the Earth\'s environment.', detail: 'Over 8 million tonnes of plastic enter the oceans every year. Plastic breaks into microplastics entering the food chain. Solutions: refuse single-use plastics, choose reusables, support producer responsibility laws.' },
  { emoji: '🌲', bg: '#2d6a4f', label: 'Deforestation',     summary: 'The purposeful clearing of forested land for agriculture or urban use.', detail: '15 billion trees are cut down each year. Forests are vital carbon sinks and biodiversity hotspots. Reforestation, sustainable agriculture, and conscious consumer choices all help.' },
  { emoji: '💧', bg: '#2196f3', label: 'Water Scarcity',    summary: 'The lack of sufficient available water resources to meet the demands of water usage.', detail: 'Only 1% of Earth\'s water is fresh and accessible. By 2025, two-thirds of the world may face shortages. Fix leaks, use water-efficient appliances, support conservation policies.' },
  { emoji: '☀️', bg: '#f4a261', label: 'Renewable Energy',  summary: 'Energy derived from natural sources that are replenished on a human timescale.', detail: 'Solar, wind, hydro, and geothermal are all renewable. Renewables now exceed 30% of global electricity. Solar panel costs have dropped over 90% in the last decade.' },
];

export default function InfoScreen() {
  const router = useRouter();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sustainability Topics</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {topics.map((t, i) => (
          <View key={i} style={styles.card}>
            <TouchableOpacity
              style={styles.cardRow}
              onPress={() => setOpen(open === i ? null : i)}
            >
              <View style={[styles.topicIcon, { backgroundColor: t.bg }]}>
                <Text style={styles.topicEmoji}>{t.emoji}</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardLabel}>{t.label}</Text>
                <Text style={styles.cardSummary}>{t.summary}</Text>
              </View>
              <Text style={styles.chevron}>{open === i ? '∧' : '∨'}</Text>
            </TouchableOpacity>
            {open === i && (
              <View style={styles.detail}>
                <Text style={styles.detailText}>{t.detail}</Text>
              </View>
            )}
          </View>
        ))}
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
  container: { padding: 20, gap: 10 },
  card: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#eeeede', overflow: 'hidden' },
  cardRow: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  topicIcon: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  topicEmoji: { fontSize: 20 },
  cardText: { flex: 1 },
  cardLabel: { fontSize: 15, fontWeight: '700', color: '#1a3a2a', marginBottom: 3 },
  cardSummary: { fontSize: 12, color: '#888', lineHeight: 17 },
  chevron: { fontSize: 14, color: '#aaa', fontWeight: '700' },
  detail: { paddingHorizontal: 14, paddingBottom: 14, paddingLeft: 70, borderTopWidth: 1, borderTopColor: '#f5f5ee' },
  detailText: { fontSize: 13, color: '#4a6a5a', lineHeight: 20, paddingTop: 10 },
});
