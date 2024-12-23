import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TamanoPlato.css'; // Archivo de estilos para este componente

const TamanoPlato = () => {
    const [tamanos, setTamanos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [editingTamano, setEditingTamano] = useState(null);

    useEffect(() => {
        fetchTamanos();
    }, []);

    const fetchTamanos = async () => {
        try {
            const response = await axios.get('/api/tamanoplatos');
            setTamanos(response.data);
        } catch (error) {
            console.error('Error al obtener los tamaños de platos:', error);
        }
    };

    const createTamano = async () => {
        try {
            const response = await axios.post('/api/tamanoplatos', { nombre });
            setTamanos([...tamanos, response.data]);
            setNombre('');
        } catch (error) {
            console.error('Error al crear el tamaño de plato:', error);
        }
    };

    const updateTamano = async () => {
        try {
            const response = await axios.put(`/api/tamanoplatos/${editingTamano.id_tamano_plato}`, { nombre });
            setTamanos(tamanos.map(t => (t.id_tamano_plato === editingTamano.id_tamano_plato ? response.data : t)));
            setNombre('');
            setEditingTamano(null);
        } catch (error) {
            console.error('Error al actualizar el tamaño de plato:', error);
        }
    };

    const deleteTamano = async (id) => {
        try {
            await axios.delete(`/api/tamanoplatos/${id}`);
            setTamanos(tamanos.filter(t => t.id_tamano_plato !== id));
        } catch (error) {
            console.error('Error al eliminar el tamaño de plato:', error);
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
            <div className="tamano-plato-container">
                <h1 className="title">Gestión de Tamaños de Platos</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Nombre del tamaño de plato"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    {editingTamano ? (
                        <button className="btn update-btn" onClick={updateTamano}>Actualizar</button>
                    ) : (
                        <button className="btn create-btn" onClick={createTamano}>Crear</button>
                    )}
                </div>

                <table className="tamano-plato-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tamanos.map((tamano) => (
                            <tr key={tamano.id_tamano_plato}>
                                <td>{tamano.id_tamano_plato}</td>
                                <td>{tamano.nombre}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setNombre(tamano.nombre);
                                            setEditingTamano(tamano);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deleteTamano(tamano.id_tamano_plato)}
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

export default TamanoPlato;
