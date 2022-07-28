import FooterList from './FooterList'

const FooterProducts = () => {
    const productList = ["Overview", "Pricing", "Marketplace", "Features", "Integrations"];
    return (
        <div className="col-[4_/_6] mt-[60px] ms:col-[1_/_2] ms:row-[2_/_3] ms:self-center ms:justify-self-center ms:mt-[0px] ms:text-center">
            <div className="h-[20%] ms:mb-[20px]">
                <h3 className="text-[#fff] font-bold">Product</h3>
            </div>
            <FooterList list={productList} />
        </div>
    )
}

export default FooterProducts
