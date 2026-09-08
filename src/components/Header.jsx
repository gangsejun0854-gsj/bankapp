function Header({
  showFullNo,
  setShowFullNo,
  showAmount,
  setShowAmount,
}) {
  return (
    <header className="welcome-box">
      <img src="/woori-logo.png" alt="우리은행 로고" />

      <h2>강세준님 안녕하세요</h2>

      <div className="toggle-buttons">
        <button onClick={() => setShowFullNo(!showFullNo)}>
          {showFullNo ? "계좌번호 숨기기" : "계좌번호 보기"}
        </button>

        <button onClick={() => setShowAmount(!showAmount)}>
          {showAmount ? "금액 숨기기" : "금액 보기"}
        </button>
      </div>
    </header>
  );
}

export default Header;