const NavSvg = ({ showNav, changeNav }) => {
    return (
        <a href="#">
            {!showNav ? <svg onClick={() => changeNav()} className="hidden ms:block" width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" /></g></svg>
                : <svg onClick={() => changeNav()} width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd" /></svg>}
        </a>
    )
}

export default NavSvg
