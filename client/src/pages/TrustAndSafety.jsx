import React from "react";
import { useNavigate } from 'react-router-dom';
import TrustSafety from '../assets/TrustSafety.jpg';
import Footer from '../components/Footer';

const TrustAndSafety = () => {
   const navigate = useNavigate();
   return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 px-10">
                    <h1 className="text-4xl font-semibold mt-8">Trust & Safety</h1>
                    <p className="mt-4 text-lg text-justify">Block Fund's mission is to empower people to unite around ideas that matter to them and together make those ideas come to life. Providing a safe, secure, and trusted platform is an essential part of achieving that mission. We want to provide our backers with the information that they need in order to feel confident supporting innovative products as they make their way all the way from concept to market. It's a global collaboration built on transparency, trust, and a passion for those “a-ha!” moments.</p>
                </div>
                <div className="w-full md:w-1/3 px-10">
                    <h1 className="text-xl font-semibold mt-8 sm:mt-14 text-[#808191]">RELATED LINKS:</h1>
                    <div className="mt-2">
                        <div className="block mb-2 text-[#808191] cursor-pointer" onClick={() => navigate("/TermsOfUse")}>Terms of Use</div>
                        <div className="block mb-2 text-[#808191] cursor-pointer" onClick={() => navigate("/communityGuidelines")}>Community Guidelines</div>
                        <div className="block mb-2 text-[#808191] cursor-pointer" onClick={() => navigate("/howitworks")}>How it Works</div>
                        <div className="block mb-2 text-[#808191] cursor-pointer" onClick={() => navigate("/HelpAndSupport")}>Help Center</div>
                        <div className="block mb-2 text-[#808191] cursor-pointer" onClick={() => navigate("/Contact")}>Contact Us</div>
                    </div>
                </div>
            </div>

            <div className="mt-14 px-4 sm:px-6 lg:px-32 py-4 bg-white dark:bg-[#1c1c24] rounded-lg">
                <h1 className="text-3xl font-semibold pb-4">We have safeguards in place</h1>
                <p className="text-justify pb-2">Your trust in Block Fund is important. We do our best to ensure you have a positive and safe experience with Block Fund. Our experienced Trust & Safety team is as passionate about innovation as our community is, and we're dedicated to making sure that we do everything we can to prevent fraud on the platform so that we can keep you safe. This includes both automated and manual reviews of campaigns, and working closely with payment leaders to ensure your funds are processed securely and efficiently. We also have round-the-clock monitoring to protect the information we collect online and prevent unauthorized access.</p>
                <p className="text-justify">Our team also investigates real-time feedback and concerns from our community and partners. We hold our campaign owners accountable, from verifying the identity information they provide to making sure they communicate frequently with their backers. Block Fund does not tolerate abuse of our system and takes appropriate action when necessary to maintain the integrity of our platform.</p>
            </div>

            <div className="mt-14 px-4 sm:px-6 lg:px-32">
                <h1 className="text-3xl font-semibold pb-4">Transparency and communication</h1>
                <p className="text-justify pb-2">Providing a trusted platform is a two-way street. We expect everyone to comply with our <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/TermsOfUse")}>Terms of Use</span> and keep the lines of communication open and honest. Not doing so may jeopardize the confidence and trust of the community who is excited to see entrepreneurial projects succeed.</p>
            </div>

            <div className="flex flex-wrap ">
                <div className="w-full md:w-1/2 px-10">
                    <h1 className="text-xl font-bold mt-8 text-[#808191]">FOR BACKERS</h1>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Do the research</h3>
                    <p className="mt-1 text-justify">Learn more about the project and the people behind it. Review the story (look for the “Risks and Challenges” section), team profiles, updates, and comments to get a good sense of what you're backing and to feel confident in your decision. Find out what stage a product is in—from Concept to Shipping—to help assess risk for Tech & Innovation campaigns.</p>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Ask questions</h3>
                    <p className="mt-1 text-justify">Stay up-to-date with campaigns that you've backed by asking questions. You can contact the campaigner at any time through a direct message or comment on the campaign page. Comments are a great way to follow feedback and Q&As between the campaign owner and other backers throughout the campaign's progress.</p>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Report concerns</h3>
                    <p className="mt-1 text-justify">If something looks wrong to you, tell us! We encourage our community to report suspicious activity and voice concerns via the <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/Contact")}>Contact Us</span> or the "Let us know" link on every campaign. Our Trust & Safety team monitors feedback and takes action if needed to protect our community.</p>
                </div>
                <div className="w-full md:w-1/2 px-10">
                    <h1 className="text-xl font-bold mt-8 text-[#808191]">FOR ENTREPRENEURS</h1>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Paint the full picture</h3>
                    <p className="mt-1 text-justify">Give backers peace of mind and confidence in backing your project by including detailed information about your team, qualifications, and track record. Be open about the risks and challenges. The more information you provide upfront, the more potential backers will understand that you're trustworthy and committed to seeing your project through.</p>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Engage backers</h3>
                    <p className="mt-1 text-justify">Keep everyone informed of your progress or setbacks through commenting, direct communication and frequent updates. Substantive updates are required at least once per month by our <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/TermsOfUse")}>Terms of Use</span>. Engaging backers will help establish trust, while a lack of communication may result in backers losing faith, leaving bad feedback, requesting a refund, or even making a credit card chargeback.</p>
                    <h3 className="text-xl font-semibold mt-4 text-[#808191]">Prepare for launch</h3>
                    <p className="mt-1 text-justify">Did you know that most successful campaigners spend months preparing for their campaign launch? Building a community and a strong email list for your idea are two key factors in your campaign's success. Get tips and best practices that how to create a campaign from the <a className="text-[#808191] cursor-pointer" onClick={() => navigate("/EducationCenter")}>Block Fund Education Center.</a></p>
                </div>
            </div>

            <div className="mt-14 sm:px-6 py-4 lg:px-32 bg-white dark:bg-[#1c1c24] rounded-lg">
                <h1 className="text-3xl font-semibold pb-4">We are here to support you</h1>
                <p className="text-justify pb-2">We are constantly listening to feedback and finding ways to improve our platform so that you feel confident in your decision to back campaigns on Block Fund. Though sometimes projects encounter obstacles and unforeseen circumstances that could prevent entrepreneurs from being able to fulfill, we have policies and tools in place to help them communicate to their supporters in an effective and productive way. Failure to provide monthly updates and maintain open communication may result in restrictions to individual Block Fund accounts or suspension of campaigns.</p>
                <p className="text-justify pb-2">With crowdfunding, there are always risks, so Block Fund does not guarantee that contributions will be used as promised, that campaign owners will deliver perks, or that campaigns will achieve their goals. However, if our <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/TermsOfUse")}>Terms of Use</span> are violated, we will take action on behalf of our backers to make things right.</p>
                <p className="text-justify pb-2">Though we don't review crowdfunding campaigns for feasibility, we do require Product Stages for all Tech & Innovation campaigns. Our Trust & Safety team reviews each individual campaign in this category before granting the Prototype Stage, Manufacturing Stage or Shipping Stage to any campaign - so you can be better informed about where these ideas are in the product lifecycle when you're deciding whether you'd like to back them. If we receive any questions or concerns regarding a particular project, our Trust & Safety experts review and address these concerns with the campaign owners directly.</p>
                <p className="text-justify pb-2">We're constantly improving our platform and policies to create a better experience for backers and campaigners. However, we can't make any promises on behalf of the entrepreneurs on our platform, and we can't guarantee that every incredible idea will come to life. To that end, Block Fund does not resolve disputes, nor do we offer refunds once funds have been disbursed.</p>
                <p className="text-justify pb-2"><strong>We are here to support you.</strong> You can access our <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/HelpAndSupport")}>Help Center</span> or <span className="text-[#808191] cursor-pointer" onClick={() => navigate("/Contact")}>Contact Us</span> at any time. Our dedicated Customer Happiness agents will reply to any support query within 24 hours.</p>
            </div>

            <div className="relative my-10">
                <img src={TrustSafety} alt="Help" className="w-full rounded-lg h-auto lg:h-96 h-108 mb-2 object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white ">
                            You make this platform extraordinary.
                        </h1>
                        <h1 className="text-4xl font-bold text-white ">
                           Together we keep it safe.
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default TrustAndSafety;