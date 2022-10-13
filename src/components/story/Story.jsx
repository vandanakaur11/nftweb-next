import classes from "./story.module.css";
// import clientSend2 from "../../images/clientSend2.jpg";

const Story = () => {
    return (
        <div className={classes.storyContainer}>
            {/* <div className={classes.storyLeft}> */}
            {/* <img
                    src="https://mlejidgmypdm.i.optimole.com/PMpBrVY-9tjPjdbi/w:1024/h:576/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/B2BA16AA-1EC7-46E1-9C8C-69C618F946D6.jpeg"
                    style={{ width: "39vw", display: "flex" }}
                /> */}
            {/* <img
                    style={{ height: "60%" }}
                    src="https://mlejidgmypdm.i.optimole.com/PMpBrVY-QWCZJBRC/w:1200/h:1500/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/Combination-1-1.png"
                />
                <img
                    style={{ height: "45%" }}
                    src="https://mlejidgmypdm.i.optimole.com/PMpBrVY-o6s7Qkgg/w:1200/h:1500/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/Combination-1-3.png"
                />
                <img
                    style={{ height: "45%", position: "absolute", top: "40vh", left: "18vw" }}
                    src="https://mlejidgmypdm.i.optimole.com/PMpBrVY-Bx3YBjiO/w:1200/h:1500/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/Combination-2-2.png"
                /> */}
            {/* </div> */}
            <div className={classes.storyRight}>
                <h1 className={classes.storyHeading}>Here is what Arcade Zoo stands for</h1>
                <h5 className={classes.storyParaone}>
                    It stands for disruptive fun. It stands for setting a new standard and bringing out the best of both worlds! We have
                    worked tirelessly to provide you with those sweet NFT goodies but we also went the extra mile to mess around and
                    introduce a ground-breaking concept.Now, you might have a logical question - What’s in it for me? That’s easy. You just
                    <i style={{ color: "#ff00e5", fontWeight: "bold" }}> Play your way to success</i> <br />
                    <br />
                    In the Arcade Zoo environment, you get that sweet ownership over a colorful piece of art, mind-bending lore, and a
                    healthy community that works and plays together. But, you also get the chance to earn income through an activity that
                    was never really associated with financial success.Remember that addictive, fun as hell Facebook games we loved to spend
                    hours on? Those games felt like procrastination and a waste of time, but it felt so good to get lost in the world that’s
                    endlessly entertaining. <br />
                    <br />
                    Well, now you’ll no longer get that sensation of wasting time because we have found a way to monetize your favorite
                    pastime!
                </h5>
                {/* <h5 className={classes.storyParatwo}>
                    We, the initial explorers have drawn from the infinite well of the Metaverse and opened the ancient gates of the Arcade
                    Zoo for you. Now, the endless mysteries await your curious eye at every turn of your journey in the Arcade Zoo!
                </h5> */}
            </div>
        </div>
    );
};

export default Story;
