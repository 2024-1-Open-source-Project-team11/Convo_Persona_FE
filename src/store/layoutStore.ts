import { create } from "zustand";

const useLayoutState = create<User.LayoutStore>((set) => ({
  //State
  message: false,

  setMessage: (message) => {
    set(() => ({ message: message }));
  },
}));

export default useLayoutState;
