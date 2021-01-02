import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {IHistoryItem} from '../../types/history';

export interface HistoryListItemProps {
  item: IHistoryItem;
}

const HistoryListItem: React.FC<HistoryListItemProps> = ({item}) => {
  const {file, options} = item;
  return (
    <View>
      <Card>
        <Card.Title title={file.name} />
      </Card>
    </View>
  );
};

export default HistoryListItem;
