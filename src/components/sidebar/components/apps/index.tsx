import { AppImageContainer, AppImage } from './index.styled'

const AppComponent = () => (
  <AppImageContainer>
    <AppImage src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg" />
    <AppImage src="/images/google-play-badge.png" />
  </AppImageContainer>
)

export default AppComponent
