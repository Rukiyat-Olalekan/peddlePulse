"use client";
import React, { useRef, useState } from "react";
import WorkNav from "./WorkNav";
import styles from "./page.module.css";

function page() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const businessModelRef = useRef<HTMLInputElement>(null);
  const yearsRef = useRef<HTMLInputElement>(null);
  const channelRef = useRef<HTMLInputElement>(null);
  const revenueRef = useRef<HTMLInputElement>(null);
  const lastRevenueRef = useRef<HTMLInputElement>(null);
  const monthRevenueRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstNameValue = firstNameRef.current?.value || "";
    const lastNameValue = lastNameRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const countryValue = countryRef.current?.value || "";
    const companyValue = companyRef.current?.value || "";
    const numValue = numRef.current?.value || "";
    const businessModelValue = businessModelRef.current?.value || "";
    const yearsValue = yearsRef.current?.value || "";
    const channelValue = channelRef.current?.value || "";
    const revenueValue = revenueRef.current?.value || "";
    const lastRevenueValue = lastRevenueRef.current?.value || "";
    const monthRevenueValue = monthRevenueRef.current?.value || "";
    const budgetValue = budgetRef.current?.value || "";

    if (firstNameValue.trim() === "") {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }

    console.log(
      firstNameValue,
      lastNameValue,
      emailValue,
      countryValue,
      companyValue,
      numValue,
      businessModelValue,
      yearsValue,
      channelValue,
      revenueValue,
      lastRevenueValue,
      monthRevenueValue,
      budgetValue
    );
  };

  return (
    <>
      <WorkNav />
      <section className={styles.work}>
        <h3>Let's work together</h3>
        <div className={styles["work-title"]}>
          {" "}
          <p>
            At <span className={styles.peddle}>PEDDLEPULSE</span>, we believe in
            taking the time to understand your business and it's uniques needs
            before we begin any partnership. That's why we offer a free one hour
            call. During this call, we'll learn about your business, your growth
            goals, and any challenges you may be facing.
          </p>
          <p>
            Once we determine if we are good fit to work together we will then
            explain our process and how we can help you achieve.{" "}
          </p>
        </div>
        <form className={styles.form} onSubmit={submitHandler}>
          <p className={styles["form-title"]}>
            Name <span className={styles.small}>(required)</span>
          </p>
          <div className={styles["form-div"]}>
            <div className={styles.name}>
              <div className={styles.input}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="name"
                  ref={firstNameRef}
                  required
                  className={isEmpty ? "empty" : ""}
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="name"
                  ref={lastNameRef}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email">
                Email <span className={styles.small}>(required)</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div>
              <label htmlFor="company-name">Your company name</label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                ref={companyRef}
              />
            </div>
            <div>
              <label htmlFor="country">
                What country is your company located?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                ref={countryRef}
                required
              />
            </div>
            <p>Your phone number</p>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" ref={countryRef} />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <input type="number" id="number" name="number" ref={numRef} />
            </div>
            <div>
              <label htmlFor="business-model">
                Which best describes your business model?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="text"
                id="business-model"
                name="business-model"
                ref={businessModelRef}
                required
              />
            </div>
            <div>
              <label htmlFor="years">
                How long has your business been operating?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="month"
                id="years"
                name="years"
                ref={yearsRef}
                required
              />
            </div>
            <div>
              <label htmlFor="revenue">
                What was your revenue last month?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="number"
                id="revenue"
                name="revenue"
                ref={revenueRef}
                required
              />
            </div>
            <div>
              <label htmlFor="last-revenue">
                What's your companies revenue last year?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="number"
                id="last-revenue"
                name="revenue"
                ref={lastRevenueRef}
                required
              />
            </div>
            <div>
              <label htmlFor="month-revenue">
                What is your target monthly revenue in 6 months?{" "}
                <span className={styles.small}>(required)</span>
              </label>
              <input
                type="number"
                id="month-revenue"
                name="revenue"
                ref={monthRevenueRef}
              />
            </div>
            <div>
              What channels are your currently marketing in?{" "}
              <span className={styles.small}>(required)</span>
            </div>
            <div>
              <div className={styles.check}>
                <label>
                  <input type="checkbox" name="socials" value="facebook" />{" "}
                  <span className={styles.pad}>Facebook/Instagram</span>
                </label>
              </div>
              <div className={styles.check}>
                <label>
                  <input type="checkbox" name="socials" value="google" />{" "}
                  <span className={styles.pad}>Google</span>
                </label>
              </div>
              <div className={styles.check}>
                <label>
                  <input type="checkbox" name="socials" value="youtube" />
                  <span className={styles.pad}>Youtube</span>
                </label>
              </div>
              <div className={styles.check}>
                <label>
                  <input type="checkbox" name="socials" value="email" />{" "}
                  <span className={styles.pad}>Email and/ SMS</span>
                </label>
              </div>
              <div className={styles.check}>
                <label>
                  {" "}
                  <input type="checkbox" name="socials" value="none" />
                  <span className={styles.pad}>None</span>
                </label>
              </div>
              <div className={styles.check}>
                <label>
                  {" "}
                  <input type="checkbox" name="socials" value="other" />
                  <span className={styles.pad}>Other</span>
                </label>
              </div>
            </div>
            <div className={styles.select}>
              <label htmlFor="budget">
                How much do you currently spend on digital marketing per month
                across all channels? (Facebook, Google, Display, email marketing
                etc) <span className={styles.small}>(required)</span>
              </label>
              <select ref={budgetRef}>
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="1">1000</option>
                <option value="2">2000</option>
                <option value="3">10,000</option>
                <option value="4">Above 10,000</option>
              </select>
            </div>
          </div>
          <div className={styles.button}>
            <button type="submit">Book Us Today</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default page;
