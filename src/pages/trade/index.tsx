import React, { FC, useEffect } from 'react';
import { Table } from 'antd';
import { cloneDeep } from 'lodash';
import {
  connect,
  TradeState,
  MainlandType,
  ProfitLevelType,
  Loading,
  useDispatch,
} from 'umi';
import { ColumnsType } from 'antd/es/table';
import config from '@/utils/config';
import { Header } from './components';
import styles from './index.less';
interface PropTypes {
  profit: number;
  rate: number;
  currentPack: MainlandType[];
  profitLevel: ProfitLevelType;
  warProfit: boolean;
  loading: boolean;
}

const originBackgroundColor: { [prop: number]: string } = {
  1: '#d275ff',
  2: '#3887ff',
  3: '#ff9255',
  4: '#36bd4b',
};

function priceRender(text: number | string, record: MainlandType) {
  return (
    <span className={styles.text}>
      {typeof text === 'number' ? (text === 0 ? '--' : text.toFixed(4)) : text}
    </span>
  );
}

const columns: { [prop: string]: ColumnsType<MainlandType> } = {
  mainland: [
    {
      title: '产地',
      dataIndex: 'origin',
      key: 'origin',
      onCell: (record, rowIndex) => {
        return {
          style: {
            backgroundColor: originBackgroundColor[record.level],
            padding: '0 16px !important',
          },
        };
      },
      render: origin => (
        <div style={{ textAlign: 'center', color: '#fff', fontWeight: 900 }}>
          {origin}
        </div>
      ),
    },
    {
      title: '普通货',
      dataIndex: 'normal',
      key: 'normal',
      align: 'right' as 'right',
      render: priceRender,
    },
    {
      title: '星星货',
      dataIndex: 'glida',
      align: 'right' as 'right',
      key: 'glida',
      render: priceRender,
    },
    {
      title: '居民货',
      dataIndex: 'local',
      align: 'right' as 'right',
      key: 'local',
      render: priceRender,
    },
    {
      title: '房子货',
      dataIndex: 'fertilizer',
      align: 'right' as 'right',
      key: 'fertilizer',
      render: priceRender,
    },
    {
      title: '发酵药材',
      dataIndex: 'salve',
      align: 'right' as 'right',
      key: 'salve',
      render: priceRender,
    },
    {
      title: '发酵芝士',
      dataIndex: 'cheese',
      align: 'right' as 'right',
      key: 'cheese',
      render: priceRender,
    },
    {
      title: '发酵蜂蜜',
      dataIndex: 'honey',
      align: 'right' as 'right',
      key: 'honey',
      render: priceRender,
    },
    {
      title: '债券货',
      dataIndex: 'bluesalt',
      align: 'right' as 'right',
      key: 'bluesalt',
      render: priceRender,
    },
    {
      title: 'boss特产',
      dataIndex: 'special',
      align: 'right' as 'right',
      key: 'special',
      render: priceRender,
    },
    {
      title: '会馆特产',
      dataIndex: 'antiquities',
      align: 'right' as 'right',
      key: 'antiquities',
      render: priceRender,
    },
  ],
  // haranya: {},
};

const calcPrice = (
  price: number,
  rate: number,
  profit: number,
  profitLevel: ProfitLevelType,
  level: number,
  isLarder: boolean,
  taxInclude: boolean,
  warProfit: boolean,
) => {
  const isLarderIndex = isLarder ? 1 : 0;
  const warAdds = warProfit ? 1.15 : 1;
  const tax = taxInclude ? 1.02 : 1;
  return (
    (price *
      tax *
      rate *
      warAdds *
      (profitLevel[level][isLarderIndex][profit] + 1)) /
    (profitLevel[level][isLarderIndex][0] + 1) /
    100 /
    1.3
  );
};

const calcFinalPriceData = (
  data: MainlandType[],
  rate: number,
  profit: number,
  profitLevel: ProfitLevelType,
  warProfit: boolean,
  taxInclude: boolean = false,
) => {
  const copy = cloneDeep(data);
  return copy.map(item => {
    item.normal = calcPrice(
      item.normal,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );
    item.glida = calcPrice(
      item.glida,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );
    item.local = calcPrice(
      item.local,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );
    item.fertilizer = calcPrice(
      item.fertilizer,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );
    item.salve = calcPrice(
      item.salve,
      rate,
      profit,
      profitLevel,
      item.level,
      true,
      taxInclude,
      warProfit,
    );
    item.cheese = calcPrice(
      item.cheese,
      rate,
      profit,
      profitLevel,
      item.level,
      true,
      taxInclude,
      warProfit,
    );
    item.honey = calcPrice(
      item.honey,
      rate,
      profit,
      profitLevel,
      item.level,
      true,
      taxInclude,
      warProfit,
    );
    item.bluesalt = calcPrice(
      item.bluesalt,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      false,
    );
    item.special = calcPrice(
      item.special,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );
    item.antiquities = calcPrice(
      item.antiquities,
      rate,
      profit,
      profitLevel,
      item.level,
      false,
      taxInclude,
      warProfit,
    );

    return item;
  });
};

function compare(a: MainlandType, b: MainlandType) {
  if (a.order < b.order ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a.order > b.order ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const Trade: FC<PropTypes> = ({
  rate,
  profit,
  currentPack,
  profitLevel,
  warProfit,
  loading,
}) => {
  const finalData = calcFinalPriceData(
    currentPack,
    rate,
    profit,
    profitLevel,
    warProfit,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentPack.length === 0)
      dispatch({
        type: 'trade/query',
        payload: {
          serverId: window.localStorage.getItem('serverId') || config.serverId,
        },
      });
  }, []);
  return (
    <>
      {currentPack.length > 0 ? <Header /> : <></>}
      <div style={{ minWidth: '1100px' }}>
        <Table
          loading={loading}
          columns={columns.mainland}
          dataSource={finalData.sort(compare)}
          pagination={false}
        />
      </div>
    </>
  );
};
export default connect(
  ({ trade, loading }: { trade: TradeState; loading: Loading }) => ({
    rate: trade.rate,
    profit: trade.profit,
    currentPack:
      Object.values(trade.continents).length > 1
        ? Object.values(trade.continents[trade.currentContinent].areas[trade.currentOrigin].packs)
        : [],
    profitLevel: trade.profitLevel,
    warProfit: trade.warProfit,
    loading: loading.models.trade,
  }),
)(React.memo(Trade));
