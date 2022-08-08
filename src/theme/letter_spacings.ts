const ratio = 0.1;

interface ILetterSpacings {
  [key: string]: string;
}

export const letterSpacings: ILetterSpacings = {
  tighter: "-0.8px",
  tight: "-0.4px",
  normal: "0",
  wide: "0.4px",
  wider: "0.8px",
  widest: "0.16px",
};

for (let i = -10; i <= 10; i++) {
  letterSpacings[i] = `${ratio * i}px`;
}
