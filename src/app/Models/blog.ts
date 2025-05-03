export interface Blog {
    id? : string;
    blogTitle : string;
    blogCatagory : string;
    blogShortDesc : string;
    blogContent : string;
    userName : string;
    likes : Like[];
    comments : Comment[]
    createdAt : Date;
    updatedAt :Date;
    tags? : string[];
    isPublished : boolean;
}

export interface Like{
    userId: string
}

export interface Comment{
    commenter : string;
    commentText : string;
    commentedAt : Date;
}
