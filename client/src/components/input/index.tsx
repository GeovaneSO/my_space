import { PropsInput } from '../../interfaces/component.interface'
import { ContainerInput } from './style'

const Input = ({
	register,
	label,
	errors,
	children,
	id,
	type,
	name,
	placeholder,
}: PropsInput) => {
	return (
		<ContainerInput>
			<label htmlFor={name}>{label}</label>

			<input
				{...register(name)}
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
			/>
			{errors && errors[name]?.type === 'required' && (
				<span className="error">{errors[name]?.message}</span>
			)}
			{errors && errors[name]?.type === 'minLength' && (
				<span className="error">{errors[name]?.message}</span>
			)}
		</ContainerInput>
	)
}

export { Input }

