const Contact = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "80vh",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#FF00E5", fontSize: "40px" }}>CONTACT US</h1>
            <h3
                style={{
                    textAlign: "center",
                    color: "#FF00E5",
                    fontSize: "16px",
                    paddingLeft: "15vw",
                    paddingRight: "15vw",
                    lineHeight: "20px",
                }}
            >
                If we had answered every one of your questions, the mysterious Arcade Zoo would no longer be that mysterious now, would it?
                After all, not even the most educated archaeologists have this figured out. So, don’t be shy if you want to know more!
            </h3>
            <div style={{ width: "100%", height: "50vh" }}></div>
        </div>
    );
};

export default Contact;
