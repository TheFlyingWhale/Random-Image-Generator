import { ImageLinkContainer, LinkLabel, LinkUrl } from "./imageLinkStyles"

export const ImageLink = props => {
    return(
        <ImageLinkContainer>
            <LinkLabel>Image Link:</LinkLabel>
            <LinkUrl target="_blank" href={props.imageUrl}>{props.imageUrl}</LinkUrl >
        </ImageLinkContainer>
    )
}