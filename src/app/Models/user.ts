import { Blog } from "./blog";

export interface User {

    id? : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    profileImage : string;
    bio? : string;
    blogs : Blog[];
    createdAt: Date;
    updatedAt?: Date;
}
