import { callToActions, imageUrls } from '../database';
import CallToAction from './Cover/CallToAction';
import CoverImages from './Cover/CoverImages';

interface CoverProps {}

function Cover({}: CoverProps) {
	return (
		<div className='flex bg-gradient-to-b from-brand/10 sm:items-center sm:space-x-4 md:space-x-9 md:overflow-visible md:py-7 overflow-hidden bg-brand/10'>
			<CallToAction item={callToActions.cover} />
			<CoverImages links={imageUrls.cover} />
		</div>
	);
}

export default Cover;
