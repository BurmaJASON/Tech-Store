import bcrypt from "bcryptjs/dist/bcrypt";

const users = [
    {
        name : 'Admin User',
        email : 'admin@gmail.com',
        password : bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name : 'John Doe',
        email : 'john@gmail.com',
        password : bcrypt.hashSync('123456',10),
        isAdmin : false
    },
    {
        name : 'Burma Jason',
        email : 'bj@gmail.com',
        password : bcrypt.hashSync('123456',10),
        isAdmin : true
    },
]

export default users;