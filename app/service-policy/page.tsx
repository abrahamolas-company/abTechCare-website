import React from 'react'
import B2bHerosection from '../b2b-services/B2bHerosection'
import { sectionPadding } from '../styles/styles'
import { Icons } from '../components/ui/icons'
import Link from 'next/link'

function ServicePolicy() {
    return (
        <main>
            <B2bHerosection />

            <div className={`${sectionPadding} text-[#211D1D] flex flex-col gap-4 pb-14`}>
                <div className=" leading-7">
                    <h2 className='font-bold'>Privacy Policy</h2>
                    <p>1. Introduction <br />
                        Abtechcare values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
                    </p>
                </div>
                <div className=" leading-7">
                    <p>2. Information We Collect</p>
                    <ul className='list-disc ml-6'>
                        <li>Personal Information (e.g., Name, Contact Information, Address)</li>
                        <li>Device Information (e.g., Model, Serial Number, Issue Description)</li>
                        <li>Payment Information (for transactions and installment payments)</li>
                        <li>Usage Data (Website interactions, Cookies, IP Address)</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>3. How We Use Your Information</p>
                    <ul className='list-disc ml-6'>
                        <li>To provide and improve our services</li>
                        <li>To process repair orders and payments</li>
                        <li>To communicate with you about your repairs</li>
                        <li>To comply with legal obligations</li>
                        <li>For marketing and promotional purposes (with your consent)</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>4. Data Protection & Security <br />
                        We implement strong security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.                    </p>
                </div>
                <div className=" leading-7">
                    <p>5. Sharing of Information <br />
                        We do not sell your data. However, we may share it with:</p>
                    <ul className='list-disc ml-6'>
                        <li>Service partners (technicians, logistics, payment processors)</li>
                        <li>Legal authorities if required by law</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>6. Your Rights</p>
                    <ul className='list-disc ml-6'>
                        <li>Request access to your data</li>
                        <li>Request correction or deletion of your data</li>
                        <li>Opt out of marketing communications</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>7. Changes to the Privacy Policy <br />
                        We may update this policy periodically. Please review it regularly.
                    </p>
                </div>

                <div className=" leading-7">
                    <h2 className='font-bold'>Terms & Conditions</h2>
                    <p>1. Introduction <br />
                        By using Abtechcare&apos;s services, you agree to comply with these terms and conditions.
                    </p>
                </div>

                <div className=" leading-7">
                    <p>2. Services Offered <br />
                        Abtechcare provides gadget repair services, including pickup, diagnosis, repair, insurance, and installment payment options.
                    </p>
                </div>
                <div className=" leading-7">
                    <p>3. Service Process</p>
                    <ul className='list-disc ml-6'>
                        <li>Customers submit repair requests through our platform.</li>
                        <li>Estimated costs are provided before repairs commence.</li>
                        <li>Repairs are conducted by certified technicians.</li>
                        <li>Customers must approve additional costs before extra work is performed.</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>4. Payment Terms</p>
                    <ul className='list-disc ml-6'>
                        <li>Payments must be made upfront, via installment plans, or upon completion of service.</li>
                        <li>Unpaid balances may result in delays or withholding of repaired devices.</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>5. Warranty & Liability</p>
                    <ul className='list-disc ml-6'>
                        <li>Repairs come with a limited warranty (terms depend on the repair type).</li>
                        <li>Abtechcare is not liable for pre-existing damages or additional faults occurring post-repair.</li>
                        <li>Data loss during repairs is not covered; customers should back up their data before service.</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>6. Pickup & Delivery</p>
                    <ul className='list-disc ml-6'>
                        <li>Pickup and delivery services are available based on location.</li>
                        <li>Customers must ensure accurate pickup details to avoid delays.</li>
                    </ul>
                </div>
                <div className=" leading-7">
                    <p>7. Termination of Service <br />
                        Abtechcare reserves the right to refuse service due to non-compliance, fraudulent claims, or unpaid balances.
                    </p>
                </div>
                <div className=" leading-7">
                    <p>8. Governing Law<br />
                        These terms are governed by the laws of Nigeria.
                    </p>
                </div>
                <div className=" leading-7">
                    <p>9. Contact Information<br />
                    For inquiries, reach out to us at:
                    </p>
                    <div className="flex flex-col gap-1">
                    <Link href={'mailto:support@abtechcare.com'} className='flex items-center gap-1 underline'><span>📩</span>support@abtechcare.com</Link>
                    <Link href={'tel:+2349168701802'} className='flex items-center gap-1'><span>📞</span>+234 916 870 1802</Link>
                    <Link href={'www.abtechcare.com'} target='_blank' className='flex items-center gap-1'><span>🌐</span>www.abtechcare.com</Link>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ServicePolicy

