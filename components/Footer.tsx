import { footerLinks } from '@/constants';
import Image from 'next/image';
import React from 'react';

type ColumnProps = {
    title: string,
    links: Array<string>
}

const FooterColumn = ({ title, links }: ColumnProps ) => {
    return (
        <div className="footer_column">
            <h4 className="font-semibold">Title</h4>
            <ul className="flex flex-col gap-2 font-normal">
                Links
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image 
                        src="/logo-purple.svg"
                        width={115}
                        height={38}
                        alt="Flexibble" 
                    />
                </div>
                <p className="text-start text-sm font-normal mt-5 max-w-xs">
                    成大歷史傳情是成大一年一度的盛事, 透過各種歷史小物, 傳遞心意給那個他/她
                </p>
                <div className="flex flex-wrap gap-12">
                    <FooterColumn 
                        title={footerLinks[0].title}
                        links={footerLinks[0].links} 
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;