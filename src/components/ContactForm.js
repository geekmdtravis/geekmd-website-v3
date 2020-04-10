import React, { useState } from "react"
import EmailValidator from "email-validator"
import { parsePhoneNumberFromString } from "libphonenumber-js"

import { ValidationField } from "./Validation"
import { InputSubmitButtonInverted } from "./PageElements"

import styles from "./contactForm.module.scss"

const ContactForm = () => {
  const [getPageState, setPageState] = useState({
    form: {
      first: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      last: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      phone: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      email: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      subject: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      message: {
        value: "",
        touched: false,
        blur: false,
        valid: false,
      },
      valid: false,
    },
  })

  const assessFormValidity = () => {
    const tmp = { ...getPageState }
    let {
      form: { first, last, phone, email, subject, message },
    } = tmp
    tmp.form.valid =
      first.valid &&
      last.valid &&
      phone.valid &&
      email.valid &&
      subject.valid &&
      message.valid
    setPageState(tmp)
  }
  const handleFirstOnChange = event => {
    let tmp = { ...getPageState }
    tmp.form.first.touched = true
    tmp.form.first.value = event.target.value
    tmp.form.first.valid = event.target.value.length > 2
    setPageState(tmp)
    assessFormValidity()
  }
  const handleFirstOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.first.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handleFirstOnMouseOut = () => handleFirstOnBlur
  const handleFirstOnKeyDown = () => handleFirstOnChange

  const handleLastOnChange = event => {
    let tmp = { ...getPageState }
    tmp.form.last.touched = true
    tmp.form.last.value = event.target.value
    tmp.form.last.valid = event.target.value.length > 2
    setPageState(tmp)
    assessFormValidity()
  }
  const handleLastOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.last.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handleLastOnMouseOut = () => handleLastOnBlur
  const handleLastOnKeyDown = () => handleLastOnChange

  const handlePhoneOnChange = event => {
    let tmp = { ...getPageState }
    const parsedNumber =
      event.target.value.length >= 5 && event.target.value.length <= 15
        ? parsePhoneNumberFromString(event.target.value, "US")
        : ""
    tmp.form.phone.touched = true
    tmp.form.phone.value =
      parsedNumber !== "" ? parsedNumber.formatInternational() : ""
    tmp.form.phone.valid = parsedNumber !== "" ? parsedNumber.isValid() : false
    setPageState(tmp)
    assessFormValidity()
  }
  const handlePhoneOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.phone.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handlePhoneOnMouseOut = () => handlePhoneOnBlur
  const handlePhoneOnKeyDown = event => handlePhoneOnChange(event)

  const handleEmailOnChange = event => {
    let tmp = { ...getPageState }
    tmp.form.email.touched = true
    tmp.form.email.value = event.target.value
    tmp.form.email.valid = EmailValidator.validate(event.target.value)
    setPageState(tmp)
    assessFormValidity()
  }
  const handleEmailOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.email.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handleEmailOnMouseOut = () => handleEmailOnBlur
  const handleEmailOnKeyDown = () => handleEmailOnChange

  const handleSubjectOnChange = event => {
    let tmp = { ...getPageState }
    tmp.form.subject.touched = true
    tmp.form.subject.value = event.target.value
    tmp.form.subject.valid = event.target.value.trim().split(" ").length >= 2
    setPageState(tmp)
    assessFormValidity()
  }
  const handleSubjectOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.subject.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handleSubjectOnMouseOut = () => handleSubjectOnBlur
  const handleSubjectOnKeyDown = () => handleSubjectOnChange

  const handleMessageOnChange = event => {
    let tmp = { ...getPageState }
    tmp.form.message.touched = true
    tmp.form.message.value = event.target.value
    tmp.form.message.valid = event.target.value.trim().split(" ").length >= 3
    setPageState(tmp)
    assessFormValidity()
  }
  const handleMessageOnBlur = () => {
    const tmp = { ...getPageState }
    tmp.form.message.blur = true
    setPageState(tmp)
    assessFormValidity()
  }

  const handleMessageOnMouseOut = () => handleMessageOnBlur
  const handleMessageOnKeyDown = () => handleMessageOnChange

  return (
    <div className={styles.container}>
      <ValidationField
        isHidden={
          !getPageState.form.first.touched ||
          !getPageState.form.first.blur ||
          getPageState.form.first.valid
        }
      >
        A valid first name must be given.
      </ValidationField>
      <ValidationField
        isHidden={
          !getPageState.form.last.touched ||
          !getPageState.form.last.blur ||
          getPageState.form.last.valid
        }
      >
        A valid last name must be given.
      </ValidationField>
      <ValidationField
        isHidden={
          !getPageState.form.phone.touched ||
          !getPageState.form.phone.blur ||
          getPageState.form.phone.valid
        }
      >
        A valid email phone number must be given.
      </ValidationField>
      <ValidationField
        isHidden={
          !getPageState.form.email.touched ||
          !getPageState.form.email.blur ||
          getPageState.form.email.valid
        }
      >
        A valid email address must be given.
      </ValidationField>
      <ValidationField
        isHidden={
          !getPageState.form.subject.touched ||
          !getPageState.form.subject.blur ||
          getPageState.form.subject.valid
        }
      >
        A valid subject has at least two words.
      </ValidationField>
      <ValidationField
        isHidden={
          !getPageState.form.message.touched ||
          !getPageState.form.message.blur ||
          getPageState.form.message.valid
        }
      >
        A valid message has at least three words.
      </ValidationField>
      <form
        name="primary_contact_form"
        className={styles.form}
        method="POST"
        action="https://formspree.io/mqkqjpga"
      >
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <input
              onChange={event => handleFirstOnChange(event)}
              onBlur={handleFirstOnBlur}
              onMouseOut={handleFirstOnMouseOut}
              onKeyDown={event => handleFirstOnKeyDown(event)}
              name="first_name"
              type="text"
              id="first_name"
              placeholder="First Name"
            />
          </div>
          <div className={styles.form_field}>
            <input
              onChange={event => handleLastOnChange(event)}
              onBlur={handleLastOnBlur}
              onMouseOut={handleLastOnMouseOut}
              onKeyDown={event => handleLastOnKeyDown(event)}
              name="last_name"
              type="text"
              id="last_name"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <input
              onChange={event => handlePhoneOnChange(event)}
              onBlur={handlePhoneOnBlur}
              onMouseOut={handlePhoneOnMouseOut}
              onKeyDown={event => handlePhoneOnKeyDown(event)}
              name="phone"
              type="text"
              id="phone"
              placeholder="Phone"
            />
          </div>

          <div className={styles.form_field}>
            <input
              onChange={event => handleEmailOnChange(event)}
              onBlur={handleEmailOnBlur}
              onMouseOut={handleEmailOnMouseOut}
              onKeyDown={event => handleEmailOnKeyDown(event)}
              name="_replyto"
              type="email"
              id="_replyto"
              placeholder="Email"
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.form_field}>
            <input
              onChange={event => handleSubjectOnChange(event)}
              onBlur={handleSubjectOnBlur}
              onMouseOut={handleSubjectOnMouseOut}
              onKeyDown={event => handleSubjectOnKeyDown(event)}
              name="subject"
              type="text"
              id="text"
              placeholder="Subject"
            />
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.message_field}>
            <textarea
              onChange={event => handleMessageOnChange(event)}
              onBlur={handleMessageOnBlur}
              onMouseOut={handleMessageOnMouseOut}
              onKeyDown={event => handleMessageOnKeyDown(event)}
              name="message"
              rows="8"
              placeholder="Message"
            />
          </div>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://precisionwellness.club/thank-you/"
        />
        <div className={styles.button}>
          <InputSubmitButtonInverted
            buttonType="submit"
            isDisabled={!getPageState.form.valid}
          >
            Submit
          </InputSubmitButtonInverted>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
