import { EActionType } from './enum/enum';
import { IEventData } from './interface/interface';

export const inputFilePath = 'input.txt';
export const outputFilePath = 'output.txt';

export const mockDataByActionType: Record<EActionType, IEventData> = {
  [EActionType.ADD]: { price: 10, addToCart: true, deleted: true, saled: false },
  [EActionType.BUY]: { price: 10, addToCart: true, deleted: true, saled: false },
  [EActionType.REMOVE]: { price: 30, addToCart: false, deleted: true, saled: false },
  [EActionType.CHECKOUT]: { price: 40, addToCart: false, deleted: false, saled: true },
}