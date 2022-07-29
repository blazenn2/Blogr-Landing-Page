import DesignContent from "./DesignContent"
import classes from './DesignSection.module.css'

const DesignSection = () => {
    return (
        <div className={`h-[900px] grid grid-cols-2 grid-rows-[min-content_min-content] gap-y-[80px] px-[200px] pt-[130px] ${classes.background} ms:h-[1350px] ms:px-[0px] ms:gap-y-[380px]`}>
            <h1 className="ubuntu-5 text-[35px] text-[#1f3f5b] col-[1_/_3] justify-self-center ms:text-center ms:text-[25px]"> Designed for the future</h1>
            <DesignContent />
        </div>
    )
}

export default DesignSection
