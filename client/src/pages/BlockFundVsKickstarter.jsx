import React from "react";
import business from "../assets/business.jpg";
import PARTNERSHIPS from "../assets/PARTNERSHIPS.png";
import CUTTINGEDGETOOLS from "../assets/CUTTINGEDGETOOLS.png";
import WORLDWIDE from "../assets/WORLDWIDE.png";
import Footer from "../components/Footer";
import Payments from "../assets/Payments.png";
const BlockFundVsKickstarter = () => {
  return (
    <>
      <div className="relative mb-10">
        <img
          src={business}
          alt="business"
          className="w-full h-auto lg:h-96 h-108 mb-8 object-cover rounded-[15px]"
        />
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-xl absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="  text-2xl lg:text-5xl  font-bold text-white">
              Choose the crowdfunding partner that's with you at every step
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center my-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold pb-3 text-[#8c6dfd]">
          Evaluating Block Fund vs. Traditional Crowdfunding Platforms?{" "}
        </h2>
        <p className="text-center text-lg pb-20">
          As you might have guessed, it's not an apples-to-apples comparison, so
          we've assembled a few of the key differences here. Let's dive in!
        </p>
        <p className="text-justify text-lg pb-8">
          One of the first questions you've probably asked yourself during your
          crowdfunding journey is which crowdfunding platform is right for you.
          The crowdfunding partner you choose will have a major impact on your
          product's success — not to mention be a big part of your life for
          weeks, months, or even years — so it's important to evaluate
          carefully.
        </p>
        <p className="text-justify text-lg pb-8">
          As you weigh your options, consider this: Block Fund is the leading
          crowdfunding platform for tech products, as well as the only
          full-lifecycle platform for art projects, social impact campaigns, and
          environmental innovation projects.
        </p>
        <p className="text-justify text-lg pb-8">
          So whether youre developing a tech product or starting a project for
          social good, Block Fund will help you successfully launch your
          campaign every step of the way.
        </p>
      </div>

      <div class="flex justify-center">
        <div className="flex justify-center gap-10 w-full max-w-screen-lg mb-20">
          <div className="flex flex-col justify-center items-center pt-2">
            <img
              src={PARTNERSHIPS}
              alt="PARTNERSHIPS & SUPPORT"
              className="w-24 h-24 object-cover mx-auto"
            />
            <p className="text-sm text-center pb-5 pt-1">BACKER CONFIDENCE</p>
          </div>
          {/* <div className="flex flex-col justify-center items-center pt-2">
                        <img src={CUTTINGEDGETOOLS} alt="CUTTING-EDGE TOOLS" className="w-24 h-24 object-cover rounded-lg mx-auto" />
                        <p className="text-sm text-center pb-5 pt-1">CUTTING-EDGE TOOLS</p>
                    </div> */}
          <div className="flex flex-col justify-center items-center pt-2">
            <img
              src={WORLDWIDE}
              alt="FLEXIBILITY & WORLDWIDE REACH"
              className="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p className="text-sm text-center pb-5 pt-1">
              FLEXIBILITY & WORLDWIDE REACH
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <img
              src={Payments}
              alt="REDUCED "
              className="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p className="text-sm text-center pb-5 pt-1">
              REDUCED INTERMEDIARY COSTS
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <img
              src={CUTTINGEDGETOOLS}
              alt="REDUCED "
              className="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p className="text-sm text-center pb-5 pt-1">IMPROVED SECURITY</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
        <img
          src={PARTNERSHIPS}
          alt="PARTNERSHIPS"
          className="w-1/4 mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">
            1. BACKER CONFIDENCE
          </h2>
          <p className="text-3xl font-bold pb-3">
            Block Fund provides expert security features like immutable record,
            smart contracts and IPFS to store all your transactions and data on
            block chain. This imporves backer confidence in the platform{" "}
          </p>
        </div>
      </div>

      <div className="text-center my-8 max-w-3xl mx-auto">
        <p className="text-justify text-lg pb-8">
          Backer confidence is a critical component of the Block Fund platform,
          a cutting-edge crowdfunding solution leveraging blockchain technology.
          The immutable and transparent nature of blockchain instills a higher
          level of trust among backers, as every transaction and funding
          milestone is securely recorded and publicly accessible. This
          transparency ensures that funds are used as intended, significantly
          reducing the risk of fraud and mismanagement. Additionally, smart
          contracts automate and enforce the terms of funding agreements,
          providing backers with a reliable assurance that their contributions
          will lead to tangible outcomes if predefined conditions are met. By
          combining these robust features, Block Fund enhances backer
          confidence, fostering a secure and trustworthy environment that
          encourages more individuals to support innovative projects and ideas.
        </p>
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
                <img src={CUTTINGEDGETOOLS} alt="CUTTINGEDGETOOLS" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">2. CUTTING-EDGE TOOLS</h2>
                    <p className="text-3xl font-bold pb-3">Block Fund provides pre- and post-campaign tools to take your project beyond crowdfunding</p>
                </div>
            </div> */}

      {/* <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">Block Fund pioneers the way forward with cutting-edge tools designed to propel your project beyond the confines of crowdfunding. From pre-launch strategies to post-campaign management, our comprehensive suite of resources ensures that your project thrives long after funding ends. With innovative solutions tailored to the blockchain ecosystem, we empower creators to navigate every stage of their journey with confidence and efficiency, setting new standards for success in the industry.</p>
            </div> */}

      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
        <img src={WORLDWIDE} alt="WORLDWIDE" className="w-1/6 mb-4 md:mb-0" />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">
            2. FLEXIBILITY & WORLDWIDE REACH
          </h2>
          <p className="text-3xl font-bold pb-3">
            Freedom to raise funding for anything and from everywhere
          </p>
        </div>
      </div>

      <div className="text-center my-8 max-w-3xl mx-auto">
        <p className="text-justify text-lg pb-8">
          Block Fund embodies flexibility and global reach, granting creators
          the freedom to raise funds for any project from anywhere in the world.
          Whether you're launching a local initiative or targeting a global
          audience, our platform empowers you to harness the power of
          crowdfunding without limitations. With seamless access to a diverse
          pool of backers and a borderless approach to fundraising, Block Fund
          enables you to realize your vision on a truly international scale,
          breaking down barriers and unlocking opportunities for success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
        <img
          src={CUTTINGEDGETOOLS}
          alt="WORLDWIDE"
          className="w-1/6 mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">
            3. IMPROVED SECURITY
          </h2>
          <p className="text-3xl font-bold pb-3">
            Enhanced Security with Blockchain Technology
          </p>
        </div>
      </div>

      <div className="text-center my-8 max-w-3xl mx-auto">
        <p className="text-justify text-lg pb-8">
          In the realm of crowdfunding, security is paramount to protect the
          interests of backers and project creators alike. Block Fund
          revolutionizes this space by leveraging the inherent strengths of
          blockchain technology to offer unparalleled security features.
          Blockchain's decentralized and cryptographic nature ensures that all
          transactions are tamper-proof and resistant to malicious attacks.
          Every contribution is recorded on an immutable ledger, preventing
          unauthorized alterations and providing a clear audit trail. Smart
          contracts further enhance security by automating the execution of
          funding agreements, minimizing human error and ensuring compliance
          with predetermined conditions. This robust security framework not only
          safeguards financial transactions but also builds a foundation of
          trust and reliability, encouraging more users to participate in the
          crowdfunding ecosystem with confidence.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
        <img src={Payments} alt="WORLDWIDE" className="w-1/6 mb-4 md:mb-0" />
        <div className="text-center md:text-left md:pl-8">
          <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">
            4. REDUCED INTERMEDIARY COSTS
          </h2>
          <p className="text-3xl font-bold pb-3">
            Lower Costs Through Reduced Intermediaries
          </p>
        </div>
      </div>

      <div className="text-center my-8 max-w-3xl mx-auto">
        <p className="text-justify text-lg pb-8">
          One of the standout advantages of Block Fund is its ability to
          significantly reduce intermediary costs through the utilization of
          blockchain technology. Traditional crowdfunding platforms often
          involve multiple middlemen, each taking a slice of the funds raised,
          which can diminish the resources available for project development.
          Block Fund streamlines this process by using smart contracts to
          automate and directly manage transactions between backers and project
          creators. This direct interaction eliminates the need for third-party
          intermediaries, thereby reducing fees and ensuring that a larger
          portion of contributions goes directly to the projects. By minimizing
          these intermediary costs, Block Fund maximizes the efficiency and
          effectiveness of crowdfunding, allowing project creators to allocate
          more resources towards bringing their innovative ideas to fruition.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default BlockFundVsKickstarter;
