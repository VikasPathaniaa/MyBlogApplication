import { TextField, styled } from "@mui/material";

const StyleInput = styled(TextField)`
  margin-top: 12px;
  width: 300px;
`;

const Inputfield = (props) => {
  const { placeholder, changeHandel, name } = props;
  return (
    <div>
      <StyleInput
        variant="outlined"
        label={placeholder}
        onChange={changeHandel}
        name={name}
      />
    </div>
  );
};

export default Inputfield;
