import { StatusBar } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  function mostrarAlerta() {
    alert('Mensagem Aqui');
  }
  return (
    <View style={styles.principal}>

      <View style={styles.container1}>
        <TextInput style={styles.caixa1} placeholder='Digite seu Nome'/>

        <Button title='mostrar' onPress={mostrarAlerta} />
      </View>

      <View style={styles.container2}>
        <Text style={styles.texto}>View 1</Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.texto}>View 2</Text>
      </View>

      <View>
      <Text style={styles.texto}>View 3</Text>
      <Text style={styles.texto}>View 4</Text>
      <Text style={styles.texto}>View 5</Text>
      <Text style={styles.texto}>View 6</Text>
      <Text style={styles.texto}>View 7</Text>
      <Text style={styles.texto}>View 8</Text>
      <Text style={styles.texto}>View 9</Text>
      <Text style={styles.texto}>View 10</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'black',
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  caixa1:{
    height: 45,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    padding: 10,
    borderBottomEndRadius: 30,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
});
