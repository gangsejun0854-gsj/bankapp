
function Counter(){
    
    // [0,1]
    // 참조 자료형이라 값을 얼마든지 바꿀 수 있다.
    
    const [count, setCount] = useState(0);

    return(<>
    
    
    <button onClick={()=>setCount(count+1)}>

    </button>
    
    
    </>

    )
}

export default Counter