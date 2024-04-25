import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({ caption, children, intro, marginBottom,
    marginTop,
    marginRight,
    marginLeft, 
    marginBottom }) => {
    const paragraphClasses = cx({
        paragraph: true,
        intro: intro,
        caption: caption,
    [`margin-Top--${marginTop}`]: marginTop,
    [`margin-Right--${marginRight}`]: marginRight,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-Left--${marginLeft}`]: marginLeft,
    });
    return <p className={paragraphClasses}>{children}</p>;
    };

export default Paragraph;