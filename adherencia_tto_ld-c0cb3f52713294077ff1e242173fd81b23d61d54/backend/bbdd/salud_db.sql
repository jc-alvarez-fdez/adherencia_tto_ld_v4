-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-04-2024 a las 12:24:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `salud_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `01_pacientes`
--

CREATE TABLE `01_pacientes` (
  `id_paciente` int(3) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `dni` varchar(15) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `domicilio` varchar(200) NOT NULL,
  `cp` varchar(5) NOT NULL,
  `Poblacion` varchar(100) NOT NULL,
  `Provincia` varchar(40) NOT NULL,
  `password` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `01_pacientes`
--

INSERT INTO `01_pacientes` (`id_paciente`, `nombre`, `apellidos`, `fecha_nacimiento`, `dni`, `telefono`, `email`, `domicilio`, `cp`, `Poblacion`, `Provincia`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Juan Carlos', 'Álvarez Fernández', '1964-07-15', '12345678A', '123456789', 'jc.alvarez@mail.com', 'Valencia, 87, 2-2', '08029', 'Barcelona', 'Barcelona', 'Abc12345', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Manuel', 'Pérez Díaz', '1976-09-24', '23456789B', '234567890', 'manuel.perez@mail.com', 'Diputació 362, 4-2', '08028', 'Barcelona', 'Barcelona', 'Bcd12345', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Andrea', 'Gil Puig', '1970-05-14', '34567890C', '345678901', 'andrea.gil@mail.com', 'Urgell 122, 1-4', '08029', 'Barcelona', 'Barcelona', 'Cde12345', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Ismael', '', '0000-00-00', '', '', 'ismael.academy@gmail.com', '', '', '', '', '$2b$10$tXrqo7VdSPCLAsIUhr', '2024-04-03 08:43:23', '2024-04-03 08:43:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `02_medicamentos`
--

CREATE TABLE `02_medicamentos` (
  `id_medicamento` int(3) NOT NULL,
  `nombre` tinytext NOT NULL,
  `num_registro` int(6) NOT NULL,
  `laboratorio` tinytext NOT NULL,
  `triangulo_seguim` tinyint(1) NOT NULL DEFAULT 0,
  `inicio_envase` date NOT NULL DEFAULT current_timestamp(),
  `contenido_envase` int(4) NOT NULL,
  `forma_simple` tinytext NOT NULL,
  `via_administracion` tinytext NOT NULL,
  `prospecto` tinytext NOT NULL,
  `imagen` tinytext NOT NULL,
  `consejos` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `02_medicamentos`
--

INSERT INTO `02_medicamentos` (`id_medicamento`, `nombre`, `num_registro`, `laboratorio`, `triangulo_seguim`, `inicio_envase`, `contenido_envase`, `forma_simple`, `via_administracion`, `prospecto`, `imagen`, `consejos`) VALUES
(1, 'OMEPRAZOL COMBIX 20 mg CAPSULAS DURAS GASTRORRESISTENTES EFG', 69139, 'Laboratorios Combix S.L.U.', 0, '2024-03-30', 56, 'CÁPSULA', 'VÍA ORAL', 'https://cima.aemps.es/cima/dochtml/p/69139/P_69139.html', 'omeprazol_combix_20mg.png', 'https://youtu.be/kWMt_k0jSB4?si=CZrTPODrtOh9k-e9'),
(2, 'AMLODIPINO SANDOZ 5 MG COMPRIMIDOS EFG', 68760, 'Sandoz Farmaceutica S.A.', 0, '2024-03-30', 30, 'COMPRIMIDO', 'ORAL', 'https://cima.aemps.es/cima/dochtml/p/68760/P_68760.html', 'amlodipino_sandoz_5mg.png', 'https://youtu.be/w1NUq5hhdQ0?si=eedsODyWyuGXoOyv'),
(3, 'ENALAPRIL PENSA 20 mg COMPRIMIDOS EFG', 63471, 'Towa Pharmaceutical S.A.', 0, '2024-03-30', 28, 'COMPRIMIDO', 'Oral', 'https://cima.aemps.es/cima/dochtml/p/63471/P_63471.html', 'enalapril_pensa_20mg', 'https://youtu.be/rPlq8-o16Ro?si=WuteTl897Td4xPqq'),
(4, 'SIMVASTATINA SANDOZ 20 mg COMPRIMIDOS RECUBIERTOS CON PELÍCULA EFG', 67414, 'Sandoz Farmaceutica S.A.', 0, '2024-03-30', 28, 'COMPRIMIDO', 'Oral', 'https://cima.aemps.es/cima/dochtml/p/67414/P_67414.html', 'simvastatina_sandoz_20mg', 'https://youtu.be/sjecq2ppahw?si=Kck51OQp7xdxCNNa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `03_administraciones`
--

CREATE TABLE `03_administraciones` (
  `id_administracion` int(3) NOT NULL,
  `medicamento_id` int(3) NOT NULL,
  `paciente_id` int(3) NOT NULL,
  `dosis` tinyint(4) NOT NULL,
  `frecuencia` tinyint(4) NOT NULL,
  `ayunas` time DEFAULT '07:30:00',
  `desayuno` time DEFAULT '09:00:00',
  `media_manyana` time DEFAULT '10:30:00',
  `pre_comida` time DEFAULT '12:00:00',
  `comida` time DEFAULT '13:30:00',
  `post_comida` time DEFAULT '15:00:00',
  `media_tarde` time DEFAULT '16:30:00',
  `merienda` time DEFAULT '18:00:00',
  `pre_cena` time DEFAULT '19:30:00',
  `cena` time DEFAULT '21:00:00',
  `post_cena` time DEFAULT '22:30:00',
  `acostarse` time DEFAULT '24:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `03_administraciones`
--

INSERT INTO `03_administraciones` (`id_administracion`, `medicamento_id`, `paciente_id`, `dosis`, `frecuencia`, `ayunas`, `desayuno`, `media_manyana`, `pre_comida`, `comida`, `post_comida`, `media_tarde`, `merienda`, `pre_cena`, `cena`, `post_cena`, `acostarse`) VALUES
(1, 1, 1, 1, 24, '07:30:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 3, 1, 1, 24, '07:30:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 2, 1, 1, 24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '19:30:00', NULL, NULL, NULL),
(4, 4, 1, 1, 24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '24:00:00'),
(5, 2, 3, 1, 24, NULL, NULL, NULL, NULL, '13:30:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 3, 4, 1, 12, NULL, '09:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '21:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `04_tomas_diarias`
--

CREATE TABLE `04_tomas_diarias` (
  `id_toma_diaria` int(3) NOT NULL,
  `administracion_id` int(3) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `toma_realizada` tinyint(1) DEFAULT 1,
  `toma_retrasada` tinyint(1) DEFAULT 0,
  `toma_perdida` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `04_tomas_diarias`
--

INSERT INTO `04_tomas_diarias` (`id_toma_diaria`, `administracion_id`, `fecha`, `toma_realizada`, `toma_retrasada`, `toma_perdida`) VALUES
(4, 1, '2024-04-02', 0, 0, 1),
(5, 1, '2024-04-02', 1, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `05_motivos_perdidas`
--

CREATE TABLE `05_motivos_perdidas` (
  `id_motivo_perdida` int(3) NOT NULL,
  `olvido` tinyint(1) DEFAULT 0,
  `no_disponible` tinyint(1) DEFAULT 0,
  `agotado` tinyint(1) DEFAULT 0,
  `malestar` tinyint(1) DEFAULT 0,
  `dificultad` tinyint(1) DEFAULT 0,
  `coste` tinyint(1) DEFAULT 0,
  `otros` tinyint(1) DEFAULT 0,
  `toma_diaria_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `05_motivos_perdidas`
