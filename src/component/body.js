// 자식 컴포넌트
import "./Body.css";

function Body({ name, location, hobby }) {
  // const { name, location } = props;
  // console.log(props);
  return (
    <>
      <h1 className="body">
        {name} is living in {location}
      </h1>
      <h1>He has {hobby.length} hobbies</h1>
      <child />
    </>
  );
}

// 백엔드에서 props를 받는 경우, 받는 props가 객체이면 에러 발생 가능성 존재
// 따라서 defaultProps를 설정함
Body.defaultProps = {
  hobby: [],
};

export default Body;
