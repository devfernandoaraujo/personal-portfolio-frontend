
import {create} from 'zustand';

interface IAlertMessageStore {
  visible: boolean;
  actions: {
    toggle: () => void;
    show: () => void;
    hide: () => void;
  }; 
}

const useAlertMessage = create<IAlertMessageStore>()((set) => ({
    visible: false,
    actions: {
      toggle: () => set((state: IAlertMessageStore) => ({visible: !state.visible})),
      show: () => set({visible: true}),
      hide: () => set({visible: false}),
    },
}));

const useAlertVisible = () => useAlertMessage((state) => state.visible);
const useAlertVisibleActions = () => useAlertMessage((state) => state.actions);

export { useAlertVisible, useAlertVisibleActions };

