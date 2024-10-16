import React, {Component, useState,useEffect} from 'react';
import {Alert, Button, StyleSheet, View, Text} from 'react-native';

export default function App() {
  const [szint,setSzint]=useState(1)
  const [pont,setPont]=useState(1)
  const [kocka,setKocka]=useState(6)
  
  function novelSzint() {
      if (szint<10)
        setSzint(szint+1)

  }
  function csokkentSzint() {
    if (szint>1)
      setSzint(szint-1)
  }

  function novelPont() {
    if (pont<10)
      setPont(pont+1)

    }
  function csokkentPont() {
     if (pont>1)
      setPont(pont-1)
  }

  function novelKocka() {
    if (kocka<10)
      setKocka(kocka+1)

    }
  function csokkentKocka() {
     if (kocka>1)
      setKocka(kocka-1)
  }


    return (
      <View style={styles.container}>
{/*---------------------------------------------------Felső Flexbox */}
            <View
                  style={[
                    styles.container,
                    {
                      // Try setting `flexDirection` to `"row"`.
                      flexDirection: 'row',
                    },
                  ]}>

              <View style={{flex: 1, backgroundColor: 'darkorange'}} > 
                        <Text>Szintek száma:</Text>       
                        <View style={styles.buttonContainer}>
                          <Button onPress={novelSzint} title="+" />
                        </View>
                        <Text style={{textAlign:"center"}}>{szint}</Text>
                        <View style={styles.buttonContainer}>
                          <Button onPress={csokkentSzint} title="-" />
                        </View>
                </View>
              <View style={{flex: 1, backgroundColor: 'green'}} >
                                <Text>Pontok száma:</Text> 
                                <View style={styles.buttonContainer}>
                                  <Button onPress={novelPont} title="+" />
                                </View>
                                <Text style={{textAlign:"center"}}>{pont}</Text>
                                <View style={styles.buttonContainer}>
                                  <Button onPress={csokkentPont} title="-" />
                                </View>



              </View>

            </View>
{/*---------------------------------------------------Felső Flexbox VÉGE */}
{/*---------------------------------------------------Kocka oldalszáma  */}
            <View>
            <Text >Kocka oldalszáma:</Text> 
            <View style={styles.buttonContainer}>
                          <Button onPress={novelKocka} title="+" />
                        </View>
                        <Text style={{textAlign:"center"}}>{kocka}</Text>
                        <View style={styles.buttonContainer}>
                          <Button onPress={csokkentKocka} title="-" />
                        </View>
            </View>
{/*---------------------------------------------------Kocka oldalszáma VÉGE */}


      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
    
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});