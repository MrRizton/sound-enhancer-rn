export const SetFileActionType = '@@ENHANCER/SET_FILE';
export const OnFilePickStartActionType = '@@ENHANCER/START_PICKING_FILE';

type EnhancerActionTypes =
  | typeof SetFileActionType
  | typeof OnFilePickStartActionType;

export default EnhancerActionTypes;
