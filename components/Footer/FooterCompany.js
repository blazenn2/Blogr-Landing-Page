import FooterList from './FooterList'

const FooterCompany = () => {
    const companyList = ["About", "Team", "Blog", "Careers"]
    return (
        <div className="col-[6_/_8] mt-[60px] ms:col-[1_/_2] ms:row-[3_/_4] ms:self-center ms:justify-self-center ms:mt-[0px] ms:text-center">
            <div className="h-[20%] ms:mb-[20px]">
                <h3 className="text-[#fff] font-bold">Company</h3>
            </div>
            <FooterList list={companyList} />
        </div>
    )
}

export default FooterCompany
