import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { CardHeader, Container, Content, Dish } from '@/styles/pages/restaurant/details';
import { dishes } from '@/utils/dishesUtils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';

export default function Detail() {
	const router = useRouter();

	const { restaurant } = router.query;

	return (
		<Container>
			<Header />
			<h1>{restaurant}</h1>
			<span>10 pratos</span>
			<Content>
				{
					dishes.map(dish => (
						<Dish key={dish.name}>
							<CardHeader>
								<span>{dish.name}</span>
								<span>
									{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dish.price)}
								</span>
							</CardHeader>
							<p>{dish.description}</p>
						</Dish>
					))
				}
			</Content>
			<Link
      	href={{
        	pathname: "/restaurant/newDish",
        	query: { restaurant: restaurant }
      	}}
    	>
				<Button shape='primary' size='lg' rounded='isRounded'>
					<FaPlus size={20} />
				</Button>
			</Link>
		</Container>
	)
}