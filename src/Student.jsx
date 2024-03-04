import { propTypes } from "react-bootstrap/esm/Image";

function Student(props){
  return(
    <div className="student">
     <p>name: {props.name} </p>
     <p>age: {props.age} </p>
     <p>student: {props.student ? "yeessss" : "noooooo"} </p>
    </div>

  );
}
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  student: propTypes.bool
};
Student.defaultProps = {
  name:"gest",
  age: 0 ,
  student: false
};
export default Student;