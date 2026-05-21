import { open } from "react-native-quick-sqlite";

export const db = open({
    name: "navigation_database,sqlite",
    location: "default",
});

export const setupDatabase = () => {
    try{

        db.execute(`
            CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            username TEXT NOT NULL UNIQUE,
            correo TEXT NOT NULL UNIQUE,
            fechaNacimiento TEXT NOT NULL,
            contrasena TEXT NOT NULL,
            );`
        );
    }catch(error){
        console.error("No se pudo inicializar la base de datos", error);
    }
};