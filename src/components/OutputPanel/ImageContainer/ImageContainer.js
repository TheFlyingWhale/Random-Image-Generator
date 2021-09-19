import { StyledImageContainer, Image } from "./ImageContainerStyles"

export const ImageContainer = props => {
    return(
        <StyledImageContainer>
            <Image src={props.imageUrl} alt={"random result"}/>
        </StyledImageContainer>
    )
}