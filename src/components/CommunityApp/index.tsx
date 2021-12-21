import { Header } from "../Header";
import { SidebarMenu } from "../SidebarMenu";
import { PostItem, PostItemProps } from "../PostItem";
import { PostList } from "../PostList/PostList";
import { useEffect, useState } from "react";

interface PostListItemProps extends PostItemProps{
  date: string;
}

export const CommunityApp = () => {

  const [items, setItems] = useState<(PostListItemProps | null)[]>([]);

  function allStorage() {
    
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
      
    while ( i-- ) {
        //@ts-ignore
        values.push( JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }

  useEffect(() => {
    const storageItems = allStorage()
    setItems(storageItems)
  }, [])

  return (
    <>
      <Header />
      <SidebarMenu selectedPage="community" />
      <PostList>
        {items.map( item  => {
          return item? <PostItem 
                    key={item.date}
                    selectedLanguage={item.selectedLanguage}
                    editorContent={item.editorContent}
                    projectTitle={item.projectTitle}
                    projectDescription={item.projectDescription}
                    selectedColor={item.selectedColor}
                  /> : <></>
        })}
      </PostList>
    </>
  );
};
