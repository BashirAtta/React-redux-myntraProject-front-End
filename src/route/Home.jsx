import React from "react";
import HomeItem from "../component/HomeItem";
import { useSelector } from "react-redux";

export default function Home() {
  const item = useSelector((store) => store.items);

  return (
    <div className="items-container">
      {item.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
