import { useReducer } from "react";
import { MenuItems } from "./component/MenuItems";
import OrderContents from "./component/OrderContents";
import OrderTotals from "./component/OrderTotals";
import TipPercentageForm from "./component/TipPercentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-extrabold text-4xl">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-20">
          {state.order.length > 0 ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />

              <TipPercentageForm dispatch={dispatch} tip={state.tip} />

              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
            </>
          ) : (
            <p className="text-center"> La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
