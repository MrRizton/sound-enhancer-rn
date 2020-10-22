import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const Settings: React.FC = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Settings</Text>
    </ScrollView>
  );
};

export default Settings;
