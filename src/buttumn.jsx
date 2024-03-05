function Button(){
  const handelClick = ()=> console.log("noooooo");
  const handel = (name)=> console.log(`noooooo dont click on me ${name}`);
  let count = 0;
  const counter = ()=>{
    count++;
    console.log(count);
  };
  return (
    <div>
    <button onClick={handel()} >
      click me 😐
    </button>
    <br />
    <button onClick={counter()} >
      count 🤩🤩

    </button>
    <button onClick={handelClick}>
      why
    </button>

    </div>

  );
}
export default Button