--

INSERT INTO `05_motivos_perdidas` (`id_motivo_perdida`, `olvido`, `no_disponible`, `agotado`, `malestar`, `dificultad`, `coste`, `otros`, `toma_diaria_id`) VALUES
(1, NULL, 0, 0, 0, 0, 0, 0, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recoverytokens`
--

CREATE TABLE `recoverytokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `paciente_id` int(8) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `01_pacientes`
--
ALTER TABLE `01_pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `01_pacientes_email_dni` (`email`,`dni`);

--
-- Indices de la tabla `02_medicamentos`
--
ALTER TABLE `02_medicamentos`
  ADD PRIMARY KEY (`id_medicamento`),
  ADD UNIQUE KEY `num_registro` (`num_registro`);

--
-- Indices de la tabla `03_administraciones`
--
ALTER TABLE `03_administraciones`
  ADD PRIMARY KEY (`id_administracion`),
  ADD KEY `medicamento_id` (`medicamento_id`),
  ADD KEY `paciente_id` (`paciente_id`);

--
-- Indices de la tabla `04_tomas_diarias`
--
ALTER TABLE `04_tomas_diarias`
  ADD PRIMARY KEY (`id_toma_diaria`),
  ADD KEY `administracion_id` (`administracion_id`);

--
-- Indices de la tabla `05_motivos_perdidas`
--
ALTER TABLE `05_motivos_perdidas`
  ADD PRIMARY KEY (`id_motivo_perdida`),
  ADD KEY `toma_diaria_id` (`toma_diaria_id`);

--
-- Indices de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `user_id` (`paciente_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `01_pacientes`
--
ALTER TABLE `01_pacientes`
  MODIFY `id_paciente` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=719;

--
-- AUTO_INCREMENT de la tabla `02_medicamentos`
--
ALTER TABLE `02_medicamentos`
  MODIFY `id_medicamento` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `03_administraciones`
--
ALTER TABLE `03_administraciones`
  MODIFY `id_administracion` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `04_tomas_diarias`
--
ALTER TABLE `04_tomas_diarias`
  MODIFY `id_toma_diaria` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `05_motivos_perdidas`
--
ALTER TABLE `05_motivos_perdidas`
  MODIFY `id_motivo_perdida` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `03_administraciones`
--
ALTER TABLE `03_administraciones`
  ADD CONSTRAINT `03_administraciones_ibfk_1` FOREIGN KEY (`medicamento_id`) REFERENCES `02_medicamentos` (`id_medicamento`),
  ADD CONSTRAINT `03_administraciones_ibfk_2` FOREIGN KEY (`paciente_id`) REFERENCES `01_pacientes` (`id_paciente`);

--
-- Filtros para la tabla `04_tomas_diarias`
--
ALTER TABLE `04_tomas_diarias`
  ADD CONSTRAINT `04_tomas_diarias_ibfk_1` FOREIGN KEY (`administracion_id`) REFERENCES `03_administraciones` (`id_administracion`);

--
-- Filtros para la tabla `05_motivos_perdidas`
--
ALTER TABLE `05_motivos_perdidas`
  ADD CONSTRAINT `05_motivos_perdidas_ibfk_1` FOREIGN KEY (`toma_diaria_id`) REFERENCES `04_tomas_diarias` (`id_toma_diaria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
