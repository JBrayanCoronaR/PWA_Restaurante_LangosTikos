import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Empleado.css'; // Asegúrate de tener estilos definidos para este componente

const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [cargos, setCargos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [idCargo, setIdCargo] = useState('');
    const [editingEmpleado, setEditingEmpleado] = useState(null);

    useEffect(() => {
        fetchEmpleados();
        fetchCargos();
    }, []);

    const fetchEmpleados = async () => {
        try {
            const response = await axios.get('/api/empleados');
            setEmpleados(response.data);
        } catch (error) {
            console.error('Error al obtener los empleados:', error);
        }
    };

    const fetchCargos = async () => {
        try {
            const response = await axios.get('/api/cargos');
            setCargos(response.data);
        } catch (error) {
            console.error('Error al obtener los empleados:', error);
        }
    };

    const createEmpleado = async () => {
        try {
            const response = await axios.post('/api/empleados', { nombre, id_cargo: idCargo });
            setEmpleados([...empleados, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error al crear el empleado:', error);
        }
    };

    const updateEmpleado = async () => {
        try {
            const response = await axios.put(`/api/empleados/${editingEmpleado.id}`, {
                nombre,
                id_cargo: idCargo,
            });
            setEmpleados(empleados.map(e => (e.id === editingEmpleado.id ? response.data : e)));
            resetForm();
        } catch (error) {
            console.error('Error al actualizar el empleado:', error);
        }
    };

    const deleteEmpleado = async (id) => {
        try {
            await axios.delete(`/api/empleados/${id}`);
            setEmpleados(empleados.filter(e => e.id !== id));
        } catch (error) {
            console.error('Error al eliminar el empleado:', error);
        }
    };

    const resetForm = () => {
        setNombre('');
        setIdCargo('');
        setEditingEmpleado(null);
    };

    return (
        <>
            {/* Barra de navegación */}
            <nav className="navbar">
                <div className="navbar-logo">Restaurante "LangosTiko´s"</div>
                <ul className="navbar-links">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/menus">Menú</a></li>
                    <li><a href="/platos">Platos</a></li>
                    <li><a href="/bebidas">Bebidas</a></li>
                    <li><a href="/postres">Postres</a></li>
                    <li><a href="/cargos">Cargos</a></li>
                    <li><a href="/empleados">Empleados</a></li>
                    <li><a href="/tamanoplatos">Tamaño Plato</a></li>
                    <li><a href="/tamanobebidas">Tamaño Bebida</a></li>
                </ul>
            </nav>
            <div className="empleado-container">
                <h1 className="title">Gestión de Empleados</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Nombre del empleado"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <select
                        className="select-field"
                        value={idCargo}
                        onChange={(e) => setIdCargo(e.target.value)}
                    >
                        <option value="">Seleccione un cargo</option>
                        {cargos.map(cargo => (
                            <option key={cargo.id_cargo} value={cargo.id_cargo}>
                                {cargo.nombre}
                            </option>
                        ))}
                    </select>
                    {editingEmpleado ? (
                        <button className="btn update-btn" onClick={updateEmpleado}>Actualizar</button>
                    ) : (
                        <button className="btn create-btn" onClick={createEmpleado}>Crear</button>
                    )}
                </div>

                <table className="empleado-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cargo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(empleado => (
                            <tr key={empleado.id}>
                                <td>{empleado.id}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.cargo ? empleado.cargo.nombre : 'Sin cargo'}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setNombre(empleado.nombre);
                                            setIdCargo(empleado.id_cargo);
                                            setEditingEmpleado(empleado);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deleteEmpleado(empleado.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Empleados;
