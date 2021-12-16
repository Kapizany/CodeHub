import { ReactNode } from "react";
import { PostListContainer } from "./styles";

export const PostList: React.FC<ReactNode> = ({children}) => {
    return (
        <PostListContainer>
            {children}
        </PostListContainer>
    );
}