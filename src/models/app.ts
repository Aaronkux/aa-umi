import { Effect, ImmerReducer, Subscription } from 'umi';

export interface AppState {}

export interface AppModelType {
  namespace: 'app';
  state: AppState;
  effects: {
  };
  reducers: {
  };
  subscriptions: {  };
}

const AppModel: AppModelType = {
  namespace: 'app',
  state: {},
  effects: {
  },
  reducers: {
  },
  subscriptions: {
  },
};
export default AppModel;
