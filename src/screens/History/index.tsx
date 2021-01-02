import React from 'react';
import {ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import { useSelector } from 'react-redux';
import HistoryList from '../../components/HistoryList';
import { State } from '../../store/types';
import styles from './styles';

const History: React.FC = () => {
  const history = useSelector((state: State) => state.history.history);
  return (
    <ScrollView>
      <Text style={styles.title}>Your history</Text>
      <HistoryList data={history} />
    </ScrollView>
  );
};

export default History;
