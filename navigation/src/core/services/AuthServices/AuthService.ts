import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import { AuthRepository } from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {
    register: async(user: User) : Promise<User> => {
         const userExist=  UserRepository.findByUsername(user.username);
         if(userExist){
             throw new Error("Usuario ya e6xiste");
         }
         const id =UserRepository.create(user);

         if(id === undefined){
            throw new Error("eL usuario no se pudo crear");
         };
         const newUser = {...user, id};
         
         await AuthRepository.save(newUser);
            return newUser;
    }

};
export default AuthService;