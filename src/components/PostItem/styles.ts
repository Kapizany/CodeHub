import styled from "styled-components";

export const PostItemContainer = styled.div`
  display: inline-block; /* flex kind of works like block in this case. */
  flex-direction: column;
  width: auto;
  height: auto;
  border-width: 0;
  padding: 0;

  /* This are just so we can see before using the PostListContainer */
  position: absolute;
  top: 100px;
  left: 300px;
`;
