
'use client'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Alert.module.scss';
import { useAlertVisible, useAlertVisibleActions } from '@/common/stores';

export interface IAlertPops {
  variant: string;
  icon: string;
  children: string;
  header?: string;
}

const Alert = (props: IAlertPops) => {
  const visible = useAlertVisible();
  const { toggle } = useAlertVisibleActions();

  useEffect(() => {
    const timeId = setTimeout(() => {
      toggle()
    }, 5000 );

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="alert-icon-success" fill="currentColor"  viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm2.854 6.354a.5.5 0 0 0-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
        </symbol>
        <symbol id="alert-icon-info" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </symbol>
        <symbol id="alert-icon-warning" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
        </symbol>
        <symbol id="alert-icon-danger" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </symbol>
      </svg>
      <div className={`alert alert-${props.variant} align-items-center ${visible ? 'alert-fadeIn' : 'alert-fadeOut'}`} role="alert">
        <div className={'flex-d'}>
          <div className={'row'}>
              <div className={'col-2'}>
                 <div className={styles.svgContainer}>
                    <svg className="bi flex-shrink-0 me-2" width="67" height="67" role="img" aria-label={`${props.variant}:`}>
                      <use xlinkHref={`#alert-icon-${props.icon}`} />
                    </svg>
                  </div>
              </div>
              <div className={'col-10 align-items-left'}>
                 <div className={'row'}>
                    <div className={'col-12 align-items-left'}>
                      <h5 className={'text-center alert-heading'}>
                        <strong>{`${props.header ? props.header : 'Well done!'}`}</strong>{' '}
                      </h5>
                      <hr />
                    </div>
                 </div>
                 <div className={'row'}>
                    <div className={'col-12 align-items-left'}>
                      <em>{`${props.children}`}</em>
                    </div>
                 </div>
              </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

Alert.defaultPros = {
  variant: 'info',
};

export default Alert;
