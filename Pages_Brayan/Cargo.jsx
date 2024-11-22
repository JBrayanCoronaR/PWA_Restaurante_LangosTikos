import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cargo.css';  // Asegúrate de importar el archivo CSS

const Cargos = () => {
    const [cargos, setCargos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [editingCargo, setEditingCargo] = useState(null);

    useEffect(() => {
        fetchCargos();
    }, []);

    const fetchCargos = async () => {
        try {
            const response = await axios.get('/api/cargos');
            setCargos(response.data);
        } catch (error) {
            console.error('Error al obtener los cargos:', error);
        }
    };

    const createCargo = async () => {
        try {
            const response = await axios.post('/api/cargos', { nombre });
            setCargos([...cargos, response.data]);
            setNombre('');
        } catch (error) {
            console.error('Error al crear el cargo:', error);
        }
    };

    const updateCargo = async () => {
        try {
            const response = await axios.put(`/api/cargos/${editingCargo.id_cargo}`, { nombre });
            setCargos(cargos.map(c => (c.id_cargo === editingCargo.id_cargo ? response.data : c)));
            setNombre('');
            setEditingCargo(null);
        } catch (error) {
            console.error('Error al actualizar el cargo:', error);
        }
    };

    const deleteCargo = async (id) => {
        try {
            await axios.delete(`/api/cargos/${id}`);
            setCargos(cargos.filter(c => c.id_cargo !== id));
        } catch (error) {
            console.error('Error al eliminar el cargo:', error);
        }
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
            <div className="cargo-container">
                <h1 className="title">Gestión de Cargos</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Nombre del cargo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {editingCargo ? (
                        <button className="btn update-btn" onClick={updateCargo}>Actualizar</button>
                    ) : (
                        <button className="btn create-btn" onClick={createCargo}>Crear</button>
                    )}
                </div>

                <table className="cargo-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargos.map(cargo => (
                            <tr key={cargo.id_cargo}>
                                <td>{cargo.id_cargo}</td>
                                <td>{cargo.nombre}</td>
                                <td>
                                    <button className="btn edit-btn" onClick={() => {
                                        setNombre(cargo.nombre);
                                        setEditingCargo(cargo);
                                    }}>Editar</button>
                                    <button className="btn delete-btn" onClick={() => deleteCargo(cargo.id_cargo)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Cargos;