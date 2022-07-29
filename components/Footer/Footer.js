import classes from './Footer.module.css'
import FooterImage from './FooterImage'
import FooterProducts from './FooterProducts'
import FooterCompany from './FooterCompany'
import FooterConnect from './FooterConnect'

const Footer = () => {
    return (
        <div className={`min-h-[50vh] grid grid-cols-10 ${classes.background} ms:h-[800px] ms:grid-cols-1 ms:gap-y-[30px]`}>
            <FooterImage />
            <FooterProducts />
            <FooterCompany />
            <FooterConnect />
        </div>
    )
}

export default Footer
