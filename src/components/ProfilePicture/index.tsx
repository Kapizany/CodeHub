import { AvatarAndNameHeaderContainer, AvatarHeader, NameHeader } from "./styles";

export const ProfilePicture = () => {
  return (
    <AvatarAndNameHeaderContainer>
      <AvatarHeader src="https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png" />
      <NameHeader>Name</NameHeader>
    </AvatarAndNameHeaderContainer>
  );
};
