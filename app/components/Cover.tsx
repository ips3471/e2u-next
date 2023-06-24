import { callToActions, imageUrls } from '../database';
import CallToAction from './Cover/CallToAction';
import CoverImages from './Cover/CoverImages';

interface CoverProps {}

function Cover({}: CoverProps) {
	return (
		<div className='flex sm:items-center sm:space-x-4 overflow-hidden bg-brand/10'>
			<CallToAction item={callToActions.cover} />
			<CoverImages links={imageUrls.cover} />
		</div>
	);
}

export default Cover;
