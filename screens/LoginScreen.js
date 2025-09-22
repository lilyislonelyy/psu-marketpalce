import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ onSuccess }) {
    const handleSignIn = (provider) => {
      // TODO: ใส่โค้ด auth ของจริง
      // ตัวอย่างเดโม: ถ้าล็อกอินสำเร็จ ให้เข้าแท็บหลัก
      onSuccess && onSuccess();
    };
  
    return (
  
    <LinearGradient
      colors={['#AAFFE7', '#638CF2', '#0D00FF']} // ไล่สีพื้นหลัง
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
     {/* ปุ่มเปลี่ยนภาษา มุมขวาบน */}
      <TouchableOpacity style={styles.langButton} onPress={() => alert('Change Language')}>
        <Image 
          source={require('../assets/Language.png')}   // ไฟล์รูปใน assets/lang.png (เช่น รูปโลกหรือธง)
          style={styles.langIcon}
        />
      </TouchableOpacity>
      
      {/* โลโก้ + ข้อความ 2 บรรทัด */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoRow}>
          <Image 
            source={require('../assets/CartLogo.png')}   // ใส่โลโก้รถเข็นใน assets/logo.png
            style={styles.logoImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.logoTextTop}>PSU</Text>
            <Text style={styles.logoTextBottom}>Market place</Text>
          </View>
        </View>

        <View style={styles.bottomSection}>
          {/* Terms */}
          <Text style={styles.terms}>
            By tapping Create Account or Sign In, you agree to our 
            <Text style={styles.link}> Terms</Text>. Learn how we process your data in our 
            <Text style={styles.link}> Privacy Policy</Text> and 
            <Text style={styles.link}> Cookies Policy</Text>.
          </Text>

          {/* ปุ่ม PSU Passport */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH PSU PASSPORT</Text>
          </TouchableOpacity>

          {/* ปุ่ม Google */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH GOOGLE</Text>
          </TouchableOpacity>

          {/* ปุ่ม Apple */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH APPLE</Text>
          </TouchableOpacity>

          {/* Sign up link */}
          <Text style={styles.signup}>
            Don’t have an account? <Text style={styles.link}>Sign up</Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  langButton: {
    position: 'absolute',
    top: 70,     // ระยะจากด้านบน
    right: 30,   // ระยะจากด้านขวา
  },
  langIcon: {
    width: 28,
    height: 28,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 250,
    marginBottom: 40,
    justifyContent: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  logoTextTop: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoTextBottom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomSection: {
  flex: 1,
  justifyContent: 'flex-end',  // ดันลงล่าง
  marginBottom: 40,            // เว้นระยะจากขอบล่าง
  alignItems: 'center',
  },
  terms: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  signup: {
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
});