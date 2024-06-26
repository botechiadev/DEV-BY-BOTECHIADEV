import { createContext, useState } from "react";
import dataProducts from './../../data/dataProducts.json';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const pages = ["Home", "Produtos", "Buscar", "Club", "Carrinho"];
    const [titlePage, setTitlePage] = useState(pages[0]);
    const [products, setProducts] = useState([...dataProducts]);
    const [carrito, setCarrito] = useState([]);
    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);
    const [type, setType] = useState(null);
    const [name, setName] = useState("");
    const [modalDisplay, setModalDisplay] = useState(0);

    const addCart = (product) => {
        setCarrito((currentState) => {
            const productInCart = currentState.find((productCart) => productCart.id === product.id);
            if (productInCart) {
                return currentState.map((productCart) =>
                    productCart.id === product.id
                        ? { ...productCart, quantity: productCart.quantity + 1 }
                        : productCart
                );
            } else {
                return [...currentState, { ...product, quantity: 1 }];
            }
        });
    };

    const lessProduct = (product) => {
        setCarrito((currentState) => {
            const productInCart = currentState.find((productCart) => productCart.id === product.id);
            if (productInCart) {
                if (productInCart.quantity <= 1) {
                    return currentState.filter((cartProduct) => cartProduct.id !== product.id);
                } else {
                    return currentState.map((productCart) =>
                        productCart.id === product.id
                            ? { ...productCart, quantity: productCart.quantity - 1 }
                            : productCart
                    );
                }
            }
            return currentState;
        });
    };

    const deleteCart = () => {
        setCarrito([]);
    };

    const deleteProduct = (productId) => {
        setCarrito((currentState) => currentState.filter((cartProduct) => cartProduct.id !== productId));
    };

    const ordenarCrescente = (products) => {
        return [...products].sort((a, b) => a.price - b.price);
    };

    const ordenarDecrescente = (products) => {
        return [...products].sort((a, b) => b.price - a.price);
    };

    const handleOrdenarPreco = (value) => {
        if (value === "Asc") {
            setProducts((currentState) => ordenarCrescente(currentState));
        } else if (value === "Desc") {
            setProducts((currentState) => ordenarDecrescente(currentState));
        }
    };

    const applyFilters = (products, { minValue, maxValue, name, type }) => {
        return products.filter((product) => {
            const matchesPrice = (minValue === null || product.price >= minValue) && (maxValue === null || product.price <= maxValue);
            const matchesName = product.name.toLowerCase().includes(name.toLowerCase());
            const matchesType = type === null || Number(product.typeCategory) === Number(type);
            return matchesPrice && matchesName && matchesType;
        });
    };

    const updateFilters = (newFilters) => {
        const updatedFilters = {
            minValue: newFilters.minValue !== undefined ? newFilters.minValue : minValue,
            maxValue: newFilters.maxValue !== undefined ? newFilters.maxValue : maxValue,
            name: newFilters.name !== undefined ? newFilters.name : name,
            type: newFilters.type !== undefined ? newFilters.type : type
        };

        setMinValue(updatedFilters.minValue);
        setMaxValue(updatedFilters.maxValue);
        setName(updatedFilters.name);
        setType(updatedFilters.type);

        setProducts(applyFilters(dataProducts, updatedFilters));
    };

    const filterPriceMin = (value) => {
        updateFilters({ minValue: Number(value) });
    };

    const filterPriceMax = (value) => {
        updateFilters({ maxValue: Number(value) });
    };

    const filterName = (value) => {
        updateFilters({ name: value });
    };

    const filterType = (value) => {
        updateFilters({ type: Number(value) });
    };

    const closeModal = () => {
        setModalDisplay(0);
    };

    const openModal = () => {
        setModalDisplay(1);
    };

    const handleFiltrados = (maxPrice, minValue, nameProducts, typeCategory) => {
        updateFilters({ minValue, maxValue: maxPrice, name: nameProducts, type: typeCategory });
    };

    const contextValue = {
        pages,
        titlePage,
        products,
        setProducts,
        carrito,
        setCarrito,
        deleteCart,
        deleteProduct,
        lessProduct,
        addCart,
        ordenarCrescente,
        ordenarDecrescente,
        handleOrdenarPreco,
        handleFiltrados,
        closeModal,
        openModal,
        filterType,
        filterName,
        filterPriceMax,
        filterPriceMin,
        applyFilters,
        setModalDisplay,
        modalDisplay
    };

    return (
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    );
};
