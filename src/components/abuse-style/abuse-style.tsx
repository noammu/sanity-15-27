import classNames from 'classnames';
import styles from './abuse-style.module.scss';
import { Compi } from '../compi/compi';

export interface AbuseStyleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AbuseStyle = ({ className }: AbuseStyleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <div className={styles.grid}>
                    <img
                        src="https://gifdb.com/images/high/pikachu-jumping-with-joy-jru7i4ixjscbdmp7.gif"
                        alt=""
                        height="170"
                    />
                    <Compi className={styles.wets} />
                    <h2>Replace content</h2>
                </div>
                <canvas></canvas>
                <h5 className={styles.aaa}>
                    Heading 5lkj hsglkjds glkjdfjhgl kdfgl df lgjdlk gdlgj ldgj ldfj lfj gdkfjglk
                    fjlkf jg
                </h5>
            </div>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <div>
                <span>text</span>
            </div>
            AbuseStyle
        </div>
    );
};
