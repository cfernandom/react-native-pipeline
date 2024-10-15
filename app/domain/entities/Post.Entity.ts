import { UserEntity } from "./User.Entity";

export interface PostEntity {
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: UserEntity;
}
