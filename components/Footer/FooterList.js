const FooterList = (props) => {
    const list = props.list;
    return (
        <ul className={`flex flex-col justify-between`}>
            {list.map((val, i) => <li className="h-[30px]" key={i}><a href="#" className="text-[#ffffff95] hover:underline">{val}</a></li>)}
        </ul>
    )
}

export default FooterList
