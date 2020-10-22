import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Welcome Back</Text>
    </ScrollView>
  );
};

export default Home;
