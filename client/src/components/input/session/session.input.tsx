import { BsExclamationCircle } from "react-icons/bs";
import { PropsInputSession } from '../../../interfaces/component.interface';
import { ContainerInput } from './style';

const InputSession = ({
	register,
	label,
	errors,
	children,
	id,
	type,
	nameSession,
	placeholder,
}: PropsInputSession) => {
	// const register = session;

	return (
		<>

			<ContainerInput>
				<div className="box_input_error">
					<div className="box_label_error">

						<label htmlFor={nameSession}>{label}</label>

						{

							errors && (
								errors[nameSession]?.type === 'required' ||
								errors[nameSession]?.type === 'matches' ||
								errors[nameSession]?.type === 'max' ||
								errors[nameSession]?.type === 'min') ? (
								<div className="dropdown">
									<BsExclamationCircle className="svg" />
									<div className="dropdown-content">
										<p>{errors[nameSession]?.message}</p>
									</div>

								</div>
							) : null
						}
					</div>
					<input
						{...register(nameSession)}
						type={type}
						name={nameSession}
						id={id}
						placeholder={placeholder}
					/>
				</div>

			</ContainerInput>
		</>
	)
}

export { InputSession };

