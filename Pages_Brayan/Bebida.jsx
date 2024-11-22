import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bebida.css'; // Asegúrate de importar el archivo CSS

const Bebida = () => {
    const [bebidas, setBebidas] = useState([]);
    const [tamanos, setTamanos] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        id_tamano_bebida: '',
    });
    //const [idTamano, setIdTamano] = useState('');
    const [editingBebida, setEditingBebida] = useState(null);

    useEffect(() => {
        fetchBebidas();
        fetchTamanos();
    }, []);

    const fetchBebidas = async () => {
        try {
            const response = await axios.get('/api/bebidas');
            setBebidas(response.data);
        } catch (error) {
            console.error('Error al obtener las bebidas:', error);
        }
    };

    const fetchTamanos = async () => {
        try {
            const response = await axios.get('/api/tamanobebidas');
            setTamanos(response.data);
        } catch (error) {
            console.error('Error al obtener los tamaños de bebidas:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createBebida = async () => {
        try {
            const response = await axios.post('/api/bebidas', formData);
            setBebidas([...bebidas, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error al crear la bebida:', error);
        }
    };

    const updateBebida = async () => {
        try {
            const response = await axios.put(`/api/bebidas/${editingBebida.id_bebida}`, formData);
            setBebidas(bebidas.map(b => (b.id_bebida === editingBebida.id_bebida ? response.data : b)));
            resetForm();
        } catch (error) {
            console.error('Error al actualizar la bebida:', error);
        }
    };

    const deleteBebida = async (id) => {
        try {
            await axios.delete(`/api/bebidas/${id}`);
            setBebidas(bebidas.filter(b => b.id_bebida !== id));
        } catch (error) {
            console.error('Error al eliminar la bebida:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            id_tamano_bebida: '',
        });
        setEditingBebida(null);
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
            <div className="bebida-container">
                <h1 className="title">Gestión de Bebidas</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        name="nombre"
                        placeholder="Nombre de la bebida"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                    <textarea
                        className="input-field"
                        name="descripcion"
                        placeholder="Descripción de la bebida"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                    />
                    <input
                        className="input-field"
                        type="number"
                        name="precio"
                        placeholder="Precio de la bebida"
                        value={formData.precio}
                        onChange={handleInputChange}
                    />
                    <select
                        className="input-field"
                        name="id_tamano_bebida"
                        value={formData.id_tamano_bebida}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar tamaño</option>
                        {tamanos.map(tamano => (
                            <option key={tamano.id_tamano_bebida} value={tamano.id_tamano_bebida}>
                                {tamano.nombre}
                            </option>
                        ))}
                    </select>
                    {editingBebida ? (
                        <button className="btn update-btn" onClick={updateBebida}>
                            Actualizar
                        </button>
                    ) : (
                        <button className="btn create-btn" onClick={createBebida}>
                            Crear
                        </button>
                    )}
                    {editingBebida && (
                        <button className="btn reset-btn" onClick={resetForm}>
                            Cancelar
                        </button>
                    )}
                </div>

                <table className="bebida-table">
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
                        {bebidas.map((bebida) => (
                            <tr key={bebida.id_bebida}>
                                <td>{bebida.id_bebida}</td>
                                <td>{bebida.nombre}</td>
                                <td>{bebida.descripcion}</td>
                                <td>${bebida.precio}</td>
                                <td>{bebida.tamanoBebida?.nombre || 'N/A'}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setFormData({
                                                nombre: bebida.nombre,
                                                descripcion: bebida.descripcion,
                                                precio: bebida.precio,
                                                id_tamano_bebida: bebida.id_tamano_bebida,
                                            });
                                            setEditingBebida(bebida);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deleteBebida(bebida.id_bebida)}
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

export default Bebida;
