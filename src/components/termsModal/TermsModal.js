import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import classes from "./TermsModal.module.css";

const TermsModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("isModalVisible", true);
    const modalCheck = localStorage.getItem("isModalVisible");

    setIsModalVisible(modalCheck);
  }, []);
  const handleCheckModal = () => {
    localStorage.removeItem("isModalVisible");
    setIsModalVisible(false);
  };
  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <div className={classes.termsModal}>
          <h1 className={classes.termsModalHeading}>TERMS AND CONDITIONS</h1>
          <h3 className={classes.termsModalPara}>
            Metaverse is finally here. And it is here to stay and become a
            fundamental part of the digital world, both in terms of economy and
            culture. In just a single year, we witnessed tectonic shifts
            produced by the brightest minds working on the NFT technology. We
            are not even close to reaching the full potential of this
            fascinating wave in our Web3 world. Arcade Zoo and its rag-tag team
            of innovators plan to stand tall in this revolutionary movement.
            <br />
            <br /> We are not here to offer just a great piece of art and
            another tightly-wound community to cozy up to. That has been done in
            spades already. We are here to present the next logical step in the
            evolution chain of the Metaverse! The creation and development of
            NFTs have served one of the two purposes up to this point - Either
            fun or innovative. Companies and founders approach this matter
            strictly in those two parameters. Therefore, we have not really seen
            a product that seamlessly combines the two. Who says you cannot have
            fun while serving the greater good?
          </h3>
          <h1 className={classes.termsModalSubHeading}>
            Here is what Arcade Zoo stands for
          </h1>
          <h3 className={classes.termsModalPara}>
            It stands for disruptive fun. It stands for setting a new standard
            and bringing out the best of both worlds! We have worked tirelessly
            to provide you with those sweet NFT goodies but we also went the
            extra mile to mess around and introduce a ground-breaking
            concept.Now, you might have a logical question - What is in it for
            me? That is easy. You just Play your way to success
            <br />
            <br />
            In the Arcade Zoo environment, you get that sweet ownership over a
            colorful piece of art, mind-bending lore, and a healthy community
            that works and plays together. But, you also get the chance to earn
            income through an activity that was never really associated with
            financial success.Remember that addictive, fun as hell Facebook
            games we loved to spend hours on? Those games felt like
            procrastination and a waste of time, but it felt so good to get lost
            in the world that is endlessly entertaining.
            <br />
            <br />
            Well, now you will no longer get that sensation of wasting time
            because we have found a way to monetize your favorite pastime!
          </h3>
          <h1 className={classes.termsModalSubHeading}>
            The next logical step of P2E
          </h1>
          <h3 className={classes.termsModalPara}>
            You heard it right. We are about to disrupt the P2E landscape and
            build a brand new economy, focused entirely on bringing you fun and
            tangible rewards.
            <br />
            <br />
            We believe it&#39;s a natural next step in the Metaverse to
            establish another well-functioning, fun, and productive community
            and on top of that, equip you with a chance to earn a buck in the
            process! The technology to achieve this seamless fusion of P2E and
            NFT benefits is here and we have figured out a way to make it work.
            <br />
            <br />
            This new type of digital economy is designed to thrive in a global
            environment, without borders, without any physical restrictions that
            plague us in the real world.Now, we can finally say that Fun can be
            productive as well
            <br />
            <br />
            Caught up in this innovation wave, we haven&#39;t forgotten to
            deliver a unique Arcade Zoo experience!
            <br />
            <br />
            No innovation is truly developed until someone finds a way to spice
            it up! That&#39;s why we haven&#39;t spared any expense to engross
            you in our one-of-a-kind world.
            <br />
            <br />
            Arcade Zoo is timeless both in terms of the value it provides and in
            terms of our adventurous mindset! Anachronistic exploration is not
            just a fancy name to fortify our story. It&#39;s a way of life in
            the Web3 environment.
            <br />
            <br /> We have finally broken out of the physical limitations of
            time, space, and information. We can see, understand, experience,
            and explore virtually any topic that interests us. The development
            of the Metaverse has really broken off the chains on the limits of
            what we can do.
            <br />
            <br /> Arcade Zoo&#39;s team aims to extend that philosophy of
            infinite adventure and arm you with the tools to explore at your
            leisure and enjoyment.In the past, that exploration detracted us
            from being successful and achieving our goals. But, lo and behold,
            the mad lads of Arcade Zoo have finally found a way to play hard and
            work hard, simultaneously! Join the ranks of the explorers today!
            You don&#39;t wanna miss this one!
          </h3>
          <div className={classes.termsModalEndLine}>
            <h2>
              Join the ranks of the explorers today! You don&#39;t wanna miss
              this one
            </h2>
          </div>
          <div
            className={classes.termsModalBtn}
            onClick={() => handleCheckModal()}
          >
            Agree to Terms and Conditions
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TermsModal;
