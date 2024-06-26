import React, { useContext, useState } from 'react';
import { ApiContext } from '../../common/context/api-context';
const Filtros = () => {
    const {
        filterPriceMin,
        filterPriceMax,
        filterName,
        filterType,
        handleFiltrados
    } = useContext(ApiContext);

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const handleFilter = () => {
        handleFiltrados(maxValue, minValue, name, type);
    };

    return (
        <div className="filter-container">
            <h2>Filtros</h2>
            <div className="filter-group">
                <label htmlFor="min-price">Preço Mínimo:</label>
                <input
                    type="number"
                    id="min-price"
                    value={minValue}
                    onChange={(e) => setMinValue(e.target.value)}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="max-price">Preço Máximo:</label>
                <input
                    type="number"
                    id="max-price"
                    value={maxValue}
                    onChange={(e) => setMaxValue(e.target.value)}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="name">Nome do Produto:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="type">Tipo de Produto:</label>
                <input
                    type="number"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </div>
            <button onClick={handleFilter}>Aplicar Filtros</button>
        </div>
    );
};

export default Filtros;
