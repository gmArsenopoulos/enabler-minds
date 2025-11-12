import { OrderData } from "../models/interfaces/OrderData";
import data from '../../../db.json'

export const getOrders = ():OrderData[]=> data.orders as OrderData[]