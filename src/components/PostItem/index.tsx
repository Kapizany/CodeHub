import { BottomSectionContainer, CommentsAndLikesContainer, PostItemContainer, PostListCodeEditorContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ProfilePicture } from "../ProfilePicture";
import SyntaxHighlighter from 'react-syntax-highlighter';
import gradientDark  from 'react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark';


export interface PostItemProps {
  selectedColor: string;
  selectedLanguage: string;
  editorContent: string;
  projectTitle: string;
  projectDescription: string;
}

export const PostItem: React.FC<PostItemProps> = ({
  selectedColor,
  selectedLanguage,
  editorContent,
  projectTitle,
  projectDescription,
}) => {
  return (
    <PostItemContainer>
      <PostListCodeEditorContainer selectedColor={selectedColor}>
        <SyntaxHighlighter style={gradientDark} language={selectedLanguage} >
          {editorContent}
        </SyntaxHighlighter>
      </PostListCodeEditorContainer>
      <h2>{projectTitle}</h2>
      <p>{projectDescription}</p>
      <BottomSectionContainer>
        <CommentsAndLikesContainer>
          <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff" }} />
          <span id="span1">9</span>
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
          <span id="span2">9</span>
        </CommentsAndLikesContainer>
        <ProfilePicture />
      </BottomSectionContainer>
    </PostItemContainer>
  );
};
