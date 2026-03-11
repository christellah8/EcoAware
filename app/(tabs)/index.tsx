import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const navItems = [
    { icon: '📖', label: 'Learn',  sub: 'Explore 5 key sustainability topics',     route: '/info'    },
    { icon: '▶️',  label: 'Watch',  sub: 'Watch an inspiring sustainability video',  route: '/video'   },
    { icon: '🧠', label: 'Quiz',   sub: 'Test your eco-knowledge',                  route: '/quiz'    },
    { icon: '🌿', label: 'About',  sub: 'About EcoAware & our mission',             route: '/about'   },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Logo circle */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoEmoji}>🌿</Text>
        </View>

        <Text style={styles.title}>EcoAware</Text>
        <Text style={styles.subtitle}>Learn. Watch. Quiz. Act.</Text>

        {/* Nav list */}
        <View style={styles.navList}>
          {navItems.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.navItem, i < navItems.length - 1 && styles.navBorder]}
              onPress={() => router.push(item.route as any)}
              activeOpacity={0.7}
            >
              <View style={styles.navIcon}>
                <Text style={styles.navIconText}>{item.icon}</Text>
              </View>
              <View style={styles.navText}>
                <Text style={styles.navLabel}>{item.label}</Text>
                <Text style={styles.navSub}>{item.sub}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#faf9ee',
  },
  container: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 32,
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f0eed8',
    borderWidth: 1,
    borderColor: '#e0ddb8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoEmoji: {
    fontSize: 28,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1a3a2a',
    marginBottom: 6,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    color: '#6a8a7a',
    marginBottom: 36,
  },
  navList: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eeeede',
    overflow: 'hidden',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 14,
  },
  navBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeeede',
  },
  navIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#eef7f0',
    borderWidth: 1,
    borderColor: '#d0ead8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIconText: {
    fontSize: 20,
  },
  navText: {
    flex: 1,
  },
  navLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a3a2a',
    marginBottom: 2,
  },
  navSub: {
    fontSize: 12,
    color: '#8aaa98',
  },
});
