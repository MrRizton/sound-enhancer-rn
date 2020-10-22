import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import _ from 'lodash';
import Video from 'react-native-video';
import {Pause, Play} from '../../icons';
import styles from './styles';

export interface IPlayerProps {
  uri: string;
  type: string;
}

const Player: React.FC<IPlayerProps> = ({uri, type}) => {
  let videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayPress = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying]);

  const onEnd = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);

  return (
    <View>
      <Video
        ref={videoRef}
        source={{uri}}
        audioOnly
        paused={!isPlaying}
        onEnd={onEnd}
      />
      <View style={styles.controlsContent}>
        <TouchableOpacity onPress={onPlayPress}>
          {isPlaying ? <Pause /> : <Play />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;
