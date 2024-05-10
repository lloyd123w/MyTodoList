import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { TodoList } from './src/TodoList';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <Image source={require('./assets/lloyd.jpg')} style={styles.drawerImage} />
      <Text style={styles.mahName}>Lloyd Earnest A. Taburno</Text>
      <Text style={styles.sectionCode}>IT73-IT35B</Text>
      <Text style={styles.courseName}>Bachelor of Science in Information Technology</Text>
      <Text style={styles.courseDesc}>Nice</Text>
      <Text style={styles.studId}>20211457@nbsc.edu.ph</Text>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TodoList" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="TodoList" component={TodoList} options={{ title: "" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  mahName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionCode: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  courseName: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  courseDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  studId: {
    fontSize: 14,
    color: '#555',
  },
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default App;
