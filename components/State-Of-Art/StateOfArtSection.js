import ArtPicture from "./ArtPicture"
import ArtContent from "./ArtContent"
import classes from './StateOfArtSection.module.css'

const StateOfArtSection = () => {
    return (
        <div className={classes.wrapper}>
            <div className={`grid grid-cols-2 min-h-[65vh] relative ${classes.background} ms:grid-cols-1`} >
                <ArtPicture />
                <ArtContent />
            </div>
        </div>
    )
}

export default StateOfArtSection
