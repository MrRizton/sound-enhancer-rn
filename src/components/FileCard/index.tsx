import _ from 'lodash';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {Card, IconButton, Text} from 'react-native-paper';
import {Player} from '..';
import styles from './styles';

export interface IFileCardProps {
  file?: DocumentPickerResponse;
  onProcessPress?: () => void;
  onOpenPickerPress?: () => void;
  onRemoveFile?: () => void;
}

const FileCard: React.FC<IFileCardProps> = ({
  file,
  onProcessPress,
  onOpenPickerPress,
  onRemoveFile,
}) => {
  return (
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
              <Text style={styles.fileStats}>{`File type: ${file.type}`}</Text>
            </View>
            <Player uri={`${file.uri}`} type={file.type} />
            <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={onProcessPress}>
              <Text>Process</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={onRemoveFile}>
              <Text>Choose another file</Text>
            </TouchableOpacity>
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
  );
};

export default FileCard;
