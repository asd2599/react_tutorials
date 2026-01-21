import { useRef, useState } from 'react';

//const ref = useRef(value);
//current : vlaue
//state와 마찬가지로 특정 값을 저장하고 유지할 때 사용 : hook은 함수이고 이는 매번 랜더링 될 때마다 재호출하게 된다. 이때 상태 변환 없이 값만 유지하고 싶을 때 사용한다.

const UseRef = () => {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // // console.log(countRef.current);

  // const increaseState = () => {
  //   setCount(count + 1);
  // };

  // const increaseRef = () => {
  //   countRef.current++;
  // };

  //console.log('rendering');

  // 변수와 ref의 차이
  // 아래 코드에서 Var Up, Ref Up을 클릭하면 화면에는 렌더링 되지 않는 다는 점은 같다.
  // 하지만 특정 함수(doRendering)를 호출하면 화면이 렌더링 되는데, 이때 Ref 값은 유지되지만 변수 값은 초기화된다.

const [render, setRender] = useState(0);

const countRef = useRef(0);
let countVar = 0;

const increaseVar = () => {
  countVar++;
  console.log(`Var: ${countVar}`);
};
const increaseRef = () => {
  countRef.current++;
  console.log(`Ref: ${countRef.current}`);
};

const doRendering = () => {
  setRender(render + 1);
  console.log(`Rendering: ${render}`);
};

  return (
    <div>
      {/* <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseState}>State Up</button>
      <br />
      <button onClick={increaseRef}>Ref Up</button> */}
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={increaseVar}>Var Up</button>
      <button onClick={increaseRef}>Ref Up</button>
      <button onClick={doRendering}>Rendering</button>
    </div>
  );
};

export default UseRef;
