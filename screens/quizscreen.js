import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const questions = [
  { q: 'What is the main greenhouse gas?',                              opts: ['CO2','O2','N2','H2O'],                                                           ans: 'CO2' },
  { q: 'How much of Earth\'s water is fresh and accessible?',          opts: ['About 1%','About 10%','About 25%','About 50%'],                                  ans: 'About 1%' },
  { q: 'How many trees are cut down globally each year?',               opts: ['1 billion','5 billion','15 billion','50 billion'],                               ans: '15 billion' },
  { q: 'What % of global electricity comes from renewables?',          opts: ['5%','15%','Over 30%','Over 60%'],                                                 ans: 'Over 30%' },
  { q: 'How many tonnes of plastic enter the oceans each year?',       opts: ['1 million','8 million','50 million','100 million'],                               ans: '8 million' },
  { q: 'By how much has the cost of solar fallen in a decade?',        opts: ['10%','40%','70%','Over 90%'],                                                     ans: 'Over 90%' },
  { q: 'What is the main cause of deforestation?',                     opts: ['Urban expansion','Mining','Agriculture','Tourism'],                               ans: 'Agriculture' },
  { q: 'By 2025, what fraction may face water shortages?',             opts: ['One quarter','One third','Two thirds','All of it'],                               ans: 'Two thirds' },
  { q: 'Which gas do trees absorb from the atmosphere?',               opts: ['Oxygen','Nitrogen','Carbon Dioxide','Hydrogen'],                                  ans: 'Carbon Dioxide' },
  { q: 'Best action to reduce single-use plastic waste?',              opts: ['Recycle all plastic','Refuse and use reusables','Burn it safely','Bury in landfill'], ans: 'Refuse and use reusables' },
];

export default function QuizScreen() {
  const router = useRouter();
  const [cur,   setCur]   = useState(0);
  const [score, setScore] = useState(0);
  const [sel,   setSel]   = useState<string | null>(null);
  const [done,  setDone]  = useState(false);

  const q = questions[cur];
  const progress = ((cur + 1) / questions.length) * 100;

  const pick = (opt: string) => {
    if (done) return;
    setSel(opt);
    setDone(true);
    const ns = opt === q.ans ? score + 1 : score;
    if (opt === q.ans) setScore(ns);
    setTimeout(() => {
      if (cur + 1 < questions.length) {
        setCur(c => c + 1); setSel(null); setDone(false);
      } else {
        router.push({ pathname: '/results', params: { score: ns } } as any);
      }
    }, 850);
  };

  const optStyle = (opt: string) => {
    if (!done) return styles.optBtn;
    if (opt === q.ans) return [styles.optBtn, styles.optCorrect];
    if (opt === sel)   return [styles.optBtn, styles.optWrong];
    return [styles.optBtn, styles.optFaded];
  };

  const optTextStyle = (opt: string) => {
    if (!done) return styles.optText;
    if (opt === q.ans) return [styles.optText, { color: '#1a3a2a' }];
    if (opt === sel)   return [styles.optText, { color: '#d62828' }];
    return [styles.optText, { opacity: 0.4 }];
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Eco Quiz</Text>
      </View>

      <View style={styles.container}>
        {/* Progress */}
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Question {cur + 1}</Text>
          <Text style={styles.progressLabel}>{questions.length}</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` as any }]} />
        </View>

        {/* Question */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{q.q}</Text>
        </View>

        {/* Options */}
        {q.opts.map(opt => (
          <TouchableOpacity key={opt} style={optStyle(opt)} onPress={() => pick(opt)} disabled={done}>
            <Text style={optTextStyle(opt)}>{opt}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.scoreText}>Score so far: <Text style={styles.scoreNum}>{score}</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#faf9ee' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16, gap: 12 },
  backBtn: { padding: 4 },
  backArrow: { fontSize: 22, color: '#1a3a2a', fontWeight: '700' },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a3a2a' },
  container: { flex: 1, paddingHorizontal: 20 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressLabel: { fontSize: 12, color: '#7a9a8a', fontWeight: '600' },
  progressTrack: { height: 5, backgroundColor: '#e8e8d8', borderRadius: 3, marginBottom: 20, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#2d6a4f', borderRadius: 3 },
  questionCard: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#eeeede', padding: 20, marginBottom: 16 },
  questionText: { fontSize: 18, fontWeight: '700', color: '#1a3a2a', lineHeight: 26 },
  optBtn: { backgroundColor: '#fff', borderRadius: 12, borderWidth: 1.5, borderColor: '#e4e4d0', padding: 16, marginBottom: 10 },
  optCorrect: { backgroundColor: '#eaf6ed', borderColor: '#2d6a4f', borderWidth: 2 },
  optWrong: { backgroundColor: '#fdecea', borderColor: '#d62828', borderWidth: 2 },
  optFaded: { opacity: 0.4 },
  optText: { fontSize: 15, fontWeight: '500', color: '#1a3a2a' },
  scoreText: { marginTop: 8, textAlign: 'center', fontSize: 13, color: '#888' },
  scoreNum: { color: '#2d6a4f', fontWeight: '700' },
});
