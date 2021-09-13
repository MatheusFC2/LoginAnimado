import React, {useState, useEffect} from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Animated, 
} from 'react-native';

export default function App() {
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95,}));
  const [opacity] = useState(new Animated.Value(0));
  
  useEffect(()=>{
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }), 
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
      
    ]).start();
  }, [])

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={styles.imglogo} source={require('./src/assets/logo.png')}/>
      </View>

      <Animated.View 
        style={[
          styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
        }
        ]}
      >
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrent={false}
        onChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrent={false}
        onChangeText={()=>{}}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>


    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  container:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },

  imglogo:{
    width: 150,
    height: 100,
  },
  
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: '17',
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit:{
    backgroundColor: '#35aaff',
    width: '90%',
    height: 45,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitText:{
    color: '#fff',
    fontSize: 18,
  },

  btnRegister:{
    marginTop: 10,
  },
  
  registerText:{
    color: '#fff'
  }
});