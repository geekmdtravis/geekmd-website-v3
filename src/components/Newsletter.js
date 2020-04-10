import React, { useState } from "react";
import EmailValidator from "email-validator";

import { InputSubmitButton } from "./PageElements";
import { ValidationField } from "./Validation";

import styles from "./newsletter.module.scss";

const Newsletter = () => {
  const [getPageState, setPageState] = useState({
    form: {
      email: { value: "", touched: false, blur: false, valid: false },
      valid: false
    }
  });

  const assessFormValidity = () => {
    let tmp = { ...getPageState };
    tmp.form.valid = tmp.form.email.valid;
    setPageState(tmp);
  };
  const handleEmailOnChange = event => {
    let tmp = { ...getPageState };
    tmp.form.email.touched = true;
    tmp.form.email.value = event.target.value;
    tmp.form.email.valid = EmailValidator.validate(event.target.value);
    setPageState(tmp);
    assessFormValidity();
  };
  const handleEmailOnBlur = () => {
    const tmp = { ...getPageState };
    tmp.form.email.blur = true;
    setPageState(tmp);
    assessFormValidity();
  };

  const handleEmailOnMouseOut = () => handleEmailOnBlur;
  const handleEmailOnKeyDown = (event) => handleEmailOnChange(event);

  return (
    <div className={styles.container}>
      <form
        name="newsletter_form"
        className={styles.form}
        method="POST"
        action="https://formspree.io/mjvwzyan"
      >
        <ValidationField
          isHidden={
            !getPageState.form.email.touched ||
            !getPageState.form.email.blur ||
            getPageState.form.email.valid
          }
        >
          You must use a valid email address.
        </ValidationField>
        <div className={styles.form_field}>
          <input
            onChange={event => handleEmailOnChange(event)}
            onBlur={handleEmailOnBlur}
            onMouseOut={handleEmailOnMouseOut}
            onKeyDown={event => handleEmailOnKeyDown(event)}
            name="_replyto"
            id="_replyto"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://precisionwellness.club/thank-you/"
        />
        <div className={styles.form_button}>
          <InputSubmitButton
            buttonType="submit"
            isDisabled={!getPageState.form.valid}
          >
            Submit
          </InputSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
