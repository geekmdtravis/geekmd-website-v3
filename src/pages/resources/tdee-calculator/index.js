import React, { useState } from "react"
import { first } from "lodash"

import Layout from "./../../../components/Layout"
import SEO from "./../../../components/SEO"
import {
  Link,
  Heading1,
  Heading2,
  Paragraph,
  SuperLead,
} from "../../../components/PageElements"
import { ValidationField } from "./../../../components/Validation"
import RetrieveSiteMetadata from "./../../../components/SiteMetadata"

import styles from "./index.module.scss"

const activityMultiplier = [
  {
    key: "empty",
    title: "- Select Activity Level -",
    value: 0,
  },
  {
    key: "inactive",
    title: "Inactive / Sedentary",
    value: 1.2,
  },
  {
    key: "low",
    title: "Low Activity",
    value: 1.375,
  },
  {
    key: "medium",
    title: "Medium Activity",
    value: 1.55,
  },
  {
    key: "high",
    title: "High Activity",
    value: 1.725,
  },
  {
    key: "intense",
    title: "Intense Activity",
    value: 1.9,
  },
]

const TDEECalculatorPage = () => {
  const [getPageState, setPageState] = useState({
    weight: {
      value: 0,
      touched: false,
      blur: false,
      valid: false,
    },
    bodyFatPercentage: {
      value: 0,
      touched: false,
      blur: false,
      valid: false,
    },
    activity: {
      value: 0,
      touched: false,
      blur: false,
      valid: false,
    },
    bmr: 0,
    tdee: 0,
    valid: false,
  })

  const {
    navigation: { resources },
  } = RetrieveSiteMetadata()

  const tdeePageMetadata = first(
    resources.filter(r => r.key === "tdee-calculator")
  )

  const bodyFatPageMetadata = first(
    resources.filter(r => r.key === "body-fat-calculator")
  )

  const updatePageStateOrderly = tmpState => {
    tmpState.bmr = calculataeKatchMcArdleBmr(
      tmpState.weight.value,
      tmpState.bodyFatPercentage.value
    ).toFixed(0)
    tmpState.tdee = calculateTdee(
      tmpState.bmr,
      tmpState.activity.value
    ).toFixed(0)
    tmpState.valid =
      tmpState.weight.valid &&
      tmpState.activity.valid &&
      tmpState.bodyFatPercentage.valid
    setPageState(tmpState)
  }
  const handleActivityOnChange = event => {
    const tmp = { ...getPageState }
    const activity = Number.parseFloat(event.target.value)
    tmp.activity.value = activity
    tmp.activity.touched = true
    tmp.activity.valid = !isNaN(activity) && activity > 0 && activity < 5
    updatePageStateOrderly(tmp)
  }

  const handleActivityOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.activity.blur = true
    setPageState(tmp)
  }

  const handleActivityOnMouseOut = event => handleActivityOnBlur(event)
  const handleActivityOnKeyDown = event => handleActivityOnChange(event)

  const handleWeightOnChange = event => {
    const tmp = { ...getPageState }
    const weight = Number.parseFloat(event.target.value)
    tmp.weight.value = weight
    tmp.weight.touched = true
    tmp.weight.valid = !isNaN(weight) && weight > 30 && weight < 1000
    updatePageStateOrderly(tmp)
  }

  const handleWeightOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.weight.blur = true
    setPageState(tmp)
  }

  const handleWeightOnMouseOut = event => handleWeightOnBlur(event)
  const handleWeightOnKeyDown = event => handleWeightOnChange(event)

  const handleBodyFatOnChange = event => {
    const tmp = { ...getPageState }
    const bodyFatPercentage = Number.parseFloat(event.target.value)
    tmp.bodyFatPercentage.value = bodyFatPercentage
    tmp.bodyFatPercentage.touched = true
    tmp.bodyFatPercentage.valid =
      !isNaN(bodyFatPercentage) &&
      bodyFatPercentage > 2 &&
      bodyFatPercentage < 100
    updatePageStateOrderly(tmp)
  }

  const handleBodyFatOnBlur = event => {
    const tmp = { ...getPageState }
    tmp.bodyFatPercentage.blur = true
    setPageState(tmp)
  }

  const handleBodyFatOnMouseOut = event => handleBodyFatOnBlur(event)
  const handleBodyFatOnKeyDown = event => handleBodyFatOnChange(event)

  return (
    <Layout>
      <SEO
        title={tdeePageMetadata.title}
        description={tdeePageMetadata.description}
        pathname={tdeePageMetadata.slug}
        image={tdeePageMetadata.ogImage}
      />
      <Heading1>{tdeePageMetadata.title}</Heading1>
      <section className={styles.section}>
        <div className={styles.form_container}>
          <div className={styles.result}>
            {getPageState.valid ? (
              <h2 className={styles.result_text}>
                <em>{getPageState.tdee}</em>{" "}
                <span className={styles.result_units}>kcal/day</span>
              </h2>
            ) : (
              <SuperLead className={styles.result_text}>
                Please Fill the Form
              </SuperLead>
            )}
            <div className={styles.bmr}>
              {getPageState.valid ? (
                <span>
                  (BMR: {getPageState.bmr} kcal/day + Activity:{" "}
                  {getPageState.tdee - getPageState.bmr} kcal/day)
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

          <ValidationField
            isHidden={
              !getPageState.activity.touched ||
              !getPageState.activity.blur ||
              getPageState.activity.valid
            }
          >
            You must select a valid activity level.
          </ValidationField>
          <div className={styles.input_field}>
            <select
              name="Activity"
              id="Activity"
              onChange={event => handleActivityOnChange(event)}
              onBlur={event => handleActivityOnBlur(event)}
              onMouseOut={event => handleActivityOnMouseOut(event)}
              onKeyDown={event => handleActivityOnKeyDown(event)}
            >
              {activityMultiplier.map(am => {
                return (
                  <option key={am.key} value={am.value}>
                    {am.title}
                  </option>
                )
              })}
            </select>
          </div>
          <ValidationField
            isHidden={
              !getPageState.weight.touched ||
              !getPageState.weight.blur ||
              getPageState.weight.valid
            }
          >
            You must enter a valid weight in pounds (lbs).
          </ValidationField>
          <div className={styles.input_field}>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Weight (lbs)"
              onChange={event => handleWeightOnChange(event)}
              onBlur={event => handleWeightOnBlur(event)}
              onMouseOut={event => handleWeightOnMouseOut(event)}
              onKeyDown={event => handleWeightOnKeyDown(event)}
            />
          </div>
          <ValidationField
            isHidden={
              !getPageState.bodyFatPercentage.touched ||
              !getPageState.bodyFatPercentage.blur ||
              getPageState.bodyFatPercentage.valid
            }
          >
            You must enter a valid body fat percentage.
          </ValidationField>
          <div className={styles.input_field}>
            <input
              type="text"
              id="bodyfat"
              name="bodyfat"
              placeholder="Body Fat (%)"
              onChange={event => handleBodyFatOnChange(event)}
              onBlur={event => handleBodyFatOnBlur(event)}
              onMouseOut={event => handleBodyFatOnMouseOut(event)}
              onKeyDown={event => handleBodyFatOnKeyDown(event)}
            />
          </div>
          <Paragraph>
            <em>NOTE: </em>If you do not know your body fat, please use our{" "}
            <Link to={bodyFatPageMetadata.slug}>
              {bodyFatPageMetadata.title.toLowerCase()}
            </Link>
          </Paragraph>
          <Paragraph>
            <em>DISCLAIMER:</em> This result is an estimate! This result is only
            useful in that it allows a person to approximate a reasonable
            starting point. Trial and error, along with good logging, will allow
            for a series of precision adjustments to meet your goals.{" "}
          </Paragraph>
        </div>
      </section>
      <section className={styles.container}>
        <Heading2>TDEE Explained</Heading2>
        <Paragraph>
          TDEE stands for <em>total daily energy expenditure</em>. This is the
          single most important value for a person to know if they are
          attempting to change their body composition using hard data &mdash; a
          method that <em>works 100% of the time</em>.
        </Paragraph>
        <Paragraph>
          TDEE, luckily, is very straight forward.{" "}
          <em>
            TDEE is the amount of energy your body consumes (i.e. "burning
            Calories") in a given day.
          </em>{" "}
          This includes everything! We're talking from your body's autonomic
          functions that you have no control over, to other things like
          thinking, walking, running, exercising, chewing, and more. It's not an
          exaggeration when we say it's literally everything.
        </Paragraph>
        <Paragraph>
          This is a useful number to know because losing weight is
          <em> undeniably calories in - calories out</em>. Note: we are not
          down-playing the challenges of body recomposition. But, those are
          functional challenges that have to do with our daily lives, genetics
          (such as how much muscle you can carry), and more. But, the equation
          really is that simple.
        </Paragraph>
        <Paragraph>
          Once you know how many calories you expend, you know how many you need
          to expend and/or reduce from your food intake.
        </Paragraph>
      </section>
      <section className={styles.container}>
        <Heading2>BMR Explained</Heading2>
        <Paragraph>
          <em>BMR is overrated as a health and fitness tool</em>. It has some
          limited utility. But, not for most people reading this page.{" "}
        </Paragraph>
        <Paragraph>
          <em>
            BMR is an accounting of how many calories your body uses doing
            nothing.
          </em>{" "}
          You should never do "nothing". If you're doing nothing, then either
          something terrible happened or you're not working toward lifestyle
          optimization.
        </Paragraph>
        <Paragraph>
          The only thing a person interested in lifestyle optimization should
          consider BMR useful for is understanding that{" "}
          <em>a fit, lean, muscled body has a far higher BMR</em> and therefore
          a much greater capacity to burn calories at rest than its opposite.
          And, therefore it allows you to live a higher quality of life without
          suffering as much in the kitchen.{" "}
        </Paragraph>
        <Paragraph>
          Keep in mind,{" "}
          <em>
            BMR is included in the TDEE estimate. TDEE is BMR plus everything
            else
          </em>
          . So, this brings us back to the original point:{" "}
          <em>BMR is nearly useless</em> for lifestyle optimization and fitness
          purposes.{" "}
        </Paragraph>
        <Paragraph>
          For those of you who are interested, outside of lifestyle optimization
          and fitness there are at least two places where BMR is very useful.
          First, in critically ill and/or completely immobilized patients. If
          you're looking to keep someone who is completely immobilized at a
          healthy weight you'd want to estimate their BMR. Second, in developing
          a TDEE calculator. It's worth noting that{" "}
          <em>
            the above TDEE calculator estimated BMR using the original
            Katch-McArdle equation
          </em>
          . It was chosen specifically{" "}
          <em>because it accounts for body composition</em>, and it's why body
          fat percentage is requested in the fields above. Lean, muscular bodies
          burn a large amount of additional calories when compared to bodies
          with low muscle mass and/or higher fatty tissue per pound of weight.
        </Paragraph>
      </section>
    </Layout>
  )
}

export default TDEECalculatorPage

export const calculataeKatchMcArdleBmr = (weight, bodyFatPercentage) => {
  return 370 + 21.6 * ((weight / 2.2) * (1 - bodyFatPercentage / 100))
}
export const calculateTdee = (bmr, activityMultiplier) => {
  return bmr * activityMultiplier
}
