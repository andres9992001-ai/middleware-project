import { email, minLength, nonEmpty,object, pipe, string } from 'valibot';

export const LoginFormSchema = object({
    email: pipe(string(), nonEmpty('Indique su email pls'),email('Correo no valido :O ')),
    // indicador de minimo de caracteres
    password: pipe(string(),nonEmpty('Indique su password'),minLength(5,'la contraseña debe tener 5 caracteres'))
})

export const CambiarPasswordFormSchema = object({
    // exclusivo para cambiar la contraseña
    password: pipe(string(),nonEmpty('Indique su password'),minLength(4,'la contraseña debe tener al menos 6 caracteres'))
})

export type ResultLogin = {
    success: boolean
    error?: string
    detailError?: Record<string, string[]>
}