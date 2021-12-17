import {
    makeStyles
} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    avatar: {
        margin: theme.spacing(2),
        borderRadius: "30%",
        height: "150px"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));