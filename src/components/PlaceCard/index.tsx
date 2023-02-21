import { Card, Container, IconContainer } from '@/styles/components/placecard'
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa'

import { Button } from '../Button';

interface IPlaceCard {
	restaurantName: string;
	dishes: number;
}

export function PlaceCard({ restaurantName, dishes }: IPlaceCard) {
	return (
		<Container>
			<Card>
				<Link
      		href={{
        		pathname: "/restaurant/detail",
        		query: { restaurant: restaurantName }
      		}}
    			>
						<p>{restaurantName}</p>
						<span>{dishes} pratos</span>
				</Link>
			</Card>
			<Link
      	href={{
        	pathname: "/restaurant/newDish",
        	query: { restaurant: restaurantName }
      	}}
    	>
				<Button shape='outlined' size='md' rounded='isRounded'>
					<FaPlus size={20} />
				</Button>
			</Link>
		</Container>
	)
}