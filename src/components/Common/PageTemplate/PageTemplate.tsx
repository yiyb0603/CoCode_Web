import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PageTemplate.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface IPageTemplateProps {
	children?: ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps) => {
	return (
		<div className={cx('PageTemplate')}>
			{/* <NavBar /> */}
			{/* {children} */}
			{/* <Footer /> */}
		</div>
	);
};

export default PageTemplate;
