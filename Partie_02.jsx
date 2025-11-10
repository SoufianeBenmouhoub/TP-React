import React, { useReducer } from "react";

//  La fonction reducer : décide comment changer l’état
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // ajoute 1
    case "decrement":
      return { count: state.count - 1 }; // enlève 1
    case "reset":
      return { count: 0 }; // remet à zéro
    default:
      return state; // ne change rien si l’action est inconnue
  }
}

//  Le composant principal
export default function CounterReducer() {

  //  useReducer : [état, fonction qui envoie les actions]
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4 bg-slate-800 rounded-lg text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Compteur avec useReducer</h2>
      <p className="text-3xl mb-4">{state.count}</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          -1
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded"
        >
          Réinitialiser
        </button>

        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          +1
        </button>
      </div>
    </div>
  );
}
