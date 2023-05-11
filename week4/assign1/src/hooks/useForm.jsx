import { useEffect } from "react";
import { useState } from "react";
const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = ({ type, area }) => {
    const errors = {};

    if (!area) {
      errors.area = "지역을 입력해주세요.";
    } else if (!/^[a-zA-Z]*$/.test(area)) {
      errors.area = "영문으로 입력해주세요.";
    }
    if (Object.keys(errors).length > 0) {
      console.log(errors.area);
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOptionChange = (e) => {
    handleChange(e);
  };

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(values));
  };

  useEffect(
    () => {
      if (submitting) {
        if (Object.keys(errors).length === 0) {
          onSubmit(values);
        }
        setSubmitting(false);
      }
    },
    [errors],
    [values.type]
  );

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleOptionChange,
    handleSubmit,
  };
};

export default useForm;
