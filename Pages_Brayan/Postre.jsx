import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Postre.css'; // Asegúrate de tener los estilos definidos para este componente

const Postres = () => {
    const [postres, setPostres] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [editingPostre, setEditingPostre] = useState(null);

    useEffect(() => {
        fetchPostres();
    }, []);

    const fetchPostres = async () => {
        try {
            const response = await axios.get('/api/postres');
            setPostres(response.data);
        } catch (error) {
            console.error('Error al obtener los postres:', error);
        }
    };

    const createPostre = async () => {
        try {
            const response = await axios.post('/api/postres', {
                nombre,
                descripcion,
                precio
            });
            setPostres([...postres, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error al crear el postre:', error);
        }
    };

    const updatePostre = async () => {
        try {
            //console.log("postre ", editingPostre.id)
            const response = await axios.put(`/api/postres/${editingPostre.id_postre}`, {
                nombre,
                descripcion,
                precio
            });
            setPostres(postres.map(p => (p.id_postre === editingPostre.id_postre ? response.data : p)));
            resetForm();
        } catch (error) {
            console.error('Error al actualizar el postre:', error);
        }
    };

    const deletePostre = async (id) => {
        try {
            console.log(id);
            console.log(postres);
            await axios.delete(`/api/postres/${id}`);
            setPostres(postres.filter(p => p.id_postre !== id));
        } catch (error) {
            console.error('Error al eliminar el postre:', error);
        }
    };

    const resetForm = () => {
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setEditingPostre(null);
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
                <h1 className="title">Gestión de Postres</h1>

                <div className="form-container">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Nombre del postre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <textarea
                        className="textarea-field"
                        placeholder="Descripción del postre"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                    {editingPostre ? (
                        <button className="btn update-btn" onClick={updatePostre}>Actualizar</button>
                    ) : (
                        <button className="btn create-btn" onClick={createPostre}>Crear</button>
                    )}
                </div>

                <table className="cargo-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postres.map(postre => (
                            <tr key={postre.id_postre}>
                                <td>{postre.id_postre}</td>
                                <td>{postre.nombre}</td>
                                <td>{postre.descripcion}</td>
                                <td>${postre.precio}</td>
                                <td>
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => {
                                            setNombre(postre.nombre);
                                            setDescripcion(postre.descripcion);
                                            setPrecio(postre.precio);
                                            setEditingPostre(postre);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => deletePostre(postre.id_postre)}
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

export default Postres;