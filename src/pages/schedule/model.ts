import { Effect, ImmerReducer, Subscription } from 'umi';
import config from '@/utils/config';
import api from '@/services';
const { querySchedule } = api;

type Time = {
  id: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  last: number;
};

export interface EventType {
  id: number;
  name: string;
  icon: string;
  times: Time[];
}

export interface EventsType {
  id: number;
  title: string;
  titleBackgroundColor: string;
  inProgressBackgroundColor: string;
  icon: string;
  events: EventType[];
}

export interface ActivityState {
  activities: {
    [prop: string]: EventsType;
  };
  now: Date;
  position: {
    '1': [string[]];
    '2': [string[], string[]];
    '3': [string[], string[], string[]];
  };
}

export interface ActivityModelType {
  namespace: 'activity';
  state: ActivityState;
  effects: {
    query: Effect;
  };
  reducers: {
    updateNow: ImmerReducer<ActivityState>;
    save: ImmerReducer<ActivityState>;
  };
  subscriptions: { setup: Subscription };
}
const ActivityModel: ActivityModelType = {
  namespace: 'activity',
  state: {
    activities: {},
    now: new Date(),
    position: { '1': [[]], '2': [[], []], '3': [[], [], []] },
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(querySchedule, payload);
      const activities: {
        [prop: string]: EventsType;
      } = {};
      res.activities.forEach(
        (item: EventsType) => (activities[item.id] = item),
      );
      if (res.success) {
        yield put({
          type: 'save',
          payload: { activities: activities, position: res.position },
        });
      }
    },
  },
  reducers: {
    updateNow(state, action) {
      state.now = action.payload;
    },
    save(state, action) {
      state.activities = action.payload.activities;
      state.position = action.payload.position;
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      // 设置计时器
      setInterval(
        () => dispatch({ type: 'updateNow', payload: new Date() }),
        1000,
      );
      // 初始化数据请求
      dispatch({
        type: 'query',
        payload: {
          serverId: window.localStorage.getItem('serverId') || config.serverId,
        },
      });
    },
  },
};
export default ActivityModel;
