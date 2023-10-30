import React, { Fragment, useState } from "react";

interface myForm {};

function Form(props: myForm) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    queryarea: "type here",
  });

  const handleChanger = (event: any): void => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <form action="" className="">
        <div>
          <input
            type="text"
            className="py-3 my-3 form-control"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChanger}
          />
        </div>
        <div>
          <input
            type="email"
            className="py-3 my-4 form-control"
            placeholder="@gmail.com"
            value={formState.email}
            name="email"
            onChange={handleChanger}
          />
        </div>
        <div>
          <textarea
            name="queryarea"
            id=""
            className="form-control"
            style={{ width: "100%" }}
            rows={6}
            onChange={handleChanger}
            value={formState.queryarea}
          ></textarea>
        </div>
        <div className="mt-3 d-flex align-items-center justify-content-center">
          <button type="button" className="btn submitBtn cvBtn">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form;
