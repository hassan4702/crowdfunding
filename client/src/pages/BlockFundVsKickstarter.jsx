import React from "react";
import business from '../assets/business.jpg';
import PARTNERSHIPS from '../assets/PARTNERSHIPS.png';
import CUTTINGEDGETOOLS from '../assets/CUTTINGEDGETOOLS.png';
import WORLDWIDE from '../assets/WORLDWIDE.png';
const BlockFundVsKickstarter = () =>{
    return(
        <>
            <div className="relative mb-20">
                <img src={business} alt="business" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold text-white">
                            Choose the crowdfunding partner that's with you at every step
                        </h1>
                    </div>
                </div>
            </div>

            <div className="text-center my-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold pb-3 text-[#8c6dfd]">Evaluating Block Fund vs. Traditional Crowdfunding Platforms? </h2>
                <p className='text-center text-lg pb-20'>As you might have guessed, it's not an apples-to-apples comparison, so we've assembled a few of the key differences here. Let's dive in!</p>
                <p className='text-justify text-lg pb-8'>One of the first questions you've probably asked yourself during your crowdfunding journey is which crowdfunding platform is right for you. The crowdfunding partner you choose will have a major impact on your product's success — not to mention be a big part of your life for weeks, months, or even years — so it's important to evaluate carefully.</p>
                <p className='text-justify text-lg pb-8'>As you weigh your options, consider this: Block Fund is the leading crowdfunding platform for tech products, as well as the only full-lifecycle platform for art projects, social impact campaigns, and environmental innovation projects.</p>
                <p className="text-justify text-lg pb-8">So whether youre developing a tech product or starting a project for social good, Block Fund  will help you successfully launch your campaign every step of the way.</p>
            </div>

            <div class="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg shadow-sm mb-20">
                    <div className="flex flex-col justify-center items-center pt-2">
                        <img src={PARTNERSHIPS} alt="PARTNERSHIPS & SUPPORT" className="w-24 h-24 object-cover mx-auto" />
                        <p className="text-sm text-center pb-5 pt-1">PARTNERSHIPS & SUPPORT</p>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-2">
                        <img src={CUTTINGEDGETOOLS} alt="CUTTING-EDGE TOOLS" className="w-24 h-24 object-cover rounded-lg mx-auto" />
                        <p className="text-sm text-center pb-5 pt-1">CUTTING-EDGE TOOLS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-2">
                        <img src={WORLDWIDE} alt="FLEXIBILITY & WORLDWIDE REACH" className="w-24 h-24 object-cover rounded-lg mx-auto" />
                        <p className="text-sm text-center pb-5 pt-1" >FLEXIBILITY & WORLDWIDE REACH</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
                <img src={PARTNERSHIPS} alt="PARTNERSHIPS" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">1. PARTNERSHIPS & SUPPORT</h2>
                    <p className="text-3xl font-bold pb-3">Block Fund provides expert support and exclusive partnerships to boost your campaign</p>
                </div>
            </div>

            <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">Block Fund, the premier blockchain crowdfunding platform, offers unparalleled support and exclusive partnerships to amplify your campaign's success. With access to industry experts and tailored assistance, we empower creators to navigate the complexities of crowdfunding with confidence. Our commitment to fostering strategic alliances ensures that your project receives the attention and resources it deserves, setting you on the path to achieving your fundraising goals efficiently and effectively.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
                <img src={CUTTINGEDGETOOLS} alt="CUTTINGEDGETOOLS" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">2. CUTTING-EDGE TOOLS</h2>
                    <p className="text-3xl font-bold pb-3">Block Fund provides pre- and post-campaign tools to take your project beyond crowdfunding</p>
                </div>
            </div>

            <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">Block Fund pioneers the way forward with cutting-edge tools designed to propel your project beyond the confines of crowdfunding. From pre-launch strategies to post-campaign management, our comprehensive suite of resources ensures that your project thrives long after funding ends. With innovative solutions tailored to the blockchain ecosystem, we empower creators to navigate every stage of their journey with confidence and efficiency, setting new standards for success in the industry.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto">
                <img src={WORLDWIDE} alt="WORLDWIDE" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">3. FLEXIBILITY & WORLDWIDE REACH</h2>
                    <p className="text-3xl font-bold pb-3">Freedom to raise funding for anything and from everywhere</p>
                </div>
            </div>

            <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">Block Fund embodies flexibility and global reach, granting creators the freedom to raise funds for any project from anywhere in the world. Whether you're launching a local initiative or targeting a global audience, our platform empowers you to harness the power of crowdfunding without limitations. With seamless access to a diverse pool of backers and a borderless approach to fundraising, Block Fund enables you to realize your vision on a truly international scale, breaking down barriers and unlocking opportunities for success.</p>
            </div>
        </>
    )
}
export default BlockFundVsKickstarter;