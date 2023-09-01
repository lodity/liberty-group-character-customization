import classes from './SidebarOptions.module.css';
import OptionsButton from './OptionsButton/OptionsButton';
import { useState } from 'react';
import { ReactComponent as DNAIcon } from '../../assets/images/icons/dna.svg';
import { ReactComponent as HeadIcon } from '../../assets/images/icons/head.svg';
import { ReactComponent as MoustacheIcon } from '../../assets/images/icons/moustache.svg';

export type Options = 'dna' | 'head' | 'moustache';

const SidebarOptions = () => {
	const [selectedOption, setSelectedOption] = useState<Options>('dna');

	return (
		<div className={classes.container}>
			<OptionsButton
				option="dna"
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				Icon={DNAIcon}
			/>
			<OptionsButton
				option="head"
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				Icon={HeadIcon}
			/>
			<OptionsButton
				option="moustache"
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				Icon={MoustacheIcon}
			/>
		</div>
	);
};

export default SidebarOptions;
