import { useForm } from "react-hook-form";

function Registro() {

    const { register, handleSubmit, watch, formState: { errors },} = useForm();

    const ValSubmit = (data) => console.log(data);
    const password = watch("password", "");
  return (
    <>
      <form onSubmit={handleSubmit(ValSubmit)}>
          <label htmlFor="nombre">Nombres</label>
          <input type="text"  {...register('nombre', { 
            required: {
              value: true,
              message: "El nombre es requerido"
            },
            minLength: {
              value: 6,
              message: "El nombre debe tener minimo 6 caracteres"
            },
            maxLength: {
              value: 20,
              message: "El nombre debe tener maximo 20 caracteres"
            }
            })}/>
           {errors.nombre && (<span className="text-danger">{errors.nombre.message}</span>)}

          <label>Correo</label>
          <input  {...register('correo', {
            required: {
                value: true,
                message:  'El Correo es Requerido'
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'El correo no tiene un formato valido'
            },
        })}/>
        {errors.correo && (<span className="text-danger">{errors.correo.message}</span>)}

          <label>Fecha de Nacimiento</label>
          <input  type='date' {...register('fechaNacimiento',  {
            required: {
                value: true,
                message:  'La Fecha es Requerida'
            }
          })}/>
          {errors.fechaNacimiento && (<span className="text-danger">{errors.fechaNacimiento.message}</span>)}

          <label>Contraseña</label>
          <input  {...register('password', {
            required: {
                value: true,
                message:  'La contraseña es Requerida'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: 'La contraseña no tiene un formato valido'
            },
        })}/>
        {errors.password && (<span className="text-danger">{errors.password.message}</span>)}

          <label>Confirmar Contraseña</label>
          <input  {...register('confirmarpassword', {
            required: {
                value: true,
                message:  'La contraseña es Requerida'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                validate: value => value === password,
                message: "Las contraseñas no coinciden"
            },
        })}/>
        {errors.confirmarpassword && (<span className="text-danger">{errors.confirmarpassword.message}</span>)}

        <button className="btn btn-primary" type="submit">
          Registrarse
        </button>
      </form>
      </>
  );
}

export default Registro;
