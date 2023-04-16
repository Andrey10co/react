export const {eliminarPorId} =TablaEstudiante;



export const TablaEstudiante = ({ listaEstudiantes }) => {

    const estudiantes=listaEstudiantes;
    

    const eliminarPorId = (id) => {
        const nuevaLista = estudiantes.filter((estudiante) => estudiante.id !== id);
        eliminarEstudiante(nuevaLista);
    };



    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaEstudiantes.map((estudiante) => <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td> <button className="btn btn-info" onClick={ ()=> eliminarPorId (estudiante.id) }>Eliminar</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )

    nuevaLista;
}