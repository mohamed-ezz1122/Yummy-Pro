import { Formik, useFormik, validateYupSchema } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

export default function Contact() {
  let validationSchema = Yup.object(
    {
      name: Yup.string()
        .min(4, "name must be at least 3 letter")
        .max(25, "name must be at most 25 letter")
        .required("name is required"),
      phone: Yup.string()
        .required("phone is required")
        .matches(/^01[0125][0-9]{8}$/, "piease enter eygiption number "),
      age:Yup.number()
        .required("age is required")
        .min(18, "sorry your age must be in min 18 years")
        .max(60, "sorry your age must be in max 60 years"),
      email: Yup.string()
        .required("email is required")
        .email("please enter valied email"),
      password: Yup.string()
        .required("phone is required")
        .min(8, "password must be at least 5 letter")
        .max(25, "password must be at most 25 letter")
        .matches(/^[A-Z]/, "password must start upercase letter"),
        rePassword: Yup.string()
        .required("phone is required")
        .oneOf([Yup.ref("password")],"password must matches"),
    }
  )
  

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      age: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: testSubmit,
  });
  function submit()
  {
    
if(formik.values!==null)
{
  return 'sucsses'
}else
{
  return "fail"
}
   
  }
  function testSubmit()
  {
    let x=submit()
    console.log(x);
    if(x === "sucsses")
    {
      console.log("true");
      <Navigate to="/search"/>
    }
  }
 
  
  

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
               
            </Helmet>
      <form onSubmit={formik.handleSubmit}  className="vh-100 my-auto">
        <div className="row p-5">

          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {
              formik.errors.name && formik.touched.name ? <div className="alert alert-danger  p-2">
                {formik.errors.name}
              </div>
              :""
            }




            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Enter Your Phone"
              id="phone"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
             {
              formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2">
                {formik.errors.phone}
              </div>
              :""
            }




            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter Your Age"
              id="age"
              name="age"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {
              formik.errors.age && formik.touched.age ? <div className="alert alert-danger  p-2">
                {formik.errors.age}
              </div>
              :""
            }



          </div>



          <div className="col-md-6">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Your email"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {
              formik.errors.email && formik.touched.email ? <div className="alert alert-danger  p-2">
                {formik.errors.email}
              </div>
              :""
            }




            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Your password"
              id="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
  {
              formik.errors.password && formik.touched.email ? <div className="alert alert-danger  p-2">
                {formik.errors.password}
              </div>
              :""
            }


            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Your Repassword"
              id="rePassword"
              name="rePassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
            />
{
              formik.errors.rePassword && formik.touched.email ? <div className="alert alert-danger  p-2">
                {formik.errors.rePassword}
              </div>
              :""
            }


          </div>

          <button type="submit" disabled={!(formik.dirty&&formik.isValid)} className="btn btn_form btn-outline-danger mx-auto mt-4 de">
            Submit
          </button>






        </div>
      </form>
    </>
  );
}
