/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable semi-style */
/* eslint-disable react/jsx-indent */
import { memo } from 'react'
import { Container, UserProfileImage } from './index.styled'

const ProfileImage = memo(() => (
  <>
    <Container>
      <UserProfileImage src="/images/profile-image.png" />
    </Container>
  </>
))
export default ProfileImage
