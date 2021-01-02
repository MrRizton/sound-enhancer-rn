import {NativeModules} from 'react-native';

// export default class AudioProcessor {
//   static processAudio(uri, onSuccess, onError) {
//     NativeModules.AudioProcessor.processAudio(uri, onSuccess, onError);
//   }
// }

const { AudioProcessor } =  NativeModules;

export default AudioProcessor;