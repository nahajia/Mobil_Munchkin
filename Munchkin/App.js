import React, {Component, useState,useEffect} from 'react';
import {Alert, Button, StyleSheet, View, Text, Image} from 'react-native';

export default function App() {
  const [szint,setSzint]=useState(1)
  const [pont,setPont]=useState(1)
  const [kocka,setKocka]=useState(6)
  const [veletlen,setVeletlen]=useState(1)
  const [lathatoKocka,setLathatoKocka]=useState(false)
  
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

  const veletlenGeneral=()=>{
      let vel=Math.floor(Math.random() * kocka) + 1;
      setVeletlen(vel)

      setLathatoKocka(true)
      setTimeout(()=>{setLathatoKocka(false)},1000)

  }

    return (
      <View style={styles.container}>
{/*---------------------------------------------------Felső Flexbox */}
            <View
                  style={[
                  
                    {
                      // Try setting `flexDirection` to `"row"`.
                      flexDirection: 'row',
                    },
                  ]}>

              <View style={{flex: 1, margin:10,backgroundColor:"#a9a9a9"}} > 
                        <Text style={{
                          backgroundColor:"darkred", 
                          color:"white", 
                          textAlign:"center",
                          padding:10,
                          margin:10
                          }}>
                          Szintek száma:</Text>       
                        <View style={styles.buttonContainer}>
                          <Button onPress={novelSzint} title="+" />
                        </View>
                        <Text style={{
                          textAlign:"center", 
                          backgroundColor:"darkred",
                          marginLeft:40,
                          marginRight:40,
                          marginVertical:10,
                          padding:5,
                          color:"white"
                          }}>{szint}</Text>
                        <View style={styles.buttonContainer}>
                          <Button onPress={csokkentSzint} title="-" />
                        </View>
                </View>
              <View style={{flex: 1, backgroundColor: '#a9a9a9', margin:10}} >
                                <Text style={{
                              backgroundColor:"darkred", 
                              color:"white", 
                              textAlign:"center",
                              padding:10,
                              margin:10
                              }}>
                            Pontok száma:</Text> 
                                <View style={styles.buttonContainer}>
                                  <Button onPress={novelPont} title="+" />
                                </View>
                                <Text style={{
                                  textAlign:"center", 
                                  backgroundColor:"darkred",
                                  marginLeft:40,
                                  marginRight:40,
                                  marginVertical:10,
                                  padding:5,
                                  color:"white"
                                  }}>
                                    {pont}</Text>
                                <View style={styles.buttonContainer}>
                                  <Button onPress={csokkentPont} title="-" />
                                </View>


              </View>

            </View>
{/*---------------------------------------------------Felső Flexbox VÉGE */}

{/*------------------------------------------------------- VONAL*/}  
<View style={{borderColor:"black", borderWidth:1}}></View>
{/*------------------------------------------------------- VONAL VÉGE*/}                  


{/*---------------------------------------------------Kocka oldalszáma  */}
            <View>
            <Text style={{textAlign:"center", margin:10}}>Kocka oldalszáma:</Text> 
            <View style={styles.buttonContainer2}>
                          <Button onPress={novelKocka} title="+" />
                        </View>
                        <Text 
                        style={{
                          textAlign:"center", 
                          backgroundColor:"blue",
                          margin:"auto",
                          marginVertical:10,
                          padding:5,
                          color:"white",
                          width:200
                          }}
                        >{kocka}</Text>
                        <View style={styles.buttonContainer2}>
                          <Button onPress={csokkentKocka} title="-" />
                        </View>
            </View>
{/*---------------------------------------------------Kocka oldalszáma VÉGE */}
{/*---------------------------------------------------Kockadobás  */}
            <View style={{marginTop:20, marginLeft:10, marginRight:10}}>
            <Button  onPress={()=>veletlenGeneral()} title="Kockadobás" />
            <Text style={styles.kozep}>Kockadobás eredménye</Text>
            { lathatoKocka    
              ?   
              <Image source={require("./kocka.gif")} style={{width:50,height:50, margin:"auto"}}/>
              :  
              <Text style={[styles.felkover,styles.kozep]}>{veletlen}</Text>               
              }
             

            </View>
{/*---------------------------------------------------Kockadobás VÉGE */}
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40
    
  },
  buttonContainer: {
    marginLeft: 40,
    marginRight:40
  },
  buttonContainer2: {
   width:150,
   margin:"auto"
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  felkover:{
    fontWeight:"bold"
  },
  kozep:{
    textAlign:"center",
    margin:10
  }
});