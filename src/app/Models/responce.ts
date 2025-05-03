import { Blog } from "./blog";

export interface Response{
    status : boolean;
    message : string;
    blogs : Blog[];
}