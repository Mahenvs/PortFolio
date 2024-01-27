import cover_pic from "../assets/cover_pic.jpg";
import './Content.css';

const Content = () => {
    return <>
        <div className="content">
            <div className="content_img">
                {/* <img src={cover_pic} alt="Profile_Pic" /> */}
            </div>
            <div className="content_self">
                <h1>Hello</h1>
                <h2>A Bit About Me</h2>
                <p>I'm a Software developer, in particular a <span className="italic_text">.Net Desktop developer. </span>
                Passionate to learn new technologies and to excel in  innovative
                technology applications. 
                </p>

                {/* </article> */}
            </div>
        </div>
    </>
}
export default Content;
