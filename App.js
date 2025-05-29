import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScree from './screens/MealDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: '#b57ede'},
              headerTintColor: 'dark',
              contentStyle: { backgroundColor: '#'}
          }}
        >
          <Stack.Screen 
            name="PerfumeCategories" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'dark',
              contentStyle: { backgroundColor: '#b57ede'}
            }} 
          />
          <Stack.Screen 
            name="MealDetails" 
            component={MealDetailScree} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});