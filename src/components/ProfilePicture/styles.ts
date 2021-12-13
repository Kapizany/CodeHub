import styled from "styled-components";

export const AvatarAndNameHeaderContainer = styled.div`
  display: inline-flex; /* flex kind of works like block in this case. */
  align-items: center;
`;

export const AvatarHeader = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const NameHeader = styled.span`
  margin-left: 0.5rem;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-title);
`;
