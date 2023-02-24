import { b, obj } from "./test";

const a = 3;

console.log(obj?.a);

console.log(a ?? '');

const fn1 = (arr) => {
  console.log(a, b);
  arr.filter((item) => item + 1 < a);
};

const fn2 = () => {
  fn1([1, 2, 3, 4, 5]);
};

fn2();
