const NavButton = () => {
    return (
        <div className="min-w-[18%] flex justify-between">
            <button className="text-[#ffffff75] font-bold hover:text-[#ffffff] ms:hidden">Login</button>
            <button className="bg-white	px-[30px] py-[10px] rounded-full text-[#ff525d] font-bold hover:bg-[#ffffff45] hover:text-[#fff] ms:hidden">Sign Up</button>
        </div>
    )
}

export default NavButton
