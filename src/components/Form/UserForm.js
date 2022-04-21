import React from "react";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('the email address is invalid').required(),
    gender: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required()
})

const UserForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    gender: '',
                    country: '',
                    state: ''

                }}

                validationSchema={validationSchema}
                onSubmit={(data) => { console.log(data) }}
            >

                {({ values, errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field name='name' type='input' placeholder='Name' className='form-control' />
                            {touched.name && errors.name ? (
                                <small className="text-danger">{errors.name}</small>

                            ) : null}

                        </div>
                        <br />
                        <div className="form-group">
                            <Field name='email' type='input' placeholder='Email' className='form-control' />
                            {touched.email && errors.email ? (
                                <small className="text-danger">{errors.email}</small>

                            ) : null}
                        </div>
                        <br />
                        <div className="form-group">
                            <Field name='country' as='select' className='form-control'>
                                <option value=''>Select your Country</option>
                                <option value='India'>India</option>
                                <option value='Canada'>Canada</option>
                                <option value='USA'>USA</option>
                            </Field>
                            {touched.country && errors.country ? (
                                <small className="text-danger">{errors.country}</small>

                            ) : null}
                        </div>
                        <br />
                        <div className="form-group">
                            <Field name='state' as='select' className='form-control'>
                                <option value=''>Select your state</option>
                                <option value='Gujarat'>Gujarat</option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Mumbai'>Mumbai</option>
                            </Field>
                            {touched.state && errors.state ? (
                                <small className="text-danger">{errors.state}</small>

                            ) : null}
                        </div>
                        <br />
                        <label>Gender</label>
                        <div className="form-check">
                            <Field name='gender' type='radio' value='Male' />
                            <label>Male</label>
                        </div>
                        <div className="form-check">
                            <Field name='gender' type='radio' value='Female' />
                            <label>Female</label>
                        </div>
                        <div className="form-check">
                            <Field name='gender' type='radio' value='Others' />
                            <label>Others</label>
                            {touched.gender && errors.gender ? (
                                <small className="text-danger">{errors.gender}</small>

                            ) : null}
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </div>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>

    )
}


export default UserForm