import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Clean Site Dumpsters',
  description: 'Terms and conditions for Clean Site Dumpsters rental services in Nashville and Middle Tennessee.',
  robots: 'noindex, nofollow',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl text-white">
              TERMS & CONDITIONS
            </h1>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {/* Dumpster Rental Agreement */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                DUMPSTER RENTAL – TERMS & CONDITIONS
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  THIS AGREEMENT (&quot;Agreement&quot;), made as of the date Dumpster is requested and is by and between Clean Site Dumpsters Corp, a Corporation in the state of Tennessee (&quot;Clean Site Dumpsters&quot;) and you, either individually or as authorized agent and/or contractor, as set forth as disclosed to Clean Site Dumpsters upon request of Dumpster (sometimes referred herein as &quot;you&quot; and/or &quot;Customer&quot;).
                </p>
                <p>
                  Customer has requested that Clean Site Dumpsters, Corp. deliver a roll-off dumpster (&quot;Dumpster&quot;) to the above address (&quot;Site&quot;). Customer understands that Clean Site Dumpsters, Corp will use reasonable and customary precautions at delivery and removal of the dumpster at Site. Customer hereby assumes all responsibility for any damage that may result to the Site, including but not limited to any driveway, sidewalk, yard or other improvements thereon during delivery and removal of the Dumpster. Customer assumes all responsibility, liability, and obligations and shall hold harmless and indemnify Clean Site Dumpster for all fines, charges, liabilities, expenses, fees of environmental professionals, and reasonable attorney&apos;s fees in connection with this Agreement including any action that may arise while the Dumpster is located at Site.
                </p>
              </div>
            </div>

            {/* Contractor */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                CONTRACTOR
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  If you have ordered Dumpster as a contractor, Customer has requested that Clean Site Dumpsters deliver Dumpster at the drop-off address made in such request (&quot;Site&quot;). Customer hereby acknowledges, represents and warrants that Customer has permission from the property owner of the Site (&quot;Property Owner&quot;) to enter into this Agreement and have the dumpster placed on and at Site. Customer and Property Owner hereby assume all responsibility for any damage that may result to the Site, including but not limited to any driveway, sidewalk, yard or other improvements thereon during delivery and removal of the Dumpster. Customer and Property Owner assume all responsibility, liability, and obligations and shall hold harmless and indemnify Clean Site Dumpster for all fines, charges, liabilities, expenses, fees of environmental professionals, and reasonable attorney&apos;s fees in connection with this Agreement including any action that may arise while the Dumpster is located at Site.
                </p>
              </div>
            </div>

            {/* General Terms and Conditions */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                GENERAL TERMS AND CONDITIONS:
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  Customer agrees to a trip fee charged to my credit card, in an amount not less than Fifty and no/100 Dollars ($50.00), in the event Dumpster is not (in the driver&apos;s sole discretion) available, accessible, or in a condition for pick up or removal when the driver arrives on the scheduled pick up day. Clean Site Dumpsters may email a time stamped picture from the driver to evidence any issue or inability to pick-up the Dumpster.
                </p>
                <p>
                  Clean Site Dumpsters WILL NOT ACCEPT any hazardous material including, but not limited, of the following: Tires, Batteries, Computers, TV&apos;s, Hot Water Heaters, Barrels, Liquid Paint, Liquid Waste, Microwaves, Lawn Mowers, Gas Engines, Ballast, Condensers, Household Garbage or Refuse, Solvents, Paint Thinners, Motor Oil, Used Oil Filters, Dead Animals, Medical Waste, Asbestos, Propane Tanks, Gas Tanks, Gas Cylinders, Freon Tanks, Hazardous Waste, Radioactive Waste, Corrosive Waste, Ignitable Waste, Toxic Waste, Explosives, and Appliances containing freon (i.e. refrigerators, freezers and/or a/c units) (&quot;Hazardous Waste&quot;). Customer shall be and remain responsible for all Hazardous Waste placed in the container, by customer or other parties. Any materials deemed Hazardous Waste may be subject to rejection or additional disposal fees. Any Hazardous Waste discovered at dumping of Dumpster will result in Customer incurring a FINE of not less than Three Hundred and no/100 Dollars ($300.00) plus any fines or penalties incurred from any governmental entity, Transfer Stations, or dumping facilities, and all materials in question may be returned to the Site at Customer&apos;s sole cost and expense.
                </p>
                <p>
                  Customer shall indemnify and hold Clean Site Dumpster harmless against any claim for any material placed in Dumpster in violation of any Applicable Environmental Laws. As used herein, the term &quot;Applicable Environmental Laws&quot; means any applicable federal, state or local laws, rules or regulations pertaining to health or the environment, or petroleum products, or radon radiation, or oil or hazardous substances, including without limitation, the Comprehensive Environmental Response, Compensation and Liability Act of 1980, as amended (&quot;CERCLA&quot;), the Resource Conservation and Recovery Act of 1976, as amended (&quot;RCRA&quot;), the Superfund Amendments and Reauthorization Act of 1986 (&quot;SARA&quot;), the Hazardous Materials Transportation Act, 49 U.S.C. 6901. et seq., as amended, the Federal Water Pollution Control Act, 33 U.S.C. 25, et seq., as amended, the Clean Air Act, 42 U.S.C. 741, et seq., as amended, the Clean Water Act 33 U.S.C. 7401 et seq., as amended, the Toxic Substances Control Act, 15 U.S.C. 2601-2629, as amended, the Safe Drinking Water Act, 42 U.S.C. 300f-300j, as amended, and the Federal Emergency Planning and Community Right-To-Know Act of 1986, as amended.
                </p>
                <p>
                  Only minimal amounts of dirt, concrete, rock, brick or asphalt may be placed in Dumpster. Customer acknowledges that weight restrictions prohibit more than one (1) yard of concrete, rock, asphalt, dirt or plaster and lath in any loading of Dumpster. Overloaded Dumpsters will be subject to a fine of not less than One Hundred and no/100 Dollars ($100.00) and/or rejection of pick-up of Dumpster.
                </p>
                <p>
                  DO NOT LOAD ABOVE THE TOP RIM OF THE CONTAINER. Excess materials will not be removed by the driver. Upon rejection of the Dumpster (for overloading or otherwise), Customer shall remedy such issue or condition and shall be responsible for any additional charges and shall then reschedule pick-up.
                </p>
                <p>
                  Use caution if operating the Dumpster&apos;s door(s). Keep children out of/away from the Dumpster. Clean Site Dumpsters assumes NO RESPONSIBILITY AND CUSTOMER WAIVES ALL LIABILITIES for injuries to any person sustained while in, around or loading containers by Customer of other parties or that may arise while the Dumpster is located at Site.
                </p>
                <p>
                  Clean Site Dumpsters shall not be liable for property damage done to Site or property not owned by Customer or your customer, if Customer is a contractor. Clean Site Dumpsters will not deliver the Dumpster if we cannot perform our service on your property, your customer&apos;s property, or public property, in our sole discretion. Customer must have a property damage liability waiver form signed by the property owner, prior to any attempt to place Dumpster across property lines.
                </p>
                <p className="font-semibold">
                  PLEASE NOTE: Placing a Dumpster on a lawn, dirt, gravel or other non-paved surface has the potential to leave ruts or indentations on that surface. Clean Site Dumpsters is not responsible for damage when placement of Dumpster is requested to be made on a soft surface.
                </p>
                <p>
                  Once the Dumpster(s) have been placed, DO NOT MOVE DUMPSTER. If the Dumpster has been moved, Customer agrees to be liable for all additional associated property damages, move, or clean up fees.
                </p>
                <p>
                  Customer may be required to have a parking permit/license by local municipality, governmental entity, or association for placements of Dumpsters at certain locations (i.e. on the street). Clean Site Dumpsters is not liable for any fines, fees, penalties or citations as a result of Customer&apos;s non-compliance with local ordinances or failure to procure such permit/license, and Customer hereby agrees to comply with all ordinances, laws, rules, and requirements for rental and placement of Dumpster and are liable for any citations/fines.
                </p>
              </div>
            </div>

            {/* Loading Terms & Conditions */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                LOADING TERMS & CONDITIONS:
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  Dumpster, its condition, and use shall be Customer&apos;s sole responsibility following delivery and prior to pick-up. Clean Site Dumpsters accepts no responsibility or liability for the contents of the Dumpster.
                </p>
                <p>
                  Do Not Load materials above the top of the container. Clean Site Dumpsters will not remove any excess material. Customer will be subject to at least a $50.00 trip fee in the event Dumpster is not in a condition to remove at time of pick-up. Overloaded containers will be left on Site for Customer to dispose of any excess materials.
                </p>
                <p>
                  No machine loading. (i.e. no bobcats, skid-steers, backhoes, forklifts, etc.)
                </p>
                <p>
                  Do not fill containers FULL of dirt, concrete block, bricks, stone or rock. ANY Clean Site Dumpsters, Dumpster that are too heavy to lift, remove and haul will be Customer&apos;s responsibility to off load prior to another attempt at pickup. Customer will be subject to at least a $50.00 trip fee in the event Dumpster is not in a condition to remove at time of pick-up.
                </p>
              </div>
            </div>

            {/* Payment Terms & Conditions */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                PAYMENT TERMS & CONDITIONS:
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  Customer agrees to pay all legal / collection fees accrued in conjunction with the collection of any outstanding debts.
                </p>
                <p>
                  Clean Site Dumpsters, Corp is not responsible for any verbal contracts, bindings or agreements made by its drivers, or agents. This agreement and its terms and conditions are the binding authority between you and Clean Site Dumpsters, Corp for 10, 15, & 20 yard container service.
                </p>
                <p>
                  By signing this agreement below, you agree, and are bound by these terms and conditions.
                </p>
              </div>
            </div>

            {/* Miscellaneous */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                MISCELLANEOUS
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  Customer agree to pay Clean Site Dumpsters all charges, expenses, reasonable attorney&apos;s fees and costs actually incurred by Clean Site Dumpsters in connection with Clean Site Dumpsters&apos; enforcement of this Agreement, including charges, expenses, reasonable attorney&apos;s fees actually incurred and costs of litigation in any appellate or bankruptcy proceedings.
                </p>
                <p>
                  In the event that any provision hereof is deemed to be invalid by reason of the operation of any law or by reason of the interpretation placed thereon by any court, this Agreement shall be construed as not containing such provision and the invalidity of such provision shall not affect other provisions which are otherwise lawful and valid and shall remain in full force and effect.
                </p>
                <p>
                  This Agreement may not be modified or amended except in writing signed by Customer and Clean Site Dumpsters.
                </p>
                <p className="uppercase">
                  THE VALIDITY, INTERPRETATION, ENFORCEMENT AND EFFECT OF THIS AGREEMENT SHALL BE GOVERNED BY, AND CONSTRUED IN ACCORDANCE WITH, THE LAWS OF THE STATE OF TENNESSEE. CUSTOMER HEREBY IRREVOCABLY CONSENTS TO THE JURISDICTION OF THE COURTS LOCATED IN SUMNER COUNTY, TENNESSEE, INCLUDING WITHOUT LIMITATION FEDERAL COURTS SITTING IN THE MIDDLE DISTRICT OF TENNESSEE AND THE CHANCERY COURT FOR SUMNER COUNTY, TENNESSEE, FOR ANY SUIT BROUGHT OR ACTION COMMENCED IN CONNECTION WITH THIS AGREEMENT. CUSTOMER REPRESENTS THAT ENTERING INTO THIS AGREEMENT CONSTITUTES SUFFICIENT MINIMUM CONTACT WITH SUMNER COUNTY AND THE STATE OF TENNESSEE FOR THE PURPOSE OF CONFERRING JURISDICTION UPON THE FEDERAL AND STATE COURTS PRESIDING IN SUCH COUNTY AND STATE, CUSTOMERS CONSENT THAT ANY LEGAL ACTION OR PROCEEDING ARISING HEREUNDER MAY BE BROUGHT IN THE CIRCUIT COURT OF THE STATE OF TENNESSEE, SUMNER COUNTY, TENNESSEE OR THE UNITED STATES DISTRICT COURT FOR THE MIDDLE DISTRICT OF TENNESSEE AND ASSENT AND SUBMIT TO THE PERSONAL JURISDICTION OF ANY SUCH COURT IN ANY ACTION OR PROCEEDING INVOLVING THIS AGREEMENT. NOTHING HEREIN SHALL LIMIT THE JURISDICTION OF ANY OTHER COURT, BUT CUSTOMER AGREES NOT TO CONTEST OR CHALLENGE VENUE OF ANY SUCH COURTS LOCATED IN SUMNER COUNTY.
                </p>
              </div>
            </div>

            {/* SMS Consent Communication */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                SMS CONSENT COMMUNICATION
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Types of SMS Communications */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                TYPES OF SMS COMMUNICATIONS
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  If you have consented to receive text messages from Clean Site Dumpsters you may receive text messages related to appointment reminders, meetings, and follow-ups on cases. Standard messaging disclosures should also be included.
                </p>
                <p className="bg-gray-100 p-4 rounded-lg italic">
                  Hello, thank you for contacting Clean Site Dumpsters. How can we help you? Reply STOP to opt-out at any time. Message and data rates may apply. For assistance, text HELP or visit our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>

            {/* Additional SMS Terms and Conditions */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                ADDITIONAL SMS TERMS AND CONDITIONS
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold uppercase text-xl mt-6 mb-3">
                    Message Frequency
                  </h3>
                  <p>
                    Message frequency may vary based on your interaction with our services. You may receive appointment reminders, delivery notifications, and follow-up messages related to your dumpster rental.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold uppercase text-xl mt-6 mb-3">
                    Potential Fees for SMS Messaging
                  </h3>
                  <p>
                    Many carriers charge a fee for each message sent or received. This can vary depending on the carrier&apos;s pricing structure and whether the message is sent domestically or internationally.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold uppercase text-xl mt-6 mb-3">
                    Opt-In Method
                  </h3>
                  <p>
                    To opt-in to our messaging service, you must provide explicit consent by checking the box below the form through our website.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold uppercase text-xl mt-6 mb-3">
                    Opt-Out Method
                  </h3>
                  <p>
                    Customers will be able to opt out of SMS messaging from Clean Site Dumpsters by replying STOP at any time to any received SMS message. Once opted out, they will receive no further SMS communication. They can opt back in at any time by replying START.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold uppercase text-xl mt-6 mb-3">
                    Standard Messaging Disclosures
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Message frequency may vary.</li>
                    <li>Message and data rates may apply.</li>
                    <li>You can cancel the SMS service at any time by texting &quot;STOP&quot;.</li>
                    <li>After you send &quot;STOP&quot; you will receive a SMS confirmation.</li>
                    <li>For HELP or more information, reply HELP or contact us directly at <a href="https://csdwaste.com/contact" className="text-[#D32F2F] hover:underline">https://csdwaste.com/contact</a></li>
                    <li>Visit <a href="https://csdwaste.com/privacy" className="text-[#D32F2F] hover:underline">https://csdwaste.com/privacy</a> for our Privacy Policy and <a href="https://csdwaste.com/terms" className="text-[#D32F2F] hover:underline">https://csdwaste.com/terms</a> for our Terms of Service.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SMS Privacy Policy */}
            <div>
              <h2 className="font-heading font-bold uppercase text-3xl md:text-4xl mb-6">
                SMS PRIVACY POLICY
              </h2>
              <div className="font-body text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  CLEAN SITE DUMPSTERS may disclose Personal Data and other information as follows:
                </p>
                <p>
                  <strong>Third Parties that help provide the Messaging Service:</strong> We will not share your opt-in to an SMS short code campaign with a third party for purposes unrelated to supporting you in connection with that campaign. We may share your Personal Data with third parties that help us provide the messaging service, including, but not limited to, platform providers, phone companies, and other vendors who assist us in the delivery of text messages.
                </p>
                <p>
                  <strong>Additional Disclosures:</strong> Affiliates: We may disclose the Personal data to our affiliates or subsidiaries; however if we do, their use and disclosure of your personal data will be subject to the Policy. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 p-8 bg-[#D32F2F] rounded-lg text-center">
              <h3 className="font-heading font-bold uppercase tracking-wide text-2xl text-white mb-4">
                Questions About Our Terms?
              </h3>
              <p className="font-body text-white mb-6">
                Contact us if you need clarification on any of our policies.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-gray-900 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
