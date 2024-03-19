import Radio from "@mui/material/Radio";
import PropTypes from "prop-types";

export const RadioButton = ({ value, setselected, selected }) => {
  const handleChange = (event) => {
    const { value, name } = event.target;

    setselected((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Radio
        checked={selected.payment_option === value}
        value={value}
        name="payment_option"
        onChange={handleChange}
      />
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.any,
  setselected: PropTypes.func,
  selected: PropTypes.any,
};
