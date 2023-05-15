import {userDao} from "../daos/factory.js";
import {UserDTO} from "../daos/dtos/user.dto.js"

const getUsers = async()=>{
    const users = await userDao.getAll();
    const newUsersDto = users.map(user=>new UserDTO(user));
    // console.log("newUsersDto", newUsersDto);
    return newUsersDto;
};

const saveUser = async(user)=>{
    return await userDao.create(user);
};



export {getUsers, saveUser};
