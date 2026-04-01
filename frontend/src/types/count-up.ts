export type CountUpOptions = {
  start?: number;
  duration?: number;
  ease?: string;
  triggerStart?: string;
  once?: boolean;
  formatter?: (value: number, el: HTMLElement) => string;
};
