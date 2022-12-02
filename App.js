import React, {useEffect, useState} from 'react';
import {Linking, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import NewPage from './components/NewPage';

const Stack = createNativeStackNavigator();
const useMount = func => useEffect(() => func(), []);

const useInitialURL = () => {
  const [url, setUrl] = useState(null);
  const [processing, setProcessing] = useState(true);

  useMount(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  });

  return {url, processing};
};
// function parseURLParams(url) {
//   var queryStart = url.indexOf('?') + 1,
//     queryEnd = url.indexOf('#') + 1 || url.length + 1,
//     query = url.slice(queryStart, queryEnd - 1),
//     pairs = query.replace(/\+/g, ' ').split('&'),
//     parms = {},
//     i,
//     n,
//     v,
//     nv;

//   if (query === url || query === '') return;

//   for (i = 0; i < pairs.length; i++) {
//     nv = pairs[i].split('=', 2);
//     n = decodeURIComponent(nv[0]);
//     v = decodeURIComponent(nv[1]);

//     if (!parms.hasOwnProperty(n)) parms[n] = [];
//     parms[n].push(nv.length === 2 ? v : null);
//   }
//   return parms;
// }

// const linking = {
//   prefixes: ['https://www.google.co.in', 'deeplink://app'],
// };

const App = () => {
  // useEffect(() => {
  //   console.log(Linking.getInitialURL());
  //   // console.log(url)
  // }, []);
  const {url: initialUrl, processing} = useInitialURL();
  console.log(initialUrl);
  // var param = '';
  // if (initialUrl !== null) {
  //   param = parseURLParams(initialUrl);
  //   var id = initialUrl.searchParams.get('id');
  //   console.log(id);
  // }

  // console.log(param);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPage" component={NewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
