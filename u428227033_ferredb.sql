-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-03-2025 a las 21:13:20
-- Versión del servidor: 10.11.10-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u428227033_ferredb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `Usuario` varchar(50) DEFAULT NULL,
  `Proceso` varchar(50) DEFAULT NULL,
  `Estatus` tinyint(1) DEFAULT NULL,
  `Fecha_Hora` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`Usuario`, `Proceso`, `Estatus`, `Fecha_Hora`) VALUES
('juan@example.com', 'Inicio de sesión', 1, '2023-04-24 09:00:00'),
('maria@example.com', 'Búsqueda de producto', 1, '2023-04-24 10:15:00'),
('pedro@example.com', 'Agregar producto al carrito', 1, '2023-04-24 11:30:00'),
('ana@example.com', 'Realizar compra', 1, '2023-04-24 12:45:00'),
('juan@example.com', 'Cerrar sesión', 1, '2023-04-24 14:00:00'),
('maria@example.com', 'Editar perfil', 1, '2023-04-25 10:00:00'),
('pedro@example.com', 'Agregar producto al inventario', 1, '2023-04-25 11:30:00'),
('ana@example.com', 'Eliminar producto del carrito', 1, '2023-04-25 13:45:00'),
('juan@example.com', 'Realizar búsqueda avanzada', 1, '2023-04-26 09:30:00'),
('maria@example.com', 'Agregar comentario en el blog', 1, '2023-04-26 11:00:00'),
(NULL, NULL, NULL, '2025-03-13 00:51:03'),
('juan@example.com', 'Prueba de Testing', 1, '2025-03-13 16:48:07'),
('juan@example.com', 'Restablecimiento de contraseña', 1, '2025-03-15 02:25:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo_producto`
--

CREATE TABLE `catalogo_producto` (
  `codigo` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `precio_compra` decimal(10,2) DEFAULT NULL,
  `precio_venta` decimal(10,2) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `cantidad` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `catalogo_producto`
--

INSERT INTO `catalogo_producto` (`codigo`, `descripcion`, `precio_compra`, `precio_venta`, `tipo`, `cantidad`) VALUES
(333, 'Destornillador', 5.00, 10.00, 'Pieza', 0),
(555, 'Rotomartillo', 1299.00, 1899.00, 'Pieza', 50),
(777, 'Martillo', 5.00, 10.00, 'Unitario', 0),
(1001, 'Tornillo punta de Broca', 15.00, 35.00, 'Kilo', 0),
(1002, 'Tornillo para Madera', 11.00, 30.00, 'Kilo', 0),
(1005, 'Destornillador', 5.00, 10.00, 'Pieza', 0),
(1006, 'Hoja de cierra', 11.00, 21.00, 'Pieza', 32),
(1007, 'tinner', 21.00, 51.00, 'Pieza', 50),
(1234, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `nombreCliente` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `limiteCredito` decimal(10,2) NOT NULL,
  `saldoActual` decimal(10,2) NOT NULL,
  `correoCliente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`nombreCliente`, `direccion`, `telefono`, `limiteCredito`, `saldoActual`, `correoCliente`) VALUES
('Almacén Los Ángeles', 'Av. Juárez 78, Aguascalientes', '449-999-0000', 6000.00, 0.00, 'almacenlosangeles@hotmail.com'),
('Almacenes La Roca', 'Av. Insurgentes 101, CDMX', '555-111-2222', 12000.00, 0.00, 'ventas@almaceneslaroca.com'),
('Casa de Materiales', 'Av. Central 567, Puebla', '222-789-0123', 8000.00, 0.00, 'casademateriales@yahoo.com'),
('Construcciones Beta', 'Calle 16 de Septiembre 234, Querétaro', '442-222-3333', 9000.00, 900.00, 'beta@construcciones.com'),
('Construcciones Díaz', 'Blvd. Hidalgo 678, Monterrey', '818-456-7890', 10000.00, 1200.75, 'info@construccionesdiaz.com'),
('Distribuidora Omega', 'Blvd. López Mateos 456, Toluca', '722-666-7777', 9200.00, 650.00, 'contacto@distribuidoraomega.com'),
('Ferretera Norte', 'Carr. Nacional 234, Tijuana', '664-321-9876', 6000.00, 0.00, 'ferreteranorte@gmail.com'),
('Ferretería La Estrella', 'Calle Zaragoza 101, Chihuahua', '614-444-5555', 8800.00, 0.00, 'info@ferreterialaestrella.com'),
('Ferretería López', 'Av. Revolución 123, CDMX', '555-123-4567', 5000.00, 500.00, 'contacto@ferreterialopez.com'),
('Ferretería San José', 'Calle 5 de Mayo 90, Oaxaca', '951-888-9999', 5000.00, 0.00, 'ferreteriasanjose@gmail.com'),
('Herrería García', 'Calle Morelos 89, León', '477-654-3210', 5000.00, 300.00, 'herreria.garcia@hotmail.com'),
('Materiales del Centro', 'Calle Hidalgo 78, Mérida', '999-555-6666', 7500.00, 0.00, 'ventas@materialesdelcentro.com'),
('Materiales El Sol', 'Calle Juárez 45, Guadalajara', '333-987-6543', 7000.00, 0.00, 'ventas@materialeselsol.com'),
('Suministros Express', 'Av. Universidad 123, CDMX', '555-777-8888', 8500.00, 700.00, 'info@suministrosexpress.com'),
('Tienda de Herramientas', 'Blvd. Díaz Ordaz 56, Monterrey', '818-333-4444', 4000.00, 0.00, 'contacto@tiendaherramientas.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `folio` varchar(50) NOT NULL,
  `fecha` varchar(10) DEFAULT NULL,
  `cliente` varchar(50) DEFAULT NULL,
  `tipo_nota` varchar(50) DEFAULT NULL,
  `deuda` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`folio`, `fecha`, `cliente`, `tipo_nota`, `deuda`, `total`) VALUES
('CMP0001', '2025-03-01', 'Ferretería López', 'Crédito', 0.00, 1500.00),
('CMP0002', '2025-03-02', 'Materiales El Sol', 'Efectivo', 0.00, 2300.50),
('CMP0003', '2025-03-03', 'Construcciones Díaz', 'Crédito', 1200.75, 3200.75),
('CMP0004', '2025-03-04', 'Ferretera Norte', 'Efectivo', 0.00, 780.00),
('CMP0005', '2025-03-05', 'Casa de Materiales', 'Débito', 0.00, 950.25),
('CMP0006', '2025-03-06', 'Herrería García', 'Crédito', 300.00, 1100.00),
('CMP0007', '2025-03-07', 'Almacenes La Roca', 'Efectivo', 0.00, 4500.80),
('CMP0008', '2025-03-08', 'Construcciones Beta', 'Crédito', 900.00, 2500.00),
('CMP0009', '2025-03-09', 'Tienda de Herramientas', 'Efectivo', 0.00, 600.50),
('CMP0010', '2025-03-10', 'Materiales del Centro', 'Débito', 0.00, 1420.00),
('CMP0011', '2025-03-11', 'Suministros Express', 'Crédito', 700.00, 1700.00),
('CMP0012', '2025-03-12', 'Ferretería San José', 'Efectivo', 0.00, 980.30),
('CMP0013', '2025-03-13', 'Distribuidora Omega', 'Crédito', 650.00, 2050.00),
('CMP0014', '2025-03-14', 'Almacén Los Ángeles', 'Efectivo', 0.00, 870.90),
('CMP0015', '2025-03-15', 'Ferretería La Estrella', 'Débito', 0.00, 1950.75),
('Fol.016', '2025-03-14', 'lord hikari', 'credito', 18.56, 18.56),
('Fol.017', '2025-03-14', 'lord hikari', 'credito', 18.56, 18.56),
('Fol.018', '2025-03-14', 'lord hikari', 'credito', 18.56, 18.56),
('Fol.019', '2025-03-14', 'Ferretera Norte', 'credito', 0.00, 18.56),
('Fol.020', '2025-03-14', 'Ferretera Norte', 'credito', 0.00, 18.56),
('Fol.021', '2025-03-14', 'Ferretería López', 'credito', 2.56, 18.56),
('Fol.022', '2025-03-14', 'Ferretera Norte', 'credito', 310.52, 315.52),
('Fol.023', '2025-03-18', 'lord hikari', 'credito', 17.40, 17.40),
('Fol.024', '2025-03-18', 'lord hikari', 'credito', 17.40, 17.40),
('Fol.025', '2025-03-18', 'lord hikari', 'credito', 17.40, 17.40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deuda`
--

CREATE TABLE `deuda` (
  `cliente` varchar(50) NOT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `adeudo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `codigo_producto` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha_entrada` varchar(50) NOT NULL,
  `proveedor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `entradas`
--

INSERT INTO `entradas` (`codigo_producto`, `cantidad`, `fecha_entrada`, `proveedor`) VALUES
('1', 3, '13/04/2023', 'YZA S.A.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `codigo_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`codigo_producto`, `cantidad`) VALUES
(555, 0),
(777, 5),
(333, 5),
(1234, 5),
(1001, 5),
(1004, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` int(11) DEFAULT NULL,
  `folio` varchar(50) NOT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `folio`, `peso`, `cantidad`, `importe`) VALUES
(1, 'Fol.016', NULL, 1, 18.56),
(NULL, 'Fol.016', NULL, NULL, NULL),
(NULL, 'Fol.016', NULL, NULL, NULL),
(NULL, 'Fol.016', NULL, NULL, NULL),
(NULL, 'Fol.016', NULL, NULL, NULL),
(NULL, 'Fol.016', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.017', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(NULL, 'Fol.018', NULL, NULL, NULL),
(1, 'Fol.019', NULL, 1, 18.56),
(NULL, 'Fol.019', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(NULL, 'Fol.020', NULL, NULL, NULL),
(1, 'Fol.021', NULL, 1, 18.56),
(NULL, 'Fol.021', NULL, NULL, NULL),
(NULL, 'Fol.021', NULL, NULL, NULL),
(NULL, 'Fol.021', NULL, NULL, NULL),
(NULL, 'Fol.021', NULL, NULL, NULL),
(1, 'Fol.021', NULL, 17, 315.52),
(NULL, 'Fol.021', NULL, NULL, NULL),
(555, 'Fol.023', NULL, 1, 17.40),
(NULL, 'Fol.023', NULL, NULL, NULL),
(NULL, 'Fol.023', NULL, NULL, NULL),
(NULL, 'Fol.023', NULL, NULL, NULL),
(NULL, 'Fol.023', NULL, NULL, NULL),
(NULL, 'Fol.023', NULL, NULL, NULL),
(555, 'Fol.024', NULL, 1, 17.40),
(NULL, 'Fol.024', NULL, NULL, NULL),
(NULL, 'Fol.024', NULL, NULL, NULL),
(NULL, 'Fol.024', NULL, NULL, NULL),
(NULL, 'Fol.024', NULL, NULL, NULL),
(NULL, 'Fol.024', NULL, NULL, NULL),
(555, 'Fol.025', NULL, 1, 17.40),
(NULL, 'Fol.025', NULL, NULL, NULL),
(NULL, 'Fol.025', NULL, NULL, NULL),
(NULL, 'Fol.025', NULL, NULL, NULL),
(NULL, 'Fol.025', NULL, NULL, NULL),
(NULL, 'Fol.025', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `correo_electronico` varchar(255) NOT NULL,
  `nombre_empresa` varchar(255) DEFAULT NULL,
  `nombre_contacto` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `RFC` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`correo_electronico`, `nombre_empresa`, `nombre_contacto`, `direccion`, `telefono`, `RFC`) VALUES
('newemail@example.com', 'newCompany', 'newContact', 'newAddress', '1234567890', 'RFC123456'),
('Persona@Real.com', 'Ren SV de CV', 'Alguien', 'Calle L, Avenida K', '1234567890', 'ADC102030');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombreUsuario` varchar(50) NOT NULL,
  `contraseñaUsuario` varchar(50) NOT NULL,
  `correoUsuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombreUsuario`, `contraseñaUsuario`, `correoUsuario`) VALUES
('Ana', 'contraseña012', 'ana@example.com'),
('Carlos', 'xK9#mP2$vL5', 'carlos.rodriguez@gmail.com'),
('Juan', 'contraseña123', 'juan@example.com'),
('María', 'contraseña456', 'maria@example.com'),
('Pedro', 'contraseña789', 'pedro@example.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD KEY `Usuario` (`Usuario`);

--
-- Indices de la tabla `catalogo_producto`
--
ALTER TABLE `catalogo_producto`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`nombreCliente`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`folio`);

--
-- Indices de la tabla `deuda`
--
ALTER TABLE `deuda`
  ADD PRIMARY KEY (`cliente`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`correo_electronico`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`correoUsuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`Usuario`) REFERENCES `usuarios` (`correoUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
