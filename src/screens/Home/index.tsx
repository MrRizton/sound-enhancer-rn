import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Card, IconButton, Text} from 'react-native-paper';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}>
      <Text style={styles.title}>Welcome Home</Text>
      <Card>
        <Card.Title title="Let's enhance another audio" />
        <Card.Content>
          <TouchableOpacity style={styles.tileContent} onPress={() => {}}>
            <IconButton icon="plus" />
            <Text>Choose the file to edit</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Home;
