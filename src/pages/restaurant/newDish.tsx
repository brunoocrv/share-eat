import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Container, Form } from "@/styles/pages/restaurant/newDish";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { INewDish } from "@/types/newDish";

export default function NewDish() {
	const { register, handleSubmit } = useForm<INewDish>();
	const router = useRouter();

	const { restaurant } = router.query;

	const onSubmit = handleSubmit(data => console.log(data));

	return (
		<Container>
			<Header />
			<h1>{restaurant}</h1>
			<Form onSubmit={onSubmit}>
				<label>Nome do Prato</label>
      	<input {...register('name')} type="text" placeholder="Nome" required/>
      	<label>Preço</label>
      	<input {...register('price')} type="number" placeholder="Preço" min="1" required/>
				<label>Descrição do Prato</label>
      	<textarea {...register('description')} placeholder="Insira uma descrição..." maxLength={200} required/>
				<span>*A descrição deve conter até 200 caracteres.</span>
      	<Button type="submit" shape="primary" size="fullWidth">
        	Salvar
      	</Button>
			</Form>
		</Container>
	)
}