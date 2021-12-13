import { Header } from "../Header";
import { SidebarMenu } from "../SidebarMenu";
import { PostItem } from "../PostItem";

export const CommunityApp = () => {
  return (
    <>
      <Header />
      <SidebarMenu selectedPage="community" />
      <PostItem selectedColor="#6BD1FF"/>
    </>
  );
};
