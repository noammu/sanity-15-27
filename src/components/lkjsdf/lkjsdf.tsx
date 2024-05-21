import classNames from 'classnames';
import styles from './lkjsdf.module.scss';
import BallPng from '../../assets/ball.png';
import { useState } from 'react';

export interface LkjsdfProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Lkjsdf = ({ className }: LkjsdfProps) => {
    const [sta, setSta] = useState(0);

    return (
        <div className={classNames(styles.root, className)}>
        <button onClick={() => setSta(prev=> prev + 1)}>{sta}</button>
            <img src={BallPng} />
            <p>krjr<br/> rlkrltk</p>
            <br/><br/><br/><br/>
            <p>yoooo</p>
        </div>
    );
};
