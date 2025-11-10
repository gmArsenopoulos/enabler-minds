// api.ts
import axios from "axios";
import { StockData } from "../models/interfaces/StockData";
import { KpiMetrics } from "../models/interfaces/KpiMetrics";
import { OrderData } from "../models/interfaces/OrderData";


const BASE_URL = "http://localhost:3001";

export const getStockData = async (): Promise<StockData[]> => {
  const { data } = await axios.get(`${BASE_URL}/stockData`);
  return data;
};

export const getOrderData = async ():Promise<OrderData[]>=>{
    const {data} = await axios.get(`${BASE_URL}/orders`)
    return data
}

export const getKPIs = async (): Promise<KpiMetrics> => {
  const { data } = await axios.get(`${BASE_URL}/kpiMetrics`);
  return data;
};

export const patchKPIs = async (updatedKPIs: KpiMetrics) => {
  await axios.patch(`${BASE_URL}/kpiMetrics`, updatedKPIs);
};

export const patchStockData = async (updatedStock: StockData[]) => {
  // json-server requires individual PATCH requests per item
  const requests = updatedStock.map((s, i) =>
    axios.patch(`${BASE_URL}/stockData/${i + 1}`, s)
  );
  await Promise.all(requests);
};
