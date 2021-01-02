import { DocumentPickerResponse } from "react-native-document-picker";
import IEnhancerOptions from "./enhancerOptions";

export interface IHistoryItem {
    file: DocumentPickerResponse;
    options: IEnhancerOptions;
}