import { LogoContainer } from "@/styles/components/header"

import { FaArrowLeft } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

import logo from '@/assets/images/logo.svg'

import { IHeader } from "@/types/header"

export function Header({ isRoot = false }: IHeader) {
	return (
		<>
			{isRoot ? (
				<LogoContainer>
					<Image src={logo} alt="" />
				</LogoContainer>
			) : (
				<>
					<LogoContainer shape="hasIcon" >
						<Link href="/main">
							<FaArrowLeft size={20} />
						</Link>
						<Image src={logo} alt="" />
					</LogoContainer>
				</>
			)
		}
		</>
	)
}