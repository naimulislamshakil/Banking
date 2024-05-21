'use client';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/types/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
	const pathName = usePathname();
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link href="/" className="mb-12 cursor-pointer items-center gap-2">
					<Image
						src="/icons/logo.svg"
						width={34}
						height={34}
						alt="Logo"
						className="size-[24px] max-xl:size-[14px]"
					/>

					<h1 className="sidebar-logo">Horizon</h1>
				</Link>

				{sidebarLinks.map((item, i) => {
					const isActive =
						pathName === item.route || pathName.startsWith(`${item.route}/`);
					return (
						<Link
							key={i}
							href={item.route}
							className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
						>
							<div className="relative size-6">
								<Image
									src={item.imgURL}
									alt={item.label}
									fill
									className={cn({
										'brightness-[3] invert-0': isActive,
									})}
								/>
							</div>

							<p className={cn('sidebar-label', { '!text-white': isActive })}>
								{item.label}
							</p>
						</Link>
					);
				})}
			</nav>
		</section>
	);
};

export default Sidebar;
