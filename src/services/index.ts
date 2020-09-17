import {Method } from 'axios'
import request from '@/utils/request';
import config from '@/utils/config';

import api from './api';

const gen = (params: string) => {
  let url = config.apiPrefix + params;
  let method: Method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method;
    url = config.apiPrefix + paramsArray[1];
  }

  return function(data: any): Promise<any> {
    return request({
      url,
      data,
      method,
    });
  };
};

interface APIType {
  [props: string]: (data: any) => Promise<any>;
}
const APIFunction: APIType = {};
for (const key in api) {
  APIFunction[key] = gen(api[key]);
}

export default APIFunction;
