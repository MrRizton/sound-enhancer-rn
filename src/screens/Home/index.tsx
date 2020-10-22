import React, {useCallback} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Card, IconButton, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {onFilePickStartAction} from '../../store/enhancer/actions';
import {State} from '../../store/types';
import styles from './styles';
import _ from 'lodash';
import {Player} from '../../components';

const Home: React.FC = () => {
  const file = useSelector((state: State) => state.enhancer.file);
  const dispatch = useDispatch();

  const onOpenPickerPress = useCallback(() => {
    dispatch(onFilePickStartAction());
  }, []);

  console.log(file?.uri);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}>
      <Text style={styles.title}>Welcome Home</Text>
      <Card>
        <Card.Title title="Let's enhance another audio" />
        <Card.Content>
          {file ? (
            <View>
              <Text style={styles.fileName}>{file.name}</Text>
              <View style={styles.fileStatsContainer}>
                <Text style={styles.fileStats}>{`File size: ${_.round(
                  file.size / 1000000,
                  2,
                )} MB`}</Text>
                <Text
                  style={styles.fileStats}>{`File type: ${file.type}`}</Text>
              </View>
              <Player uri={`${file.uri}`} type={file.type} />
            </View>
          ) : (
            <TouchableOpacity
              style={[styles.tileContent, styles.addContent]}
              onPress={onOpenPickerPress}>
              <IconButton icon="plus" />
              <Text>Choose the file to edit</Text>
            </TouchableOpacity>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Home;
