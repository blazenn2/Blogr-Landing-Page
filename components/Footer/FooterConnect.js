import FooterList from './FooterList'

const FooterConnect = () => {
    const companyList = ["Contact", "Newsletter", "LinkedIn"]

    return (
        <div className="col-[8_/_11] mt-[60px] ms:col-[1_/_2] ms:row-[4_/_5] ms:self-center ms:justify-self-center ms:mt-[0px] ms:text-center">
            <div className="h-[20%] ms:mb-[20px]">
                <h3 className="text-[#fff] font-bold">Connect</h3>
            </div>
            <FooterList list={companyList} />
        </div>
    )
}

export default FooterConnect
