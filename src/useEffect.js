import React, { useState, useEffect } from 'react';
import './style.css';

//친구 접속상태 구독하는 effect 사용 후 구독해지
//cleanUp 형태 useEffect(()=>{실행시킬 무언가 return(실행을 끝내주는 무언가)},[]) // 처음 mount될 때만 실행
function FriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange); // 랜더링 후 sideEffect(구독) 실행
    return () => {
      // cleanUp (unmount시 구독 해지)
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  }, [friendID]); // friendID 바뀔 때만 재구독, 빈 배열([])을 넘기게 되면, effect 안의 prop과 state는 초깃값을 유지 (딱 한번만 실행)

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
