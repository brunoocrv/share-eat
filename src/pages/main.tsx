import { useEffect, useState } from 'react';
import { Container } from "@/styles/pages/main";

import { PlaceCard } from "@/components/PlaceCard";
import { Header } from "@/components/Header";
import { restaurants } from '@/utils/placesUtils';

export default function Main() {
	const [places, setPlaces] = useState<{ name: string; dishes: number }[]>();

	useEffect(() => {
		setPlaces(restaurants);
	}, [])

	return (
		<Container>
			<Header isRoot />
			<span>Lugares</span>
			{
				!!places ? (
					<>
						<p>{places.length} lugares cadastrados</p>
						{
							places.map(place => (
								<PlaceCard 
									key={place.name} 
									restaurantName={place.name} 
									dishes={place.dishes}
								/>
							))
						}
					</>
				) : (
					<p>Não entramos nenhum lugar cadastrado</p>
				)
			}
		</Container>
	)
}