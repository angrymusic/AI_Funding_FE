// 임시로 state 빼놓음. 권장되지 않는 방법. state는 컴포넌트 안에서 hook으로 관리.
const state = {
  Data: [
    { name: "포스코엠텍", percent: "25%" },
    { name: "삼성전자", percent: "25%" },
    { name: "카카오", percent: "25%" },
    { name: "네이버", percent: "25%" },
  ],
  Number: 0,
};

export default function E(props) {
  return (
    <p className={props.className}>
      {state.Data[0].percent} {state.Data[0].name}
    </p>
  );
}
