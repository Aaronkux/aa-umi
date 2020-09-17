import { Effect, ImmerReducer, Subscription } from 'umi';
import config from '@/utils/config';
import api from '@/services';
const { queryTrade } = api;

export enum ProfitStage {
  High,
  Regular,
  Reduced,
  Diminished,
  Low,
}

export interface ContinentType {
  id: number;
  name: string;
  areas: {
    [id: number]: AreaType;
  };
}

export interface AreaType {
  id: number;
  name: string;
  warArea: boolean;
  packs: {
    [id: number]: MainlandType;
  };
}

export interface ProfitLevelType {
  [prop: number]: {
    [prop: number]: {
      [prop: number]: number;
    };
  };
}

export interface MainlandType {
  id: number;
  key: number;
  origin: string;
  level: number;
  normal: number;
  glida: number;
  local: number;
  fertilizer: number;
  salve: number;
  cheese: number;
  honey: number;
  bluesalt: number;
  special: number;
  antiquities: number;
  order: number;
}

export interface TradeState {
  rate: number;
  profit: ProfitStage;
  taxInclude: boolean;
  currentContinent: number;
  currentOrigin: number;
  warProfit: boolean;
  continents: {
    [id: number]: ContinentType;
  };
  profitLevel: ProfitLevelType;
}

export interface TradeModelType {
  namespace: 'trade';
  state: TradeState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: ImmerReducer<TradeState>;
    selectRate: ImmerReducer<TradeState>;
    selectProfit: ImmerReducer<TradeState>;
    selectTaxInclude: ImmerReducer<TradeState>;
    selectContinent: ImmerReducer<TradeState>;
    selectOrigin: ImmerReducer<TradeState>;
    switchWarProfit: ImmerReducer<TradeState>;
  };
  subscriptions: { setup: Subscription };
}

const TradeModel: TradeModelType = {
  namespace: 'trade',
  state: {
    rate: 130,
    profit: ProfitStage.High,
    taxInclude: false,
    currentContinent: 0,
    currentOrigin: 0,
    warProfit: false,

    continents: {},
    profitLevel: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(queryTrade, payload);
      if (res.success) {
        const firstContinentId = parseInt(Object.keys(res.continents)[0]);
        const firstOriginId = parseInt(Object.keys(
          res.continents[firstContinentId].areas,
        )[0]);
        yield put({
          type: 'save',
          payload: {
            continents: res.continents,
            profitLevel: res.profitLevel,
            firstContinentId,
            firstOriginId,
          },
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      state.continents = action.payload.continents;
      state.profitLevel = action.payload.profitLevel;
      state.currentContinent = action.payload.firstContinentId;
      state.currentOrigin = action.payload.firstOriginId;
    },
    selectRate(state, action) {
      state.rate = action.payload;
    },
    selectProfit(state, action) {
      state.profit = action.payload;
    },
    selectTaxInclude(state, action) {
      state.taxInclude = !state.taxInclude;
    },
    selectContinent(state, action) {
      state.currentContinent = action.payload;
    },
    selectOrigin(state, action) {
      state.currentOrigin = action.payload;
      if (
        state.continents[state.currentContinent].areas[state.currentOrigin]
          .warArea === false &&
        state.warProfit === true
      )
        state.warProfit = false;
    },
    switchWarProfit(state, action) {
      state.warProfit = action.payload;
    },
  },
  subscriptions: {
    setup() {},
  },
};

export default TradeModel;
