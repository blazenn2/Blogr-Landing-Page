import DescriptionSVG from "./DescriptionSVG"
import DescriptionContent from "./DescriptionContent"

const Description = () => {
    return (
        <div className="grid grid-cols-2 min-h-[150vh] ms:min-h-[175vh] ms:grid-cols-1">
            <DescriptionSVG />
            <DescriptionContent />
        </div>
    )
}

export default Description
