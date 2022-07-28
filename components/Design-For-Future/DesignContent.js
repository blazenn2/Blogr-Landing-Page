import DesignItem from "./DesignItem";

const DesignContent = () => {
    const contentData = [{
        id: 1,
        heading: "Introducing an extensible editor",
        content: `Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
        change the looks of a blog.`
    }, {
        id: 2,
        heading: `Robust content management`,
        content: `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`
    }];
    return (
        <div className="col-[1_/_2] grid gap-[50px] ms:col-[1_/_3]">
            {contentData.map(val => <DesignItem key={val.id} heading={val.heading} content={val.content} />)}
        </div>
    )
}

export default DesignContent
