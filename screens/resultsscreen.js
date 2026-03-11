import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const getMsg = (s: number) => {
  if (s === 10) return { msg: "Perfect! You're a sustainability champion!", emoji: '🌟' };
  if (s >= 7)   return { msg: "Impressive! You're an eco-warrior",          emoji: '🌳' };
  if (s >= 4)   return { msg: 'Good Effort! Keep learning',                  emoji: '🌱' };
  return              { msg: 'Keep Going! Every expert starts as a beginner', emoji: '🌿' };
};

export default function ResultsScreen() {
  const router = useRouter();
  const { score: scoreParam } = useLocalSearchParams();
  const score = Number(scoreParam ?? 0);
  const { msg, emoji } = getMsg(score);

  const pct = (score / 10) * 283; // circumference ≈ 283

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Trophy */}
        <View style={styles.trophyBox}>
          <Text style={styles.trophyEmoji}>🏆</Text>
        </View>

        <Text style={styles.title}>Quiz Complete!</Text>

        {/* Ring score */}
        <View style={styles.ringWrap}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner}>
              <Text style={styles.ringScore}>{score}</Text>
              <Text style={styles.ringLabel}>out of 10</Text>
            </View>
          </View>
        </View>

        {/* Message */}
        <Text style={styles.msg}>{msg}</Text>
        <Text style={styles.emoji}>{emoji}</Text>

        {/* Best */}
        <View style={styles.bestBadge}>
          <Text style={styles.bestText}>Your Best: {score}/10</Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.btnPrimary} onPress={() => router.replace('/quiz' as any)}>
          <Text style={styles.btnPrimaryText}>🔄  Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => router.replace('/' as any)}>
          <Text style={styles.btnSecondaryText}>🏠  Back to Home</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#faf9ee' },
  container: { flex: 1, alignItems: 'center', paddingHorizontal: 24, paddingVertical: 32, gap: 14 },
  trophyBox: { width: 68, height: 68, borderRadius: 18, backgroundColor: '#fdf0dc', borderWidth: 1, borderColor: '#f0d8a8', alignItems: 'center', justifyContent: 'center' },
  trophyEmoji: { fontSize: 34 },
  title: { fontSize: 28, fontWeight: '800', color: '#1a3a2a' },
  ringWrap: { marginVertical: 4 },
  ringOuter: { width: 140, height: 140, borderRadius: 70, borderWidth: 10, borderColor: '#e8e8e8', alignItems: 'center', justifyContent: 'center', position: 'relative' },
  ringInner: { alignItems: 'center' },
  ringScore: { fontSize: 44, fontWeight: '800', color: '#1a3a2a', lineHeight: 48 },
  ringLabel: { fontSize: 12, color: '#888', marginTop: 2 },
  msg: { fontSize: 16, fontWeight: '600', color: '#1a3a2a', textAlign: 'center' },
  emoji: { fontSize: 28 },
  bestBadge: { backgroundColor: '#f5f4e8', borderWidth: 1, borderColor: '#e8e6cc', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 24 },
  bestText: { fontSize: 14, color: '#5a7a6a', fontWeight: '600' },
  btnPrimary: { width: '100%', backgroundColor: '#2d6a4f', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 6 },
  btnPrimaryText: { color: 'white', fontSize: 16, fontWeight: '700' },
  btnSecondary: { width: '100%', borderWidth: 1.5, borderColor: '#e0dfc8', borderRadius: 12, padding: 15, alignItems: 'center' },
  btnSecondaryText: { color: '#1a3a2a', fontSize: 16, fontWeight: '600' },
});
