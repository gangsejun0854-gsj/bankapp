// 1. import 구문자리
//2. function 같은거
//3. 함수형 컴포넌트 
import { useState, useEffect } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    console.log(id);
    return () => clearInterval(id);   // 정리 함수
  }, []);

  return <span className="muted">{now.toLocaleTimeString("ko-KR")}</span>;
}

export default Clock