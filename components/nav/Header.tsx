import Link from 'next/link'
import Image from "next/image";
import { Times } from '@/app/icons';
import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs';
import type { User } from "@clerk/nextjs/api";
import { useContext } from 'react';
import { OverlayContext } from '@/app/providers';

interface HeaderProps {
    user: User | null;
}

const Header = ({user}: HeaderProps) => {
    const {sideMenuOpen, toggleSideMenu} = useContext(OverlayContext);

  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
        <button onClick={() => toggleSideMenu()}>X</button>
        <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
            <Image
                src="/clerk.svg"
                alt="Clerk Logo"
                width={102}
                height={32}
                priority
            />
            <Times />
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={90}
                height={18}
                priority
            />
        </Link>
        <div className="grow" />
        <SignedIn>
            <div className="hidden sm:block">
                <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
            </div>
            <div className="block sm:hidden">
                <OrganizationSwitcher
                afterCreateOrganizationUrl="/dashboard"
                appearance={{
                    elements: {
                    organizationSwitcherTriggerIcon: `hidden`,
                    organizationPreviewTextContainer: `hidden`,
                    organizationSwitcherTrigger: `pr-0`,
                    },
                }}
                />
            </div>
            <img src={user?.profileImageUrl ?? ''} id='userLogo'/>
            <UserButton afterSignOutUrl="/" />
        </SignedIn>
    </header>
  )
}

export default Header