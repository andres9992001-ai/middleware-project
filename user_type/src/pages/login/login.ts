import '/src/styles/sign-in.css';
import { login } from '../../services/LoginServices';


export async function action (formData : FormData){
   const data = Object.fromEntries(formData);
   const resultado = await login(data);
   return resultado
}

function bindLoginForm(){
    const form = document.querySelector<HTMLFormElement>('#loginForm')!
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const resultado = await action(formData)

        if(!resultado.success){
            calculoErrores(resultado)
            return
        }
        window.location.href = '/src/pages/stock/stock.html'
        
    });
}



export function calculoErrores (resultado : {
    error?: string
    detalleErores?: Record<string, string[]>
    }){
        const errorGeneral = document.querySelector<HTMLDivElement>('#errorGeneral')!
        const emailInput = document.querySelector<HTMLInputElement>('#emailData')!
        const passwordInput = document.querySelector<HTMLInputElement>('#passwordData')!
        const emailError = document.querySelector<HTMLDivElement>('#emailError')!
        const passwordError = document.querySelector<HTMLDivElement>('#passwordError')!


        if(resultado.error){
            errorGeneral.textContent = resultado.error
            errorGeneral.classList.remove('d-none')
        }
        else{
            errorGeneral.classList.add('d-none')
        
        }

        const erroresEmail = resultado.detalleErores?.email
        emailInput.classList.toggle('is-invalid', !!erroresEmail)
        emailError.textContent = erroresEmail?.[0] ?? ''

        const erroresPassword = resultado.detalleErores?.password
        passwordInput.classList.toggle('is-invalid', !!erroresPassword)
        passwordError.textContent = erroresPassword?.[0] ?? ''


}
export function excuteLogin(){
    renderLogin();
    bindLoginForm();

}    


export function renderLogin (){
       const login = document.querySelector<HTMLDivElement>("#login");
       console.log(login);
    if(!login){
        return ;
    }
    else{
        login.innerHTML = 
        `  
             <main class="form-signin w-100 m-auto">
                <form id="loginForm">
                
                    <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                     <div id="errorGeneral" class="alert alert-danger d-none"></div>
                    <div class="form-floating">
                    <input
                        type="email"
                        class="form-control"
                        id="emailData"
                        placeholder="name@example.com"
                        name = "email"
                    />
                    <label for="emailData">Email correo</label>
                    </div>
                    <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="passwordData"
                        placeholder="Password"
                        name = "password"
                    />
                    <div id="emailError" class="invalid-feedback"></div>

                    <label for="passwordData">contraseña</label>
                    <div id="passwordError" class="invalid-feedback"></div>
                    </div>
                
                    <button href="/src/pages/dashboard/dashboard.html" class="btn btn-primary w-100 py-2" type="submit">
                    Entrar
                    </button>
                
                </form>
            </main>
                
        `;

    }
}

