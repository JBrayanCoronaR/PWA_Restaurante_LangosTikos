import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css'; // Asegúrate de importar el archivo CSS
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [platos, setPlatos] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [postres, setPostres] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        id_plato: '',
        id_bebida: '',
        id_postre: '',
    });
    const [editingMenu, setEditingMenu] = useState(null);

    useEffect(() => {
        fetchMenus();
        fetchPlatos();
        fetchBebidas();
        fetchPostres();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await axios.get('/api/menus');
            setMenus(response.data);
        } catch (error) {
            console.error('Error al obtener los menús:', error);
        }
    };

    const fetchPlatos = async () => {
        try {
            const response = await axios.get('/api/platos');
            setPlatos(response.data);
        } catch (error) {
            console.error('Error al obtener los platos:', error);
        }
    };

    const fetchBebidas = async () => {
        try {
            const response = await axios.get('/api/bebidas');
            setBebidas(response.data);
        } catch (error) {
            console.error('Error al obtener las bebidas:', error);
        }
    };

    const fetchPostres = async () => {
        try {
            const response = await axios.get('/api/postres');
            setPostres(response.data);
        } catch (error) {
            console.error('Error al obtener los postres:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createMenu = async () => {
        try {
            const response = await axios.post('/api/menus', formData);
            setMenus([...menus, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error al crear el menú:', error);
        }
    };

    const updateMenu = async () => {
        try {
            const response = await axios.put(`/api/menus/${editingMenu.id_menu}`, formData);
            setMenus(menus.map(m => (m.id_menu === editingMenu.id_menu ? response.data : m)));
            resetForm();
        } catch (error) {
            console.error('Error al actualizar el menú:', error);
        }
    };

    const deleteMenu = async (id) => {
        try {
            await axios.delete(`/api/menus/${id}`);
            setMenus(menus.filter(m => m.id_menu !== id));
        } catch (error) {
            console.error('Error al eliminar el menú:', error);
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: '',
            id_plato: '',
            id_bebida: '',
            id_postre: '',
        });
        setEditingMenu(null);
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
            <div className="menu-container">
                <h1 className="title">Gestión de Menús</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        name="nombre"
                        placeholder="Nombre del menú"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                    <select
                        className="input-field"
                        name="id_plato"
                        value={formData.id_plato}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar plato</option>
                        {platos.map(plato => (
                            <option key={plato.id_plato} value={plato.id_plato}>
                                {plato.nombre}
                            </option>
                        ))}
                    </select>
                    <select
                        className="input-field"
                        name="id_bebida"
                        value={formData.id_bebida}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar bebida</option>
                        {bebidas.map(bebida => (
                            <option key={bebida.id_bebida} value={bebida.id_bebida}>
                                {bebida.nombre}
                            </option>
                        ))}
                    </select>
                    <select
                        className="input-field"
                        name="id_postre"
                        value={formData.id_postre}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar postre</option>
                        {postres.map(postre => (
                            <option key={postre.id_postre} value={postre.id_postre}>
                                {postre.nombre}
                            </option>
                        ))}
                    </select>
                    {editingMenu ? (
                        <button className="btn update-btn" onClick={updateMenu}>
                            Actualizar
                        </button>
                    ) : (
                        <button className="btn create-btn" onClick={createMenu}>
                            Crear
                        </button>
                    )}
                    {editingMenu && (
                        <button className="btn reset-btn" onClick={resetForm}>
                            Cancelar
                        </button>
                    )}
                </div>

                <table className="menu-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Plato</th>
                            <th>Bebida</th>
                            <th>Postre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map(menu => (
                            <tr key={menu.id_menu}>
                                <td>{menu.id_menu}</td>
                                <td>{menu.nombre}</td>
                                <td>{menu.plato?.nombre || 'N/A'}</td>
                                <td>{menu.bebida?.nombre || 'N/A'}</td>
                                <td>{menu.postre?.nombre || 'N/A'}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setFormData({
                                                nombre: menu.nombre,
                                                id_plato: menu.id_plato,
                                                id_bebida: menu.id_bebida,
                                                id_postre: menu.id_postre,
                                            });
                                            setEditingMenu(menu);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deleteMenu(menu.id_menu)}
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

export default Menu;
