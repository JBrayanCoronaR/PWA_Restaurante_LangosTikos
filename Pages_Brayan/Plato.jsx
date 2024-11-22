import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Plato.css'; // Archivo de estilos para este componente

const Plato = () => {
    const [platos, setPlatos] = useState([]);
    const [tamanos, setTamanos] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        id_tamano_plato: '',
    });
    const [editingPlato, setEditingPlato] = useState(null);

    useEffect(() => {
        fetchPlatos();
        fetchTamanos();
    }, []);

    const fetchPlatos = async () => {
        try {
            const response = await axios.get('/api/platos');
            setPlatos(response.data);
        } catch (error) {
            console.error('Error al obtener los platos:', error);
        }
    };

    const fetchTamanos = async () => {
        try {
            const response = await axios.get('/api/tamanoplatos');
            setTamanos(response.data);
        } catch (error) {
            console.error('Error al obtener los tamaños de platos:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createPlato = async () => {
        try {
            const response = await axios.post('/api/platos', formData);
            setPlatos([...platos, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error al crear el plato:', error);
        }
    };

    const updatePlato = async () => {
        try {
            const response = await axios.put(`/api/platos/${editingPlato.id_plato}`, formData);
            setPlatos(platos.map(p => (p.id_plato === editingPlato.id_plato ? response.data : p)));
            resetForm();
        } catch (error) {
            console.error('Error al actualizar el plato:', error);
        }
    };

    const deletePlato = async (id) => {
        try {
            await axios.delete(`/api/platos/${id}`);
            setPlatos(platos.filter(p => p.id_plato !== id));
        } catch (error) {
            console.error('Error al eliminar el plato:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            id_tamano_plato: '',
        });
        setEditingPlato(null);
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
            <div className="plato-container">
                <h1 className="title">Gestión de Platos</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        name="nombre"
                        placeholder="Nombre del plato"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                    <textarea
                        className="input-field"
                        name="descripcion"
                        placeholder="Descripción del plato"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                    />
                    <input
                        className="input-field"
                        type="number"
                        name="precio"
                        placeholder="Precio del plato"
                        value={formData.precio}
                        onChange={handleInputChange}
                    />
                    <select
                        className="input-field"
                        name="id_tamano_plato"
                        value={formData.id_tamano_plato}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar tamaño</option>
                        {tamanos.map((tamano) => (
                            <option key={tamano.id_tamano_plato} value={tamano.id_tamano_plato}>
                                {tamano.nombre}
                            </option>
                        ))}
                    </select>
                    {editingPlato ? (
                        <>
                            <button className="btn update-btn" onClick={updatePlato}>Actualizar</button>
                            <button className="btn reset-btn" onClick={resetForm}>Cancelar</button>
                        </>
                    ) : (
                        <button className="btn create-btn" onClick={createPlato}>Crear</button>
                    )}
                </div>

                <table className="plato-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Tamaño</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {platos.map((plato) => (
                            <tr key={plato.id_plato}>
                                <td>{plato.id_plato}</td>
                                <td>{plato.nombre}</td>
                                <td>{plato.descripcion}</td>
                                <td>${plato.precio}</td>
                                <td>{plato.tamanoPlato?.nombre || 'N/A'}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setFormData({
                                                nombre: plato.nombre,
                                                descripcion: plato.descripcion,
                                                precio: plato.precio,
                                                id_tamano_plato: plato.id_tamano_plato,
                                            });
                                            setEditingPlato(plato);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deletePlato(plato.id_plato)}
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

export default Plato;
