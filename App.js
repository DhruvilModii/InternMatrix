import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  Alert,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

// --- Official Brand Palette ---
const BRAND = {
  iceLatte: '#E4DDD3',   // Light Beige Background
  mint: '#00A19B',       // Primary Brand Color
  black: '#000000',      // High Contrast Text/Elements
  white: '#FFFFFF',      // Card Backgrounds
  grayText: '#666666',   // Secondary Text
  lightBorder: '#D1CAC0' // Subtle borders for Ice Latte
};

const COURSES = [
  { id: '1', title: 'Full-Stack Web Development (MERN)', duration: '8 Weeks', price: '₹1,499', oldPrice: '₹4,999', rating: '4.8', category: 'Engineering' },
  { id: '2', title: 'Data Analytics & Visualization', duration: '6 Weeks', price: '₹999', oldPrice: '₹3,499', rating: '4.7', category: 'Data Science' },
  { id: '3', title: 'Advanced UI/UX Product Design', duration: '4 Weeks', price: '₹899', oldPrice: '₹2,999', rating: '4.9', category: 'Design' },
  { id: '4', title: 'Cybersecurity & Ethical Hacking', duration: '5 Weeks', price: '₹1,299', oldPrice: '₹3,999', rating: '4.6', category: 'Security' },
];

const STATS = [
  { label: 'Students', value: '10K+' },
  { label: 'Programs', value: '45+' },
  { label: 'Hired', value: '92%' },
];

// --- Premium Shadow Styles ---
const dropShadow = {
  shadowColor: BRAND.black,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 5,
};

// --- Main App Component ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={BRAND.iceLatte} />
      
      {!isLoggedIn ? (
        <AuthScreen onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <MainScrollingApp onLogout={() => setIsLoggedIn(false)} />
      )}
    </SafeAreaView>
  );
}

