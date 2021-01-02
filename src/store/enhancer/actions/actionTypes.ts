export const SetFileActionType = '@@ENHANCER/SET_FILE';
export const OnFilePickStartActionType = '@@ENHANCER/START_PICKING_FILE';
export const RemoveFileActionType = '@@ENHANCER/REMOVE_FILE';

type EnhancerActionTypes =
  | typeof SetFileActionType
  | typeof OnFilePickStartActionType
  | typeof RemoveFileActionType;

export default EnhancerActionTypes;
