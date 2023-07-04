import * as React from 'react';
import { Spinner } from '@chakra-ui/react';

export default function Loading() {
    return(
        <Spinner
            thickness='3px'
            speed='0.7s'
            color='#d4d4d4'
            size='lg'
        />
    )
}