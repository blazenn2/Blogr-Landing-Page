import DescriptionSVG from "./DescriptionSVG"
import DescriptionContent from "./DescriptionContent"

const Description = () => {
    return (
        <div className="grid grid-cols-2 h-[900px] ms:h-[1150px] ms:grid-cols-1">
            <DescriptionSVG />
            <DescriptionContent />
        </div>
    )
}

export default Description
