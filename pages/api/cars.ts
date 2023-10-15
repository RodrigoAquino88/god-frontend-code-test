import { NextApiRequest, NextApiResponse } from "next";
import data from './../../public/api/cars.json';

export default async function handler(re:NextApiRequest, res:NextApiResponse){
    res.status(200).json(data);
}