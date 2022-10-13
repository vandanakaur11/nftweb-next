import classes from "./Explore.module.css";
import Image from "next/image";
// import clientImg2 from "../../../public/assets/clientSend2.jpg";

const Explore = () => {
    // const clientImg = "/../../../public/assets/clientSend.jpeg";
    return (
        <div className={classes.exploreWrapper}>
            {/* <img src={clientImg}  /> */}
            {/* <div className={classes.exploreWrapper}>
                <h1 className={classes.exploreHeading}>EXPLORE NFTs</h1>
                <h5 className={classes.exploreParagraph}>
                    After numerous years of extensive research, our talented team of scientists has deciphered the ancient transcripts left
                    from the primeval civilization. The hieroglyphs, now translated to English, tell very peculiar and fascinating
                    descriptions of the wild creatures. Want to have a look? Here you go:
                </h5>
                <div className={classes.exploreBtn}>Click Here To Discover More..</div>
            </div> */}
            <div className={classes.exploreImgWrap}>
                <img
                    className={classes.exploreImg}
                    src="https://mlejidgmypdm.i.optimole.com/PMpBrVY-9tjPjdbi/w:1920/h:1080/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/B2BA16AA-1EC7-46E1-9C8C-69C618F946D6.jpeg"
                />
            </div>
            <h1 className={classes.exploreHeading}>The next logical step of P2E</h1>
            <p className={classes.exploreParagraph}>
                You heard it right. We are about to disrupt the P2E landscape and build a brand new economy, focused entirely on bringing
                you fun and tangible rewards.
                <br />
                <br /> We believe it’s a natural next step in the Metaverse to establish another well-functioning, fun, and productive
                community and on top of that, equip you with a chance to earn a buck in the process! The technology to achieve this seamless
                fusion of P2E and NFT benefits is here and we have figured out a way to make it work.
                <br />
                <br /> This new type of digital economy is designed to thrive in a global environment, without borders, without any physical
                restrictions that plague us in the real world.Now, we can finally say that{" "}
                <i style={{ color: "#ff00e5", fontWeight: "bold" }}>Fun can be productive as well</i>
            </p>
        </div>
    );
};

export default Explore;
