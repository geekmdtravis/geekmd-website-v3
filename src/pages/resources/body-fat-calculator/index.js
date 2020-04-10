import React, { useState } from "react"
import { first } from "lodash"

import Layout from "./../../../components/Layout"
import SEO from "./../../../components/SEO"
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SuperLead,
  Paragraph,
  Link,
} from "../../../components/PageElements"
import { ValidationField } from "./../../../components/Validation"
import Gender from "./../../../components/models/Gender"
import RetrieveSiteMetadata from "./../../../components/SiteMetadata"

import styles from "./index.module.scss"

const BodyFatCalculatorPage = () => {
  const [getPageState, setPageState] = useState({
    form: {
      gender: {
        value: Gender.EMPTY,
        touched: false,
        blur: false,
        valid: false,
      },
      height: {
        value: 0,
        touched: false,
        blur: false,
        valid: false,
      },
      neck: {
        value: 0,
        touched: false,
        blur: false,
        valid: false,
      },
      abdomen: {
        value: 0,
        touched: false,
        blur: false,
        valid: false,
      },
      hips: {
        value: 0,
        touched: false,
        blur: false,
        valid: false,
      },
      bodyFatPercent: {
        value: 0,
        touched: false,
        blur: false,
      },
      valid: false,
    },
  })

  const {
    navigation: { resources },
  } = RetrieveSiteMetadata()

  const bodyFatCalculatorPageMetadata = first(
    resources.filter(r => r.key === "body-fat-calculator")
  )

  const assessFormValidity = () => {
    const tmp = { ...getPageState }
    const {
      form: {
        gender: { valid: genderIsValid, value: gender },
        height: { valid: heightIsValid },
        neck: { valid: neckIsValid },
        abdomen: { valid: abdomenIsValid },
        hips: { valid: hipsAreValid },
      },
    } = tmp
    tmp.form.valid =
      genderIsValid &&
      heightIsValid &&
      neckIsValid &&
      abdomenIsValid &&
      (gender === Gender.FEMALE ? hipsAreValid : true)

    setPageState(tmp)

    console.log(tmp)
  }

  const calculateBf = () => {
    const state = { ...getPageState }
    const {
      form: {
        gender: { value: gender },
        height: { value: height },
        neck: { value: neck },
        abdomen: { value: abdomen },
        hips: { value: hips },
        bodyFatPercent: { value: bodyFatPercent },
      },
    } = state
    const formData = { gender, height, neck, abdomen, hips, bodyFatPercent }

    switch (gender) {
      case Gender.MALE:
        state.form.bodyFatPercent.value = calculateBfMale(formData)
        setPageState(state)
        break
      case Gender.FEMALE:
        state.form.bodyFatPercent.value = calculateBfFemale(formData)
        setPageState(state)
        break
      default:
        state.form.bodyFatPercent.value = 0
        setPageState(state)
        break
    }
  }

  const handleGenderOnChange = event => {
    const tmp = { ...getPageState }
    const gender = event.target.value
    tmp.form.gender.value = gender
    tmp.form.gender.touched = true
    tmp.form.gender.valid = gender === Gender.MALE || gender === Gender.FEMALE
    setPageState(tmp)
    calculateBf()
    assessFormValidity()
  }

  const handleGenderOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.form.gender.blur = true
    setPageState(tmp)
  }
  const handleGenderOnKeyDown = event => handleGenderOnChange(event)
  const handleGenderOnMouseOut = event => handleGenderOnBlur(event)

  const handleHeightOnChange = event => {
    const tmp = { ...getPageState }
    const height = Number.parseFloat(event.target.value)
    tmp.form.height.value = height
    tmp.form.height.touched = true
    tmp.form.height.valid = !isNaN(height) && height > 36 && height < 96
    setPageState(tmp)
    calculateBf()
    assessFormValidity()
  }

  const handleHeightOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.form.height.blur = true
    setPageState(tmp)
  }

  const handleHeightOnKeyDown = event => handleHeightOnChange(event)
  const handleHeightOnMouseOut = event => handleHeightOnBlur(event)

  const handleNeckOnChange = event => {
    const tmp = { ...getPageState }
    const neck = Number.parseFloat(event.target.value)
    tmp.form.neck.value = roundUpToNearestHalfPoint(neck)
    tmp.form.neck.touched = true
    tmp.form.neck.valid = !isNaN(neck) && neck > 5 && neck < 30
    setPageState(tmp)
    calculateBf()
    assessFormValidity()
  }

  const handleNeckOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.form.neck.blur = true
    setPageState(tmp)
  }

  const handleNeckOnKeyDown = event => handleNeckOnChange(event)
  const handleNeckOnMouseOut = event => handleNeckOnBlur(event)

  const handleAbdomenOnChange = event => {
    const tmp = { ...getPageState }
    const abdomen = Number.parseFloat(event.target.value)
    tmp.form.abdomen.value = roundDownToNearestHalfPoint(abdomen)
    tmp.form.abdomen.touched = true
    tmp.form.abdomen.valid = !isNaN(abdomen) && abdomen > 10 && abdomen < 100
    setPageState(tmp)
    calculateBf()
    assessFormValidity()
  }

  const handleAbdomenOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.form.abdomen.blur = true
    setPageState(tmp)
  }

  const handleAbdomenOnKeyDown = event => handleAbdomenOnChange(event)
  const handleAbdomenOnMouseOut = event => handleAbdomenOnBlur(event)

  const handleHipsOnChange = event => {
    const tmp = { ...getPageState }
    const hips = Number.parseFloat(event.target.value)
    tmp.form.hips.value = roundDownToNearestHalfPoint(hips)
    tmp.form.hips.touched = true
    tmp.form.hips.valid = !isNaN(hips) && hips > 20 && hips < 100
    setPageState(tmp)
    calculateBf()
    assessFormValidity()
  }

  const handleHipsOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.form.hips.blur = true
    setPageState(tmp)
  }

  const handleHipsOnKeyDown = event => handleHipsOnChange(event)
  const handleHipsOnMouseOut = event => handleHipsOnBlur(event)

  return (
    <Layout>
      <SEO
        title={bodyFatCalculatorPageMetadata.title}
        description={bodyFatCalculatorPageMetadata.description}
        image={bodyFatCalculatorPageMetadata.ogImage}
        pathname={bodyFatCalculatorPageMetadata.slug}
      />
      <Heading1>{bodyFatCalculatorPageMetadata.title}</Heading1>
      <section className={styles.section}>
        <div className={styles.form_container}>
          <div className={styles.result}>
            {getPageState.form.valid ? (
              <h2 className={styles.result_text}>
                <em>{getPageState.form.bodyFatPercent.value.toFixed(1)}</em>
                <span className={styles.result_units}>%BF</span>
              </h2>
            ) : (
              <SuperLead className={styles.result_text}>
                Please Fill the Form
              </SuperLead>
            )}
          </div>

          <ValidationField
            isHidden={
              !getPageState.form.gender.touched ||
              !getPageState.form.gender.blur ||
              getPageState.form.gender.valid
            }
          >
            Gender must be selected from the list.
          </ValidationField>
          <div className={styles.input_field}>
            <select
              name="gender"
              id="gender"
              onChange={event => handleGenderOnChange(event)}
              onBlur={event => handleGenderOnBlur(event)}
              onKeyDown={event => handleGenderOnKeyDown(event)}
              onMouseOut={event => handleGenderOnMouseOut(event)}
            >
              <option value={Gender.EMPTY}>- Select Gender -</option>
              <option value={Gender.MALE}>Male</option>
              <option value={Gender.FEMALE}>Female</option>
            </select>
          </div>
          <ValidationField
            isHidden={
              !getPageState.form.height.touched ||
              !getPageState.form.height.blur ||
              getPageState.form.height.valid
            }
          >
            A valid height must be given in inches.
          </ValidationField>
          <div className={styles.input_field}>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="Height (in)"
              onChange={event => handleHeightOnChange(event)}
              onBlur={event => handleHeightOnBlur(event)}
              onKeyDown={event => handleHeightOnKeyDown(event)}
              onMouseOut={event => handleHeightOnMouseOut(event)}
            />
          </div>
          <ValidationField
            isHidden={
              !getPageState.form.neck.touched ||
              !getPageState.form.neck.blur ||
              getPageState.form.neck.valid
            }
          >
            A valid neck measurement must be given
          </ValidationField>
          <div className={styles.input_field}>
            <input
              type="text"
              id="neck"
              name="neck"
              placeholder="Neck (in)"
              onChange={event => handleNeckOnChange(event)}
              onBlur={event => handleNeckOnBlur(event)}
              onKeyDown={event => handleNeckOnKeyDown(event)}
              onMouseOut={event => handleNeckOnMouseOut(event)}
            />
          </div>
          <ValidationField
            isHidden={
              !getPageState.form.abdomen.touched ||
              !getPageState.form.abdomen.blur ||
              getPageState.form.abdomen.valid
            }
          >
            A valid waist / abdomen measurement must be given.
          </ValidationField>
          <div className={styles.input_field}>
            <input
              type="text"
              id="abdomen"
              name="abdomen"
              placeholder="Abdomen (in)"
              onChange={event => handleAbdomenOnChange(event)}
              onBlur={event => handleAbdomenOnBlur(event)}
              onKeyDown={event => handleAbdomenOnKeyDown(event)}
              onMouseOut={event => handleAbdomenOnMouseOut(event)}
            />
          </div>
          <ValidationField
            isHidden={
              getPageState.form.gender.value === Gender.MALE ||
              !getPageState.form.hips.touched ||
              !getPageState.form.hips.blur ||
              getPageState.form.hips.valid
            }
          >
            A valid hips measurement must be given
          </ValidationField>
          <div
            className={styles.input_field}
            hidden={getPageState.form.gender.value === Gender.MALE}
          >
            <input
              type="text"
              id="hips"
              name="hips"
              placeholder="Hips (in)"
              onChange={event => handleHipsOnChange(event)}
              onBlur={event => handleHipsOnBlur(event)}
              onKeyDown={event => handleHipsOnKeyDown(event)}
              onMouseOut={event => handleHipsOnMouseOut(event)}
            />
          </div>
          <div
            className={styles.result_range}
            hidden={!getPageState.form.valid}
          >
            <Paragraph>
              <em>
                Your body fat percentage is estimated to be{" "}
                {getPageState.form.bodyFatPercent.value.toFixed(1)}%.
              </em>{" "}
              Given the known limitations of the{" "}
              <Link to="https://apps.dtic.mil/dtic/tr/fulltext/u2/a370158.pdf">
                Navy Body Fat formula
              </Link>
              , the true value for your body fat percentage likely falls
              somewhere between{" "}
              {(getPageState.form.bodyFatPercent.value - 3).toFixed(1)}% and{" "}
              {(getPageState.form.bodyFatPercent.value + 3).toFixed(1)}%.
            </Paragraph>
          </div>
          <div className={styles.result_range} hidden={getPageState.form.valid}>
            <Paragraph>
              Please fill out the above form to get an estimate of your body
              fat. And, please note, that the result is just an estimate and
              that the true value is somehwere around +/- 3% points of that
              result.
            </Paragraph>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <Heading2>Navy Body Fat</Heading2>
          <SuperLead>
            <blockquote>
              The Navy Body Fat calculation is incredibly under-appreciated.
              It's approximately as accurate as hydrostatic weighing (the "dunk
              test") and requires just a few measurements. Specifically, it's
              +/- 3% accurate. - Dr. T
            </blockquote>
          </SuperLead>
          <Paragraph>
            If you're looking to get an idea of what your body fat percentage
            is, look no further than this calculator.{" "}
            <em>
              If you're thinking about paying for a more fancy method of
              estimating body fat, it's probably a waste of your money
            </em>
            . The only method worth its cost is DEXA scan, and as a physician I
            see no reason to expose a person to unnecessary radiation for a
            marginal improvement in true body fat estimation.
          </Paragraph>
          <Heading3>Properly Measuring</Heading3>
          <Paragraph>
            As the old saying goes: junk-in, junk-out.{" "}
            <em>
              You want to take your measurements properly so that you get the
              most accurate results.
            </em>{" "}
            You can perform all of the necessary measurements with a simple
            fabric tape measure.
          </Paragraph>
          <Heading4>Measuring the Neck</Heading4>
          <Paragraph>
            Locate the part of your neck called the <em>Adam's Apple</em>.
            You'll want to wrap the tape around your neck just below this area.
          </Paragraph>
          <Paragraph>
            We've already taken care of this part in the programming, so this is
            just for your information if you're looking to calculate it yourself
            using the equation:{" "}
            <em>Take this neck measurement and round it up</em> to the nearest
            half inch.For example, if your neck measured 14.25" you would round
            it up to 14.5".
          </Paragraph>
          <Heading4>Measuring the Abdomen in Men</Heading4>
          <Paragraph>
            Ideally this is done with help. <em>Locate the belly button.</em>{" "}
            The person being tested should have their arms down at their sides.
            At the end of a normal, relaxed exhalation of air from the lungs
            measure around the belly button.
          </Paragraph>
          <Paragraph>
            We've already taken care of this part in the programming, so this is
            just for your information if you're looking to calculate it yourself
            using the equation: <em>Take this measurement and round it down</em>{" "}
            to the nearest half inch.For example, if your abdominal measurement
            was 39.25" you would round down to 39.0".
          </Paragraph>
          <Heading4>Measuring the Abdomen in Women</Heading4>
          <Paragraph>
            Ideally this is done with help.{" "}
            <em>
              Locate the point about half way between the belly button and the
              sternum.
            </em>{" "}
            The person being tested should have their arms down at their sides.
            At the end of a normal, relaxed exhalation of air from the lungs
            measure around the belly button.
          </Paragraph>
          <Paragraph>
            We've already taken care of this part in the programming, so this is
            just for your information if you're looking to calculate it yourself
            using the equation:{" "}
            <em>
              Take this measurement and round it down to the nearest half inch.
            </em>{" "}
            For example, if your abdominal measurement was 29.75" you would
            round down to 29.5".
          </Paragraph>
          <Heading4>Measuring the Hips in Women</Heading4>
          <Paragraph>
            Ideally this is done with help.{" "}
            <em>
              Wrap the tape around the hips at the point where the buttocks are
              noted to be the largest
            </em>{" "}
            as viewed from the side of the body.{" "}
          </Paragraph>
          <Paragraph>
            We've already taken care of this part in the programming, so this is
            just for your information if you're looking to calculate it yourself
            using the equation:{" "}
            <em>
              Take this measurement and round it down to the nearest half inch.
            </em>{" "}
            For example, if your abdominal measurement was 39.25" you would
            round down to 39.0".
          </Paragraph>
        </div>
      </section>
    </Layout>
  )
}

export default BodyFatCalculatorPage

export const calculateBfMale = ({ abdomen, neck, height }) => {
  return (
    86.01 * Math.log10(abdomen - neck) - 70.041 * Math.log10(height) + 36.76
  )
}

export const calculateBfFemale = ({ abdomen, neck, height, hips }) => {
  return (
    163.205 * Math.log10(abdomen + hips - neck) -
    97.684 * Math.log10(height) -
    78.387
  )
}

export const roundUpToNearestHalfPoint = num => {
  const truncatedNum = Math.trunc(num)
  const remainder = num - truncatedNum

  if (remainder > 0 && remainder <= 0.5) return truncatedNum + 0.5
  if (remainder > 0.5 && remainder !== 0) return truncatedNum + 1
  return truncatedNum
}

export const roundDownToNearestHalfPoint = num => {
  const truncatedNum = Math.trunc(num)
  const remainder = num - truncatedNum

  if (remainder < 0.5) return truncatedNum
  if (remainder >= 0.5 && remainder !== 0) return truncatedNum + 0.5
  return truncatedNum + 1
}
