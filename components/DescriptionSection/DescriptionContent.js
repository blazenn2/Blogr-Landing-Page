import DescriptionItem from "./DescriptionItem";


const DescriptionContent = () => {
    const descriptionContent = [{
        id: 1,
        title: `Free, open, simple`,
        content: `Blogr is a free and open source application backed by a large community of helpful developers. It supports 
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`
    }, {
        id: 2,
        title: `Powerful tooling`,
        content: `Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.`
    }];
    return (
        <div className="flex flex-col justify-center items-start w-[70%] ml-[25px] ms:w-[100%] ms:ml-[0px] ms:px-[30px] ms:mb-[100px]">
            <div className="grid gap-[50px]">
                {descriptionContent.map(val => <DescriptionItem key={val.id} title={val.title} content={val.content} />)}
            </div>
        </div>
    )
}

export default DescriptionContent
