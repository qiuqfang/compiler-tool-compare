import { b } from "./test";

const a = 3;

const fn1 = (arr) => {
  console.log(a, b);
  arr.filter((item) => item + 1 < a);
};

const fn2 = () => {
  fn1([1, 2, 3, 4, 5]);
};

fn2();
