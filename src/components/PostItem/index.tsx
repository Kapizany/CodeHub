import { CodeEditorProps } from "../CodeEditor";
import { PostItemContainer } from "./styles";
import {
  CodeEditorContainer,
  CodeEditorFieldContainer,
} from "../CodeEditor/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ProfilePicture } from "../ProfilePicture";

export const PostItem: React.FC<CodeEditorProps> = ({ selectedColor }) => {
  return (
    <PostItemContainer>
      <CodeEditorContainer selectedColor={selectedColor}>
        <CodeEditorFieldContainer disabled />
      </CodeEditorContainer>
      <h2>Título do Projeto</h2>
      <p>Essa é a descrição do meu projeto.</p>
      <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff" }} />
      <span>9</span>
      <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
      <span>9</span>
      <ProfilePicture />
    </PostItemContainer>
  );
};
