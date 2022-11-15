import create from 'zustand';

const useChangeTheme = create(set => ({
  isDark: false,
  setIsDark: status => set({isDark: status}),
}));

export default useChangeTheme;
