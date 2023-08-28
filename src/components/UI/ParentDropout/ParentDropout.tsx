import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import classes from './ParentDropout.module.css';
import { Transition } from 'react-transition-group';
import './animationStyles.css';
import { IFormData } from '../../InheritanceForm/InheritanceForm';
import { ReactComponent as ArrowIcon } from '../../../assets/images/icons/arrow-down.svg';

interface ParentDropoutProps {
	title: string;
	characters: { name: string; src: string }[];
	setFormData: Dispatch<SetStateAction<IFormData>>;
}

const ParentDropout: FC<ParentDropoutProps> = ({
	title,
	characters,
	setFormData,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

	useEffect(() => {}, []);

	return (
		<div className={classes.main + (isOpen ? ' ' + classes.isOpen : '')}>
			<Transition in={!isOpen} timeout={800} unmountOnExit mountOnEnter>
				{(state) => (
					<div className={classes.header + ' header ' + state}>
						<h3 className={classes.title}>{title}</h3>
						<button
							className={classes.openButton}
							type="button"
							onClick={() => {
								setIsOpen((prevState) => !prevState);
							}}
						>
							<span>{selectedCharacter.name}</span>
							<ArrowIcon />
						</button>
					</div>
				)}
			</Transition>

			<Transition in={isOpen} timeout={800} unmountOnExit mountOnEnter>
				{(state) => (
					<div className={' dropdownBodyAnimation ' + state}>
						<div
							className={
								classes.header + ' ' + classes.headerDropdown
							}
						>
							<h3 className={classes.title}>{title}</h3>
							<button
								type="button"
								className={classes.openButton}
								onClick={() => {
									setIsOpen((prevState) => !prevState);
								}}
							>
								<span>{selectedCharacter.name}</span>
								<ArrowIcon className={classes.close} />
							</button>
						</div>
						<ul className={classes.charactersArea}>
							{characters.map((character) => (
								<li
									key={character.name}
									onClick={() => {
										setSelectedCharacter(character);
										setFormData((prevState) => ({
											...prevState,
											[title === 'Батько'
												? 'father'
												: 'mother']: character,
										}));
										setIsOpen(false);
									}}
									className={
										classes.charactersArea__item +
										(selectedCharacter.name ===
										character.name
											? ' ' +
											  classes.charactersArea__itemActive
											: '')
									}
								>
									<div
										className={
											classes.charactersArea__itemFirstBackgroundBlur
										}
									>
										<div
											className={
												classes.charactersArea__itemSecondBackgroundBlur
											}
										>
											<img
												src={character.src}
												alt={character.name}
											/>
										</div>
									</div>
									<p>{character.name}</p>
								</li>
							))}
						</ul>
						<span className={classes.gradientLine} />
					</div>
				)}
			</Transition>
		</div>
	);
};

export default ParentDropout;
