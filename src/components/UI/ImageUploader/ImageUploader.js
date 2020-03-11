import React, { Fragment, useContext, useState, useEffect } from 'react';

import classes from './ImageUploader.module.scss';
import { I18nContext } from '../../../i18n';
import ImgAdd from '../../../assets/images/add_image.png';

const ImageUploader = (props) => {
	const { translate } = useContext(I18nContext);
	const [imgSrc, setImgSrc] = useState(ImgAdd);

	let inputEl = null;
	const iconCSS = [classes.AddPhotoIcon, 'material-icons'];

	useEffect(() => {
		if (props.imgPreview) {
			setImgSrc(props.imgPreview);
		}
	}, [props.imgPreview]);

	return (
		<Fragment>
			<div className={classes.AddPhotoContainer}>
				{imgSrc !== ImgAdd ? (
					<div
						className={classes.DeletePhotoContainer}
						onClick={(e) => {
							e.preventDefault();
							setImgSrc(ImgAdd);
							props.deleteImg();
						}}>
						<i
							className={[classes.DeletePhotoIcon, 'material-icons'].join(' ')}>
							delete_forever
						</i>
					</div>
				) : null}
				<section
					onClick={(e) => {
						e.preventDefault();
						inputEl.click();
					}}>
					<img className={classes.AddPhotoImg} src={imgSrc} alt="" />
					<div className={classes.AddPhotoLabelContainer}>
						<i className={iconCSS.join(' ')}>add</i>
						<p className={classes.AddPhotoLabel}>
							{translate(imgSrc === ImgAdd ? 'ADD_PHOTO' : 'CHANGE_PHOTO')}
						</p>
					</div>
				</section>
			</div>

			<input
				accept="image/*"
				onChange={props.changed}
				{...props.elementConfig}
				style={{ display: 'none' }}
				ref={(input) => (inputEl = input)}
			/>
		</Fragment>
	);
};

export default ImageUploader;
