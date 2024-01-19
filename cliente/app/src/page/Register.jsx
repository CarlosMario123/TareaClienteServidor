import { useForm } from "../hooks/useForm"
import useRegistration from "../hooks/userRegistration";



export default function Register() {

    const {formState,inputChange} = useForm({correo:"",password: ""});
   const {registrar} = useRegistration();
    const enviar = (event)=>{
        event.preventDefault();
        registrar(formState);

    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Correo</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required name="correo" onChange={inputChange}/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required name="password" onChange={inputChange} />
        
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={enviar}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
