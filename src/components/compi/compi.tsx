import classNames from 'classnames';
import styles from './compi.module.scss';
import { Lkjsdf } from '../lkjsdf/lkjsdf';

export interface CompiProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Compi = ({ className }: CompiProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Heading 1</h1>
            <Lkjsdf className={styles.bord} />
        </div>
    );
};
