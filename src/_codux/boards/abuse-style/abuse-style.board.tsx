import { createBoard } from '@wixc3/react-board';
import { AbuseStyle } from '../../../components/abuse-style/abuse-style';

export default createBoard({
    name: 'AbuseStyleee',
    Board: () => <AbuseStyle />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#da7575',
        canvasBackgroundColor: '#0018ff',
        canvasPadding: {
            left: 44,
        },
        windowWidth: 1024,
        windowHeight: 768,
    },
});
