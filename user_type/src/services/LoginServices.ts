import {safeParse} from 'valibot';
import { LoginFormSchema } from '../types/user';
import axios from '../services/axiosInstance';


type UsuarioFormaData = {
    [key: string]: FormDataEntryValue;
}

export async function login(formData : UsuarioFormaData){
    console.log(formData);
    try{
        console.log("Entre :O al try");
        const result = safeParse(LoginFormSchema, formData);
        console.log(safeParse(LoginFormSchema, formData))
        if(result.success){
            console.log("Entre :O no se ejecuta");
            /*
            const url = `${import.meta.env.VITE_API_URL}/src/pages/login`;
            const { data } = await axios.post(url, result.output)
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('email', result.output.email)
            return {success: true}
            */

            // Eliminar el este apartado y desmarcar lo comentado en cuanto el usuario este conectado a la API
            const MOCK_EMAIL = 'test@test.com';
            const MOCK_PASS = '123456';

            if(result.output.email === MOCK_EMAIL && result.output.password === MOCK_PASS){
                localStorage.setItem('token','mock-token-12345');
                localStorage.setItem('email',result.output.email);
                return { success : true}
            }else{
                return { 
                    success : false,
                    error : 'Datos del formulario incorrectos ingresa MOCK email y password',
                         
                }

            }
            
            

        } else {
            const detailError: Record<string,string[]> = {};
            for (const issue of result.issues){
                const campo = issue.path![0].key as string
                if(!detailError[campo]){
                    detailError[campo] = []
                }
                detailError[campo].push(issue.message);
            }
            return {
                success: false,
                error: 'datos del formulario no validos',
                detailErrors: detailError,
            }
        }

        

    }catch (error: any){
        return {
            success: false,
            error: error.response?.data?.error ?? "Error desconocido"
            //detalleErrores:
        }

    }
}