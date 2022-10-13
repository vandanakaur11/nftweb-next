import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { injected } from "../../wallet/Connect";
import { useWeb3React } from "@web3-react/core";

const SideDrawer = () => {
    const [visible, setVisible] = useState(false);
    const { active, account, library, activate, deactivate } = useWeb3React();
    // const { ethereum } = windows;

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const Connect = async () => {
        const { ethereum } = window;
        console.log("hello");
        if (!window.ethereum) {
            alert("Please Install Metamask!");
            return;
        }
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} style={{ backgroundColor: "black", color: "#ff00e5", border: "1px solid #ff00e5" }}>
                <MenuOutlined style={{ color: "#FF00E5" }} />
            </Button>
            <Drawer placement="top" onClose={onClose} visible={visible}>
                <div
                    onClick={Connect}
                    style={{
                        color: "#FF00E5",
                        border: "1px solid #FF00E5",
                        padding: "10px",
                        width: "200px",
                        textAlign: "center",
                        borderRadius: "6px",
                        fontFamily: "Azonix",
                        cursor: "pointer",
                    }}
                >
                    CONNECT WALLET
                </div>
            </Drawer>
        </>
    );
};

export default SideDrawer;
