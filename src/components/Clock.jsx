// 1. import 구문자리
//2. function 같은거
//3. 함수형 컴포넌트 


function Clock() {
  const now = new Date();
  return <span>{now.toLocaleTimeString("ko-KR")}</span>;
}

export default Clock