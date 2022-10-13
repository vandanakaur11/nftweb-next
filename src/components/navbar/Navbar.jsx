// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../wallet/Connect";
import web3 from "web3";
import { useState } from "react";
import classes from "./Navbar.module.css";
import { useEffect } from "react";

const Navbar = () => {
    const { active, account, library, activate, deactivate } = useWeb3React();
    const [currentAccount, setCurrentAccount] = useState('')
    // console.log(account);
    const [minting, setMinting] = useState(false);

    useEffect(async () => {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts?.length !== 0) {
            let acc = accounts[0]
            let str = acc?.substr(0, 4) + '...' + acc?.substr(acc?.length - 4, acc?.length);
            setCurrentAccount(str)
            // setEllipses(str)
        }
    }, [active])
    // console.log(currentAccount)


    const phantomConnect = async () => {
        try {
            const resp = await window.solana.connect();
            const phantomPublicKey = resp.publicKey.toString();
            console.log('Connected to phantom.', phantomPublicKey);
            setCurrentAccount(phantomPublicKey);
            // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
        } catch (err) {
            // { code: 4001, message: 'User rejected the request.' }
            console.log('Error in connecting:', err);
        }
    }

    const Connect = async () => {
        if ("solana" in window) {
            const isPhantomInstalled = window.solana && window.solana.isPhantom;
            console.log(isPhantomInstalled);
            const provider = window.solana;
            if (provider.isPhantom) {
                phantomConnect();
                return provider;
            }
        }
        alert("Please Install Metamask!");
        window.open("https://phantom.app/", "_blank");
        // if (!window.ethereum) {
        //     alert("Please Install Metamask!");
        //     return;
        // }
        // try {
        // await activate(injected);
        // } catch (ex) {
        //     console.log(ex);
        // }
    };


    return (
        <div className={classes.NavbarContainer}>
            <div className={classes.NavbarLeftdiv}>
                <a href="https://arcade-zoo.com/">
                    <img className={classes.NavbarLogoImage} src="https://arcade-zoo.com/wp-content/uploads/2021/12/arcade-zoo-1.png" />
                </a>
            </div>
            <div className={classes.NavbarCenterdiv}>
                <div className={classes.NavbarCenterdivInner}>ARCADE ZOO</div>
                {/* <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>HOME</div>
                <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>OUR STORY</div>
                <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>EXPLORE NFTS</div>
                <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>ROADMAP</div>
                <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>MY ACCOUNT</div>
                <div style={{ color: "#FF00E5", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold" }}>CONTACT US</div> */}
            </div>
            <div className={classes.NavbarRightdiv}>
                <div className={classes.NavbarRightdivInner}>
                    {currentAccount ? (
                        <div className={classes.NavbarBtnConnected}
                        // onClick={mint}


                        >
                            Connected {currentAccount}
                        </div>
                    ) : (
                        <div className={classes.NavbarBtn} onClick={Connect}>

                            Connect Wallet
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
