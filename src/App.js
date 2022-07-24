import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

// //최상위에서만, 오직 react 함수 내에서, Custom Hook에서 Hook 호출
// //(반복, 조건, 중첩함수 내 hook 호출x)
// //hook? 함수 컴포넌트에서 react state와 lifecycle을 연동할 수 있게 해주는 함수 (class 없이 리액트 사용)
// export default function Form({ initialCount }) {
//   // 이전 state 를 사용해서 새로운 state 계산하는 경우
//   const [name, setName] = useState('Jess'); // 배열구조분해(destructing)
//   useEffect(function persistForm() {
//     localStorage.setItem('formData', name); // {formData : name} 으로 저장
//   });
//   const [surname, setSurname] = useState('black');
//   useEffect(function updateTitle() {
//     document.title = name + ' ' + surname;
//   });

//   //DOM 업데이트 후 문서 타이틀 변경하는 컴포넌트
// const [count, setCount] = useState(0);
//   useEffect(() => {
//     // 브라우저 api 이용한 문서 타이틀 업데이트, 렌더링 이후 effects 실행
//     document.title = `You clicked ${count} times`;
//   }, [count]); // count 바뀔 때만 effect 재실행
//   //useEffect? mount/update/unmount되는 lifecycle 시점에 '데이터 가져오거나, 구독, DOM 직접 조작'하는 'SIDE EFFECT'를 수행할 수 있게 함
//   //기본 형태 useEffect(()=>{//실행시킬 무언가},[value]) // 처음 mount될 때와 value 값이 변경될 때 실행됨
//   //cleanUp 형태 useEffect(()=>{실행시킬 무언가 return(실행을 끝내주는 무언가)},[]) // 처음 mount될 때만 실행

// function init(initialCount) {
//   return { count: initialCount };
// }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return action.payload;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  // state 초기화하는 방법 ; 초기 state를 두번째 인자로 전달(initialCount)
  // 초기 state 지연해서 생성 (init 함수를 세번째 인자로 전달)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
