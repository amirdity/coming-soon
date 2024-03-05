function Button(){

  const handelClick = (e)=> e.target.textContent = "ouch"
  const handel = (name)=> console.log(`stop click me ${name}`)
  return(<>
    <button onClick={(e)=> handelClick(e)}>
      hello
    </button>
    <button onClick={handel("amir")}>
    hello 😂
  </button>

  </>
  );
}
export default Button;