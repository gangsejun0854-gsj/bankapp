// 필요한 부품들을 불러옵니다.
import './App.css'
import Clock from './components/Clock.jsx'
import Panel from './components/Panel.jsx'
import AccountCard  from './components/AccountCard.jsx'
import Counter from './components/Counter.jsx'
import Header from './components/Header.jsx'
import { Children, useState } from 'react'
import TransactionRow from './components/TransactionRow.jsx'
import { transactions } from './data/mockData.js'
import { formatWon } from './utils/format.js'
import ExchangeRate from './components/ExchangeRate.jsx'
import TransactionList from './components/Transactionlist.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
// 02_html기초.html 안에 만들었던 계좌카드의 css를 가져와서
// 아래에 있는 카드를 좀더 그럴듯하게 꾸며보세요.
// 실제로 사용될 화면을 그립니다.
function App() {
  
  
  // 화면이 렌더링 되기 위해 필요로 하는 값(data)을 적습니다.
  // 1. 데이터
  // 계좌 목록 (실제 서비스에서는 백엔드 DB에서 내려오는 데이터가 뿌려집니다)
  const [accounts, setAccounts] = useState([
  {
    accountId: 1, //중복을 구분하기 위한 구분자 역할
    accountNo: "1002-345-678901",
    accountType: "입출금",
    balance: 1523000,
    status: "정상",
    ownerName: "김연지",
  },
  {
    accountId: 2,
    accountNo: "1002-345-112233",
    accountType: "적금",
    balance: 1200000,
    status: "정상",
    ownerName: "김연지",
  },
  {
    accountId: 3,
    accountNo: "1002-345-998877",
    accountType: "적금",
    balance: 397000,
    status: "휴면",
    ownerName: "김연지",
  },
]);


const totalBalance = accounts.reduce(
  (total, account) => total + account.balance,
  0
);

function handleDeposit(accountId) {
  setAccounts((currentAccounts) =>
    currentAccounts.map((account) =>
      account.accountId === accountId
        ? { ...account, balance: account.balance + 10000 }
        : account
    )
  );
}





  // flag 변수: 깃발을 들어서 교통량을 제어하는 것처럼 이 변수의 역할은 특정 로직을 끄거나 켜거나 밖에 없기 때문에
  // flag 변수를 사용할 때는 default 값을 false로 만들고 시작하는 로직을 권장 

  const [showFullNo, setShowFullNo] = useState(false);

  const [showAmount, setShowAmount] = useState(false);
  //     ↑현재 값      ↑바꾸는 함수              ↑처음값
  // XML에서는 여는 꺽쇠 안의 태그가 무엇이든 될 수 있기 때문에 <이름>김연지 </이름>
  // JSX 가 소문자 태그는 HTML, 대문자로 시작하는 태그는 컴포넌트로 인식
  // return ( ) 바깥에서는 일반 자바스크립트처럼 // 로 주석을 적습니다.
  // return 뒤에 렌더링 될 부분을 적습니다.
  return (
    <>
    // App.jsx — 감싸기
<UserProvider user={{ name: "김연지", grade: "우수" }}>
  

    <Header
  showFullNo={showFullNo}
  setShowFullNo={setShowFullNo}
  showAmount={showAmount}
  setShowAmount={setShowAmount}
/>

    <Panel title="총 계좌금액" className="total">
  <strong className="balance">{formatWon(totalBalance)}</strong>
</Panel>
    <Clock />
    {/* class 는 JS의 예약어이므로 JSX에서는 className으로 대신 사용합니다.*/}

    {/* 사용 */}
    <Panel title="내 계좌">
      <AccountCard
  accountId={accounts[0].accountId}
  accountNo={accounts[0].accountNo}
  accountType={accounts[0].accountType}
  balance={accounts[0].balance}
  status={accounts[0].status}
  showFullNo={showFullNo}
  showAmount={showAmount}
  onDeposit={handleDeposit}
/>
                  
    
      <AccountCard
  accountId={accounts[1].accountId}
  accountNo={accounts[1].accountNo}
  accountType={accounts[1].accountType}
  balance={accounts[1].balance}
  status={accounts[1].status}
  showFullNo={showFullNo}
  showAmount={showAmount}
  onDeposit={handleDeposit}
/>
      <AccountCard
  accountId={accounts[2].accountId}
  accountNo={accounts[2].accountNo}
  accountType={accounts[2].accountType}
  balance={accounts[2].balance}
  status={accounts[2].status}
  showFullNo={showFullNo}
  showAmount={showAmount}
  onDeposit={handleDeposit}
/>
    </Panel>
    <Panel title="최근 거래">
  <div className="transaction-list">
    {transactions.map((transaction) => (
      <TransactionRow
        key={transaction.txId}
        txType={transaction.txType}
        amount={transaction.amount}
        category={transaction.category}
        memo={transaction.memo}
        counterparty={transaction.counterparty}
        txDatetime={transaction.txDatetime}
      />
    ))}
  </div>
</Panel>

<Panel title="최근 거래">
      <TransactionList showAmount={showAmount} />
    </Panel>
<Panel title="오늘의 환율"> 
    <ExchangeRate />
  </Panel>
  </UserProvider>
    </>
  );
}

// 이 컴포넌트를 외부에서 import해서 쓸 수 있도록 선언
export default App