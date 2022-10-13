import classes from "./bottomnav.module.css";

const BottomNav = () => {
    return (
        <div className={classes.bottomnavContainer}>
            <div></div>
            <div className={classes.bottomnavContent}>
                <div className={classes.bottomnavOption}>HOME</div>
                <div className={classes.bottomnavOption}>OUR STORY</div>
                <div className={classes.bottomnavOption}>EXPLORE NFTS</div>
                <div className={classes.bottomnavOption}>ROADMAP</div>
                <div className={classes.bottomnavOption}>MY ACCOUNT</div>
                <div className={classes.bottomnavOption}>CONTACT US</div>
            </div>
            <div></div>
        </div>
    );
};

export default BottomNav;
