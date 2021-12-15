import { Header } from "../Header";
import { SidebarMenu } from "../SidebarMenu";
import { PostItem } from "../PostItem";
import { PostList } from "../PostList/PostList";

export const CommunityApp = () => {
  return (
    <>
      <Header />
      <SidebarMenu selectedPage="community" />
      <PostList>
        <PostItem selectedColor="#6BD1FF"/>
        <PostItem selectedColor="#1273DE"/>
        <PostItem selectedColor="#FCCB00"/>
        <PostItem selectedColor="#B80000"/>
      </PostList>
    </>
  );
};
