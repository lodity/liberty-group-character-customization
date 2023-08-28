import classes from './InheritanceForm.module.css';
import ParentDropout from '../UI/ParentDropout/ParentDropout';
import { useEffect, useRef, useState } from 'react';
import SexSwitch from '../UI/SexSwitch/SexSwitch';
import { ReactComponent as DnaIcon } from '../../assets/images/icons/dna.svg';
import { ReactComponent as ArrowIcon } from '../../assets/images/icons/arrow-down.svg';

export interface IFormData {
	sex: 'male' | 'female';
	father: { name: string; src: string };
	mother: { name: string; src: string };
	inheritance: number;
}

const InheritanceForm = () => {
	const [formData, setFormData] = useState<IFormData>({
		sex: 'female',
		father: {
			name: 'Кристофер',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character.png`,
		},
		mother: {
			name: 'Ханна',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character.png`,
		},
		inheritance: -30,
	});
	const [isMaleActive, setIsMaleActive] = useState(false);
	const [similarityValue, setSimilarityValue] = useState(49);
	const supportLeftSlider = useRef<HTMLInputElement>(null);
	const supportRightSlider = useRef<HTMLInputElement>(null);

	const characters = [
		{
			name: 'Ханна',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character.png`,
		},
		{
			name: 'Олді',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character2.png`,
		},
		{
			name: 'Жасмін',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character3.png`,
		},
		{
			name: 'Жизель',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character4.png`,
		},
		{
			name: 'Амалія',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character.png`,
		},
		{
			name: 'Ізабелла',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character2.png`,
		},
		{
			name: 'Єва',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character3.png`,
		},
		{
			name: 'Кейт',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character4.png`,
		},
		{
			name: 'Сьюзан',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character.png`,
		},
		{
			name: 'Олена',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character2.png`,
		},
		{
			name: 'Марія',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character3.png`,
		},
		{
			name: 'Анжела',
			src: `${process.env.PUBLIC_URL}/assets/images/female-character4.png`,
		},
	];

	useEffect(() => {
		if (supportLeftSlider.current && supportRightSlider.current) {
			const valLeftPercent =
				(+supportLeftSlider.current.value /
					(+supportLeftSlider.current.max + 1)) *
				100;
			const valRightPercent =
				((+supportRightSlider.current.value - 49) /
					(+supportRightSlider.current.max - 48)) *
				100;
			supportLeftSlider.current.style.background = `linear-gradient(to right, #FF7514FF, ${valLeftPercent}%, rgba(0, 0, 0, 0) ${valLeftPercent}%)`;
			supportRightSlider.current.style.background = `linear-gradient(to right, #FF7514FF, ${valRightPercent}%, rgba(0, 0, 0, 0) ${valRightPercent}%)`;
		}
	}, [similarityValue]);

	return (
		<form className={classes.container}>
			<div>
				<h2 className={classes.title}>
					<DnaIcon className={classes.dnaIcon} />
					<span>Спадковість</span>
				</h2>
				<span className={classes.line} />
			</div>
			<div className={classes.sex + ' ' + classes.formBlock}>
				<h3 className={classes.subtitle}>Оберіть стать</h3>
				<SexSwitch
					isMaleActive={isMaleActive}
					setIsMaleActive={setIsMaleActive}
					setFormData={setFormData}
				/>
			</div>
			<ParentDropout
				title="Батько"
				characters={characters}
				setFormData={setFormData}
			/>
			<ParentDropout
				title="Мати"
				characters={characters}
				setFormData={setFormData}
			/>
			<div className={classes.parentLook}>
				<div className={classes.parentLookMother}>
					<img src={formData.mother.src} alt={formData.mother.name} />
				</div>
				<div className={classes.parentLookFather}>
					<img src={formData.father.src} alt={formData.father.name} />
				</div>
			</div>
			<div className={classes.similarity}>
				<h3 className={classes.subtitle}>Схожість</h3>
				<div className={classes.similarity__parentsTitle}>
					<p>Мати</p>
					<p>Батько</p>
				</div>
				<div className={classes.sliderContainer}>
					<input
						className={classes.mainSlider}
						type="range"
						min="0"
						max="99"
						value={similarityValue}
						onChange={(event) => {
							setSimilarityValue(+event.target.value);
							setFormData((prevState) => ({
								...prevState,
								inheritance: +event.target.value,
							}));
						}}
					/>
					<input
						readOnly
						ref={supportLeftSlider}
						type="range"
						min="0"
						max="48"
						value={49 - similarityValue}
						className={classes.supportSlider + ' ' + classes.left}
					/>
					<input
						readOnly
						ref={supportRightSlider}
						type="range"
						min="49"
						max="99"
						value={similarityValue}
						className={classes.supportSlider + ' ' + classes.right}
					/>
				</div>
			</div>
			<button className={classes.submitButton} type="submit">
				<span>Перейти далі</span>
				<ArrowIcon />
			</button>
		</form>
	);
};

export default InheritanceForm;
