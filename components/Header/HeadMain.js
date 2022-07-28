import HeadButtons from "./HeadButtons"

const HeadMain = () => {
    return (
        <div className="min-h-[250px] flex flex-col justify-end items-center">
            <h1 className="text-[60px] text-[#fff] ubuntu mb-[25px] ms:text-[30px] ms:mx-[40px] ms:text-center ms:mb-[15px]">A modern publishing platform</h1>
            <h4 className="text-[20px] text-[#ffffff99] overpass mb-[35px] ms:text-center ms:text-[16px] ms:mx-[35px]">Grow your audience and build your online brand</h4>
            <HeadButtons />
        </div>
    )
}

export default HeadMain