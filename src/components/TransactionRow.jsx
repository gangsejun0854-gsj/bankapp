import { formatWon } from "../utils/format";


function TransactionRow({
  txType,
  amount,
  category,
  memo,
  counterparty,
  txDatetime,
}) {
  return (
    <div className="transaction-row">
      <div className="transaction-info">
        <strong>{counterparty}</strong>
        <span>{memo}</span>
        <small>
          {category} · {txDatetime}
        </small>
      </div>

      <strong className={txType === "입금" ? "deposit" : "withdrawal"}>
        {txType === "입금" ? "+" : "-"}
        {formatWon(amount)}
      </strong>
    </div>
  );
}

export default TransactionRow;