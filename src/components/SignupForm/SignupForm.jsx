import React from 'react'
import styles from "./SignupForm.module.scss"
import { useFormik } from 'formik'
import { SignUpSchema } from '../../schemas'

const initialValues = {
    name: '',
    email: '',
    pass: '',
    cPass: '',
}

const SignupForm = () => {
    const { values, touched, handleSubmit, errors, handleBlur, handleChange } = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            action.resetForm();
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <div className={styles.center}>
            <div className={styles.container}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input autoComplete='on' onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" name='name' placeholder='Name' />
                    {touched.name && errors.name && <span>{errors.name}</span>}
                    <input autoComplete='on' onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" name='email' placeholder='Email' />
                    {touched.email && errors.email && <span>{errors.email}</span>}
                    <input autoComplete='on' onChange={handleChange} onBlur={handleBlur} value={values.pass} type="password" name='pass' placeholder='Password' />
                    {touched.pass && errors.pass && <span>{errors.pass}</span>}
                    <input autoComplete='on' onChange={handleChange} onBlur={handleBlur} value={values.cPass} type="password" name='cPass' placeholder='Confirm Password' />
                    {touched.cPass && errors.cPass && <span>{errors.cPass}</span>}
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}

export default SignupForm