// --- 1. Professional Auth Screen ---
const AuthScreen = ({ onLogin }) => {
  const [authMode, setAuthMode] = useState('login'); 
  const isLogin = authMode === 'login';

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.authContainer}>
      
      <View style={styles.authTopHalf}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoBadgeText}>IM</Text>
        </View>
        <Text style={styles.authMainLogo}>INTERN<Text style={{color: BRAND.mint}}>MATRIX</Text></Text>
        <Text style={styles.authSubtitle}>Accelerate your career trajectory.</Text>
      </View>

      <View style={[styles.authCard, dropShadow]}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, isLogin && styles.tabActive]} onPress={() => setAuthMode('login')}>
            <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, !isLogin && styles.tabActive]} onPress={() => setAuthMode('signup')}>
            <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Register</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
          {!isLogin && (
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>FULL NAME</Text>
              <TextInput style={styles.input} placeholder="e.g. John Doe" placeholderTextColor={BRAND.lightBorder} />
            </View>
          )}

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
            <TextInput style={styles.input} placeholder="name@company.com" placeholderTextColor={BRAND.lightBorder} keyboardType="email-address" autoCapitalize="none" />
          </View>
          
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <TextInput style={styles.input} placeholder="••••••••" placeholderTextColor={BRAND.lightBorder} secureTextEntry />
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
            <Text style={styles.primaryButtonText}>{isLogin ? 'ACCESS DASHBOARD' : 'CREATE ACCOUNT'}</Text>
          </TouchableOpacity>

          {isLogin && (
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Recover Password</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

// --- 2. Main Continuous Scrolling App ---
const MainScrollingApp = ({ onLogout }) => {
  const [verifyCode, setVerifyCode] = useState('');

  const handleVerify = () => {
    if(!verifyCode) {
        Alert.alert("Error", "Please provide a valid Certificate ID.");
        return;
    }
    Alert.alert("System Check", `Authenticating Certificate ID: ${verifyCode}`);
  };

  return (
    <View style={styles.mainContainer}>
      
      {/* Sticky Header */}
      <View style={[styles.header, dropShadow]}>
        <Text style={styles.headerLogo}>INTERN<Text style={{color: BRAND.mint}}>MATRIX</Text></Text>
        <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        
        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>⚡ LIMITED TIME: USE 'INTERN25' FOR SPECIAL PRICING</Text>
        </View>

        {/* High-Impact Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTag}>VERIFIED INTERNSHIPS</Text>
            <Text style={styles.heroTitle}>Build products.{'\n'}Build your resume.</Text>
            <Text style={styles.heroSubtitle}>Join elite training programs designed by industry experts to get you hired faster.</Text>
            
            <View style={styles.statsRow}>
              {STATS.map((stat, i) => (
                <View key={i} style={styles.statBlock}>
                  <Text style={styles.statVal}>{stat.value}</Text>
                  <Text style={styles.statLab}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Courses Section */}
        <View style={styles.sectionPadding}>
          <Text style={styles.sectionHeading}>Industry Programs</Text>
          
          {COURSES.map((course) => (
            <View key={course.id} style={[styles.courseCard, dropShadow]}>
              <View style={styles.courseHeader}>
                 <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{course.category}</Text>
                 </View>
                 <Text style={styles.durationText}>⏱ {course.duration}</Text>
              </View>
              
              <Text style={styles.courseTitle}>{course.title}</Text>
              
              <View style={styles.courseFooter}>
                <View>
                  <Text style={styles.ratingText}>★ {course.rating} / 5.0</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{course.price}</Text>
                    <Text style={styles.oldPriceText}>{course.oldPrice}</Text>
                  </View>
                </View>
                
                <TouchableOpacity 
                  style={styles.enrollButton}
                  onPress={() => Alert.alert("Checkout", `Preparing enrollment for ${course.title}`)}
                >
                  <Text style={styles.enrollButtonText}>Enroll Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Verification Section (Dark Contrast Block) */}
        <View style={styles.darkSection}>
          <View style={styles.sectionPadding}>
            <Text style={[styles.sectionHeading, {color: BRAND.white}]}>Verify Certificate</Text>
            <Text style={styles.verifyDescription}>
              Partner networks and employers can instantly verify the authenticity of an InternMatrix credential below.
            </Text>
            
            <View style={styles.verifyBox}>
              <TextInput
                style={styles.verifyInput}
                placeholder="ENTER CERTIFICATE ID"
                placeholderTextColor={BRAND.grayText}
                value={verifyCode}
                onChangeText={setVerifyCode}
                autoCapitalize="characters"
              />
              <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Authenticate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.sectionPadding}>
          <Text style={styles.sectionHeading}>About Us</Text>
          <View style={[styles.aboutCard, dropShadow]}>
            <Text style={styles.aboutText}>
              InternMatrix bridges the critical gap between university theory and enterprise application. We provide a strictly vetted curriculum, hands-on architectural experience, and direct mentorship from senior engineers.
            </Text>
            <View style={styles.contactDivider} />
            <Text style={styles.contactText}><Text style={{fontWeight: 'bold'}}>Email:</Text> corporate@internmatrix.com</Text>
            <Text style={styles.contactText}><Text style={{fontWeight: 'bold'}}>HQ:</Text> Tech Park, Sector 4</Text>
          </View>
        </View>

        <View style={{height: 80}} />
      </ScrollView>
    </View>
  );
};

// --- Stylesheet ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BRAND.iceLatte },
  
  // --- Auth Styles ---
  authContainer: { flex: 1, backgroundColor: BRAND.iceLatte, justifyContent: 'center', paddingHorizontal: 20 },
  authTopHalf: { alignItems: 'center', marginBottom: 40 },
  logoBadge: { backgroundColor: BRAND.black, width: 60, height: 60, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  logoBadgeText: { color: BRAND.mint, fontSize: 24, fontWeight: '900', fontStyle: 'italic' },
  authMainLogo: { fontSize: 32, fontWeight: '900', color: BRAND.black, letterSpacing: -1 },
  authSubtitle: { fontSize: 16, color: BRAND.grayText, marginTop: 5, fontWeight: '500' },
  
  authCard: { backgroundColor: BRAND.white, borderRadius: 24, padding: 25, width: '100%', maxHeight: '75%' },
  tabContainer: { flexDirection: 'row', marginBottom: 25, borderBottomWidth: 2, borderBottomColor: BRAND.iceLatte },
  tab: { flex: 1, paddingVertical: 15, alignItems: 'center' },
  tabActive: { borderBottomColor: BRAND.mint, borderBottomWidth: 3, marginBottom: -2 },
  tabText: { color: BRAND.grayText, fontSize: 15, fontWeight: '700', textTransform: 'uppercase' },
  tabTextActive: { color: BRAND.black },
  
  inputWrapper: { marginBottom: 20 },
  inputLabel: { fontSize: 11, fontWeight: '800', color: BRAND.black, letterSpacing: 1, marginBottom: 8 },
  input: { backgroundColor: '#F9F9F9', borderWidth: 1, borderColor: BRAND.iceLatte, borderRadius: 12, color: BRAND.black, paddingHorizontal: 16, paddingVertical: 16, fontSize: 16, fontWeight: '500' },
  
  primaryButton: { backgroundColor: BRAND.mint, paddingVertical: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  primaryButtonText: { color: BRAND.white, fontSize: 15, fontWeight: '800', letterSpacing: 0.5 },
  forgotPassword: { alignItems: 'center', marginTop: 25 },
  forgotPasswordText: { color: BRAND.grayText, fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' },

  // --- Main App Styles ---
  mainContainer: { flex: 1, backgroundColor: BRAND.iceLatte },
  
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: BRAND.white, zIndex: 10 },
  headerLogo: { fontSize: 22, fontWeight: '900', color: BRAND.black, letterSpacing: -0.5 },
  logoutBtn: { backgroundColor: BRAND.iceLatte, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8 },
  logoutBtnText: { color: BRAND.black, fontSize: 13, fontWeight: '700' },
  
  scrollView: { flex: 1 },
  
  promoBanner: { backgroundColor: BRAND.black, paddingVertical: 12, alignItems: 'center' },
  promoText: { color: BRAND.white, fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  
  // Hero Section
  heroSection: { backgroundColor: BRAND.mint, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingBottom: 40, paddingTop: 30 },
  heroContent: { paddingHorizontal: 25 },
  heroTag: { color: BRAND.white, fontSize: 12, fontWeight: '800', letterSpacing: 1.5, marginBottom: 15, backgroundColor: 'rgba(0,0,0,0.15)', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6 },
  heroTitle: { fontSize: 38, fontWeight: '900', color: BRAND.white, marginBottom: 15, lineHeight: 42, letterSpacing: -1 },
  heroSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 30, lineHeight: 24, fontWeight: '500' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: BRAND.white, borderRadius: 16, padding: 20 },
  statBlock: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 22, fontWeight: '900', color: BRAND.black },
  statLab: { fontSize: 11, color: BRAND.grayText, marginTop: 4, fontWeight: '700', textTransform: 'uppercase' },

  // General Sections
  sectionPadding: { paddingHorizontal: 20, paddingTop: 35, paddingBottom: 10 },
  sectionHeading: { fontSize: 24, fontWeight: '900', color: BRAND.black, marginBottom: 20, letterSpacing: -0.5 },

  // Course Cards
  courseCard: { backgroundColor: BRAND.white, borderRadius: 20, padding: 20, marginBottom: 20 },
  courseHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  categoryBadge: { backgroundColor: BRAND.iceLatte, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  categoryBadgeText: { color: BRAND.black, fontSize: 11, fontWeight: '800', textTransform: 'uppercase' },
  durationText: { color: BRAND.grayText, fontSize: 13, fontWeight: '700' },
  courseTitle: { fontSize: 22, fontWeight: '800', color: BRAND.black, marginBottom: 20, lineHeight: 28 },
  courseFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  ratingText: { color: '#D97706', fontSize: 13, fontWeight: '800', marginBottom: 8 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  priceText: { fontSize: 22, fontWeight: '900', color: BRAND.mint, marginRight: 8 },
  oldPriceText: { fontSize: 14, color: BRAND.lightBorder, textDecorationLine: 'line-through', fontWeight: '600' },
  enrollButton: { backgroundColor: BRAND.black, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 12 },
  enrollButtonText: { color: BRAND.white, fontWeight: '800', fontSize: 14 },

  // Verify Section (Dark Block)
  darkSection: { backgroundColor: BRAND.black, marginTop: 20, paddingBottom: 20 },
  verifyDescription: { color: BRAND.iceLatte, fontSize: 15, lineHeight: 24, marginBottom: 25 },
  verifyBox: { flexDirection: 'row', backgroundColor: BRAND.white, borderRadius: 12, padding: 5 },
  verifyInput: { flex: 1, color: BRAND.black, paddingHorizontal: 15, fontSize: 14, fontWeight: '700' },
  verifyButton: { backgroundColor: BRAND.mint, paddingHorizontal: 20, paddingVertical: 15, borderRadius: 8, justifyContent: 'center' },
  verifyButtonText: { color: BRAND.white, fontWeight: '800', fontSize: 13, textTransform: 'uppercase' },

  // About Section
  aboutCard: { backgroundColor: BRAND.white, borderRadius: 20, padding: 25 },
  aboutText: { color: BRAND.grayText, fontSize: 15, lineHeight: 24, fontWeight: '500' },
  contactDivider: { height: 1, backgroundColor: BRAND.iceLatte, marginVertical: 20 },
  contactText: { color: BRAND.black, fontSize: 15, marginBottom: 8 },
});