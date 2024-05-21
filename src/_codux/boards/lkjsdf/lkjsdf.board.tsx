import { createBoard } from '@wixc3/react-board';
import { Lkjsdf } from '../../../components/lkjsdf/lkjsdf';

export default createBoard({
    name: 'Lkjsdf',
    Board: () => <Lkjsdf />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 630,
    },
});
