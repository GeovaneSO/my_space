import { useEffect, useRef } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { MatrixContext } from "../../../contexts/matrix.context";
import { PropsInputContact } from '../../../interfaces/component.interface';
import { ContainerInput } from '../style';

const InputContact = ({
	register,
	reset,
	label,
	errors,
	children,
	id,
	type,
	name,
	placeholder,
	isSubmitSuccessful,
}: PropsInputContact) => {
	const { setFilePath, successful, setSuccessful } = MatrixContext()

	const fileInput = useRef<HTMLInputElement>(null);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilePath(event.target.files![0]);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			setSuccessful(!successful)
			reset({
				avatarUrl: "",
				email: '', 
				name: '', 
				phone: ''
			});
		}
	}, [, successful, reset]);
	
	return (
		<>

			<ContainerInput>
				{children ?
					<div className="box_input_error">
						<div className="box_label_error">

							<label htmlFor={name}>{label}</label>

							{

								errors && (
									errors[name!]?.type === 'required' ||
									errors[name!]?.type === 'matches' ||
									errors[name!]?.type === 'max' ||
									errors[name!]?.type === 'min') ? (
									<div className="dropdown">
										<BsExclamationCircle className="svg" />
										<div className="dropdown-content">
											<p>{errors[name!]?.message}</p>
										</div>

									</div>
								) : null
							}
						</div>
						<input
							{...register!(name!)}
							onChange={handleFileChange}
							ref={fileInput}
							type={type}
							name={name}
							id={id}
							placeholder={placeholder}
						/>
					</div>
					:
					<div className="box_input_error">

						<div
							className="box_label_error">

							<label htmlFor={name}>{label}</label>

							{

								errors && (
									errors[name!]?.type === 'required' ||
									errors[name!]?.type === 'matches' ||
									errors[name!]?.type === 'max' ||
									errors[name!]?.type === 'min') ? (
									<div className="dropdown">
										<BsExclamationCircle className="svg" />
										<div className="dropdown-content">
											<p>{errors[name!]?.message}</p>
										</div>

									</div>
								) : null
							}
						</div>
						<input
							{...register!(name!)}
							type={type}
							name={name}
							id={id}
							placeholder={placeholder}
						/>
					</div>

				}
			</ContainerInput>
		</>
	)
}

export { InputContact };

