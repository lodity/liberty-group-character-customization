import { ReactComponent as ManSymbolSvg } from '../../../assets/images/icons/man-symbol.svg';
import { ReactComponent as WomanSymbolSvg } from '../../../assets/images/icons/woman-symbol.svg';
import classes from './SexSwitch.module.css';
import { Dispatch, FC, SetStateAction } from 'react';
import { IFormData } from '../../InheritanceForm/InheritanceForm';

interface SexSwitchProps {
	isMaleActive: boolean;
	setIsMaleActive: Dispatch<SetStateAction<boolean>>;
	setFormData: Dispatch<SetStateAction<IFormData>>;
}

const SexSwitch: FC<SexSwitchProps> = ({
	isMaleActive,
	setIsMaleActive,
	setFormData,
}) => {
	return (
		<div className={classes.sex__switch}>
			<span className={isMaleActive ? classes.male : classes.female} />
			<button
				type="button"
				className={
					classes.sex__switchButton +
					(isMaleActive ? ' ' + classes.sex__switchActive : '')
				}
				onClick={(event: any) => {
					setIsMaleActive(true);
					setFormData((prevState) => ({ ...prevState, sex: 'male' }));
				}}
			>
				<ManSymbolSvg />
			</button>
			<button
				type="button"
				className={
					classes.sex__switchButton +
					(!isMaleActive ? ' ' + classes.sex__switchActive : '')
				}
				onClick={(event: any) => {
					setIsMaleActive(false);
					setFormData((prevState) => ({
						...prevState,
						sex: 'female',
					}));
				}}
			>
				<WomanSymbolSvg />
			</button>
		</div>
	);
};

export default SexSwitch;
