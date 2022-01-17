import styled from "styled-components";

export default function H(props) {
  return (
    <div className={props.className}>
      <Button1 className="button1" onClick={props.onClick}></Button1>
      <Button2 className="button2" onClick={props.onClick}></Button2>
      <Button3 className="button3" onClick={props.onClick}></Button3>
      <Button4 className="button4" onClick={props.onClick}></Button4>
    </div>
  );
}

const Button = styled.button`
  width: 25%;
  height: 17px;
  outline: none;
  border: none;
`;

const Button1 = styled(Button)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: rgb(28, 117, 235);
`;

const Button2 = styled(Button)`
  background-color: rgb(57, 119, 95);
`;

const Button3 = styled(Button)`
  background-color: rgb(160, 99, 8);
`;
const Button4 = styled(Button)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: rgb(32, 36, 94);
`;
