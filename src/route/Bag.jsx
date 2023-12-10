import React from "react";
import BagSummary from "../component/BagSummary";
import BagItem from "../component/BagItem";
import { useSelector } from "react-redux";
import Card from "../component/Card";

export default function Bag() {
  const bagItemsIDs = useSelector((store) => store.bagItemsIDs);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bagItemsIDs.includes(item.id));
  console.log("bagItems are; ", bagItems);

  // const item = {
  //   id: "001",
  //   image: "images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: {
  //     stars: 4.5,
  //     count: 1400,
  //   },
  // };

  return (
    <div className="bag-page">
      <div>
        {bagItems.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
      </div>

      <BagSummary />
    </div>
  );
}
