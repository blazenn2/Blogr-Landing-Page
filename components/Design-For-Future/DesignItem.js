const DesignItem = (props) => {
    return (
        <div className="grid gap-[20px] ms:px-[30px]">
            <h2 className="text-[24px] text-[#1f3f5b] ubuntu-5 ms:text-center">{props.heading}</h2>
            <p className="text-[16px] text-[#4b5862] overpass leading-6 ms:text-center">{props.content}</p>
        </div>
    )
}

export default DesignItem
