import { useForm } from "../hooks/useForm"
import useAccess from "../hooks/useAccess";

export default function Login() {
    const {formState,inputChange} = useForm({correo:"",password: ""});
    const {loggearse} = useAccess()


    const enviar = (event)=>{
        event.preventDefault();
        loggearse(formState);
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse gap-0">
    <img src="https://as1.ftcdn.net/v2/jpg/02/79/60/64/1000_F_279606416_Qj70VYvzUnm65QtThfujOcmpN6WXv3qC.jpg" alt="" className="w-96 h-[19.84rem]"/>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
        <form className="card-body ">
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
            <button className="btn btn-primary" onClick={enviar}>Login</button>
          </div>
        </form>
      </div>


    </div>
  </div>
  )
}
