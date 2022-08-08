const ratio = 2;

interface IRadii {
  [key: string]: string;
}

export const radii: IRadii = {
  none: "0",
  sm: "2px",
  base: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
};

for (let i = 0; i < 40; i++) {
  radii[i] = `${ratio * i}px`;
}
