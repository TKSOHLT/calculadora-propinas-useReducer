import type { Dispatch } from "react";
import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
};

export const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-2 border-teal-400 rounded-lg w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer"
        onClick={() => dispatch({type: 'add-item', payload: {item}})}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
};