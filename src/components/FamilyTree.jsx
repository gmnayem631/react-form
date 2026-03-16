import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h3>Family Money: {money}</h3>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;
