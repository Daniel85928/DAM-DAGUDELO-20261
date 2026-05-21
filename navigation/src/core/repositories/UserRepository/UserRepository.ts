import { db } from "../../config";
import { User } from "../../entities";


const UserRepository = {
create: (user: User) : number | undefined => {
    const query=`INSERT INTO users (nombre, username, email, fechaNacimiento, contrasena) VALUES ('${user.nombre}', '${user.username}', '${user.email}', '${user.fechaNacimiento}', '${user.contrasena}');`;    
    
    const result = db.execute(query,[
        user.nombre, 
        user.username, 
        user.email, 
        user.fechaNacimiento, 
        user.contrasena
    ]);
    return result.insertId;
    },
    findByUsername: (username: string) : User | null => {
        const query = `SELECT * FROM users WHERE username = ? LIMIT 1;`;
        const {rows} = db.execute(query, [username]);
        if(rows != undefined && rows.length > 0){
            return rows._array.length > 0 ? rows._array[0] : null;
        };
        return null;
    },
    update: (user: User) : void => {

    },
    delete: (id: number) : void => {
    const query = `DELETE FROM users WHERE id = ?;`;
    db.execute(query, [id]);

    },

};
export default UserRepository;