import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CountUpOptions } from '@/types/count-up';

let isScrollTriggerRegistered = false;

const ensureScrollTrigger = () => {
  if (!isScrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isScrollTriggerRegistered = true;
  }
};

const parseNumber = (value: string) => {
  const parsed = Number.parseFloat(value.replace(/[^\d.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};

const defaultFormatter = (value: number, el: HTMLElement) => {
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const formatted = Math.round(value).toLocaleString('es-ES');
  return `${prefix}${formatted}${suffix}`;
};

export const useCountUp = (selector: string, options: CountUpOptions = {}) => {
  ensureScrollTrigger();

  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((el) => {
    const targetRaw = el.dataset.countTo ?? el.textContent ?? '0';
    const fromRaw = el.dataset.countFrom ?? `${options.start ?? 0}`;

    const target = parseNumber(targetRaw);
    const from = parseNumber(fromRaw);

    const duration = options.duration ?? Number(el.dataset.duration ?? 1.8);
    const ease = options.ease ?? 'power2.out';
    const formatter = options.formatter ?? defaultFormatter;

    const counter = { value: from };
    el.textContent = formatter(from, el);

    gsap.to(counter, {
      value: target,
      duration,
      ease,
      scrollTrigger: {
        trigger: el,
        start: options.triggerStart ?? 'top 85%',
        once: options.once ?? true,
      },
      onUpdate: () => {
        el.textContent = formatter(counter.value, el);
      },
      onComplete: () => {
        el.textContent = formatter(target, el);
      },
    });
  });
};
