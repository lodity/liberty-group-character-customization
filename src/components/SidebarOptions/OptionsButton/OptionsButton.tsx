import { Dispatch, FC, SetStateAction, SVGProps } from 'react';
import { Options } from '../SidebarOptions';
import classes from './OptionsButton.module.css';

interface OptionsButtonProps {
	option: Options;
	setSelectedOption: Dispatch<SetStateAction<Options>>;
	selectedOption: Options;
	Icon: FC<SVGProps<SVGSVGElement>> | string;
}

const OptionsButton: FC<OptionsButtonProps> = ({
	option,
	setSelectedOption,
	selectedOption,
	Icon,
}) => {
	return (
		<button
			className={
				classes.button +
				(selectedOption === option ? ' ' + classes.active : '')
			}
			type="button"
			onClick={() => setSelectedOption(option)}
		>
			{typeof Icon === 'string' ? (
				<img src={Icon} alt="Icon" />
			) : (
				<Icon />
			)}
		</button>
	);
};

export default OptionsButton;
