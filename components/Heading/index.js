import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({ children, 
    level, 
    marginBottom,
    marginTop,
    marginRight,
    marginLeft,
 }) => {
    const Tag = `h${level}`;

    const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
    [`margin-Top--${marginTop}`]: marginTop,
    [`margin-Right--${marginRight}`]: marginRight,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-Left--${marginLeft}`]: marginLeft,
    });

    return <Tag className={headingClasses}>{children}</Tag>;
};
export default Heading;