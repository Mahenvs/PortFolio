import cover_pic from "../assets/self2.JPG";
import './Content.css';

const Content = () => {
    return <>
        <div className="content">
            <div className="content_img">
                <img src={cover_pic} alt="Profile_Pic" />
            </div>
            <div className="content_self">
                <h1>Hello</h1>
                <h2>A Bit About Me</h2>
                <p>I'm a Software developer, in particular <strong className="italic_text"> a frontend developer. </strong>
                Has experience in the design and development of web-based applications.
                Passionate to learn new technologies and to excel in  innovative
                technology applications. 
                
                </p>

                {/* </article> */}
            </div>
        </div>
    </>
}
export default Content;
