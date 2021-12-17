import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .required("Campo Requerido")
        .max(30, "30 caracteres máximo"),
    password: Yup.string()
        .required("Campo Requerido")
        .max(30, "30 caracteres máximo")
})