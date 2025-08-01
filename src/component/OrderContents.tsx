import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";

type OrderContentProps = {
  order: OrderItem[],
  dispatch: Dispatch<OrderActions>
};

export default function OrderContents({
  order,
  dispatch,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="font-extrabold text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 p-5 last-of-type:border-b items-center"
          >
            <div>
              <p>
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 text-white rounded-full cursor-pointer font-black"
              onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
