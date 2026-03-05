export const BETA_MODE = typeof window !== 'undefined'
  && localStorage.getItem('marsd-beta-mode') === 'true';
