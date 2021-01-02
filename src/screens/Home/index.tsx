import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import FileCard from '../../components/FileCard';
import AudioProcessor from '../../nativeModules/react-native-audio-processor';
import {onFilePickStartAction, removeFileAction} from '../../store/enhancer/actions';
import {updateHistoryAction} from '../../store/history/actions';
import {State} from '../../store/types';
import styles from './styles';

const Home: React.FC = () => {
  const file = useSelector((state: State) => state.enhancer.file);
  const dispatch = useDispatch();

  const onOpenPickerPress = useCallback(() => {
    dispatch(onFilePickStartAction());
  }, []);

  const addToHistory = () => {
    dispatch(updateHistoryAction({file, options: {}}));
  };

  const onError = useCallback(() => {
    console.log('onError: error occured in native code');
    addToHistory();
  }, [addToHistory]);

  const onSuccess = useCallback(
    (value) => {
      console.log('onSuccess: ', value);
      addToHistory();
    },
    [addToHistory],
  );

  const onProcessPress = useCallback(() => {
    if (file) {
      AudioProcessor.processAudio(file.uri, onSuccess, onError);
    }
  }, [file]);

  const onRemoveFile = useCallback(() => {
    dispatch(removeFileAction());
  }, []);

  console.log(file);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}>
      <Text style={styles.title}>Welcome Home</Text>
      <FileCard
        file={file}
        onProcessPress={onProcessPress}
        onOpenPickerPress={onOpenPickerPress}
        onRemoveFile={onRemoveFile}
      />
    </ScrollView>
  );
};

export default Home;
