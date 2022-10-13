import Navbar from "../src/components/navbar/Navbar.jsx";
import BottomNav from "../src/components/bottomNav/BottomNav.jsx";
import AboutArcade from "../src/components/aboutArcade/AboutArcade.jsx";
import Story from "../src/components/story/Story.jsx";
import Explore from "../src/components/explore/Explore.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import Contact from "../src/components/contact/Contact.jsx";
import classes from "./index.module.css";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/Connect";
import web3 from "web3";
import Swal from "sweetalert2";
import spinner from "../public/assets/spin.gif";
import Image from "next/image";
import "antd/dist/antd.css";
import NextStep from "../src/components/nextstep/NextStep.jsx";
import Head from "next/head";
import TermsModal from "../src/components/termsModal/TermsModal";

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [connectedAccount, setConnectedAccount] = useState(null);

  const { active, account, library, activate, deactivate } = useWeb3React();
  const [minting, setMinting] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts?.length !== 0) {
      setConnectedAccount(accounts[0]);
      let acc = accounts[0];
      let str =
        acc?.substr(0, 4) + "..." + acc?.substr(acc?.length - 4, acc?.length);
      setCurrentAccount(str);
      // setEllipses(str)
    }
  }, [active]);
  const Connect = async () => {
    if (!window.ethereum) {
      alert("Please Install Metamask!");
      return;
    }
    try {
      // await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const mint = async () => {
    console.log("hello");
    if (!window.ethereum) {
      alert("Please Install Metamask!");
      return;
    }
    try {
      // await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
    setMinting(true);
    const myAccount = "0x7588213ff19fCF933B9E072E6AE887d2A2F3Aa1c"; //account to receive payments
    const price = "0.01";

    const payload = {
      to: myAccount,
      from: account,
      value: web3.utils.toWei(price, "ether"), // Needs to be converted to Wei units
      gas: 85000, // Eth ⛽ price
      gasLimit: "100000",
    };
    console.log(connectedAccount);
    await library?.eth
      .sendTransaction(payload, async (e, tx) => {
        if (e) {
          alert(`Something went wrong! Try switching accounts - ${e}`);
          console.log("ERROR->", e);
          setMinting(false);
        }
      })
      .then((e) => {
        setMinting(false);
        Swal.fire("Transaction Sucess", "", "success");
      });
  };
  return (
    <>
      <Head>
        <title>Mint - Arcade Zoo</title>
        <link
          rel="icon"
          href="https://mlejidgmypdm.i.optimole.com/PMpBrVY-QsFDqqMW/w:258/h:248/q:auto/https://arcade-zoo.com/wp-content/uploads/2021/12/arcade-zoo-1.png"
        />
      </Head>
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <Navbar />
        <TermsModal />
        {/* <BottomNav /> */}
        {/* <img src="https://wallpaperaccess.com/full/5046024.jpg" style={{ width: "100%", height: "85vh" }} /> */}
        <div className={classes.centerImg}>
          <div className={classes.centerImgInner}>
            <div>
              <h1 className={classes.centerHeading}>MINTING</h1>

              <h3 className={classes.centerHeadingtwo}>JOIN BEFORE THE TIME</h3>
            </div>
            <div className={classes.centerHeadingsWrap}>
              <h3 className={classes.centerHeadingthree}>PRICE PER NFT</h3>
              <h3 className={classes.centerHeadingfour}>0.08 ETH</h3>
              <h3 className={classes.centerHeadingfive}>
                [ 8913 / 6,676 REMAINING ]
              </h3>
            </div>
            {currentAccount ? (
              <div className={classes.centerMintcontainer}>
                <h3 className={classes.centerMintHeading}>
                  No. of NFTs (max 10)
                </h3>
                <input className={classes.centerMintInput} type="number" />
                {minting ? (
                  <Image src={spinner} alt="spinner" />
                ) : (
                  <div className={classes.centerbtnMint} onClick={mint}>
                    MINT
                  </div>
                )}
              </div>
            ) : (
              <div className={classes.centerbtnConnect} onClick={Connect}>
                CONNECT WALLET
              </div>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
