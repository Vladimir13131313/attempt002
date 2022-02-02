import React, {useState} from "react";
import './Homepage.scss';
import {InfoPart} from "./InfoPart/InfoPart";
import { useNavigate } from 'react-router-dom';
import LogInPart from "./LogInPart/LogInPart";
import {ModalWindow} from "../Modals";
import {AuthForm} from "../Forms/authForm";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Truck} from "./Truck/Truck";


export const Homepage = ({func}) => {
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const [openModalSignup, setOpenModalSignup] = useState(false);
    const navigate = useNavigate();
    const person = "person";

    function openLogin () {
        setOpenModalLogin(true);
    }
    function closeLogin () {
        setOpenModalLogin(false)
        formik.values.email = ''
        formik.values.password = ''
    }
    function openSignup () {
        setOpenModalSignup(true);
    }
    function closeSignup () {
        setOpenModalSignup(false)
        formik.values.email = ''
        formik.values.password = ''
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
                .required('Email must be entered'),
            password: Yup.string()
                .min(6, "Must be 6 characters or more")
                .required('Password must be entered'),
        }),
        onSubmit: values => {

            if (openModalSignup) {
                localStorage.setItem(person, JSON.stringify({email: values.email, password: values.password}));
                closeSignup()
                openLogin()
            } else if (openModalLogin) {
                let checkPerson = JSON.parse(localStorage.getItem(person));
                if (values.email === checkPerson.email) {
                    if (values.password === checkPerson.password) {
                        func()
                        navigate("/stores")
                    }
                }
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
                    emailName="email"
                    passwordName="password"
                    formik={formik}
                />
            </ModalWindow>
            <ModalWindow open={openModalSignup} close={closeSignup}>
                <AuthForm
                    haveAcc="Already have an account?"
                    formHeader="Sign up"
                    whereTo="Log in"
                    openOtherForm={openOtherOne}
                    emailName="email"
                    passwordName="password"
                    formik={formik}
                />
            </ModalWindow>
            <Truck/>
        </div>
    )
}