import { useState } from "react"

export const FormularioEstudiante = ({ agregar }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");

    const guardarEstudiante = (event) => {
        event.preventDefault();

        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        }
        agregar(estudiante)
        setId("");
        setNombre("");
        setSemestre("");
    }

    return (
        <>
            <form onSubmit={guardarEstudiante}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
}

const onSubmit = (userInfo) => console.log(userInfo);

const messages = {
    req: "Este campo es obligatorio",
    nom: "Requiere minimo 3 caracteres",
    codigo: "Debes tener un id de minimo 6 y maximo 9 numeros"
   };

   const patterns = {
    name: /^[A-Za-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[0-9]+$/i
   };


<form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} {...register("id"), { required:
                                                                messages.required,
                                                                minLength: {
                                                                value: 6,
                                                                message: messages.phone
                                                                },
                                                                maxLength: {
                                                                value: 9,
                                                                message: messages.phone
                                                                },
                                                                pattern: {
                                                                value: patterns.phone,
                                                                message: messages.phone
                                                                }}} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} {...register("nombre"), { required: true }} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} {...register("semestre"), { required: true }} onChange={(event) => setSemestre(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>