import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import { loginSchema } from "./login.schema";
import LoginView from './LoginView';
import { UseLogin } from '../../services/Login';
import ProviderContext from '../../context/UserContext';

const Login = () => {
    const { setUser } = useContext(ProviderContext)
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        state: false,
        message: ""
    });
    const valid_login = async (email, password) => UseLogin(email, password);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,

        onSubmit: async () => {
            const user = await valid_login(
                formik.values.email,
                formik.values.password
            );

            if (user) {
                setUser(user)
                setLoading(true)
                setError({ state: false })
                setTimeout(() => {
                    setError({ state: false })
                    formik.handleReset();
                    history.push(`/inicio`);
                }, 3000);

            } else {
                setLoading(true)
                setTimeout(() => {
                    formik.handleReset();
                    setError({
                        state: true,
                        message: "Usuario y/o contraseña incorrecta."
                    });
                    setLoading(false)
                }, 3000);
            }
        }
    })


    return (
        <LoginView
            formik={formik}
            error={error}
            loading={loading}
        />
    )
}

export default Login;
