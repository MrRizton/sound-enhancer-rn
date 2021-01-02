import React from 'react';
import { ListRenderItem } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { FlatList } from 'react-native-gesture-handler';
import { IHistoryItem } from '../../types/history';
import HistoryListItem from './HistoryListItem';

interface IHistoryListProps {
    data: Array<IHistoryItem>;
}

const HistoryList: React.FC<IHistoryListProps> = ({ data }) => {
    const renderListItem: ListRenderItem<IHistoryItem> = ({ item }) => <HistoryListItem item={item} />

    return <FlatList renderItem={renderListItem} data={data}/>
}

export default HistoryList;