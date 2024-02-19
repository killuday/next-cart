'use client'
import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from './Store';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const ReduxProvider = ({ children }: Props) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )


};

export default ReduxProvider;