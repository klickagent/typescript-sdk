'use strict';

enum SubscriptionState{

    PENDING = 'PENDING',
    INITIALIZING = 'INITIALIZING',
    FAILED = 'FAILED',
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED',
}

export { SubscriptionState }
