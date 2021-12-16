import { BottomSectionContainer, CommentsAndLikesContainer, PostItemContainer, PostListCodeEditorContainer, PostListCodeEditorFieldContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ProfilePicture } from "../ProfilePicture";
import { PreferencesMenuColorPickProps } from "../PreferencesMenu";

export const PostItem: React.FC<PreferencesMenuColorPickProps> = ({ selectedColor }) => {
  return (
    <PostItemContainer>
      <PostListCodeEditorContainer selectedColor={selectedColor}>
        <PostListCodeEditorFieldContainer disabled />
      </PostListCodeEditorContainer>
      <h2>Título do Projeto</h2>
      <p>Essa é a descrição do meu projeto.</p>
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
