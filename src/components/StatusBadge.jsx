// 계좌 상태에 따라 배지 색을 바꿀 겁니다.

const colors = {
  정상: "#22c55e",
  휴면: "#9ca3af",
  지급정지: "#ef4444",
  해지: "#000000",
};

function StatusBadge({ status }) {
  return (
    <span
      className="badge"
      style={{ backgroundColor: colors[status] }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;