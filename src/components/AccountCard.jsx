import StatusBadge from "./StatusBadge";
import { formatWonMasked, maskAccountNo } from "../utils/format";

function AccountCard({
  accountId,
  accountNo,
  accountType,
  balance,
  showFullNo,
  showAmount,
  onDeposit,
}) {
  return (
    <div className="card">
      <div className="row">
        <span className="muted">{accountType}</span>
        <StatusBadge />
      </div>

      <p className="muted">
        {showFullNo ? accountNo : maskAccountNo(accountNo)}
      </p>

      <strong className="balance">
        {formatWonMasked(balance, !showAmount)}
      </strong>

      <div className="card-actions">
        <button className="btn" onClick={() => onDeposit(accountId)}>
          1만원 입금
        </button>
      </div>
    </div>
  );
}

export default AccountCard;