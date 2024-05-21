import { createBoard } from '@wixc3/react-board';
import { Compi } from '../../../components/compi/compi';

export default createBoard({
    name: 'Compi',
    Board: () => <Compi />,
    isSnippet: true,
});