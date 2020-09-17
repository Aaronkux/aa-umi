import { Canceler } from 'axios';
export {};

interface MyWindow extends Window {
  cancelRequest: Map<Symbol, { pathname: string; cancel: Canceler }>;
}
declare var window: MyWindow;
// window.cancelRequest = window.cancelRequest || {};
