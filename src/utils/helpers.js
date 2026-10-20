// Helper utilities - maintained by @rileycove
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();