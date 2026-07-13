import '@testing-library/jest-dom';

const testGlobal = globalThis as typeof globalThis & {
  IntersectionObserver?: typeof IntersectionObserver;
  ResizeObserver?: typeof ResizeObserver;
};

if (!testGlobal.IntersectionObserver) {
  class IntersectionObserverStub {
    readonly root = null;
    readonly rootMargin = '';
    readonly thresholds: number[] = [];

    disconnect() {}
    observe(element: Element) {
      queueMicrotask(() => {
        this.callback([{ isIntersecting: true, target: element } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
      });
    }
    unobserve() {}
    takeRecords() { return []; }

    constructor(private readonly callback: IntersectionObserverCallback) {}
  }

  testGlobal.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;
}

if (!testGlobal.ResizeObserver) {
  class ResizeObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  testGlobal.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;
}
