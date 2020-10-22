import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const History: React.FC = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Your history</Text>
    </ScrollView>
  );
};

export default History;
