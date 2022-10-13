import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerHeading}>ARCADE ZOO</div>
            <div className={classes.footerCopyright}>Copyright © 2021 The Arcade Zoo. All Rights Reserved.</div>
        </div>
    );
};

export default Footer;
