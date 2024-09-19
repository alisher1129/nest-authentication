import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password:string;
}

// FIX-ME:  This is a mockup , replace with a real database 


const users: User[] = [
    {
        userId: 1,
        username:"Alice" ,
        password: "topsecret",  // FIX-ME: use a hash instead
    },
    {
        userId: 2,
        username:"bob" ,
        password: "123abc",  // FIX-ME: use a hash instead
    }
];

@Injectable()
export class UsersService {

async findUserByName(username: string): Promise<User | undefined >{
    return users.find((user)=> user.username === username);
}



}
