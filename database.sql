CREATE DATABASE IF NOT EXISTS favoritos;
use favoritos;

CREATE TABLE IF NOT EXISTS pokemons2(
    numero      int(25) auto_increment not null,
    Id      int(25),
    Nombre  varchar(100),
    CONSTRAINT pk_pokemons2 PRIMARY KEY(numero)
)
