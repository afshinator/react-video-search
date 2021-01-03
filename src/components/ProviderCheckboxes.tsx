import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Red1Checkbox = withStyles({
  root: {
    color: "#f93943",
    "&$checked": {
      color: "#f93943",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const UranianCheckbox = withStyles({
  root: {
    color: "#a2d6f9",
    "&$checked": {
      color: "#a2d6f9",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

type Props = {
  setChecked: (newState: object) => void;
};

export default function ProviderCheckboxes({ setChecked }: Props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    setChecked(newState);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <UranianCheckbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="YouTube"
      />
      <FormControlLabel
        control={
          <UranianCheckbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Bing"
      />
      <FormControlLabel
        control={
          <UranianCheckbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        }
        label="Vimeo"
      />
    </FormGroup>
  );
}
