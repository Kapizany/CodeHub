import styled from "styled-components";
import {
  CodeEditorContainer,
  CodeEditorFieldContainer,
} from "../CodeEditor/styles";

export const PostItemContainer = styled.div`
  display: inline-block; /* flex kind of works like block in this case. */
  flex-direction: column;
  width: auto;
  height: auto;
  border-width: 0;
  padding: 0;
  margin: 1rem 0.5rem;
  background: rgba(0, 0, 0, 0.16);
  border-radius: 8px;

  h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    color: var(--text-title);

    margin: 0;
    padding: 1rem 1rem 0;
  }

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-title);
    opacity: 0.8;

    margin: 0;
    padding: 0.33rem 1rem 1rem;
  }
`;

export const PostListCodeEditorContainer = styled(CodeEditorContainer)`
  padding: 1.5rem;
  pre {
    width: 20rem; /* 34.2rem; only works when maximized */
    height: 8rem;
  }
`;

export const PostListCodeEditorFieldContainer = styled(
  CodeEditorFieldContainer
)`
  width: 20rem; /* 34.2rem; only works when maximized */
  height: 8rem;
`;

export const BottomSectionContainer = styled.div`
  display: flex;
  padding: 0 1rem 1rem;
  justify-content: space-between;
`;

export const CommentsAndLikesContainer = styled.div`
  display: inline-flex;
  color: var(--text-title);
  align-items: center;

  #span1 {
    margin: 0 1rem 0 0.5rem;
  }

  #span2 {
    margin-left: 0.5rem;
  }
`;
