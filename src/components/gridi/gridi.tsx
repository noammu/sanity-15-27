import classNames from 'classnames';
import styles from './gridi.module.scss';

export interface GridiProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gridi = ({ className }: GridiProps) => {
    
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.dfsdf}>Speciallll</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
        </div>
    );
};
