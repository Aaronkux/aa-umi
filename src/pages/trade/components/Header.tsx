import React, { FC } from 'react';
import { Row, Col, InputNumber, Slider, Radio, Checkbox  } from 'antd';
import { connect, TradeState, useDispatch, ContinentType, AreaType } from 'umi';
// import {debounce}  from 'lodash'
import styles from './Header.less';

interface PropTypes {
  rate: number;
  profit: number;
  continents: {
    [id: string]: ContinentType;
  };
  currentContinent: number;
  currentOrigin: number;
  warProfit: boolean
}

const Header: FC<PropTypes> = ({
  rate,
  profit,
  continents,
  currentContinent,
  currentOrigin,
  warProfit
}) => {
  const dispatch = useDispatch();
  const currentArea = continents[currentContinent].areas[currentOrigin]
  return (
    <Row className={styles.header} align="middle">
      <Col span={6}>
        <Radio.Group
          value={currentContinent}
          size="small"
          style={{marginBottom: '1px'}}
          onChange={e => {
            dispatch({
              type: 'trade/selectContinent',
              payload: e.target.value,
            });
            dispatch({
              type: 'trade/selectOrigin',
              payload: Object.values(continents[e.target.value].areas)[0].id,
            });
          }}
        >
          {Object.values(continents).map(continent => (
            <Radio.Button key={continent.id} value={continent.id}>{continent.name}</Radio.Button>
          ))}
        </Radio.Group>
        <Radio.Group
          value={currentOrigin}
          size="small"
          onChange={e => {
            dispatch({
              type: 'trade/selectOrigin',
              payload: e.target.value,
            });
          }}
        >
          {Object.values(continents[currentContinent].areas).map(area => {
            return <Radio.Button key={area.id} value={area.id}>{area.name}</Radio.Button>
          })}
        </Radio.Group>
      </Col>
      <Col span={9}>
        <Checkbox checked={warProfit} onChange={()=>dispatch({type: 'trade/switchWarProfit', payload: !warProfit})} disabled={!currentArea.warArea} >战争+15%</Checkbox>
        <Radio.Group
          value={profit}
          size="small"
          onChange={e => {
            dispatch({
              type: 'trade/selectProfit',
              payload: e.target.value,
            });
          }}
        >
          <Radio.Button value={0}>新鲜利润</Radio.Button>
          <Radio.Button value={1}>普通利润</Radio.Button>
          <Radio.Button value={2}>变质利润</Radio.Button>
          <Radio.Button value={3}>不新鲜利润</Radio.Button>
          <Radio.Button value={4}>腐烂利润</Radio.Button>
        </Radio.Group>
      </Col>
      <Col className={styles.rate_slider} span={6}>
        <Slider
          min={50}
          max={130}
          step={1}
          value={rate}
          onChange={(value: number) =>
            dispatch({ type: 'trade/selectRate', payload: value })
          }
        />
      </Col>
      <Col span={3} className={styles.rate_input}>
        <InputNumber
          min={50}
          max={130}
          step={1}
          size="small"
          value={rate}
          active-change={false}
          onChange={value =>
            dispatch({ type: 'trade/selectRate', payload: value })
          }
        />
      </Col>
    </Row>
  );
};

export default connect(({ trade }: { trade: TradeState }) => ({
  rate: trade.rate,
  profit: trade.profit,
  continents: trade.continents,
  currentOrigin: trade.currentOrigin,
  currentContinent: trade.currentContinent,
  warProfit: trade.warProfit
}))(Header);
