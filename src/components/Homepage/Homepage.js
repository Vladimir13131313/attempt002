import React, {useState} from "react";
import './Homepage.scss';
import {InfoPart} from "./InfoPart/InfoPart";
import LogInPart from "./LogInPart/LogInPart";
import {ModalWindow} from "../Modals";
import {AuthForm} from "../Forms/authForm";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const Homepage = () => {
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const [openModalSignup, setOpenModalSignup] = useState(false);
    const [errEm, setErrEm] = useState('');
    const [errPas, setErrPas] = useState('');

    function openLogin () {
        setOpenModalLogin(true);
    }
    function closeLogin () {
        setOpenModalLogin(false)
    }
    function openSignup () {
        setOpenModalSignup(true);
    }
    function closeSignup () {
        setOpenModalSignup(false)
    }
    function openOtherOne () {
        if (openModalLogin) {
            setOpenModalLogin(false);
            setOpenModalSignup(true);
        } else if (openModalSignup) {
            setOpenModalLogin(true);
            setOpenModalSignup(false);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, "Must be 15 characters or less")
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(formik.errors)
            if (formik.touched.email && formik.errors.email) {
                setErrEm("error-input")
            }
            if (formik.touched.password && formik.errors.password) {
                setErrPas("error-input")
            }
        },
    });

    return (
        <div className="homepage">
            <InfoPart/>
            <LogInPart funcLog={openLogin} funcSign={openSignup}/>
            <ModalWindow open={openModalLogin} close={closeLogin}>
                <AuthForm
                    haveAcc="No account?"
                    formHeader="Log in"
                    whereTo="Create one"
                    openOtherForm={openOtherOne}
                    btnAction={formik.handleSubmit}
                    valEmail={formik.values.email}
                    setEmail={formik.handleChange}
                    valPassword={formik.values.password}
                    setPassword={formik.handleChange}
                    emailName="email"
                    passwordName="password"
                    inputBlur={formik.handleBlur}
                    errorEmail={errEm}
                    errorPassword={errPas}
                />
            </ModalWindow>
            <ModalWindow open={openModalSignup} close={closeSignup}>
                <AuthForm haveAcc="Already have an account?" formHeader="Sign up" whereTo="Log in" openOtherForm={openOtherOne} btnAction={formik.handleSubmit}/>
            </ModalWindow>
        </div>
    )
}