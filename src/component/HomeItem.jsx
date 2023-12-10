import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bag";
import { useSelector } from "react-redux";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItemsIDs = useSelector((store) => store.bagItemsIDs);
  const isItemAddedToBag = bagItemsIDs.includes(item.id);

  function handleAddToBag() {
    dispatch(bagActions.addToBag(item.id));
  }
  function handleDeleteFromBag() {
    dispatch(bagActions.removeFromBag(item.id));
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">( {item.discount_percentage}% OFF)</span>
      </div>
      {!isItemAddedToBag ? (
        <button
          onClick={handleAddToBag}
          className="btn-add-bag btn btn-success"
        >
          <IoMdAddCircleOutline /> Add to Bag
        </button>
      ) : (
        <button
          onClick={handleDeleteFromBag}
          className="btn-add-bag btn btn-danger"
        >
          <IoMdRemoveCircleOutline /> Remove from Bag
        </button>
      )}
    </div>
  );
}
