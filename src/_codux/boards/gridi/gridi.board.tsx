import { createBoard } from '@wixc3/react-board';
import { Gridi } from '../../../components/gridi/gridi';

export default createBoard({
    name: 'Gridi',
    Board: () => <Gridi />,
    isSnippet: true,
});