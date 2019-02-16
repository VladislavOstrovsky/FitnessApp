import React from 'react';
import { FitnessstoreServiceConsumer } from '../fitnessstore-service-context';

const withFitnessstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <FitnessstoreServiceConsumer>
                {
                    (fitnessstoreService) => {
                        return (<Wrapped  {...props} 
                                fitnessstoreService = {fitnessstoreService} />);
                    }
                }
            </FitnessstoreServiceConsumer>
        );
    };
};

export default withFitnessstoreService;