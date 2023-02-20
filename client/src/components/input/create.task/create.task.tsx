import { useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { MatrixContext } from "../../../contexts/matrix.context";
import { PropsInputTask } from '../../../interfaces/component.interface';
import { ContainerInput, SelectInput } from '../style';

const InputTask = ({
	reset,
	register,
	label,
	errors,
	textarea,
	id,
	type,
	name,
	placeholder,
	category,
	isSubmitSuccessful
}: PropsInputTask) => {

	const { successful, setSuccessful } = MatrixContext()

	const categories = [
		"Saude", "Casa", "Trabalho", "Lazer", "Estudos"
	]

	const categoryOption = categories.map((category) => {

		return (
			<option key={category} value={category}>
				{category}
			</option>
		);
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			setSuccessful(!successful)
			reset({
				title: "",
				category: '', description: ''
			});
		}
	}, [, successful, reset]);

	return (
		<>
			<ContainerInput>
				<div className="box_input_error">
					<div className="box_label_error">

						<label htmlFor={name}>{label}</label>

						{

							errors && (
								errors[name]?.type === 'required' ||
								errors[name]?.type === 'matches' ||
								errors[name]?.type === 'max' ||
								errors[name]?.type === 'min') ? (
								<div className="dropdown">
									<BsExclamationCircle className="svg" />
									<div className="dropdown-content">
										<p>{errors[name]?.message}</p>
									</div>

								</div>
							) : null
						}
					</div>
					{textarea ?
						<textarea
							{...register(name)}
							name={name}
							id={id}
							cols={20}
							rows={10}

						/>
						: category ?

							<SelectInput {...register(name)} id={name}>
								<option value="">Selecione uma categoria</option>
								{categoryOption}
							</SelectInput> :

							<input
								{...register(name)}
								type={type}
								name={name}
								id={id}
								placeholder={placeholder}
							/>
					}
				</div>

			</ContainerInput>
		</>
	)
}

export { InputTask };

