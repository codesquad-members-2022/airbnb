// 전역 변수
declare const pi = 3.14;

// 전역 함수
declare namespace myLib {
  function greet(person: string): string;
  let name: string;
}
myLib.greet("캡틴");
myLib.name = "타노스";
