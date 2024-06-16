import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainStackParamList = {
  Main: undefined;
  Settings: undefined;
};

type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;

export type {MainStackParamList, MainStackScreenProps};
