import { db } from "..";
import { ship } from "../schema";
import ships from "./data/ships.json";

export default async function seed(db:db){
    await db.insert(ship).values(ships)
}