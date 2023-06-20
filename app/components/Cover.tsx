import { callToActions, imageUrls } from '../database';
import CallToAction from './Cover/CallToAction';
import CoverImages from './Cover/CoverImages';

interface CoverProps {}

function Cover({}: CoverProps) {
	return (
		<div className='flex'>
			<CallToAction item={callToActions.cover} />
			<CoverImages links={imageUrls.cover} />
		</div>
	);
}

export default Cover;
