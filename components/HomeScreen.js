import React, {useEffect} from 'react';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  //   const route = useRoute();
  //   console.log(route);
  //   useEffect(() => {
  //     getRoute();
  //   }, []);

  //   const getRoute = () => {

  //   };
  return (
    <View>
      <Text style={{color: 'black'}}>This is the Home Page</Text>
      <TouchableOpacity
        style={{paddingTop: 50}}
        onPress={() => navigation.navigate('NewPage')}>
        <Text style={{color: 'blue'}}>Go to NewPage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
