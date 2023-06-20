import CallToAction from './components/Cover/CallToAction';
import { callToActions } from './database';

interface PageBottomProps {}

function PageBottom({}: PageBottomProps) {
	return (
		<div>
			<CallToAction item={callToActions.main} />
		</div>
	);
}

export default PageBottom;
