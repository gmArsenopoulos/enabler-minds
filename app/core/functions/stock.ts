
import data from "../../../db.json"

export const modifiedStock = (percentIncrease:number)=>{
    return data.stockData.map(d=>({...d,demand:Math.round(d.demand + (percentIncrease * d.demand)/100)}))
}


