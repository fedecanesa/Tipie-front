import React from 'react';
import { Error } from '../../components';
import {
    Button,
    TextField,
    Container,
    CircularProgress,
    CssBaseline
} from '@material-ui/core';
import Logo from '../../assets/icons/Logo/logo_1.png';
import { useStyles } from './StylesLogin';
import { Copyright } from '../../components';

const LoginView = ({ formik, loading, error }) => {
    const classes = useStyles();
    return (
        <>
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <div className={classes.paper}>

                    <img
                        src={Logo}
                        alt="Logo Trenes Argentinos"
                        className={classes.avatar}
                    />

                    <form
                        onSubmit={formik.handleSubmit}
                        className={classes.form}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Usuario"
                            autoComplete="email"
                            autoFocus
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && formik.errors.email}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && formik.errors.password}
                        />

                        {error.state && (<Error message={error.message} />)}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading || !formik.values.email || !formik.values.password}
                        >
                            {loading ? <CircularProgress size={26} style={{ color: "white" }} /> : 'Iniciar Sesión'}
                        </Button>

                    </form>
                </div>
            </Container>
            {/* <Copyright /> */}
        </>
    )
}

export default LoginView;
