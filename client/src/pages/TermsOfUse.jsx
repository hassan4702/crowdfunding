import React from 'react';
import { useState } from 'react';
const TermsOfUse = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    const handleLinkClick = (section) => {
        setSelectedSection(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="px-4 py-12 lg:px-24">
                <h1 className="text-4xl font-semibold text-center mb-8">Terms of Use</h1>
                <p className="text-lg sm:text-xl text-justify lg:text-xl">
                    Welcome to Block Fund! By using this Site and the Services, in addition to any Additional Policies applicable to any particular features, Content and functionality of the Services (incorporated into the Terms by reference), offered by Block Fund, Inc., Users agree to be bound by these Terms. 
                </p>
            </div>

            <div className='lg:px-24 px-4'>
                <h3 className="text-2xl font-semibold text-left mb-4">Terms of Use</h3>
                <ol className='list-decimal text-xl ml-5'>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("1")}>What is Block Fund</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("2")}>User Obligations</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("3")}>Campaign Owner Obligations</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("5")}>Block Fund's Role</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("6")}>Our Intellectual Property</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("7")}>Your Intellectual Property</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("8")}>How to report Copyright and other Intellectual Property issues</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("9")}>Block Fund's Rights Concerning User Accounts; Termination</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("10")}>Payment Services</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("11")}>System Outages and Maintenance</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("12")}>Unsolicited Idea Submission</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("13")}>Indemnity</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl'onClick={() => handleLinkClick("16")}>Disclaimer of Liability</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("17")}>Export Compliance</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("18")}>Waiver and Release (CA Residents)</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("19")}>Legal Disputes Not Subject to Arbitration Will Be Handled In San Francisco, CA and Subject to California Law.</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("20")}>Legal Disputes Subject to Arbitration, Dispute Resolution, and Class Action Waiver</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("21")}>Definitions</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={() => handleLinkClick("22")}>Full Agreement Between You and Us</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl '>Miscellaneous</a>
                    </li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8'>
                <p className='text-justify font-bold text-lg'>
                    IMPORTANT NOTICE: AGREEMENT TO ARBITRATION. BY AGREEING TO THESE TERMS, USERS AGREE TO RESOLVE DISPUTES WITH Block Fund THROUGH BINDING ARBITRATION AND USERS WAIVE CERTAIN RIGHTS TO PARTICIPATE IN CLASS ACTIONS (AS DETAILED IN THE DISPUTE RESOLUTION, ARBITRATION AND CLASS ACTION WAIVER IN SECTION 19 BELOW).
                </p>
                <p className='text-justify text-lg py-4'>
                    Block Fund may amend the Terms at any time in its sole discretion by posting a revised version of the Terms. Unless stated otherwise, access to or continued use of the Services after the effective date of any revised Terms constitutes your acceptance of the revised Terms. If We make any material change to these Terms, We will notify Users by posting a notice on Our Site, through the Services, or by other means We deem appropriate.
                </p>
            </div>

            <div className='lg:px-24 px-4'>
                <h3 className="text-2xl font-semibold text-left mb-8">Additional Policies</h3>
                <p className='text-xl'>The following policies and guidelines are incorporated into the Terms by reference.</p>
                <ol className='list-decimal text-xl ml-5 mt-4'>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl'>What is Block Fund</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl'>Community Guidelines</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl'>Block Fund Privacy Policy</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl'>Block Fund Cookies Policy</a>
                    </li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id="1">
                <h1 className="text-2xl font-semibold text-left mb-8">What is Block Fund?</h1>
                <p className='text-lg text-justify'>Block Fund is an online crowdfunding platform that brings Users together to support crowdfunding campaigns featuring innovative products, creative design, and inspired ventures. It allows Users to launch and seek to raise funds for their own Campaigns and to contribute to the Campaigns of others. Campaign Owners can offer Perks to Contributors in thanks for the Contributors' donation of funds.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id="2">
                <h1 className="text-2xl font-semibold text-left mb-8">All User Obligations</h1>
                <p className='text-lg text-justify'>We grant you a limited, non-exclusive, non-transferable, and revocable license to use Our Services—subject to these Terms and the following restrictions in particular:</p>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> You are responsible for your account.</span>To use many of the Services, you will need to register and create an account with a username and password. You must provide us with accurate and complete information, and you must update your account information as needed to keep the information accurate and complete. You may not impersonate anyone else, choose a username that may offend someone, or violate any individual's rights. You are solely responsible for maintaining the confidentiality of your account and for all activities associated with or occurring under your account. If you suspect or discover any unauthorized use of your account, you should notify Block Fund immediately by contacting us at <a href="" className="text-[#808191]">Contact Us</a>. We are not responsible for any loss or damage arising from your failure to comply with the foregoing requirements or as a result of use of your account with or without your knowledge.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Terminating your account.</span> You may submit a request to terminate your account by contacting us <a href="" className="text-[#808191]">here</a>. This will not automatically delete User Content. We may need to retain certain information as required by law or as necessary for Our legitimate business purposes. These Terms, including our rights to User Content, survive termination of an account.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> You must be 18 years old.</span> You must be 18 years or older to sign up for an account and use Our Services. Outside of the European Economic Area (“EEA”), minors between the age of 13 and 18 years are only permitted to use Our Services through an account owned by a parent or legal guardian where the parent has provided affirmative consent and under their direct supervision. <span className='underline h-2'>Children under 16 residing in the EEA are not permitted to access the Site or use the Services.</span> You are responsible for any and all account activity conducted by a minor on your account.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Follow the law and Our policies.</span> You may not take any action that infringes or violates other people's rights, violates the law, or breaches any contract or legal duty you may have toward any party. You may not offer Perks that are illegal, violate any of Block Fund's policies, rules, or guidelines, or violate any applicable law, statute, ordinance, or regulation. All Users must abide by Our <a href="" className="text-[#808191]">Community Guidelines</a>. It is your responsibility to continuously monitor <a href="" className="text-[#808191]">Community Guidelines</a> as these may be updated from time-to-time at Block Fund's sole discretion.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Be truthful.</span> Do not post information you know is false, misleading, or inaccurate. Do not do anything deceptive or fraudulent.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Respect the rights of others.</span> You may not threaten, abuse, harass, defame, or engage in behavior that is libelous, tortious, obscene, profane, or invasive of another's privacy.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Avoid spam and unsolicited communications.</span> You may not distribute unsolicited or unauthorized advertising or promotional material, or any junk mail, spam, or chain letters. Do not run mail lists, listservs, or any kind of autoresponder or spam on or through the Site.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Respect the property of others.</span> Do not distribute software viruses or any other programs designed to interfere with (1) the proper function of any software, hardware, or equipment on the Site or (2) the use of the Site by any other User. </li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Do not engage in activities that affect the functioning of the Site.</span> You may not bypass any measures that We have put in place to secure Our Site or Services, take actions to gain unauthorized access to any system, data, passwords, or other Block Fund or User information or Services, reverse engineer or take apart any aspect of the Services to access any underlying information, or use any kind of software to "crawl" or "spider" any part of the Site. </li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Fees.</span> There are no fees for creating an account on the Site. </li>
                </ol>
                <p className='text-lg text-justify'>Should you violate any of the Terms of Use, We reserve the right to terminate, suspend, or take any other action related to your account at Our sole discretion. You may not access Our Site or Services if We have prohibited you from doing so.</p>
            </div>

            <div className='lg:px-24 px-4 py-8'>
                <h1 className="text-2xl font-semibold text-left mb-8" id='3'>Campaign Team Obligations</h1>
                <p className='text-lg text-justify'>When you create a Campaign on the Site and ask for Contributions, you understand that you are entering into separate legal agreements with both Block Fund and with your Contributors, and the following rules apply (in addition to all other Terms and Additional Policies).</p>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Accurate Representation:</span>The campaign owner agrees to provide truthful and accurate information regarding their project or cause. This includes descriptions, goals, and any associated risks or challenges.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Compliance with Laws:</span> The campaign owner must ensure that their campaign complies with all applicable laws, regulations, and guidelines. This includes intellectual property rights, financial regulations, and any legal obligations related to the nature of the project.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Transparency:</span> Transparency is essential throughout the campaign process. The campaign owner commits to providing regular updates to backers regarding the progress of the project, including milestones achieved, setbacks encountered, and any changes to the original plan.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Communication:</span> Effective communication is crucial for fostering trust and accountability. The campaign owner agrees to respond promptly to inquiries and messages from backers, providing clarification or addressing concerns in a timely manner.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Fulfillment of Rewards:</span> If the campaign offers rewards or perks to backers, the campaign owner must fulfill these obligations as described in the campaign details. This includes delivering rewards within the specified timeframe and meeting quality standards as promised.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Ethical Conduct:</span> The campaign owner agrees to conduct themselves ethically and professionally throughout the duration of the campaign. This includes refraining from engaging in deceptive practices, fraudulent activities, or any behavior that could harm the reputation of the platform or undermine the trust of backers.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Financial Responsibility:</span> The campaign owner assumes responsibility for managing funds received through the campaign in a prudent and responsible manner. This includes using funds for the stated purpose of the project and providing accurate accounting of how funds are utilized.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Account Security:</span> The campaign owner is responsible for maintaining the security of their account credentials and ensuring that unauthorized access is prevented. This includes safeguarding sensitive information and promptly reporting any security breaches or suspicious activity to the platform.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Compliance with Platform Policies:</span> The campaign owner agrees to abide by the terms of use, community guidelines, and policies set forth by the crowdfunding platform. Failure to comply with these policies may result in the suspension or termination of the campaign.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Liability Release:</span> By launching a campaign on the platform, the campaign owner acknowledges and accepts all risks associated with crowdfunding. They agree to release the platform and its affiliates from any liability arising from their campaign, including but not limited to financial losses, disputes with backers, or failure to deliver rewards.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8'>
                <h1 className="text-2xl font-semibold text-left"> Block Fund's Role</h1>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Platform Facilitation:</span> Block Fund serves as a facilitator for crowdfunding campaigns, providing a user-friendly platform for project creators to showcase their ideas and receive support from backers.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Transparency:</span> Block Fund prioritizes transparency by leveraging blockchain technology to ensure that all transactions and interactions on the platform are recorded immutably on the blockchain. This enhances accountability and trust between project creators and backers.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Smart Contract Implementation:</span> Block Fund utilizes smart contracts to automate fund disbursement and ensure that funds are released to project creators only when predefined milestones are met. This minimizes the risk of fraud and mismanagement of funds.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Community Engagement:</span> Block Fund fosters a vibrant community of creators and backers, encouraging collaboration, feedback, and support. Through features such as commenting, sharing, and social media integration, Block Fund facilitates meaningful interactions between project creators and backers.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Dispute Resolution:</span> In the event of disputes between project creators and backers, Block Fund provides mechanisms for dispute resolution, including mediation and arbitration services. This helps to mitigate conflicts and ensure a positive crowdfunding experience for all parties involved.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Educational Resources:</span> Block Fund offers educational resources and guidance to help project creators launch successful campaigns. This includes tutorials, best practices, and tips for creating compelling campaigns and engaging with backers effectively.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Continuous Improvement:</span> Block Fund is committed to continuous improvement and innovation. By soliciting feedback from users and staying abreast of industry trends and developments, Block Fund aims to evolve and adapt to meet the changing needs of the crowdfunding community.</li>
                </ol>
            </div>

        </>
    )
}
export default TermsOfUse;