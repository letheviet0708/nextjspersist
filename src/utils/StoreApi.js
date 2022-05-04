import { useStore } from "./Store";

export const useGlobalStore = () => {
  const {state, dispatch} = useStore();
  return {
    ...state,
    increment: () => dispatch({type: "increment", message:"Incremented"}),
    decrement: () => dispatch({type: "decrement", message: "Decremented"}),
    pageincrement: (count) => dispatch({type: "pageincrement", count: count}),
    reset: () => dispatch({type: "reset", message: "Reset"})
  }
}