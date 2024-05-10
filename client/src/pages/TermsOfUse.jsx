import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const TermsOfUse = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState(null);

    const handleLinkClick = (event, section) => {
        event.preventDefault(); 
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
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '1')}>What is Block Fund?</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '2')}>User Obligations</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '3')}>Campaign Owner Obligations</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '4')}>Block Fund's Role</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '5')}>Our Intellectual Property</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '6')}>Your Intellectual Property</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '7')}>How to report Copyright and other Intellectual Property issues</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '8')}>Payment Services</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '9')}>System Outages and Maintenance</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '10')}>Unsolicited Idea Submission</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '11')}>Indemnity</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '12')}>Severability</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '13')}>Definitions</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '14')}>Full Agreement Between You and Us</a>
                    </li>
                    <li className='pb-4'>
                        <a href='#' className='text-[#808191] text-xl' onClick={(event) => handleLinkClick(event, '15')}>Miscellaneous</a>
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
                        <div className='text-[#808191] text-xl cursor-pointer' onClick={() => navigate("/HelpAndSupport")}>Help Center</div>
                    </li>
                    <li className='pb-4'>
                        <div  className='text-[#808191] text-xl cursor-pointer' onClick={() => navigate("/communityGuidelines")}>Community Guidelines</div>
                    </li>
                    <li className='pb-4'>
                        <div className='text-[#808191] text-xl cursor-pointer' onClick={() => navigate("/PrivacyPolicy")}>Block Fund Privacy Policy</div>
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

            <div className='lg:px-24 px-4 py-8' id='3'>
                <h1 className="text-2xl font-semibold text-left mb-8">Campaign Owner Obligations</h1>
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

            <div className='lg:px-24 px-4 py-8' id='4'>
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

            <div className='lg:px-24 px-4 py-8' id='5'>
                <h1 className="text-2xl font-semibold text-left"> Our Intellectual Property</h1>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Block Fund Intellectual Property:</span> Block Fund's Services, Content and Marks, are legally protected in a number of ways, including pursuant to copyright, trademark, service marks, patent, trade secrets, and other U.S. and international intellectual-property laws. You agree to respect all copyright and other legal notices, information, and restrictions contained in any Block Fund Content, Services, or Marks accessed through the Site or the Services. You agree not to change, translate, or otherwise create derivative works of the Services.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> Limited User Rights; License to Block Fund Content:</span> Block Fund grants you a limited license (that is temporary, non-exclusive, non-sublicensable, and non-transferrable) to access and use User Content and Block Fund Content solely for use of the Services in accordance with these Terms. You may not reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, license, or otherwise transfer or use any User Content or Block Fund Content unless We give you express written permission to do so. We reserve the right to revoke this limited license to access and use User Content and Block Fund Content at any time and in our sole discretion.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id='6'>
                <h1 className="text-2xl font-semibold text-left"> Your Intellectual Property</h1>
                <p className='text-lg pt-2'>Your User Content remains your property. When you submit User Content to the Site or via the Services, you agree to the following terms:</p>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> You allow us to use your User Content:</span> You grant us a worldwide, non-exclusive, perpetual, irrevocable, royalty-free, sublicensable, and transferable right to use, exercise, commercialize, and exploit the copyright, publicity, trademark, and database rights with respect to your User Content.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> We can make changes to or delete your User Content:</span> You grant us the right to make changes, edits, modifications, translations, formatting, or delete your User Content.</li>
                    <li className='text-lg text-justify pb-8'><span className="underline font-bold"> You have all legal rights to your User Content:</span> You represent and warrant that: (1) you have all licenses, rights, consents, and permissions necessary to grant the rights set forth in these Terms to Block Fund with respect to your User Content; (2) your User Content does not and will not infringe any third party's intellectual property rights, proprietary rights, privacy rights, confidentiality, rights of publicity or otherwise violate these Terms or applicable law; and (3) Block Fund does not need to obtain any licenses, rights, consents, or permissions from, or make any payments to, any third party for any use of your User Content, or have any liability to a User or any other party as a result of Our use or exploitation of your User Content.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id='7'>
                <h1 className="text-2xl font-semibold text-left"> How to report Copyright and other Intellectual Property issues</h1>
                <p className='text-lg pt-4 text-justify'>We take intellectual property rights very seriously. We comply with intellectual property laws and industry best practices to maintain the integrity of Our Site and Services. The Digital Millennium Copyright Act (“DMCA”) sets out the procedure to report notices of alleged copyright infringement. Block Fund also maintains policies concerning claims of trademark and patent infringement. We will respond to notices of alleged infringement in accordance with the law, as set forth in Our Intellectual Property Policy <a href="" className="text-[#808191]">here</a>. We reserve the right, in our sole discretion, to delete or disable User Content that has been alleged to be infringing, as well as to terminate User accounts associated with infringers.</p>
                <p className='text-lg pt-4 text-justify'>For further details, or to submit a claim of copyright infringement, please visit Our Intellectual Property Policy <a href="" className="text-[#808191]">here</a>. We will only respond to notices of alleged infringement submitted in compliance with Our Intellectual Property Policy.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id='8'>
                <h1 className="text-2xl font-semibold text-left"> Payment Services</h1>
                <p className='text-lg pt-4 text-justify'>By accessing and using the payment services provided by Block Fund, you agree to comply with the following terms of use. These terms govern all financial transactions and related services within our crowdfunding platform.</p>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Authorized Payment Methods: </span>Block Fund accepts various payment methods, including electronic wallets, and cryptocurrencies such as Ethereum. You are responsible for ensuring that your payment method is valid and authorized for use on the platform.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Transaction Fees: </span>Block Fund charges transaction fees for the use of its payment services. The exact fee amount may vary based on the payment method, campaign type, and other factors. Fees will be disclosed to you before completing a transaction, and you agree to pay all applicable fees.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Secure Payment Processing: </span>Block Fund takes security seriously and uses encryption and other security measures to protect payment transactions. However, you are responsible for safeguarding your payment information, including card details and digital wallet keys. Block Fund is not liable for unauthorized transactions resulting from your failure to maintain proper security.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Fund Disbursement: </span>Funds raised through Block Fund's campaigns are disbursed to campaign owners based on predefined conditions or milestones as outlined in the campaign details. Smart contracts used to automate fund disbursement. Once funds are disbursed, Block Fund has no further responsibility for their use or management.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Refunds and Cancellations: </span>Refunds and cancellations are subject to the policies outlined by Block Fund and the individual campaign. Refund requests must be made within the designated timeframe, and approval depends on specific circumstances, such as campaign cancellation or failure to meet funding goals. Refund processing times may vary, and transaction fees may not be refundable.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Dispute Resolution: </span>In the event of a payment-related dispute, you agree to attempt resolution through Block Fund's customer support. If the dispute cannot be resolved, Block Fund may offer additional dispute resolution mechanisms, including mediation or arbitration. Legal action should be considered a last resort.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> Modifications to Payment Services: </span>Block Fund reserves the right to modify or discontinue its payment services at any time without prior notice. Significant changes to terms or fee structures will be communicated to users, and continued use of the services after such changes indicates acceptance.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id='9'>
                <h1 className="text-2xl font-semibold text-left"> System Outages and Maintenance</h1>
                <p className='text-lg pt-4 text-justify'>The Site or Services may be unavailable for scheduled maintenance and other reasons, including unplanned outages and other malfunctions. We are not responsible if the Site or Services are unavailable, or if you lose any data, information, or User Content for any reason.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id='10'>
                <h1 className="text-2xl font-semibold text-left"> Unsolicited Idea Submissions</h1>
                <p className='text-lg pt-4 text-justify'>We appreciate hearing from Our Users and welcome their comments or suggestions. But ideas that you submit may be similar or identical to internal submissions or submissions received from another User or third party. When We refer to a “submission” in this paragraph, We mean: any submission, comment, or suggestion (including, but not limited to, ideas, products, or services, know-how, concepts, suggested changes, additions, or improvements) sent to us via the Site or in any other manner about an existing product, service, or feature on the Block Fund platform (“Unsolicited Idea Submission”). If you send us an Unsolicited Idea Submission, you agree as follows:</p>
                <ol className="list-decimal pt-8">
                    <li className='text-lg text-justify pb-2'> All Unsolicited Idea Submissions are non-confidential and non-proprietary and will be treated as such.</li>
                    <li className='text-lg text-justify pb-2'> By submitting an Unsolicited Idea Submission, you hereby grant Block Fund a perpetual, irrevocable, worldwide, non-exclusive, royalty- free, sublicensable and transferable license to use, reproduce, distribute, sell, exploit, prepare derivative works of and display the Unsolicited Idea Submission, including, without limitation, in connection with the Site or Services, and for promoting and redistributing part or all of the Unsolicited Idea Submission (and derivative works thereof) in any media formats and through any media channels whether now known or hereafter developed, without payment or accounting for the Unsolicited Idea Submission and,</li>
                    <li className='text-lg text-justify pb-2'> We are under no obligation to evaluate, review, or use any Unsolicited Idea Submission.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id='11'>
                <h1 className="text-2xl font-semibold text-left"> Indemnity</h1>
                <p className='text-lg pt-4 text-justify'>You agree to defend, indemnify and hold harmless Block fund, Our subsidiaries and affiliated companies, and Our officers, directors, employees, partners, contractors, representatives, agents, and third party providers from and against any and all claims, causes of action, damages, obligations, losses, liabilities, costs or debt, and expenses (including reasonable attorneys' fees and costs) and all amounts paid in settlement arising from or relating to, use or misuse of the Services, breach or these Terms or violation of any applicable laws. We reserve the right, in Our sole discretion and at Our own expense, to assume the exclusive defense and control of any matter for which you have agreed to indemnify us and you agree to assist and cooperate with us as reasonably required in the defense or settlement of any such matters.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id='12'>
                <h1 className="text-2xl font-semibold text-left"> Severability</h1>
                <p className='text-lg pt-4 text-justify'>If a court or arbitrator decides that any portion of this Section regarding Dispute Resolution, Arbitration and Class Action Waiver is invalid or unenforceable, then the portion shall be severed from the Terms and/or deemed modified, only to the extent necessary to make it lawful. Such invalidity shall not affect the enforceability of any other provisions of the Terms that are not invalid or unenforceable. To affect the modification of the portion, the portion shall be deemed deleted, added to, and/or rewritten, whichever shall most fully preserve the intentions of the parties as originally expressed herein.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id='13'>
                <h1 className="text-2xl font-semibold text-left"> Definitions</h1>
                <ol className="pt-8">
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Campaign Owners"</span> or <span className=" font-bold"> "Campaigners"</span> are those Users who raise funds through the Site and Services;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Campaigns"</span> are Campaign Owners' fundraising campaigns through the Services;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Content"</span> refers to all software, technology, designs, materials, information, communications, text, graphics, links, electronic art, animations, illustrations, artwork, audio clips, video clips, photos, images, reviews, ideas, and other data or copyrightable materials or Content, including the selection and arrangements thereof offered through the Services;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Contributors"</span> or <span className=" font-bold"> "Backers"</span> refers to those Users contributing funds to Campaigns;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Contributions"</span> refers to funds donated to Campaigns by Contributors;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Block Fund, " "We, " "Our, "</span> or <span className=" font-bold">"Us"</span> refers to Block Fund, Inc., a Delaware corporation, together with its parents, subsidiaries, affiliates, agents, representatives, consultants, employees, officers, and directors;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Block Fund Content"</span> refers to Content provided by Block Fund to Users in connection with the Services, including, without limitation, the software, the products and the site;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Infringement"</span> refers to the unauthorized or not permitted use of copyrighted material or other intellectual property rights;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Marks"</span> refers to the trademarks, service marks, and logos used and displayed throughout the Services or in any or in any Block Fund Content;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Perks"</span> refers to the gifts or rewards in the form of tangible items or intangible services offered by Campaign Owners to Contributors;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "PII"</span>  refers to personally-identifiable information, as that term is defined under all applicable laws;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Privacy Policy"</span> refers to Block Fund's Privacy Policy.</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Services"</span>  refers to the Site, mobile applications or connected applications, other offerings and services provided on the Site;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Site"</span> refers to the Block Fund website(s);</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "Terms"</span> or <span className=" font-bold">"Terms of Use" </span> refers the Terms of Use, Additional Policies, Block Fund's Privacy Policy, all applicable laws, and all conditions or policies referenced here;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "User, " "You "</span> or <span className=" font-bold">"Your"</span> refers to Campaign Owners, Contributors or any other visitor to the Site or Users of the Services, either individually or collectively;</li>
                    <li className='text-lg text-justify pb-8'><span className="font-bold"> "User Content"</span> refers to Content uploaded, transmitted or posted to the Services by a User, including User Content in a Campaign.</li>
                </ol>
            </div>

            <div className='lg:px-24 px-4 py-8' id='14'>
                <h1 className="text-2xl font-semibold text-left"> Full Agreement Between You and Us</h1>
                <p className='text-lg pt-4 text-justify'>These Terms are the entire agreement between You and Block Fund with respect to the Services. They supersede all other communications and proposals (whether oral, written, or electronic) between you and Block Fund with respect to the Services and govern our relationship. If any provision of these Terms are deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. Block Fund's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.</p>
            </div>

            <div className='lg:px-24 px-4 py-8' id='15'>
                <h1 className="text-2xl font-semibold text-left"> Miscellaneous</h1>
                <p className='text-lg pt-4 text-justify'>We may modify or discontinue the Services at any time, in our sole discretion. You agree that, except as otherwise expressly provided in these Terms, there shall be no third-party beneficiaries to these Terms. No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such term or any other term, and Block Fund's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision. You agree that regardless of any statute or law to the contrary, any claim arising out of or related to the Services must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.</p>
            </div>

        </>
    )
}
export default TermsOfUse;